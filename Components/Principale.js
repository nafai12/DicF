import React,{ Component } from 'react';
import {View,StyleSheet,TouchableOpacity, Text} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Search from './Search.js';
import Menu from './Menu.js';
import Lettres from './Lettres.js';
class Principale extends React.Component {
    render (){
        return(
            <KeyboardAwareScrollView 
                style={ {flex:1, marginTop:20} }
                contentContainerStyle={{ flexGrow: 1 }} 
                enableOnAndroid={true}
            >
                <View>
                    <Search/>
                </View>
                <View>
                    <Lettres/>
                </View>
                
            </KeyboardAwareScrollView>        
        )}
}

export default Principale