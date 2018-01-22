import React,{Component} from 'react'
import {
View,
Text,
StatusBar,
Image,
ScrollView
} from 'react-native';

import Default from '../Default';
import StatusBarColor from '../StatusBarColor';

import Map from '../../../img/Mapping.jpg';
export default class Mapping extends Component{
    static navigationOptions={
        title:'UCC 2D Mapping',
    }
    render(){
        return(
            <ScrollView>
                <ScrollView horizontal={true}>
                    <StatusBarColor color={Default.primaryAndroidDarker}/>
                    <Image source={Map}/>
                </ScrollView>
            </ScrollView>
        )
    }
}