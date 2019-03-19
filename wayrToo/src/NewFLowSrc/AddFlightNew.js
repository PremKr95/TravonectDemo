import React, { Component } from 'react'
import 
{
    View,TouchableOpacity,Text 
} 

from 'react-native'
export default class AddFlightNew extends Component {
  render() {
    return (
       <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
             <TouchableOpacity style={{height: 56,
                                            width: "60%",
                                            backgroundColor:'#c21c4a',
                                            borderRadius:28,
                                            justifyContent:'center',
                                            alignSelf:'center',
                                            }}
                                        onPress = {()=>this.openChatWindow()}>
                                   <Text style={{ textAlign: 'center',
                                                  textAlignVertical: 'center',
                                                  color:'white',
                                                  fontSize:16}}> + Add Flight </Text> 
                        </TouchableOpacity>
      </View>
    )
  }
}
