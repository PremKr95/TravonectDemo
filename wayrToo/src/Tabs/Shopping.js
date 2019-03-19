import React, { Component } from 'react'
import {View,Image,StatusBar,Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Tours from './Tours'
import Tindr from './SocialTabs/Tindr'
import setting from './SocialTabs/setting'
import profile from './SocialTabs/profile'


import { StackNavigator, createMaterialTopTabNavigator,createTabNavigator } from 'react-navigation';

export default createMaterialTopTabNavigator(
  {
    profile : {
      screen: profile,
      navigationOptions: ({ navigation }) => ({
        header: null,
        headerMode: 'none',
        tabBarVisible: true,
        tabBarLabel: "Hate & Love",
      }),
    },
    Tindr : {
       screen: Tindr,
       navigationOptions: ({ navigation }) => ({
         header: null,
         headerMode: 'none',
         tabBarVisible: true,
         tabBarLabel: "Social" ,
       }),
     },
     setting : {
       screen: setting,
       navigationOptions: ({ navigation }) => ({
         header: null,
         headerMode: 'none',
         tabBarVisible: true,
         tabBarLabel: "Chats",
       }),
     },
    
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: false,
    initialRouteName:'Tindr',
    tabBarOptions: {
      inactiveTintColor: 'black',
      activeTintColor: 'grey',
      pressColor: 'pink',
      upperCaseLabel: false,
      animationEnabled: true,
      showIcon: false,
      labelStyle: {
        fontWeight: "bold",
        fontSize: 14,
        fontFamily:"Roboto"
      },
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
          backgroundColor: 'pink',
      },
    },
}
);

