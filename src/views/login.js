import React, {useState,useContext} from 'react';
import {SafeAreaView, Input, Text, View, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import config from '../../config/config.json';
import  {UsersContext} from '../contexts/userContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login ({navigation}) {
  
  const {userId, setUserId} = useContext(UsersContext);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
 
 
  async function doLogin(){
    let reqs = await fetch(config.urlRootPhp+'Login.php',{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        emailUser: email,
        passwordUser: password
      })
    });

    let ress = await reqs.json();
    const json1 = JSON.parse(ress);
    const aux = JSON.stringify(json1[0].id);
    const aux2 = parseInt(aux[1]);

    setUserId(aux2);
    
    if(ress){
      navigation.navigate('Home');
    }
  }
 
  return (
    <SafeAreaView style = {styles.container}>

      <View style = {styles.containerTop} >
        <Image
          source = {require('./../assets/logo2.png')}
        />
      </View>

      <View style={styles.containerMid}>
        <View style = {styles.inputContainer}>
          <Text style = {styles.textStyle} >Nome:</Text>  
          <TextInput
            style = {styles.inputStyle}
            onChangeText={(text)=> setEmail(text)}
          />
        </View>

        <View style = {styles.inputContainer}>
          <Text style = {styles.textStyle}>Senha:</Text>  
          <TextInput
            secureTextEntry = {true}
            style = {styles.inputStyle}
            onChangeText={(text)=> setPassword(text)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.textStyle}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={doLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerBot}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.textStyle}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>  
  ) 
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#121921',
  },

  containerTop:{
    height: (windowHeight*0.1),
    justifyContent:'center',
  },

  containerMid:{
    height: (windowHeight*0.77),
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
  },

  containerBot:{
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: (windowHeight*0.1),
    width: '100%',
    justifyContent:'center',
  },

  button:{
    width:172,
    height:47,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },

  buttonText:{
    color: '#000',
    fontSize: 18,
    fontFamily: 'Poppins-Regular'
  },

  textStyle:{
    color: '#fff',
    marginBottom: 10,
    fontSize: 18,
  },

  inputContainer:{
    marginBottom: 10,
    marginTop: 10,
  },

  inputStyle: {
    backgroundColor: '#696969',
    borderRadius: 9,
    width:0.83*windowWidth,
  },
})

