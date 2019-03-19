import React, { Component } from 'react'
import {
    View,
    Image,
    Text,
    StatusBar,
    ActivityIndicator
} from 
'react-native'
import LinearGradient from 'react-native-linear-gradient'
export default class SplashScreen extends Component {

  static navigationOptions = {
        header: null
  }

  constructor(props){
      super(props)
      this.state = {
          isLoading: true
      }
  }
  componentDidMount(){
    setTimeout(() => {
        this.setState({isLoading : false})
        this.props.navigation.navigate('OTPLogin')
    }, 10);
  }

  render() {
    return (
    //     <View style={{flex:1,justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}}>
    //       <Image 
    //       style={{flex:1,justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}}
    //       source={require('./images/wayrToo.png')}/> 
    //   </View>
    <View style={{flex:1}}>
        <StatusBar
            barStyle="light-content"
            backgroundColor='#a13388'
          />   
        <LinearGradient
            colors={['#a13388', '#10356c']}
            style={{ flex: 1 ,justifyContent:'center'}}
            start={{x:0,y: 0}}
            end={{x:1,y: 1}}>
            <Text style={{fontSize:28,color:'black',alignSelf:'center',textAlignVertical:'center',justifyContent:'center'}}>
                FLEXI
            </Text>

             <Text style={{fontSize:18,color:'white',alignSelf:'center',textAlignVertical:'center',justifyContent:'center',top:'30%'}}>
                Discovering People
            </Text>
            </LinearGradient>
            </View>
    )
  }
}
