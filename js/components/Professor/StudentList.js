import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Alert,
    TouchableOpacity,
    StatusBar,
    Button
} from 'react-native'

// const course = ["BSCS","BSIT","BSIS","BSEMC"]

import studList from '../../data/studentList.json';

class StudentList extends Component{
    static navigationOptions={
        headerStyle:{
            backgroundColor:'#3E50B4'
        },
        headerTintColor: 'white',
        headerTitleStyle: { color: 'white' }
    }
    render(){
        return(
            <View style={styles.container}>
            <StatusBar backgroundColor="#2F3E9E"/>
                <ScrollView>
                    <View>
                    {
                        studList.map(function(s){
                            console.log(s)
                            return(
                                <TouchableOpacity style={styles.schedSubj}  onPress={()=>Alert.alert(`Attendance`,`asd`)}>
                                    <View style={styles.schedSubjCode}><Text style={styles.schedSCcolor}>IMG</Text></View>
                                    <View style={styles.desc}>
                                        <Text style={styles.subjDesc}>{`${s.lname}, ${s.fname} ${s.mname}`}</Text>
                                        <View>
                                            <Text>{`${s.course} ${s.year} ${s.section}`}</Text>
                                        </View>
                                    </View>
                                    <Button title="Drop" color="#E5742D" disabled/>
                                </TouchableOpacity>
                            )
                        })
                    }
                                                
                                   
                                
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Button style={styles.schedFooter} title="Conduct Attendance" color='#3E50B4' onPress={()=>{console.log('Pressed')}}></Button>
                </View>
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
    footer:{
        padding:10,
        backgroundColor:'#ddd'
    },
    schedSubj:{
        flexDirection:'row',
        padding:5,
        marginBottom:10,
        borderWidth:0.4,
        borderColor:'#ddd',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white'
    },
    schedDays:{
        marginBottom:15,
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
    schedFooter:{
        fontSize:25,
        color:'#3E50B4',
        backgroundColor:'white'
    },
    schedDay1:{
        fontWeight:'bold',
        color:'#3E50B4'
    },
    desc:{
        alignItems:'center'
    },
    subjDesc:{
        fontWeight:'bold'
    }
})

export default StudentList