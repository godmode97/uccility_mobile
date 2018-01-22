import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    Button
} from 'react-native';

import Default from '../Default';
import StatusBarColor from '../StatusBarColor';

import Pic from '../../../img/marcos.jpg';
export default class Feed extends Component{
    render(){
        let navigate =this.props.navigation
        console.log(navigate+" navigate") 
        return(
            <View style={styles.container}>
                <View style={styles.FeedHeader}>
                    <View style={styles.FeedPoster}>
                        <Text style={styles.header}>{this.props.header}</Text>
                        <Text style={styles.date}>{this.props.date}</Text>
                    </View>
                    <Text>By {this.props.role}</Text>
                </View>
                <TouchableHighlight 
                onPress={
                    ()=>alert('asd')
                }>
                    <View style={styles.FeedImageContainer}>
                        <Image 
                            source={{uri:'http://192.168.1.5:8000/storage/news_announcements/'+this.props.img}} 
                            style={styles.img}
                            />
                        <View style={styles.FeedDescription}>
                            <Text style={styles.description}>{this.props.description}</Text>
                        </View>
                        
                    </View>
                </TouchableHighlight>
                <View style={styles.btnView}>
                            <Button 
                                title="Read" 
                                color={Default.secondaryColor}
                                onPress={()=>alert('Clicked')}
                            />
                        </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
});