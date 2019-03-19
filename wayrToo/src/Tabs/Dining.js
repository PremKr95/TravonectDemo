import React, { Component } from 'react'
import {View,Image,StatusBar,Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Dinning extends Component {
  render() {
    return (

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
