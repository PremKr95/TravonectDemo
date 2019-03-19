import React, { Component } from 'react'
import {
    View,Text,FlatList,Platform,TouchableNativeFeedback,TouchableHighlight,Dimensions,Image
} from
'react-native'
let {height, width} = Dimensions.get('window');
const cardHeight = height*.22
const dummyData = [
  {
      name : "Indigo"
  },
  {
      name : "Spice Jet"
  },
  {
      name : "Air India"
  },
  {
      name : "Jet Airways"
  },
  {
      name : "GO Air"
  },
  {
      name : "Vistara"
  },
]
export default class SelectFlightOperator extends Component {


    renderItem = (item) => {
        if(Platform.OS === 'android'){
           return(
               <TouchableNativeFeedback>
                   {this.commonView(item)}
               </TouchableNativeFeedback>
           )
        }else{
            return(
                <TouchableHighlight onPress ={()=> this.props.navigation.navigate('SelectFlight')}>
                    {this.commonView(item)}
                </TouchableHighlight>
            )
        }
        
     }
    
     commonView = (item) => {
       return(
           <View style={{marginTop:10,height:cardHeight,width:'90%',alignSelf:'center',flexDirection:'row',backgroundColor:'rgba(52,52,52,0.3)',borderRadius:10}}>
                <View style={{flex:0.4,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                            <Image style={{}} source={require('../images/Direction_circle.png')}/>
                </View>
                <View style={{flex:0.6,justifyContent:'center',alignContent:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:30,fontWeight:'bold'}}> {item.item.name} </Text>
                </View>
            
    
           </View>
    
           )
     }

  render() {
    return (
      <View style={{flex:1}}>

            <FlatList
                data = {dummyData}
                extraData = {this.state}
                style={{marginTop:10}}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={this.renderItem}
            />
      </View>
    )
  }
}
