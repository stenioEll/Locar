import React, {Component, useContext} from "react";
import {SafeAreaView, Input, Text, View, TextInput, 
        StyleSheet, Dimensions, Image, TouchableOpacity, 
        FlatList, ActivityIndicator} from 'react-native';
import config from '../../config/config.json';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ListarEmpresa extends Component{

    constructor(props){
        //const {empresaId, setEmpresaId} = useContext(UsersContext);
        super(props)
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }
    componentDidMount() {
        fetch(config.urlRootPhp+'ListarEmpresa.php',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
      
        body: JSON.stringify({
            idRequest: this.props.id,
        })

        })
        .then((response) => response.json())
        .then((responseJson)=>{
            console.log(responseJson);
            this.setState({
                isLoading: false,
                dataSource: JSON.parse(responseJson)
            })
        })   
    }

    ProximaTela(){
        console.log('oi');
    }

    _renderItem = ({item,index}) =>{
        return (
            <TouchableOpacity style={styles.button}>
                <View>
                    <Text style = {styles.item}>{item.id} - {item.nome}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        let {dataSource, isLoading} = this.state;
        if(isLoading){
            return(
                <View>
                    <ActivityIndicator size = 'large' animating/>
                </View>
            )    
        }else{
            return (
                <View>
                    <FlatList
                        data = {dataSource}
                        renderItem = {this._renderItem} 
                        keyExtractor = {(item, index) => index.toString()}   
                    />
                </View>
            )
        }    
    }
}

const styles = StyleSheet.create({
    button:{
        width:172,
        height:47,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        borderRadius: 10,
        backgroundColor: 'cyan',
      },

    item:{
        color: 'black',
        fontSize: 20,
    },


})