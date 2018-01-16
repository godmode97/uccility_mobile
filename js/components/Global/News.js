import React,{Component} from 'react'
import {
View,
Text
} from 'react-native'



export default class News extends Component{
    static navigationOptions={
        title:'News'
    }
    render(){
        return(
            <View>
                <Text>The Fuckin News</Text>
            </View>
        )
    }
}