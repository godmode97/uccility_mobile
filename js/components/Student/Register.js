import React,{Component} from 'react'
import {
View,
Text
} from 'react-native'


import StatusBarColor from '../StatusBarColor'
export default class Register extends Component{
    static navigationOptions={
        title:'Register'
    }
    render(){
        return(
            <View>
                <StatusBarColor color={Default.primaryAndroidDarker}/>
                <Text>This is the Registration</Text>
            </View>
        )
    }
}