import React,{Component} from 'react'
import {
View,
Text,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import Camera from 'react-native-camera';

export default class Augmented extends Component{
    static navigationOptions={
        title:'Augmented'
    }
    render(){
        return(
        //     <QRCodeScanner
        // onRead={this.onSuccess.bind(this)}
        // topContent={(
        //   <Text style={styles.centerText}>
        //     Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
        //   </Text>
        // )}
        // bottomContent={(
        //   <TouchableOpacity style={styles.buttonTouchable}>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // )}
        // />
        <Camera
            
        />
        )
    }
}