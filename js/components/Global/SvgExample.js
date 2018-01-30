import React,{Component} from 'react';

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

// import PinchZoomView from 'react-native-pinch-zoom-view';
import LottieAnimation from 'lottie-react-native';



export default class SvgExample extends Component {
    componentDidMount() {
        this.animation.play();
        
        }
    render() {
        return (
                <LottieAnimation
                    style={{flex:1}}
                    ref={animation => {
                    this.animation = animation;
                    }}
                    source={require('../../../bodymovin/data.json')}
                    loop={true}
                />
        );
    }
}