import React, {useContext, useState,setState,useEffect} from "react";
import { Text, View, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import  {UsersContext} from '../contexts/userContext';
import config from '../../config/config.json';
import Motorista from '../components/Card2';

export default function Funcionarios ({route,navigation}){

    const {empresaId} = route.params;
    const {userId, setUserId} = useContext(UsersContext);
    const id_numero = userId;
    const [dataSource, setDataSource] = useState(null);

    async function carregarFuncionarios() {
        let reqs = await fetch(config.urlRootPhp+'ListarFuncionarios.php',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
          
            body: JSON.stringify({
                idRequest: empresaId,
            })
    
        })

        let ress = await reqs.json();
        const aux = JSON.parse(ress);
        setDataSource(aux);
    }

  
    useEffect(()=>{
        carregarFuncionarios();
    },[])
    
    _renderItem = ({item,index})=>{
        return (
            <TouchableOpacity /*onPress={() => navigation.navigate('CadFunc',{empresaId:item.id})}*/>
                {/*<View>
                    <Text style = {style.buttonText}>{item.id} - {item.nome}</Text>
                </View>*/
                }
                <Motorista nome= {item.nome} perfil = {item.perfil} status = {item.status}/>
            </TouchableOpacity>
        )
    }

    return(
        <View style= {style.viewPrincipal}>
              <View style = {style.view1} >  
                    <Image style ={style.img}
                        source={require('../assets/logo.png')}
                    /> 
               </View>

               <View>
                    <View>
                            <TouchableOpacity style = {style.button2}>
                                <Text style = {style.buttonText2}>Funcionarios</Text>
                            </TouchableOpacity>
                    </View>

                    <View>
                            <TouchableOpacity style = {style.button} onPress={() => navigation.navigate('Carros',{empresaId:empresaId})}>
                                <Text style = {style.buttonText}>Carros</Text>
                            </TouchableOpacity>
                    </View>
               </View>

               <View style = {style.view1}>
                    <TouchableOpacity style = {style.button} onPress={() => navigation.navigate('CadFunc',{empresaId:empresaId})}>
                        <Text style = {style.buttonText}>Cadastrar Funcionario</Text>
                    </TouchableOpacity>
               </View>
               
                <View style = {style.view2}>
                    <FlatList
                        data = {dataSource}
                        renderItem = {this._renderItem}
                        keyExtractor = {(item, index) => index.toString()}
                    
                    />
                    {/*
                    <ListarEmpresa id = {id_numero} />
                    */}
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
    view2: {
        
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
        elevation: 3,
        backgroundColor: '#000000',
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
        backgroundColor: '#fff',
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

