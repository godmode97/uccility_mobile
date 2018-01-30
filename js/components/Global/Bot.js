import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    Button,
    ScrollView,
    ActivityIndicator
} from 'react-native';

import Default from '../Default';

export default class Bot extends Component{
    static navigationOptions={
        title:'UCCility ChatBot'
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.connectionStatus}>Connecting...</Text><ActivityIndicator/>
                <ScrollView style={styles.messageBody}>
                    <Text>Message Body</Text>
                </ScrollView>
                <View style={styles.sendMessage}>
                    <TextInput 
                        placeholder="Ask questions..." 
                        placeholderTextColor="#eeeeee"
                        style={styles.message}
                        underlineColorAndroid={Default.primaryColor}
                    />
                    <View style={styles.sendButton}>
                        <Button 
                            title="Send"
                            onPress={()=>alert('Sent')}
                        />
                    </View>
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    },
    messageBody:{
        flex:4,
        flexDirection:'column-reverse',
        width:Dimensions.get('window').width,
        
    },
    sendMessage:{
        flexDirection:'row'
    },
    sendButton:{
        width:Dimensions.get('window').width*0.2
    },
    message:{
        width:Dimensions.get('window').width*0.8
    },
    connectionStatus:{
        backgroundColor:Default.secondaryLighter,
        width:Dimensions.get('window').width,
        alignItems:'center',
        textAlign:'center'
    }
})