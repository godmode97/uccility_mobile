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
    AsyncStorage,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';

// import { Pie } from 'react-native-pathjs-charts';

import Pies  from '../Graphics/Pies';
import ip from '../ip';
export default class Info extends Component{

    

    static navigationOptions = {
        title:'',
        headerStyle:{
            backgroundColor:'red',
            height:0,
            // marginTop:StatusBar.currentHeight,
            // width:Dimensions.get('screen').width*0.8
            // opacity:0.8
            margin:0,
        },
        headerTintColor: 'white',
        headerTitleStyle: { 
            color: 'white' 
        },
    }
    
    state = {
        i:0,
        ip:"192.168.1.8",
        id: 0,
        data:[{
            "name": "BSCS",
            "pops": 1423
        }, {
            "name": "BSIS",
            "pops": 2355
        }, {
            "name": "BSEMC",
            "pops": 1732,
            "color": {'r':223,'g':154,'b':20}
        }, {
            "name": "BSIT",
            "pops": 892
        }],
        bscs:[{
            "name": "Female",
            "pops": 90
        }, {
            "name": "Male",
            "pops": 82
        }],
        bsemc:[{
            "name": "Female",
            "pops": 68
        }, {
            "name": "Male",
            "pops": 79
        }],
        bsit:[{
            "name": "Female",
            "pops": 112
        }, {
            "name": "Male",
            "pops": 93
        }],
        bsis:[{
            "name": "Female",
            "pops": 88
        }, {
            "name": "Male",
            "pops": 61
        }],
        options:{
            margin: {
                top: 20,
                left: 20,
                right: 20,
                bottom: 20
            },
            width: 350,
            height: 350,
            color: '#2980B9',
            r: Dimensions.get('window').width*0.08,
            R: Dimensions.get('window').width*0.2,
            legendPosition: 'topLeft',
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            label: {
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                color: '#ECF0F1'
            }
        },
        arr:[]
    }
    _getCredentials = async()=>{
        await fetch(`http://${ip}:8000/api/professor/${this.state.id}`)
        .then(data=>data.json())
        .then(result=>{
            // const [detail] = result;
            console.log(result);
            this.setState({arr:result});
        })
        .catch(error=>console.log(error))
    }

    _getID = async()=>{
        const id =  await AsyncStorage.getItem('user_id');
        const i = await AsyncStorage.getItem('id');
        
        if(id!==null){
            this.setState({
                id,
                i
            });
            
            this._getCredentials();
        }

        console.log(id);
    }
    
    componentDidMount(){
        this._getID();
        this._getCredentials(this.state.id);
        console.log(this.state.arr);
    }

