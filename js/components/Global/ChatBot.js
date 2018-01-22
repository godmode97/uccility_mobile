import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button
} from 'react-native';

import StatusBarColor from '../StatusBarColor';
import Default from '../Default';

import BotLogo from '../../../img/Bot.png';

export default class ChatBot extends Component{
    
    render(){
        let timeOut=setTimeout(() => {
            this.props.navigation.navigate('Bot')
        }, 5000)
        return(
            <View style={styles.container}>
                <StatusBarColor color={Default.primaryAndroidDarker}/>
                <Image source={BotLogo} style={styles.logo}/>
                <View style={styles.FAQ}>
                    <Text> Welcome to UCCILITY ChatBot! </Text>
                    <Text> Feel Free to Ask Questions! </Text>
                </View>
                <View>
                    <Button 
                    title="I need my questions to be answered" 
                    color={Default.secondaryColor}
                    onPress={()=>this.props.navigation.navigate('Bot')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    logo:{
        height:200,
        width:200
    },
    FAQ:{
        margin:20
    }
})