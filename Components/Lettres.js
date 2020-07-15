import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

class Lettres extends React.Component{
    render(){
        return(
            <View style={Styles.mainLettres}>
                <View style={ Styles.Favoris}>
                    <TouchableOpacity  onPress={() => alert('Voila !!')} >   
                        <Text style={{ fontSize: 20 }}> Favoris </Text>
                    </TouchableOpacity>
                </View>
                <View style={ Styles.Notes}>
                    <TouchableOpacity  onPress={() => alert('Voila !!')} >   
                        <Text style={{ fontSize: 20 }}> Notes </Text>
                    </TouchableOpacity>
                </View>
                <View style={ Styles.Historique}>
                    <TouchableOpacity  onPress={() => alert('Voila !!')} >   
                        <Text style={{ fontSize: 20 }}> Historique </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    mainLettres:{
        flex:3,
        alignItems:"center",
        justifyContent:"center",
        margin:20,
        paddingTop:50,
        paddingBottom:50,
        borderRadius: 150/2,
        backgroundColor: '#b3d7ff',
    },
    Favoris:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        marginTop:5,
        minHeight:100,
        borderRadius:10,
        borderBottomColor:'#003366',
        backgroundColor: '#cccccc',
        
    },
    Notes:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
        width:100,
        minHeight:100,
        borderRadius:10,
        borderBottomColor:'#003366',
        backgroundColor: '#cccccc',

    },
    Historique:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
        width:100,
        minHeight:100,
        borderRadius:10,
        borderBottomColor:'#003366',
        backgroundColor: '#cccccc',
    },
})
export default Lettres