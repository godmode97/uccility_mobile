import React,{Component} from 'react';
import {
    Text,
    View,
    AsyncStorage,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

export default class LogOut extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.center}>
                <ActivityIndicator size="large"/>
                <Text>Logging Out</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center'
    }
})
