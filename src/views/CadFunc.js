import React ,{useState}from "react";
import { Text, View, ScrollView, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, Keyboard} from 'react-native'
import config from '../../config/config.json';


export default function CadFunc ({route,navigation}){

    const {empresaId} = route.params;
    const [email, setEmail] = useState(null);
    const [dataSource, setDataSource] = useState(null);
    let nomeFunc = null;
    let idFunc = null;

    async function searchFunc(){
        Keyboard.dismiss();
        let reqs = await fetch(config.urlRootPhp+'ProcurarUsuario.php',{
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
    
          body: JSON.stringify({
            emailUser: email
          })
        });

        let ress = await reqs.json();
    
        if(ress != false){
            const aux = JSON.parse(ress);
            setDataSource(aux);
            nomeFunc = aux[0].firstName;
            idFunc = aux[0].id;
     
            createFunc();
        }
    }

    async function createFunc(){

        let reqs = await fetch(config.urlRootPhp+'CadastroFuncionario.php',{
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
    
          body: JSON.stringify({
            nomeUser: nomeFunc,
            idUser:idFunc,
            empresa_id: empresaId
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
                   
                    <Text style={style.txM}>Buscar:</Text>
                    <TextInput style = {style.input} placeholder="Digite o email do usuário" onChangeText={(text)=> setEmail(text)}>
                    </TextInput>
                   
            </View>

            <View style = {style.view3}>
                        
                <TouchableOpacity style={style.button} onPress={searchFunc}>
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

