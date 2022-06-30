import React, {useContext, useState,setState,useEffect} from "react";
import { Text, View, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import  {UsersContext} from '../contexts/userContext';
import config from '../../config/config.json';

export default function CadEmpresa ({navigation}){

    const {userId, setUserId} = useContext(UsersContext);
    const [nome_empresa, setNome_Empresa] = useState(null);

    const id_numero = userId;
 
    async function createEmpresa(){

        let reqs = await fetch(config.urlRootPhp+'CadastroEmpresa.php',{
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
    
          body: JSON.stringify({
            empresaNome: nome_empresa,
            dono_id: id_numero
          })
        });

        let ress = await reqs.json();
    
        if(ress){
          console.log(ress);
          if(ress == true){
            navigation.navigate('CadEmpresa');
          }
        }
    }


    return(
        <View style= {style.viewPrincipal}>
              <View style = {style.view1} >  
                    <Image style ={style.img}
                        source={require('../assets/logo.png')}
                    /> 
               </View>
               <View style = {style.view2}>
                   
                    <Text style={style.txM}>Nome da empresa:</Text>
                    <TextInput style = {style.input} placeholder="Digite sua empresa" onChangeText={(text)=> setNome_Empresa(text)}/>
                   
               </View>
               <View style = {style.view3}>
                        
                    <TouchableOpacity style={style.button} onPress={createEmpresa}>
                            <Text style={style.buttonText}>Adicionar</Text>
                    </TouchableOpacity>
                
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
        height: 100
        
    },
    img : {
        width: 150,
        height: 50,
        //backgroundColor: '#000'
        
    },
    view2: {
        
        height: 200,
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

