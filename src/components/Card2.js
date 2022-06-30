import React from "react";
import { Text, View, ScrollView, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native'



export default props => (
    
    <View style = {style.card}>
            <View style = {style.logo}>
                <Image 
                    source={require('../assets/motorista.png')}
                /> 
            </View>
            <View style = {style.info}>
                <View style =  { style.modelo}>
                    <Text style = { style.TxG}>{props.nome} </Text>
                </View>
                <View style = {style.statusMotorista}>
                    <View style = {style.circulo0}></View>
                        <View style = {style.textoStatus}>
                            <Text style = {{fontFamily: 'Poppins-Medium', color: '#8E8E8E'}}>{props.perfil}</Text>
                        </View>
                </View>
                <View style = {style.sta}>
                    <Text style = {style.txP}>Status: {props.status}</Text>
                </View>
                <View style = {style.LivreOcupado}>
                    <View style = {style.circulo1}></View>
                    <View style = {style.textoStatus}>
                        <Text style = {{fontFamily: 'Poppins-Medium', color: '#8E8E8E'}}>Livre</Text>
                    </View>    
                    <View style = {style.circulo2}></View>
                    <View style = {style.textoStatus}>    
                        <Text style = {{fontFamily: 'Poppins-Medium', color: '#8E8E8E'}} >Ocupado</Text>
                    </View>
                </View>
            </View>
    </View>           
  
)

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

    card: {
        flexDirection: 'row',
        height: 162,
        width: 380,
        backgroundColor: '#E5E5E5',
        alignSelf: "center",
        borderRadius: 19,
        //alignItems: "center",
        padding: 10,
        elevation: 3,
        shadowOffset: {width: 1, height: 1}

    },
    logo : {
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 30
    },
    info: {
        padding: 0,
        alignItems: "flex-start"
    },
    TxG: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        color: '#363636'
    },
    velMax: {
        flexDirection: "row",
        marginLeft: 2
    },
    txP: {
        fontSize: 15,
        color: '#8E8E8E'
    },
    sta: {
        marginVertical: 5,
        flexDirection:"row"
    },
    LivreOcupado: {
        flexDirection: "row"
    },
    circulo0: {
        width: 15,
        height: 15,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#C8C7C7',
        marginRight: 10,
        marginVertical: 2,
        backgroundColor: '#978DCD',
        //marginLeft: 8,
        alignItems:"center",
        justifyContent: "center"
        //backgroundColor: '#000'

    },
    
    circulo1 : {
        width: 15,
        height: 15,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#C8C7C7',
        marginRight: 10,
        marginVertical: 2,
        backgroundColor: '#7CC521',
        //marginLeft: 8,
        alignItems:"center",
        justifyContent: "center"
        //backgroundColor: '#000'
    },
    circulo2: {
        width: 15,
        height: 15,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#C8C7C7',
        marginVertical: 2,
        marginRight: 8,
        marginLeft: 10
    },
    textoStatus: {
        //backgroundColor: '#000',
        marginBottom: 10
        //alignItems:"center",
        //justifyContent: "center"
    },
    statusMotorista: {
        flexDirection:"row",
        //backgroundColor: '#000',
        height: 30
    }
    
})

