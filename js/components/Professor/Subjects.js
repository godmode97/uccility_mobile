import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Alert,
    TouchableOpacity,
    StatusBar,
    Button,
    ActivityIndicator,
    AsyncStorage
} from 'react-native'

const course = ["BSCS","BSIT","BSIS","BSEMC"]
import ip from '../ip';
// import subj from '../../data/subjects.json';



export default class Subjects extends Component{

    // constructor(){
    //     super();
    //     this.
    // }

    state = {
        subj:[],
        id:0
    }
    

    

    _fillData= async() => {
        
        const id = await AsyncStorage.getItem('user_id');
        if(id!==null){
            this.setState({id})
            fetch(`http://${ip}:8000/api/schedules/professor/${id}`)
            .then(data=>data.json())
            .then(result=>{
                console.log(result);
                this.setState({subj:result})
            })
            .catch(error=>console.log(error))
            }
    }

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
        this._fillData();
    }

    _replaceToDot(str){
        const st = (str+"");
        var finale = "";

        if(st.length>20) finale = st.split(st[20])[0];
        else st.split(st[st.length/2])[0]
        
        return finale.replace(finale[finale.length-1],"...");

    }
    render(){
        let {navigate}=this.props.navigation

        
       
        let {subj} = this.state
        let {_replaceToDot} = this
        return(
            <View style={styles.container}>
            <StatusBar backgroundColor="#2F3E9E"/>
                <ScrollView>
                    <View>
                            {
                                (subj.length>0)?course.map(function(crse){
                                return(
                                    <View style={styles.schedDays}>
                                        <Text style={styles.schedDay}>{crse}</Text>
                                            {
                                                (subj.filter(s=>s.degree==crse).map(function(s){
                                                    return(
                                                        <TouchableOpacity style={styles.schedSubj}  onPress={()=>Alert.alert(`${s.year} Year`,`Subject is ${s.subject_description}`)}>
                                                            <View style={styles.schedSubjCode}>
                                                            
                                                            <Text style={styles.schedSCcolor}>{s.subject_code}</Text> 
                                                            
                                                            </View>
                                                            <View style={styles.desc}>
                                                                <Text style={styles.subjDesc}>{_replaceToDot(s.subject_description)}</Text>
                                                                <View>
                                                                    <Text>{s.start_time} - {s.end_time}</Text>
                                                                </View>
                                                            </View>
                                                            <Button title="Student List" color="#E5742D" onPress={()=>navigate('StudList')}/>
                                                        </TouchableOpacity>
                                                    )
                                                }))
                                            }
                                                
                                    </View>
                                )
                            }):<ActivityIndicator/>}
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