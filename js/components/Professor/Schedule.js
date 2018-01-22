import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Alert,
    TouchableOpacity,
    StatusBar
} from 'react-native'

const days = ["MON","TUE","WED","THURS","FRI","SAT","SUN"]

import schedData from '../../data/schedule.json'

class Schedule extends Component{
    render(){
        const {navigate}=this.props.navigation
        return(
            <View style={styles.container}>
            <StatusBar backgroundColor="#2F3E9E"/>
                <View style={styles.header}>
                    <Text style={styles.schedHeader}>Schedule</Text>
                </View>
                <ScrollView>
                    <View>
                            {
                                days.map(function(day){
                                console.log(day)
                                return(
                                    <View style={styles.schedDays}>
                                        <Text style={styles.schedDay}>{day}</Text>
                                            {
                                                schedData.filter(d=>d.day==day).map(function(d){
                                                    console.log(d)
                                                    return(
                                                        <TouchableOpacity style={styles.schedSubj}  onPress={()=>navigate('Subjects')}>
                                                            <View style={styles.schedSubjCode}><Text style={styles.schedSCcolor}>CS 111</Text></View>
                                                            <Text>Description</Text>
                                                            <Text><Text style={styles.schedDay1}>{d.day}</Text> {d.start_time} - {d.end_time}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                                
                                    </View>
                                )
                            })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#F9F9F9'
    },
    header:{
        padding:10,
        backgroundColor:'#3E50B4'
    },
    schedSubj:{
        flexDirection:'row',
        padding:5,
        margin:10,
        borderRadius:8,
        borderWidth:0.4,
        borderColor:'#666',
        justifyContent:'space-around',
        alignItems:'center'
    },
    schedDays:{
        margin:15,
        borderRadius:5,
        borderWidth:0.4,
        borderColor:'#666',
        margin:10,
        backgroundColor:'white'
    },
    schedDay:{
        fontSize:30,
        margin:10,
        color:'#3E50B4'
    },
    schedSubjCode:{
        height:60,
        width:60,
        flexDirection:'column',
        backgroundColor:'#3E50B4',
        justifyContent:'center',
        borderRadius:50,
        alignItems:'center'
    },
    schedSCcolor:{
        color:'white'
    },
    schedHeader:{
        fontSize:25,
        color:'white'
    },
    schedDay1:{
        fontWeight:'bold',
        color:'#3E50B4'
    }
})

export default Schedule