    render(){
        
        return(
            <ScrollView>
            
                {
                    (this.state.arr.length>0)?(
                        
                            <View>
                                <View style={styles.container}>
                                <StatusBar translucent backgroundColor={'rgba(0,0,0,0.5)'} />
                                    <Image 
                                        source={{uri:`http://${ip}:8000/storage/avatar/cover.png`}}
                                        style={styles.cover}
                                        blurRadius={5}
                                    />
                                    <TouchableHighlight 
                                        style={styles.profileContainer}
                                        onPress={()=>alert('You touched me! XD')}
                                    >
                                        <Image
                                            source={{uri:`http://${ip}:8000/storage/avatar/${this.state.arr[0].photo}`}}
                                            style={styles.profile}
                                        />
                                    </TouchableHighlight>
                                   
                                    <View>
                                    <View style={styles.primaryInfo}>
                                        <Text style={styles.name}>{this.state.arr[0].first_name} {this.state.arr[0].middle_name} {this.state.arr[0].last_name} {this.state.arr[0].extension_name}</Text>
                                        <Text style={styles.subDetails}><Text style={styles.identifier}>Position:</Text> Professor</Text>
                                        <Text style={styles.subDetails}><Text style={styles.identifier}>Employment Status:</Text> {this.state.arr[0].employment_status}</Text>
                                        <Text style={styles.subDetails}><Text style={styles.identifier}>Campus:</Text> {this.state.arr[0].campus}</Text>
                                    </View>
                                    <View style={styles.information}>
                                        <Text style={styles.info}>Information</Text>
                                        <TouchableHighlight onPress={()=>console.log('Pressed')}>
                                            <View style={[{backgroundColor:'rgb(245,245,245)'},{borderColor:'white'}]}>
                                                <Text style={{padding:5}}><Text style={{fontWeight:'bold'}}>Date of Birth:</Text> {this.state.arr[0].date_of_birth}</Text>
                                            </View>                                            
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={()=>console.log('Pressed')}>
                                            <View style={[{backgroundColor:'rgb(245,245,245)'},{borderColor:'white'}]}>
                                                <Text style={{padding:5}}><Text style={{fontWeight:'bold'}}>Place of Birth:</Text> {this.state.arr[0].place_of_birth}</Text>
                                            </View>                                            
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={()=>console.log('Pressed')}>
                                            <View style={[{backgroundColor:'rgb(245,245,245)'},{borderColor:'white'}]}>
                                                <Text style={{padding:5}}><Text style={{fontWeight:'bold'}}>Gender:</Text> {this.state.arr[0].gender}</Text>
                                            </View>                                            
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={()=>console.log('Pressed')}>
                                            <View style={[{backgroundColor:'rgb(245,245,245)'},{borderColor:'white'}]}>
                                                <Text style={{padding:5}}><Text style={{fontWeight:'bold'}}>Civil Status:</Text> {this.state.arr[0].civil_status}</Text>
                                            </View>                                            
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={()=>console.log('Pressed')}>
                                            <View style={[{backgroundColor:'rgb(245,245,245)'},{borderColor:'white'}]}>
                                                <Text style={{padding:5}}><Text style={{fontWeight:'bold'}}>Contact Number:</Text> {this.state.arr[0].mobile_no}</Text>
                                            </View>                                            
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={()=>console.log('Pressed')} style={[{borderBottomRightRadius:5},{borderBottomLeftRadius:5}]}>
                                            <View style={[{backgroundColor:'rgb(245,245,245)'},{borderColor:'white'},{borderBottomLeftRadius:5},{borderBottomRightRadius:5}]}>
                                                <Text style={{padding:5}}><Text style={{fontWeight:'bold'}}>Permanent Address:</Text> {this.state.arr[0].permanent_address}</Text>
                                            </View>                                            
                                        </TouchableHighlight>
                                    </View>

                                    <View style={styles.report}>
                                        <Text style={styles.reportInfo}>My Courses:</Text>
                                        <Pies
                                            data={this.state.data}
                                            options={this.state.options}
                                            innerRadius={50}
                                            outerRadius={150}
                                            accessor="pops"
                                        />
                                    </View>
                                    <View style={styles.report}>
                                        <Text style={styles.reportInfo}>BSCS:</Text>
                                            <Pies
                                                data={this.state.bscs}
                                                options={this.state.options}
                                                innerRadius={50}
                                                outerRadius={150}
                                                accessor="pops"
                                            />
                                        </View>
                                        <View style={styles.report}>
                                            <Text style={styles.reportInfo}>BSEMC:</Text>
                                            <Pies
                                                data={this.state.bsemc}
                                                options={this.state.options}
                                                innerRadius={50}
                                                outerRadius={150}
                                                accessor="pops"
                                            />
                                        </View>
                                        <View style={styles.report}>
                                            <Text style={styles.reportInfo}>BSIT:</Text>
                                            <Pies
                                                data={this.state.bsit}
                                                options={this.state.options}
                                                innerRadius={50}
                                                outerRadius={150}
                                                accessor="pops"
                                            />
                                        </View>
                                        <View style={styles.report}>
                                            <Text style={styles.reportInfo}>BSIS:</Text>
                                            <Pies
                                                data={this.state.bsis}
                                                options={this.state.options}
                                                innerRadius={50}
                                                outerRadius={150}
                                                accessor="pops"
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                    ):(<ActivityIndicator />)
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    
    cover:{
        height:Dimensions.get('window').height*0.35,
        // marginTop:-100,

    },
    profile:{
        height:Dimensions.get('window').height*0.15,
        width:Dimensions.get('window').height*0.15,
        borderRadius:Dimensions.get('window').height*0.05,
        borderWidth:2,
        
        borderColor:'rgba(200,200,200,0.8)',
        shadowRadius:20,
        shadowColor:'rgba(0,0,0,0.8)'
    },
    profileContainer:{
        borderRadius:Dimensions.get('window').height*0.15,
        marginTop:-50,
        alignSelf:'center',
    },
    container:{
        // alignItems:'center'
    },
    primaryInfo:{
        alignSelf:'center',
        
    },
    name:{
        margin:5,
        fontWeight:'bold',
        color:'rgb(150,150,150)',
        fontSize:20
    },
    subDetails:{
        alignSelf:'center',
        color:'rgb(180,180,180)'
    },
    identifier:{
        fontWeight:"bold",
        color:'rgba(150,150,150,0.5)'
    },
    information:{
        backgroundColor:'white',
        margin:8,
        
        borderRadius:5
    },
    info:{
        padding:8,
    },
    report:{
        backgroundColor:'white',
        margin:8,
        borderRadius:5,
        padding:8
    },
    reportInfo:{
        fontWeight:'bold',
        fontSize:15
    }
})