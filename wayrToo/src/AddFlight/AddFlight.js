
import { StackNavigator, createMaterialTopTabNavigator,createTabNavigator } from 'react-navigation';
import UpComingFlight from './UpComingFlight'
import PastFlight from './PastFlight'

export default createMaterialTopTabNavigator(
    {
      UpComingFlight : {
        screen: UpComingFlight,
        navigationOptions: ({ navigation }) => ({
          header: null,
          headerMode: 'none',
          tabBarVisible: true,
          tabBarLabel: "Upcoming Flight",
        }),
      },
      PastFlight : {
         screen: PastFlight,
         navigationOptions: ({ navigation }) => ({
           header: null,
           headerMode: 'none',
           tabBarVisible: true,
           tabBarLabel: "Past Flight" ,
         }),
       },
      
    },
    {
      tabBarPosition: 'top',
      swipeEnabled: true,
      initialRouteName: 'UpComingFlight',
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
