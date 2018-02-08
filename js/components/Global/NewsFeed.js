import React,{Component} from 'react'
import {
View,
Text,
Button,
StatusBar,
StyleSheet,
Dimensions,
Image,
ScrollView,
ActivityIndicator,
TouchableHighlight
} from 'react-native'

import cover from '../../../img/ucc.jpg';
// import { StackNavigator } from './C:/Users/GODMODE/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-navigation';
// import { relative } from 'path';
import Feed from './Feed';
import {StackNavigator} from 'react-navigation';

import StatusBarColor from '../StatusBarColor'
import Default from '../Default';
import ip from '../ip';


export default class NewsFeed extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            news:[],
        }
    }
    static navigationOptions={
        title:'News Feed',
        headerStyle:{
            backgroundColor:'transparent',
            marginTop:StatusBar.currentHeight,
            margin:0,
            marginBottom:Dimensions.get('window').height*0.1
        },
        headerTintColor: 'white',
        headerTitleStyle: { 
            color: 'white' 
        },
    }

    onFeedPressed(){
        return this.props.navigation.navigate('Reg')
    }

    onLoadData(){
        fetch(`http://${this.state.ip}:8000/api/professor/6`)
        .then(data=>data.json())
        .then(result=>{
            // console.log(result);
            this.setState({news:result})
            // console.log(this.state.data);
        })
        .catch(error=>console.log(error))
    }

    onLoadFeed(){
        fetch(`http://${ip}:8000/api/news`)
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

    //bind navigation
    navigateDir(){
        return this.props.navigation.navigate('Feed')
        
    }

    

    render(){
        let {news} = this.state
        let {navigate} = this.props.navigation
        
        console.log(this.props.navigation)
        return(
            <View style={styles.NewsFeed}>

                <StatusBar
                    backgroundColor="rgba(0,0,0,0.5)"
                    translucent
                />

                <Image source={cover} style={styles.cover} blurRadius={10}/>
                
                <ScrollView style={styles.News}>

                        {
                            news.length==0?(
                            <View>
                                <ActivityIndicator color={Default.secondaryColor}/>
                            </View>):news.map(function(nws){
                                return(
                                    <View style={styles.container} key={nws.id}>
                                        <View style={styles.FeedHeader} >
                                            <View style={styles.FeedPoster}>
                                                <Text style={styles.header}>{nws.header}</Text>
                                                <Text style={styles.date}>{"Feb 6 2018"}</Text>
                                            </View>
                                            <Text>By {nws.role}</Text>
                                        </View>
                                        <TouchableHighlight 
                                        onPress={
                                            ()=>alert('asd')
                                        }>
                                            <View style={styles.FeedImageContainer}>
                                                <Image 
                                                    source={{uri:ip+':8000/storage/news_announcements/'+ nws.photo}} 
                                                    style={styles.img}
                                                    />
                                                <View style={styles.FeedDescription}>
                                                    <Text style={styles.description}>{nws.description}</Text>
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                        <View style={styles.btnView}>
                                            <Button 
                                                title="Read" 
                                                color={Default.secondaryColor}
                                                onPress={()=>console.log(navigate('News',{
                                                    id:nws.id,
                                                    title:nws.header
                                                }))}
                                            />
                                        </View>
                                    </View>
                                ) //end of return
                            }) //end of map
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
    },
    container:{
        margin:5,
        padding:10,
        borderRadius:5,
        backgroundColor:'white'
    },
    FeedPoster:{
        flexDirection:'row',
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        margin:5
    },
    FeedDescription:{
        backgroundColor:'rgba(0,0,0,0.8)'
    },
    description:{
        color:'white',
        textAlign:'justify',
        padding:10
    },
    img:{
        width:Dimensions.get('window').width*0.95,
        height:Dimensions.get('window').height*0.3,
        // zIndex:-1
    },
    btnView:{
        margin:5
    }
})