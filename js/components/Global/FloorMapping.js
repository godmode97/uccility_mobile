import React,{Component} from 'react'
import {
View,
Text
} from 'react-native'



export default class FloorMapping extends Component{
    static navigationOptions={
        title:'1st Floor'
    }
    render(){
        return(
            <View>
                <Text>This is the First Floor</Text>
            </View>
        )
    }
}