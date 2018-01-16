import React,{Component} from 'react'
import {
View,
Text
} from 'react-native'



export default class Mapping extends Component{
    static navigationOptions={
        title:'UCC 2D Mapping'
    }
    render(){
        return(
            <View>
                <Text>The Map</Text>
            </View>
        )
    }
}