import React,{Component} from 'react';

import {StatusBar,Dimensions} from 'react-native';

import {StackNavigator , DrawerNavigator} from 'react-navigation';

//Global Routes
import NewsFeed from '../components/Global/NewsFeed';
import News from '../components/Global/News';
import Feed from '../components/Global/Feed';
import Mapping from '../components/Global/Mapping';
import FloorMapping from './Global/FloorMapping';
import Augmented from './Global/Augmented';
import QRCodeScanner from './Global/QRCodeScanner';
import ChatBot from './Global/ChatBot';
import Bot from './Global/Bot';
import Info from './Professor/Info';
import EditInfo from './Professor/EditInfo';
import ProfessorLogIn from './Professor/LogIn';
import Subjects from './Professor/Subjects';
import StudentList from './Professor/StudentList';
import SvgExample from './Global/SvgExample';
import LogOut from './Global/LogOut';

//Student
import StudentLogIn from './Student/LogIn';
import Register from './Student/Register';
import Profile from './Student/Profile';

import SideNavigator from './SideNavigator';

import AnimatedSample from './Global/AnimatedSample';

const NewsFeeds = StackNavigator({
    Feed:{
        screen:NewsFeed,
        
    },
    Feeds:{
        screen:Feed
    },
    News:{
        screen:News,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#3E50B4',
                marginTop:StatusBar.currentHeight
                
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' }
        }
    }
});

const Maps = StackNavigator({
    Map:{
        screen:Mapping,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#3E50B4'
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' }
        }
    },
    floors:{
        screen : FloorMapping,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#3E50B4'
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' }
        }
    }
});

const AugmentedReality = StackNavigator({
    AR:{
        screen:Augmented,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#3E50B4'
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' }
        }
    }
});

const Registration = StackNavigator({
    Register:{
        screen:Register,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#3E50B4'
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' }
        }
    }
});
const CBot = StackNavigator({
    ChatBot:{
        screen:ChatBot,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#3E50B4'
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' },
            header:null
        }
    },
    Bot:{
        screen:Bot,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#3E50B4'
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' }
        }
    }
});

/**
 * Professor
 */

const Subjs = StackNavigator({
    Subject:{
        screen:Subjects,
        navigationOptions:{
            title:'Subjects',
            headerStyle:{
                backgroundColor:'#3E50B4'
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' }
        }
    },
    StudList:{
        screen:StudentList,
        navigationOptions:{
            title:'Student List'
        }
    }
});

const Information = StackNavigator({
    Info:{
        screen:Info,
        navigationOptions:{
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' },
            title:''
        }
    },
    EditInfo:{
        screen:EditInfo,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#3E50B4'
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' },
            title:'Edit My Information'
        }
    }
});

const StudentProfile = StackNavigator({
    Info:{
        screen:Info,
        navigationOptions:{
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' },
            title:''
        }
    },
    EditInfo:{
        screen:EditInfo,
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#3E50B4'
            },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' },
            title:'Edit My Information'
        }
    }
});

const SideNavigation = DrawerNavigator({
    NewsFeed:{screen:NewsFeeds},
    Mapping:{screen:Maps},
    AugmentedReality:{screen:QRCodeScanner},
    Professor:{screen:ProfessorLogIn},
    Student:{screen:StudentLogIn},
    Reg:{screen:Registration},
    ChatBot:{screen:CBot},
    News:{screen:News},
    Feed:{screen:Feed},
    Subjects:{screen:Subjs},
    Info:{screen:Information},
    SampleSvg:{screen:SvgExample},
    LogOut:{screen:LogOut},
    StudentProfile:{screen:Profile}
},
{
    initialRouteName:'NewsFeed',
    drawerWidth:Dimensions.get('window').width/1.2,
    // renderScene={  },
    contentOptions: {
          activeTintColor: 'white',
          activeBackgroundColor:'#3E50B4',
          inactiveBackgroundColor:'white',
          inactiveTintColor:'#3E50B4',
    },
    contentComponent: props => <SideNavigator {...props} />
})
export default SideNavigation;