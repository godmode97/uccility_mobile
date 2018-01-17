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
import Feed from './Feed';
import {StackNavigator} from 'react-navigation';

import StatusBarColor from '../StatusBarColor'
import Default from '../Default';
export default class NewsFeed extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            news:[]
        }

    }
    static navigationOptions={
        title:'News Feed',
        headerStyle:{
            backgroundColor:'transparent',
            marginTop:StatusBar.currentHeight,
            // width:Dimensions.get('screen').width*0.8
            // opacity:0.8
            margin:0,
            height:Dimensions.get('window').height*0.2,
        },
        headerTintColor: 'white',
        headerTitleStyle: { 
            color: 'white' 
        },
        // cardStyle: { backgroundColor: 'transparent' },
        //  header: { style: { backgroundColor: 'transparent' },
        //   tintColor: 'white' }
    }
    // constructor(){
    //     this.state={
    //         barHeight:StatusBar.currentHeight
    //     }
    // }

    onFeedPressed(){
        return this.props.navigation.navigate('Reg')
    }

    onLoadData(){
        fetch('http://192.168.1.5:8000/api/professor/6')
        .then(data=>data.json())
        .then(result=>{
            // console.log(result);
            this.setState({news:result})
            // console.log(this.state.data);
        })
        .catch(error=>console.log(error))
    }

    onLoadFeed(){
        fetch('http://192.168.1.5:8000/api/news')
        .then(data=>data.json())
        .then(result=>{
            // console.log(result);
            this.setState({news:result})
        })
        .catch(error=>console.log(error))
    }
    componentDidMount(){
        this.onLoadData();
        this.onLoadFeed();
    }
    render(){
        let {news} = this.state
        return(
            <View style={styles.NewsFeed}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0.5)"
                    translucent
                />
                <Image source={cover} style={styles.cover} blurRadius={10}/>
                {/* {console.log(this.state.data)} */}
                <ScrollView style={styles.News}>
                    {/* <Button 
                        title="Go to News"
                        onPress={
                            ()=>this.props.navigation.navigate('News')
                        }/> */}

                        {
                            news.map(function(nws){
                                return(
                                    <Feed 
                                        key={nws.id}
                                        header={nws.header}
                                        date="Jan 17 2018"
                                        role={nws.role}
                                        img={nws.photo}
                                        description={nws.description}
                                        style={styles.Feed}
                                    />
                                )
                            })
                        }
                       
                    </ScrollView>
            </View>
            
        )
    }
}

const styles=StyleSheet.create({
    Feed:{
        // marginTop:StatusBar.currentHeight*5
        // backgroundColor:Default.defaultBackgroundColor
        margin:10,
    },
    cover:{
        position:'absolute',
        top:-(StatusBar.currentHeight+160),
        height:Dimensions.get('window').height*0.4,
        left:-300
    },
    NewsFeed:{
        // backgroundColor:Default.defaultBackgroundColor
    },
    News:{
        // flex:5
    }
})