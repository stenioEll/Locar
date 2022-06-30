import React from "react";
import { Text, View, ScrollView, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native'



export default props => (
        <View style= {style.viewPrincipal}>
               <View style = {style.card}>
                    <View style = {style.logo}>
                        <Image 
                            source={require('../assets/brown.png')}
                        /> 
                    </View>
                    <View style = {style.info}>
                        <View style =  { style.modelo}>
                            <Text style = { style.TxG}>{props.modelo}</Text>
                        </View>
                        <View style = {style.velMax}>
                            <Image style = {style.iconV}
                                source={require('../assets/icons/Velocidade.png')}
                            />
                            <Text style = { style.TxP}>{props.velocidade} km/h</Text>
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
                                <Text style = {{fontFamily: 'Poppins-Medium', color: '#8E8E8E'}}>Ocupado</Text>
                            </View>
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
        borderBottomEndRadius: 0,
        borderBottomLeftRadius: 0,
        //alignItems: "center",
        padding: 10,
        
        elevation: 3,
        shadowOffset: {width: 1, height: 1}

    },
    logo : {
        //justifyContent: "center"
        marginVertical: 25
    },
    info: {
        padding: 10,
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
    iconV: {
        marginVertical: 5,
        marginRight: 5
    },
    txP: {
        fontSize: 15
    },
    sta: {
        marginVertical: 10,
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
    perfil: {
        flexDirection:"column",
        width: 160,
        height: 162,
        backgroundColor: '#F9F9F9',
        borderRadius: 19,
        marginVertical: 10,
        //alignItems: 'center',
    },
    viagem: {
        flexDirection:"column",
        width: 160,
        height: 162,
        backgroundColor: '#F9F9F9',
        borderRadius: 19,
        marginVertical: 10,
    },
    foto: {
        width: 70,
        height: 70,
        borderRadius:100,
        backgroundColor: '#848484',
        overflow:"hidden",
        //justifyContent: "center",
        //alignItems:"center"
        margin: 10,
        alignItems:"center"
        
    },
    nome: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        alignItems: "center"
        //backgroundColor: '#000',
        
    },
    profile:{
        marginRight: 20
    },
    card2: {
        flexDirection: 'row',
        height: 180,
        width: 350,
        backgroundColor: '#F9F9F9',
        //alignSelf: "center",
        borderRadius: 19,
        //borderBottomEndRadius: 0,
        //borderBottomLeftRadius: 0,
        //alignItems: "center",
        padding: 10,
        
    },
    statusMotorista: {
        //backgroundColor:'#000',
        height: 25,
        flexDirection:"row",
        elevation: 3,
        shadowOffset: {width: 1, height: 1}
    },
    view3: {
        height: 70,
        width: 300,
        padding: 10,
        backgroundColor: '#000',
        borderRadius:20,
        justifyContent: "center",
        alignItems:"center",
    }, 
    buttonText2: { 
        color: '#FCFCFC',
        fontSize: 20,
        fontFamily: 'Poppins-Regular'
    }
})

