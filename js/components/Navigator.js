import React,{Component} from 'react';

import {StackNavigator , DrawerNavigator} from 'react-navigation';

import NewsFeed from '../components/Global/NewsFeed';
import News from '../components/Global/News';
import Mapping from '../components/Global/Mapping';
import FloorMapping from './Global/FloorMapping';
import Augmented from './Global/Augmented';

const NewsFeeds = StackNavigator({
    Feed:{
        screen:NewsFeed,
        navigationOptions:{
            title:'News Feed'
        }
    },
    News:{
        screen:News,
    }
});

const Maps = StackNavigator({
    Map:{
        screen:Mapping,
        navigationOptions:{
        }
    },
    floors:{
        screen : FloorMapping
    }
});

const AugmentedReality = StackNavigator({
    AR:{
        screen:Augmented
    }
});

const SideNavigation = DrawerNavigator({
    NewsFeed:{screen:NewsFeeds},
    Mapping:{screen:Maps},
    AugmentedReality:{screen:Augmented}
},
{
    initialRouteName:'NewsFeed'
})
export default SideNavigation