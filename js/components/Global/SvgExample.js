import React,{Component} from 'react';

import {
    StyleSheet,
    View
} from 'react-native'

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import { Pie } from 'react-native-pathjs-charts';

// import PinchZoomView from 'react-native-pinch-zoom-view';
import LottieAnimation from 'lottie-react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
    },
  });
  
  export default class SvgExample extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: `Pie - Basic`,
    });
    render() {
      let data = [{
        "name": "Washington",
        "population": 7694980
      }, {
        "name": "Oregon",
        "population": 2584160
      }, {
        "name": "Minnesota",
        "population": 6590667,
        "color": {'r':223,'g':154,'b':20}
      }, {
        "name": "Alaska",
        "population": 7284698
      }, {
        "name": "Malaska",
        "population": 6824355
      }]
  
      let options = {
        margin: {
          top: 20,
          left: 20,
          right: 20,
          bottom: 20
        },
        width: 350,
        height: 350,
        color: '#2980B9',
        r: 50,
        R: 150,
        legendPosition: 'topLeft',
        animate: {
          type: 'oneByOne',
          duration: 200,
          fillTransition: 3
        },
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          color: '#ECF0F1'
        }
      }
  
      return (
        <View style={styles.container}>
          <Pie data={data}
            options={options}
            accessorKey="population"
            margin={{top: 20, left: 20, right: 20, bottom: 20}}
            color="#2980B9"
            pallete={
              [
                {'r':0,'g':0,'b':0},
                {'r':24,'g':175,'b':35},
                {'r':190,'g':31,'b':69},
                {'r':100,'g':36,'b':199},
                {'r':214,'g':207,'b':32},
                {'r':198,'g':84,'b':45}
              ]
            }
            r={50}
            R={150}
            legendPosition="topLeft"
            label={{
              fontFamily: 'Arial',
              fontSize: 8,
              fontWeight: true,
              color: '#ECF0F1'
            }}
            />
        </View>
      )
    }
  }