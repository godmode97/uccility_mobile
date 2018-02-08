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

import PinchZoomView from 'react-native-pinch-zoom-view';

export default class Mapping extends Component{
    static navigationOptions={
        title:'UCC 2D Mapping',
    }
    render(){
        return(
            <PinchZoomView style={[{height:500},{width:500}]}>
                    <StatusBarColor color={Default.primaryAndroidDarker}/>
                    <Image source={Map} style={[{height:500},{width:500}]}/>
            </PinchZoomView>
        )
    }
}