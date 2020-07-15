import React,{ Component } from 'react';
import {StyleSheet ,View,TextInput, TouchableOpacity, Text} from 'react-native'
class Search extends React.Component {
    render (){
        return(
            <View  style={ Styles.search }>
                <TextInput style={Styles.motRe} placeholder="Mot à Rechercher"/>
                <TouchableOpacity style={ Styles.but} onPress={() => alert('Voila !!')} >   
                    <Text style={{ fontSize: 16 }}> Rechercher </Text>
                </TouchableOpacity>
            </View>      
        )}
}
const Styles = StyleSheet.create({
    search:{
        flex:2,
        minHeight: 150,
        backgroundColor: '#e6f2ff',
        flexDirection: 'column',
        justifyContent:"center",
        alignItems: "center",
        marginTop: 25,
        padding: 20
    },
    motRe: {
        flex:2,
        minHeight: 50,
        width: 300,
        textAlign: "center",
        marginTop:30,
        //marginRight:3,
        //marginLeft:10,
        marginBottom:10,
        borderWidth: 2,
        borderColor: '#0099e6',
        borderRadius: 150/2
    },
    but: {
        flex: 1,
        minHeight: 45,
        width: 150,
        //marginTop:20,
        //marginRight:20,
        alignItems: "center",
        justifyContent:"center",
        padding:5,
        backgroundColor: '#b3d7ff',
        borderRadius: 150/2
    }
})
export default Search 