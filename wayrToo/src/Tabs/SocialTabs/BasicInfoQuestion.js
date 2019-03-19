import React, { Component } from 'react'
import {
    View , FlatList , Dimensions,Platform,TouchableNativeFeedback, TouchableHighlight,Image,Text
} from 
'react-native'
let {height,width} = Dimensions.get('window')
import {basicInfo} from '../../dummyResponse'
export default class BasicInfoQuestion extends Component {

    renderItem=(item)=>{

        if(Platform.OS === 'android'){
          return(
            <TouchableNativeFeedback
               >
                {this.commonView(item)}
    
            </TouchableNativeFeedback>
          );
    
        }
        else{
          return(
            <TouchableHighlight
                activeOpacity = { .5 }  delayPressIn={0}
               >
                {this.commonView(item)}
    
            </TouchableHighlight>
          );
        }
    
     
      }

  commonView = (item) => {
    return(
      <View style={{flex:1,backgroundColor:'red'}}>
            <View style={{height:20,width:20,backgroundColor:'black',alignSelf:'center',alignItems:"center"}}>
           </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{flex:1 , backgroundColor :'white'}}>
            <FlatList 
                data = {basicInfo.elements}
                extraData ={this.state}
                renderItem = {this.renderItem}
                keyExtractor = {(item,index) => index.toString()}
            />
      </View>
    )
  }
}
