import React,{Component} from 'react';

import {StatusBar} from 'react-native';

import {StackNavigator , DrawerNavigator} from 'react-navigation';

import NewsFeed from '../components/Global/NewsFeed';
import News from '../components/Global/News';
import Mapping from '../components/Global/Mapping';
import FloorMapping from './Global/FloorMapping';
import Augmented from './Global/Augmented';

import ProfessorLogIn from './Professor/LogIn';

import StudentLogIn from './Student/LogIn';
import Register from './Student/Register'
const NewsFeeds = StackNavigator({
    Feed:{
        screen:NewsFeed,
        
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
})

const SideNavigation = DrawerNavigator({
    NewsFeed:{screen:NewsFeeds},
    Mapping:{screen:Maps},
    AugmentedReality:{screen:Augmented},
    Professor:{screen:ProfessorLogIn},
    Student:{screen:StudentLogIn},
    Reg:{screen:Registration}
},
{
    initialRouteName:'NewsFeed'
})
export default SideNavigation