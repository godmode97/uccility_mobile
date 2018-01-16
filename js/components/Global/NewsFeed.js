import React,{Component} from 'react'
import {
View,
Text,
Button,
StatusBar,
StyleSheet,
Dimensions,
Image,
ScrollView
} from 'react-native'

import cover from '../../../img/ucc.jpg';
// import { StackNavigator } from './C:/Users/GODMODE/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-navigation';
// import { relative } from 'path';
import {StackNavigator} from 'react-navigation';

export default class NewsFeed extends Component{
    static navigationOptions={
        title:'News Feed',
        headerStyle:{
            backgroundColor:'transparent',
            marginTop:StatusBar.currentHeight,
            // width:Dimensions.get('screen').width*0.8
            // opacity:0.8
            margin:0
        },
        headerTintColor: 'white',
        headerTitleStyle: { color: 'white' },
        // cardStyle: { backgroundColor: 'transparent' },
        //  header: { style: { backgroundColor: 'transparent' },
        //   tintColor: 'white' }
    }
    // constructor(){
    //     this.state={
    //         barHeight:StatusBar.currentHeight
    //     }
    // }
    render(){
        return(
            <View style={styles.Feed}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0.5)"
                    translucent
                    barStyle="light-content"
                />
                
                <Image source={cover} style={styles.cover} blurRadius={10}/>
                <Text>{"UCC"}</Text>
                {console.log(this.props)}
                <Button 
                    title="Go to News"
                    onPress={
                        ()=>this.props.navigation.navigate('News')
                    }/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    Feed:{
        // marginTop:StatusBar.currentHeight*5
    },
    cover:{
        position:'absolute',
        top:-(StatusBar.currentHeight+100),
        height:Dimensions.get('window').height*0.4,
        left:-100
    }
})