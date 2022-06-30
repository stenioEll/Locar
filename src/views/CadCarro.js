import React,{useState} from "react";
import { Text, View, ScrollView, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import config from '../../config/config.json';


export default function CadCarro ({route,navigation}){
    const {empresaId} = route.params;
    const [modelo, setModelo] = useState(null);
    const [velocidade, setVelocidade] = useState(null);
    const [placa, setPlaca] = useState(null);

    async function createCarro(){

        let reqs = await fetch(config.urlRootPhp+'CadastroCarro.php',{
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
    
          body: JSON.stringify({
            empresa_id: empresaId,
            modeloCarro: modelo,
            velocidadeCarro: velocidade,
            placaCarro: placa
          })
        });

        let ress = await reqs.json();
        console.log(ress);
    }

    return(
        <View style= {style.viewPrincipal}>
            <View style = {style.view1} >  
                <Image style ={style.img}
                    source={require('../assets/logo.png')}
                /> 
            </View>

            <View style = {style.view2}>
                   
                    <Text style={style.txM}>Modelo:</Text>
                    <TextInput style = {style.input} placeholder="Digite o modelo" onChangeText={(text)=> setModelo(text)}>
                    </TextInput>
                   
            </View>

            <View style = {style.view2}>
                   
                <Text style={style.txM}>Velocidade máxima:</Text>
                <TextInput style = {style.input} placeholder="Digite a velocidade" onChangeText={(text)=> setVelocidade(text)}>
                </TextInput>
              
            </View>

            <View style = {style.view2}>
                   
                <Text style={style.txM}>Placa:</Text>
                <TextInput style = {style.input} placeholder="Digite a placa" onChangeText={(text)=> setPlaca(text)}>
                </TextInput>
              
            </View>

            <View style = {style.view3}>
                        
                <TouchableOpacity style={style.button} onPress={createCarro}>
                        <Text style={style.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        {/*                                     
            <View style = {style.view4}>
                <View style = {style.view5}>
                        <View>
                            <Text style={style.txP}>Home</Text>
                        </View>
                        <View>
                            <Text style={style.txP}>Busca</Text>
                        </View>
                        <View>
                            <Text style={style.txP}>Histórico</Text>
                        </View>
                        <View>
                            <Text style={style.txP}>Menu</Text>
                        </View>
                </View>
            </View>
        */}      
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
        height: 100
        
    },
    img : {
        width: 150,
        height: 50,
        //backgroundColor: '#000'
        
    },
    view2: {
        
        height: 120,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
        height: 100,
        width: '100%',
        padding: 20,
        //backgroundColor: '#ccc',
        //justifyContent: "center",
        alignItems:"center",
    }, 
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#000000'
      },
      buttonText: {
        color: '#fff',
        fontSize: 15
      },

      hover: {

      },
    view4: {
        height: 300,
        width: '100%',
        justifyContent:"flex-end",
        alignItems:"flex-end",
        backgroundColor: '#000'
    },
    view5: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center",
        backgroundColor: '#000',
        height: 100,
        width: '100%'
    },
    txP: {
        fontSize: 12,
        color: 'white'
    }
})

