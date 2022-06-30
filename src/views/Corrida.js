import React, {useContext, useState,setState,useEffect} from "react";
import { Text, View, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import  {UsersContext} from '../contexts/userContext';
import config from '../../config/config.json';
import CarrosC from '../components/CardExpandido';

export default function Corrida ({route,navigation}){

    const {carroId} = route.params;
    const {userId, setUserId} = useContext(UsersContext);
    const id_numero = userId;
    const [modelo, setModelo] = useState(null);
    const [velocidade, setVelocidade] = useState(null);
    const [status, setStatus] = useState(null);

    async function carregarCorrida() {
        let reqs = await fetch(config.urlRootPhp+'ListarCorrida.php',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
          
            body: JSON.stringify({
                idRequest: carroId,
            })
    
        })

        let ress = await reqs.json();
        aux = JSON.parse(ress);
        setModelo(aux[0].modelo);
        setVelocidade(aux[0].velocidade_max);
        setStatus(aux[0].status);
    }

  
    useEffect(()=>{
        carregarCorrida();
    },[])
    return(
        <View style= {style.viewPrincipal}>
            <View style = {style.view1} >  
                <Image style ={style.img}
                    source={require('../assets/logo.png')}
                /> 
            </View>

            <View>
                <View>
                    <TouchableOpacity style = {style.button} onPress={() => navigation.navigate('Coleta')}>
                        <Text style = {style.buttonText}>Iniciar Corrida</Text>
                    </TouchableOpacity>
                </View>
            </View> 
            <View style = {style.view2}>
                <CarrosC modelo = {modelo} velocidade = {velocidade} status={status}/>   
            </View>
            <View>
                <View>
                    <TouchableOpacity style = {style.button} onPress={() => navigation.navigate('Coleta')}>
                        <Text style = {style.buttonText}>Iniciar Coleta</Text>
                    </TouchableOpacity>
                </View>
            </View> 
    
        </View>  
    )
}

const style = StyleSheet.create({
   
    viewPrincipal: {
        flex: 1,
        width: '100%',
    },
    view1: {
        padding: 10,
        //backgroundColor: '#000',
        //height: 100
        
    },
    selectView:{

    },
    img : {
        width: 150,
        height: 50,
        //backgroundColor: '#000'
        
    },
    motorista: {
        flexDirection: 'column',
        height: 150,
        width: 380,
        backgroundColor: '#E5E5E5',
        alignSelf: "center",
        borderRadius: 19,
        borderTopEndRadius: 0,
        borderTopLeftRadius: 0,
        //borderBottomEndRadius: 0,
        //borderBottomLeftRadius: 0,
        //alignItems: "center",
        padding: 10,
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        justifyContent:"space-around"
        
        
    },
    buttonText2: { 
        color: '#FCFCFC',
        fontSize: 20,
        fontFamily: 'Poppins-Regular'
    },
    view2: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100
        //backgroundColor: '#000'
        
    },
    txM: {
        width: '100%',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#000',
        //backgroundColor: '#000',
        padding: 10,
        paddingLeft: 35
        
        
        
    },
    input: {
        height: 50,
        width: 350,
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        marginHorizontal: 20,
        borderBottomColor: '#c00',
        borderRadius: 8,
        fontSize: 18,
        borderColor:'#e4e7eb',
        borderWidth:0.01,
        borderColor:'#000',
        borderRadius: 9

    },
    view3: {
        height: 120,
        width: '100%',
        //backgroundColor: '#ccc',
        //justifyContent: "center",
        alignItems:"center",
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
      button2:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 100,
        elevation: 3,
        backgroundColor: '#fff'
      },
      buttonText2: {
        color: '#000',
        fontSize: 15
      },
      hover: {

      },
    view4: {
        height: 300,
        width: '100%',
        justifyContent:"flex-end",
        alignItems:"flex-end",
        //backgroundColor: '#000'
    },
    view5: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center",
        backgroundColor: '#000',
        height: 150,
        width: '100%'
    },
    txP: {
        fontSize: 12,
        color: 'white'
    }
})

