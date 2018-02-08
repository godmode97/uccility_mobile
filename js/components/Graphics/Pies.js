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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
    },
  });
  
  export default class Pies extends Component {
    
    render() {
      return (
          <Pie data={this.props.data}
            options={this.props.options}
            accessorKey={this.props.accessor}
            margin={{top: 20, left: 20, right: 20, bottom: 20}}
            color="#2980B9"
            pallete={
              [
                {'r':24,'g':175,'b':35},
                {'r':190,'g':31,'b':69},
                {'r':100,'g':36,'b':199},
                {'r':214,'g':207,'b':32},
                {'r':198,'g':84,'b':45}
              ]
            }
            r={this.props.innerRadius}
            R={this.props.outerRadius}
            legendPosition="topLeft"
            label={{
              fontFamily: 'Arial',
              fontSize: 9.5,
              fontWeight: true,
              color: '#ECF0F1'
            }}

            
            />
      )
    }
  }