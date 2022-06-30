import React, {useState, useEffect,useContext} from 'react';
import {Text,LogBox, TouchableOpacity, StyleSheet, View} from 'react-native';
import  {UsersContext} from '../contexts/userContext';
import config from '../../config/config.json';

import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes
} from "react-native-sensors";
import { map, filter } from "rxjs/operators";

export default function Coleta ({navigation}){
  const {userId, setUserId} = useContext(UsersContext);
  const id_numero = userId; 
  const[resultadoF,setResultadoF] = useState(0);
  LogBox.ignoreLogs(['new NativeEventEmitter']);
  setUpdateIntervalForType(SensorTypes.accelerometer, 100); // defaults to 100ms
  const [move, setMove] = useState(null);
  let startTime, endTime;
  let conforto = 0;
  let resultado = 0;
  let i = 0;
  let somatorio = 0;
  let total = 0;
  let perfil = "";

  const subscription = accelerometer
  .pipe(map(({ x, y, z ,timestamp}) => x + y + z), filter(speed => speed > 20))
  .subscribe(
    speed => detectar(),
    error => {
      console.log("The sensor is not available");
    }
  );

  start = () =>{
    startTime = new Date();
  }
  
  end = () =>{
    endTime = new Date();
    let timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
  
    // get seconds 
    let seconds = Math.round(timeDiff);
    console.log(seconds + " seconds");

    resultado = ((conforto)/ seconds);
    const aux = parseFloat(resultado)
    setResultadoF(aux);
    console.log(resultado);
    subscription.unsubscribe();
    adicionarHistorico();
    navigation.goBack();
  }

  detectar = () =>{
    conforto += 1;
  }

  useEffect(()=>{
    start();
  },[])

  async function adicionarHistorico() {
    let reqs = await fetch(config.urlRootPhp+'CadastroHistorico.php',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
      
        body: JSON.stringify({
            idUser: id_numero,
            resultadoUser: resultado
        })

    })

    let ress = await reqs.json();
    console.log(ress);
    if(ress != false){
      listarResultados();
    }
  }
  async function listarResultados() {
    let reqs = await fetch(config.urlRootPhp+'ListarResultados.php',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
      
        body: JSON.stringify({
            idUser: id_numero
        })

    })

    let ress = await reqs.json();
    if(ress != false){
      const aux = JSON.parse(ress);
      for(i=0;i<aux.length;i++){
        somatorio += parseFloat(aux[i].resultado);
      }
      const total = (somatorio/aux.length);
      console.log(total);
      if(total<=1){
        perfil = "Cuidadoso"
        atualizarPerfil();
      }else{
        perfil = "Corre muito"
        atualizarPerfil();
      }
    }
  }

  async function atualizarPerfil() {
    let reqs = await fetch(config.urlRootPhp+'AtualizarPerfil.php',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
      
        body: JSON.stringify({
            idUser: id_numero,
            perfilUser: perfil
        })

    })
  }

  return(


    <View style={style.viewPrincipal}>
      <TouchableOpacity style = {style.button} onPress={end}>
        <Text style = {style.buttonText}>Finalizar Coleta</Text>
      </TouchableOpacity>
    </View>
  )

}
const style = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 15,
  paddingHorizontal: 100,
  elevation: 3,
  backgroundColor: '#000000'
  },
  buttonText: {
  color: '#fff',
  fontSize: 15
  },
  buttonText2: {
    color: '#000',
    fontSize: 20
    },

})