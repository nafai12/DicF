import *as React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

class Menu extends  React.Component {
    render(){
        return(
            <View style={Styles.Menu}>
                <TouchableOpacity style={ Styles.Mots} onPress={() => alert('Voila !!')} >   
                    <Text style={{ fontSize: 20 }}> mots </Text>
                </TouchableOpacity>
                <TouchableOpacity style={ Styles.Favoris} onPress={() => alert('Voila !!')} >   
                    <Text style={{ fontSize: 20 }}> Favoris </Text>
                </TouchableOpacity>
                <TouchableOpacity style={ Styles.Notes} onPress={() => alert('Voila !!')} >   
                    <Text style={{ fontSize: 20 }}> Notes </Text>
                </TouchableOpacity>
                <TouchableOpacity style={ Styles.Historique} onPress={() => alert('Voila !!')} >   
                    <Text style={{ fontSize: 20 }}> Historique </Text>
                </TouchableOpacity>
            </View>
        )
    }
} 
const Styles = StyleSheet.create({
    Menu:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        margin:5,
        maxHeight:52
    },
    Mots:{
        flex:1,
        height:50,
        maxWidth:60,
        justifyContent: "center",
        textAlign: "center",
        borderBottomWidth:5,
        borderRadius:10,
        borderBottomColor:'#003366',
        backgroundColor: '#cccccc',
    },
    Favoris:{
        flex:1,
        height:50,
        maxWidth:80,
        justifyContent: "center",
        marginLeft: 5,
        textAlign: "center",
        borderBottomWidth:5,
        borderRadius:10,
        borderBottomColor:'#003366',
        backgroundColor: '#cccccc',
    },
    Notes:{
        flex:1,
        height:50,
        maxWidth:70,        
        justifyContent: "center",
        marginLeft: 5,
        textAlign: "center",
        borderBottomWidth:5,
        borderRadius:10,
        borderBottomColor:'#003366',
        backgroundColor: '#cccccc',
    },
    Historique:{
        flex:1,
        height:50,
        maxWidth:100,
        justifyContent: "center",
        marginLeft: 5,
        textAlign: "center",
        borderBottomWidth:5,
        borderRadius:10,
        borderBottomColor:'#003366',
        backgroundColor: '#cccccc',
    },

})
export default Menu 