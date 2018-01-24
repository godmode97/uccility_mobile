import React,{Component} from 'react'
import{
    View,
    Button,
    Text,
    Animated,
    StyleSheet,
    Image,
    Easing
} from 'react-native'

import img from '../../../img/uccility_logo.png'
export default class AnimatedSample extends Component{
    constructor(){
        super()
        this.objOpacity = new Animated.Value(0)
    }
    showImage(){
        
    }
    componentDidMount(){
        this.objOpacity.setValue(0)
        
    }
    prerender(){
        
        Animated.timing(
            this.objOpacity,{
                toValue:1,
                duration:2000,
                easing:Easing.ease
            }
        ).start()
        console.log(this.objOpacity)
    }
    render(){
        return(
            <View style={[{justifyContent:'center'},{alignItems:'center'},{flex:1},{textAlign:'center'}]}>
                <Animated.Text
                    style={{
                        opacity:this.objOpacity,
                        transform:([{scaleX:this.objOpacity},{scaleY:this.objOpacity}])
                    }}
                >
                    {"ASD"}
                </Animated.Text>
                
                <Button title="Show Image" onPress={()=>this.prerender()}/>
            </View>
        )
    }
}