import React,{Component} from 'react';
import {
    Text,
    View,
    AsyncStorage,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

export default class LogOut extends Component{
    _logout= async() => {
        await AsyncStorage.removeItem('user_id');
        alert('Logged Out');
        setTimeout(() => {
            this.props.navigation.navigate('NewsFeed');
        }, 1500);
        
        
    }


    componentDidMount(){

    }
    render(){
        this._logout();
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
