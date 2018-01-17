import React,{Component} from 'react'
import {
View,
Text,
StatusBar
} from 'react-native'

import Default from '../Default'
import StatusBarColor from '../StatusBarColor'

export default class Mapping extends Component{
    static navigationOptions={
        title:'UCC 2D Mapping'
    }
    render(){
        return(
            <View>
                <StatusBarColor color={Default.primaryAndroidDarker}/>
                <Text>The Map</Text>
            </View>
        )
    }
}