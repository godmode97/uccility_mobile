import React,{Component} from 'react'
import {
View,
Text,
CameraRoll,
StyleSheet,
Button,
StatusBar
} from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';

import Camera from 'react-native-camera';

export default class Augmented extends Component{
    static navigationOptions={
        title:'Augmented'
    }
    render() {
        return (
          <View style={styles.container}>
          <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}>
              <Button style={styles.capture} onPress={this.takePicture.bind(this)} title="[CAPTURE]"></Button>
            </Camera>
          </View>
        );
      }
    
      onBarCodeRead(e) {
        console.log(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
      }
    
      takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
          .then((data) => console.log(data))
          .catch(err => console.error(err));
    
    
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
    }
  });