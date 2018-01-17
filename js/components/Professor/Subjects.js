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

const course = ["BSCS","BSIT","BSIS","BSEMC"]

import subj from '../../../data/subjects.json'
// import sbj from '../../../data/subj'
class Subjects extends Component{
    static navigationOptions={
        headerStyle:{
            backgroundColor:'#3E50B4',
            color:'white',
            headerTintColor:'white'
        },
        titleStyle:{
            color:'white',
            headerTintColor:'white'
        }
    }
    componentDidMount()
    {
        
    }
    render(){
        let {navigate}=this.props.navigation
        return(
            <View style={styles.container}>
            <StatusBar backgroundColor="#2F3E9E"/>
                <ScrollView>
                    <View>
                            {
                                course.map(function(crse){
                                return(
                                    <View style={styles.schedDays}>
                                        <Text style={styles.schedDay}>{crse}</Text>
                                            {
                                                subj.filter(s=>s.course==crse).map(function(s){
                                                    return(
                                                        <TouchableOpacity style={styles.schedSubj}  onPress={()=>Alert.alert(`${s.year} Year`,`Subject is ${s.description}`)}>
                                                            <View style={styles.schedSubjCode}><Text style={styles.schedSCcolor}>{s.subj_code}</Text></View>
                                                            <View style={styles.desc}>
                                                                <Text style={styles.subjDesc}>{s.description}</Text>
                                                                <View>
                                                                    <Text>{s.professor}</Text>
                                                                </View>
                                                            </View>
                                                            <Button title="Student List" color="#E5742D" onPress={()=>navigate('StudList')}/>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                                
                                    </View>
                                )
                            })}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Button style={styles.schedFooter} title="Conduct Attendance" color='#3E50B4'></Button>
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

export default Subjects