import React,{Component} from 'react'
import {
View,
Text,
StatusBar
} from 'react-native'

import StatusBarColor from '../StatusBarColor'

export default class News extends Component{
    static navigationOptions={
        title:'News',
        headerStyle:{
            marginTop:StatusBar.currentHeight
        }
    }
    render(){
        const {state} = this.props.navigation;
        // console.log(state);
        return(
            <View>
                
                
                <StatusBarColor color={Default.primaryAndroidDarker}/>
                <Text>The Fuckin News</Text>
            </View>
        )
    }
}