import {StackNavigator} from 'react-navigation'
import SplashScreen from './SplashScreen.js'
import OTPLogin from './OTPLogin'
import Tabs from './Tabs';
import FlightDetails from "./FlightDetails";
import TravelAndClass from './TravelAndClass'
import UserProfile from './UserProfile'
import Quiz from './Tabs/Quiz'
import BasicInfo from './Tabs/SocialTabs/BasicInfoQuestion'
import Filter from './Filter'
import Shopping from './Tabs/Shopping'
// import FBLoginButton from './Tabs/SocialTabs/FacebookLogin'
import React from 'react'
import {Picker,View,TouchableOpacity,Image, Text, Dimensions,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import SelectFlightOperator from './AddFlight/SelectFlightOperator'
import SelectFlight from './AddFlight/SelectFlight'
var selectedItem = 'Dubai'
let {height, width} = Dimensions.get('window');
const RootStack = StackNavigator(
    {
        SplashScreen: {
            screen: SplashScreen
        },
        Quiz: {
            screen: Quiz
        },
        Shopping: {
            screen: Shopping
        },
        
        OTPLogin: {
            screen: OTPLogin,
            navigationOptions :({navigation}) =>  ({
                headerLeft: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack(null)}>
                <View style={{ height: height * .05, width: height * .065 }}>
                  <Image style={{ height: height * .03, width: height * .03, marginLeft: height * .02, top: height * .01 }} source={require('./images/back_arrow.png')} />
                </View>
                </TouchableOpacity>,
                headerBackground: (
                    <LinearGradient
                      colors={['#a13388', '#10356c']}
                      style={{ flex: 1 }}
                      start={{x:0,y: 0}}
                      end={{x:1,y: 0}}
                    />
                  ),
              })
        },
        Tabs: {
            screen: Tabs,
            navigationOptions :({navigation}) =>  ({
                headerLeft: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack(null)}>
                <View style={{ height: height * .05, width: height * .065 }}>
                  <Image style={{ height: height * .03, width: height * .03, marginLeft: height * .02, top: height * .01 }} source={require('./images/back_arrow.png')} />
                </View>
                </TouchableOpacity>,
              
              })
        },
        FlightDetails: {
            screen: FlightDetails,
            navigationOptions :({navigation}) =>  ({
                headerLeft: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack(null)}>
                <View style={{ height: height * .05, width: height * .065 }}>
                  <Image style={{ height: height * .03, width: height * .03, marginLeft: height * .02, top: height * .01 }} source={require('./images/back_arrow.png')} />
                </View>
                </TouchableOpacity>,
                headerBackground: (
                    <LinearGradient
                      colors={['#a13388', '#10356c']}
                      style={{ flex: 1 }}
                      start={{x:0,y: 0}}
                      end={{x:1,y: 0}}
                    />
                  ),
              })
        },
        TravelAndClass: {
            screen: TravelAndClass,
            
        },
        UserProfile: {
            screen: UserProfile,
            navigationOptions :({navigation}) =>  ({
                headerLeft: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack(null)}>
                <View style={{ height: height * .05, width: height * .065 }}>
                  <Image style={{ height: height * .03, width: height * .03, marginLeft: height * .02, top: height * .01 }} source={require('./images/back_arrow.png')} />
                </View>
                </TouchableOpacity>,
                headerBackground: (
                    <LinearGradient
                      colors={['#a13388', '#10356c']}
                      style={{ flex: 1 }}
                      start={{x:0,y: 0}}
                      end={{x:1,y: 0}}
                    />
                  ),
              })
        },

        Filter: {
            screen: Filter,
            navigationOptions :({navigation}) =>  ({
                headerLeft: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack(null)}>
                <View style={{ height: height * .05, width: height * .065 }}>
                  <Image style={{ height: height * .03, width: height * .03, marginLeft: height * .02, top: height * .01 }} source={require('./images/back_arrow.png')} />
                </View>
                </TouchableOpacity>,
                headerBackground: (
                    <LinearGradient
                      colors={['#a13388', '#10356c']}
                      style={{ flex: 1 }}
                      start={{x:0,y: 0}}
                      end={{x:1,y: 0}}
                    />
                  ),
              })
        },

        SelectFlightOperator: {
            screen: SelectFlightOperator,
            navigationOptions :({navigation}) =>  ({
                headerLeft: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack(null)}>
                <View style={{ height: height * .05, width: height * .065 }}>
                  <Image style={{ height: height * .03, width: height * .03, marginLeft: height * .02, top: height * .01 }} source={require('./images/back_arrow.png')} />
                </View>
                </TouchableOpacity>,
                headerBackground: (
                    <LinearGradient
                      colors={['#a13388', '#10356c']}
                      style={{ flex: 1 }}
                      start={{x:0,y: 0}}
                      end={{x:1,y: 0}}
                    />
                  ),
              })
        },

        SelectFlight: {
            screen: SelectFlight,
            navigationOptions :({navigation}) =>  ({
                headerLeft: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack(null)}>
                <View style={{ height: height * .05, width: height * .065 }}>
                  <Image style={{ height: height * .03, width: height * .03, marginLeft: height * .02, top: height * .01 }} source={require('./images/back_arrow.png')} />
                </View>
                </TouchableOpacity>,
                headerBackground: (
                    <LinearGradient
                      colors={['#a13388', '#10356c']}
                      style={{ flex: 1 }}
                      start={{x:0,y: 0}}
                      end={{x:1,y: 0}}
                    />
                  ),
              })
        },
        BasicInfo: {
            screen: BasicInfo
        },
        // FBLoginButton: {
        //     screen: FBLoginButton
        // },
    },
    {
        initialRouteName:'SplashScreen'
    }
)

export default RootStack