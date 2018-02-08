import React,{Component} from 'react';
import {
    View,
    ScrollView,
    Animated,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    Dimensions,
    AsyncStorage
} from 'react-native';


export default class Profile extends Component{

    state = {
        id: 0,
        department_id: 0,
        user_id: 0,
        employment_status: "",
        campus: "",
        last_name: "",
        first_name: "",
        middle_name: "",
        extension_name: "",
        gender: "",
        civil_status: "",
        date_of_birth: "",
        place_of_birth: "",
        email: "",
        mobile_no: "",
        current_address: "",
        permanent_address: "",
        photo: "",
        username: ""
    }

    static navigationOptions={
        title:'My Profile',
        headerStyle:{
            backgroundColor:'transparent',
            marginTop:StatusBar.currentHeight*2,
            // width:Dimensions.get('screen').width*0.8
            // opacity:0.8
            margin:0,
            marginBottom:Dimensions.get('window').height*0.1
        },
        headerTintColor: 'white',
        headerTitleStyle: { 
            color: 'white' 
        },
    }

    _getCredentials(id){
        console.log('tinawag')
        fetch("http://192.168.1.8/api/professor/"+id)
        .then((d)=>d.json())
        .then((r)=>console.log(r))
        .catch(e => console.warn(e))
        .done();
    }

    _getID(){
        const id =  AsyncStorage.getItem('user_id');
        if(id!==null){
            this.setState({
                id
            });
            
            this._getCredentials(this.state.id);
        }
        console.log(id);
    }
    
    componentDidMount(){
        alert("asd")
    }

    render(){
        
        return(
            <ScrollView>
                <View>
                    <Image />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

})