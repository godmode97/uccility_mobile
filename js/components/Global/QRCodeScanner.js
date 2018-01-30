import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Dimensions,
  Vibration,
  Animated,
  Easing,
  View,
  Text,
  StatusBar
} from 'react-native';

import Camera from 'react-native-camera'


export default class QRCodeScanner extends Component {
  static propTypes = {
    onRead: PropTypes.func.isRequired,
    reactivate: PropTypes.bool,
    reactivateTimeout: PropTypes.number,
    fadeIn: PropTypes.bool,
    showMarker: PropTypes.bool,
    customMarker: PropTypes.element,
    cameraStyle: PropTypes.any,
    topViewStyle: PropTypes.any,
    bottomViewStyle: PropTypes.any,
    topContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    bottomContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    onRead: () => (console.log('QR code scanned!')),
    reactivate: false,
    reactivateTimeout: 0,
    fadeIn: true,
    showMarker: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      fadeInOpacity : new Animated.Value(0)
      
    }
    this.fadeInOpacity = new Animated.Value(0);
    this.qrScanned = new Animated.Value(0);
    this._handleBarCodeRead = this._handleBarCodeRead.bind(this);
  }

  componentDidMount() {
    if (this.props.fadeIn) {
      Animated.sequence([
        Animated.delay(1000),
        Animated.timing(
          this.state.fadeInOpacity,
          {
            toValue: 1,
            easing: Easing.inOut(Easing.quad),
          },
        )
      ]).start();
    }
    this.fadeInOpacity.setValue(0)
    this.qrScanned.setValue(0)
  }

  _setScanning(value) {
    this.setState({ scanning: value });
  }

  _handleBarCodeRead(e) {
    if (!this.state.scanning) {
      Vibration.vibrate();
      this._setScanning(true);
      this.props.onRead(e);
      if (this.props.reactivate) {
        setTimeout(() => (this._setScanning(false)), this.props.reactivateTimeout);
      }
      if(e.data=="MIS"){
          this.ARRendered()
      }
    }
  }

  _renderTopContent() {
    if (this.props.topContent) {
      return this.props.topContent;
    }
    return null;
  }

  _renderBottomContent() {
    if (this.props.bottomContent) {
      return this.props.bottomContent;
    }
    return null;
  }

  _renderCameraMarker() {
    if (this.props.showMarker) {
      if (this.props.customMarker) {
        return this.props.customMarker;
      } else {
        return (
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
          </View>
        );
      }
    }
    return null;
  }

  _renderCamera() {
    if (this.props.fadeIn) {
      return (
        <Animated.View
          style={{
            opacity: this.state.fadeInOpacity,
            backgroundColor: 'transparent'
          }}>
          <Camera style={[styles.camera, this.props.cameraStyle]} onBarCodeRead={this._handleBarCodeRead.bind(this)} >
            {this._renderCameraMarker()}
          </Camera>
        </Animated.View>
      )
    }
    return (
      <Camera style={[styles.camera, this.props.cameraStyle]} onBarCodeRead={this._handleBarCodeRead.bind(this)}>
        {this._renderCameraMarker()}
      </Camera>
    )
  }

  ARRendered(){
    this._fade()
    this._translate()
  }

  _fade(){
    Animated.timing(this.fadeInOpacity,{
      toValue:1,
      duration:1500,
      easing:Easing.ease
    }).start()
  }

  _translate(){
    Animated.timing(this.qrScanned,
    {
      toValue:3,
      duration:1700,
      easing:Easing.bounce
    }).start()
  }

  _revert(){
    Animated.timing(this.qrScanned,
      {
        toValue:0,
        duration:1700,
        easing:Easing.bounce
      }).start()
      Animated.timing(this.qrScanned,
        {
          toValue:0,
          duration:1700,
          easing:Easing.bounce
        }).start()
  }
  _renderAR(e){
    
    return(
      <View style={[
        {position:'absolute'},
        {zIndex:2},
        // {marginTop:Dimensions.get('window').height*0.4},
        // {marginLeft:Dimensions.get('window').width*0.35},
        {height:Dimensions.get('window').height},
        {width:Dimensions.get('window').width},
        {textAlign:'center'}
      ]} onTouchStart={()=>{
        this._setScanning(true)
        this._revert()
        }}>
        <Animated.Text
        style={{
          opacity:this.fadeInOpacity,
          fontSize:60,
          fontWeight:'bold',
          transform:([{scaleX:this.qrScanned},{scaleY:this.qrScanned}]),
          marginLeft:Dimensions.get('window').width*0.5,
          marginTop:Dimensions.get('window').height*0.4
        }}
        >
          MIS
        </Animated.Text>
      </View>
    )
  }

  render() {
    
    return (
      <View style={[styles.mainContainer, this.props.containerStyle]}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />
      {this._renderAR()}
        <View style={[styles.infoView, this.props.topViewStyle]}>
          {this._renderTopContent()}
        </View>
        {this._renderCamera()}
        
        <View style={[styles.infoView, this.props.bottomViewStyle]}>
          {this._renderBottomContent()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  infoView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },

  camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
})