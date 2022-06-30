import React from 'react';
import Provider from './contexts/userContext';
import { NavigationContainer } from  '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login,Cadastro,CadEmpresa,CadCarro, Home,CadFunc,Funcionarios,Carros,CarrosFunc,Corrida,Coleta } from './views';

export default function App(){

  const Stack =  createNativeStackNavigator();

  return(
    <Provider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName = 'Login'
          screenOptions = {{headerShown: false}} >
          <Stack.Screen name = 'Login' component = {Login}/>
          <Stack.Screen name = 'Cadastro' component = {Cadastro}/>
          <Stack.Screen name = 'Home' component = {Home}/>
          <Stack.Screen name = 'CadEmpresa' component = {CadEmpresa}/>
          <Stack.Screen name = 'Funcionarios' component = {Funcionarios}/>
          <Stack.Screen name = 'Carros' component = {Carros}/>
          <Stack.Screen name = 'CarrosFunc' component = {CarrosFunc}/>
          <Stack.Screen name = 'CadCarro' component = {CadCarro}/>
          <Stack.Screen name = 'CadFunc' component = {CadFunc}/>
          <Stack.Screen name = 'Corrida' component = {Corrida}/>
          <Stack.Screen name = 'Coleta' component = {Coleta}/>
        </Stack.Navigator>  
      </NavigationContainer>
    </Provider>
  )
}