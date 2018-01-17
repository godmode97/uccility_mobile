import React,{Component} from 'react'
import {StatusBar} from 'react-native'
export default class StatusBarColor extends Component{
    render(){
        return(
            <StatusBar 
                backgroundColor={this.props.color} 
                animated={true}
                showHideTransition='slide'/>
        )
    }
}