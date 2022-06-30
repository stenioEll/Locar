import React, {useContext, useState,setState,useEffect} from "react";
import { Text, View, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import  {UsersContext} from '../contexts/userContext';
import config from '../../config/config.json';
import EmpresaPNG from '../components/Card3';

export default function Home ({navigation}){

    const {userId, setUserId} = useContext(UsersContext);
    const [nome_empresa, setNome_Empresa] = useState(null);
    const [temEmpresa, setTemEmpresa] = useState(null);
    const [temContrato, setTemContrato] = useState(null);

    const id_numero = userId;
    const [dataSource, setDataSource] = useState(null);
    const [dataSourceF, setDataSourceF] = useState(null);

    async function carregarEmpresas() {
        let reqs = await fetch(config.urlRootPhp+'ListarEmpresa.php',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
          
            body: JSON.stringify({
                idRequest: id_numero,
            })
    
        });

        let ress = await reqs.json();
        if(ress !=false){
            const aux = JSON.parse(ress);
            setDataSource(aux);
            setTemEmpresa(true);
        }
    }

    async function carregarContratado(){
        let reqs = await fetch(config.urlRootPhp+'ListarContrato.php',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
          
            body: JSON.stringify({
                idRequest: id_numero,
            })
        });

        let ress = await reqs.json();
        if(ress !=false){
            const aux = JSON.parse(ress);
            setDataSourceF(aux);
            setTemContrato(true);
        }

    }
  
    useEffect(()=>{
        carregarEmpresas();
        carregarContratado();
    },[])
    
    _renderItem = ({item,index})=>{
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Funcionarios',{empresaId:item.id})}>
                <View>
                    <EmpresaPNG nome= {item.nome} perfil = {item.id}/>
                </View>
            </TouchableOpacity>
        )
    }

    _renderItem2 = ({item,index})=>{
        return (
            <TouchableOpacity onPress={() => navigation.navigate('CarrosFunc',{empresaId:item.id})}>
                <View>
                    <EmpresaPNG nome= {item.nome} perfil = {item.id}/>
                </View>
            </TouchableOpacity>
        )
    }
    return(
        <View style= {style.viewPrincipal}>
              <View style = {style.view}>  
                    <Image style ={style.img}
                        source={require('../assets/logo.png')}
                    /> 
               </View>

               <View style = {style.view1}>
                    <TouchableOpacity style = {style.button} onPress={() => navigation.navigate('CadEmpresa')}>
                        <Text style = {style.buttonText}>Criar Empresa</Text>
                    </TouchableOpacity>
               </View>

                {temEmpresa && (
                    <View style = {style.view2}>
                   
                        <Text style={style.txM}>Empresa:</Text>
        
                    </View>
                )}
                <View style = {style.view2}>
                        <FlatList
                            data = {dataSource}
                            renderItem = {this._renderItem}
                            keyExtractor = {(item, index) => index.toString()}
                        
                        />
                </View>

                {temContrato && (
                    <View style = {style.view2}>
                   
                        <Text style={style.txM}>Empregado:</Text>
        
                    </View>
                )}
                <View style = {style.view2}>
                        <FlatList
                            data = {dataSourceF}
                            renderItem = {this._renderItem2}
                            keyExtractor = {(item, index) => index.toString()}
                        
                        />
                </View>
    
        </View>  
    )
}

const style = StyleSheet.create({
   
    viewPrincipal: {
        flex: 1,
        width: '100%',
    },
    view:{
        padding: 10,
    },
    view1: {
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        //backgroundColor: '#000',
        
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
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#000000',
        width:238
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

