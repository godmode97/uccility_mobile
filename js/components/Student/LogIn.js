import React,{Component} from 'react'
import {
View,
Text,
KeyboardAvoidingView,
Image,
StyleSheet,
TextInput,
Button,
Touchable,
TouchableHighlight,
Dimensions,
StatusBar
} from 'react-native'

import logo from '../../../img/uccility_glyph.png'

import Default from '../Default'

export default class StudentLogIn extends Component{
    static navigationOptions={
        title:'Log In As Student'
    }
    _register(){
        this.props.navigation.navigate('Reg')
    }
    render(){
        return(
            <KeyboardAvoidingView 
                keyboardVerticalOffset={100} 
                style={styles.container}
                hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}
            >
                <StatusBar animated={true} backgroundColor={Default.primaryAndroidDarker}/>
                <View >
                    <Image source={logo} style={styles.logo}/>
                    <TextInput 
                    placeholder="Username..." 
                        underlineColorAndroid="white"
                        placeholderTextColor="white"
                        selectionColor="white"
                        style={styles.txtBox}
                    />
                    <TextInput placeholder="Password..."
                        underlineColorAndroid="white"
                        placeholderTextColor="white"
                        selectionColor="white"
                        secureTextEntry={true}
                        style={styles.txtBox}
                    />
                    <View style={styles.login}>
                        <Button 
                        title="Log In" 
                        onPress={()=>alert('Pressed')}
                        color={Default.secondaryColor}
                        accessibilityLabel="Log In Button"
                        style={styles.btn}
                        />
                    </View>

                    <View style={styles.login}>
                        <Button 
                        title="Register" 
                        onPress={()=>this._register()}
                        color={Default.secondaryColor}
                        accessibilityLabel="Log In Button"
                        style={styles.btn}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        backgroundColor:Default.primaryAndroidColor,
        alignItems:'center',
        justifyContent: 'center',

    },
    login:{
        margin:10
    },
    logo:{
        height:Dimensions.get('window').width*0.585,
        width:Dimensions.get('window').width*0.52
    },
    view:{
        alignSelf:'center'
    },
    txtBox:{
        color:'white',
        fontSize:20,
        padding:15
    },
    btn:{
        color:Default.primaryAndroidColor
    }
})