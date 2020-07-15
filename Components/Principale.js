import React,{ Component } from 'react';
import {View} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Search from './Search.js';
import Menu from './Menu.js';
class Principale extends React.Component {
    render (){
        return(
            <KeyboardAwareScrollView 
                style={ {flex:1, backgroundColor:'#e6f2ff', marginTop:20} }
                contentContainerStyle={{ flexGrow: 1 }} 
                enableOnAndroid={true}
            >
                <View>
                    <Search/>
                </View>
                <View style={{flex:1,justifyContent:"flex-end"}}>
                    <Menu/>
                </View>
                
            </KeyboardAwareScrollView>        
        )}
}
export default Principale