import React,{Component} from 'react';
import {
    Image,
    TouchableHighlight,
    Touchable,
    StyleSheet,
    Dimensions,
    AsyncStorage
} from 'react-native';

import {
    Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
} from 'native-base';

import user from '../data/users.json';

import dp from '../../img/v.jpg';

import background from '../../img/profile/bg.png';
import Default from './Default';

export default class SideNavigator extends Component{

    state = {
        usertype : user[0].global
    }
    
    _initializeState = async()=>{
        try {
            const users = await AsyncStorage.getItem('user_id');
            if(users!==null){
                console.log(users);
                this.setState({usertype:user[0].professor});
            }
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        this._initializeState();

        // const userlist = AsyncStorage.getItem('user_id');
        
        // console.log(userlist)
        // let users;
        // if(userlist!==null){
        //     if(user==='professor'){
        //         users = user[0].professor
        //     }
        //     else if(user==='student'){
        //         users = user[0].student
        //     }
        //     else users = user[0].global
        // }
        // else{
        //     users = user[0].global
        // }
        let users = this.state.usertype;

        let {navigate} = this.props.navigation
        
        return(
            <Container>
                
                <Content>
                    <View style={styles.NavigationInfo}>
                        <View style={styles.NavigationDPHolder}>
                        <Image source={background} style={styles.bg}/>
                            <TouchableHighlight style={styles.NavigationDPTouch} onPress={()=>alert('asd')}>
                                <Image source={dp} style={styles.NavigationDP}/>
                            </TouchableHighlight>
                        </View>
                        
                        <Text style={styles.NavigationUser}>{users.length==6?"Public User":"Joemen Gonzales Barrios"}</Text>
                        <Text style={styles.NavigationPos}>{users.length==6?"------------------------":"Professor"}</Text>
                    </View>
                    <List
                        dataArray={this.state.usertype}
                        renderRow={
                            data=>
                            <ListItem 
                                androidRippleColor='#3E50B4' 
                                button 
                                noBorder 
                                onPress={()=>{
                                     navigate(data.route)
                                     console.log(data.route)
                                    }
                                }
                            >
                                <Left>
                                    <Text style={{color:Default.primaryAndroidDarker}}>{data.route_name}</Text>
                                </Left>
                            </ListItem>
                        }
                    />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    NavigationDP:{
        height:68,
        width:68,
        borderRadius:68,
        // margin:10,
        borderColor:'#3243A1',
        borderWidth:2,
        position:'relative'
    },
    NavigationDPTouch:{
        height:68,
        width:68,
        borderRadius:68,
        margin:20,
        flexDirection:'column',
    },
    NavigationDPHolder:{
        flex:4,
        justifyContent:'flex-end'
        // backgroundColor:'red'
    },
    NavigationUser:{
        marginLeft:30,
        fontFamily:'Segoe UI',
        fontSize:15,
        color:'white',
        flex:0.5
    },
    NavigationPos:{
        marginLeft:30,
        fontFamily:'Segoe UI',
        fontSize:11,
        color:'white',
        opacity:0.8,
        flex:0.5
    },
    NavigationInfo:{
        backgroundColor:'#3E50B4',
        display:'flex',
        height:Dimensions.get('window').height*0.4,
        alignContent:'space-between'
    },
    bg:{
        position:'absolute',
        zIndex:-1,
        top:-5
    }
})