import React,{Component} from 'react'
import {
View,
Text,
StatusBar,
ScrollView,
Dimensions
} from 'react-native'

import StatusBarColor from '../StatusBarColor'

export default class News extends Component{
    
    static navigationOptions=({navigation})=>({
        title:`${navigation.state.params.title}`,
        headerStyle:{
            // backgroundColor:'transparent',
            // width:Dimensions.get('screen').width*0.8
            // opacity:0.8
        },
        headerTintColor: 'white',
        headerTitleStyle: { 
            color: 'white' 
        },
        // cardStyle: { backgroundColor: 'transparent' },
        //  header: { style: { backgroundColor: 'transparent' },
        //   tintColor: 'white' }
    })
    state = {
        news:[]
    }

    getNews(){
        fetch(`http://${this.state.ip}:8000/api/news`)
        .then(data=>data.json())
        .then(result=>{
            // console.log(result);
            this.setState({news:result})
        })
        .catch(error=>console.log(error))
    }

    render(){
        const {params} = this.props.navigation.state;
        console.log(params);
        return(
            <ScrollView>
                
                <StatusBarColor color={Default.primaryAndroidDarker}/>
                <View>

                </View>
                
            </ScrollView>
        )
    }
}