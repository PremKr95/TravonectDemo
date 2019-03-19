import * as React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native'
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import Flights from './Tabs/Flights'
import Tours from './Tabs/Tours'
import Shopping from './Tabs/Shopping'
import Entertainment from './Tabs/Entertainment'
import Dining from './Tabs/Dining'
import AddFlight from './AddFlight/AddFlight'
// import Ionicons from 'react-native-vector-icons/Ionicons';
  export default createBottomTabNavigator({

    
    Tours: { 
      screen : Tours,
      navigationOptions: {
        tabBarLabel: 'FLIGHTS',
        tabBarIcon: <Image
            source={require('./images/airplane_ticket.png')}
            resizeMode = {Image.resizeMode.contain}
            style={{ height: '70%', width: '70%'}}
           />
      },

    },

    AddFlight:{
      screen : AddFlight,
      navigationOptions: {
        tabBarLabel: 'SOCIAL',
        tabBarIcon: <Image
            source={require('./images/airplane.png')}
            resizeMode = {Image.resizeMode.contain}
            style={{ height: '70%', width: '70%'}}
           />
      },
    
    },
    
    Entertainment: {
      screen : Entertainment,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: <Image
            source={require('./images/wallet.png')}
            resizeMode = {Image.resizeMode.contain}
            style={{ height: '70%', width: '70%'}}
           />
      },
    
    },
    // Dining: {
    //   screen : Entertainment,
    //   navigationOptions: {
    //     tabBarLabel: 'PROFILE',
    //     tabBarIcon: <Image
    //         source={require('./images/profile.png')}
    //         resizeMode = {Image.resizeMode.contain}
    //         style={{ height: '70%', width: '70%'}}
    //        />
    //   },
    
    // },
  },
  {
    initialRouteName: 'AddFlight',
    tabBarOptions: {
      inactiveTintColor: 'grey',
      activeTintColor:"black",
      pressColor: 'black',
      upperCaseLabel: true,
      animationEnabled: true,
      showIcon: true,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
          backgroundColor: 'white',
      },
    },
}
);