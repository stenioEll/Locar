import React, {useState} from 'react';
import {SafeAreaView, Input, Text, View, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import config from '../../config/config.json';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Cadastro({navigation}) {

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);


  //Envia os dados do formulario para o backend e cadastra o usuário
  async function registerUser(){
    let reqs = await fetch(config.urlRootPhp+'Cadastro.php',{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        nameUser: user,
        emailUser: email,
        passwordUser: password,
      })
    });
    let ress = await reqs.json();
    console.log(ress);
  }

  return (
    <SafeAreaView style = {styles.container}>

      <View style = {styles.containerTop} >
        <Image
          source = {require('./../assets/logo2.png')}
        />
      </View>

      <View style={styles.containerMid}>
        <Text>{user}- {email} - {password}</Text>
        <View style = {styles.inputContainer}>
          <Text style = {styles.textStyle} >Nome:</Text>  
          <TextInput
            style = {styles.inputStyle}
            onChangeText={(text)=> setUser(text)}
          />
        </View>
        
        <View style = {styles.inputContainer}>
          <Text style = {styles.textStyle} >Email:</Text>  
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

        <TouchableOpacity style={styles.button} onPress={registerUser}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerBot}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textStyle}>Possui conta? Faça login</Text>
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

