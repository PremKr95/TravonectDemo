import React, { Component } from 'react'
import {
  View,Text,FlatList,Platform,TouchableNativeFeedback,TouchableHighlight,Dimensions,Image,TouchableOpacity
} from
'react-native'
let {height, width} = Dimensions.get('window');
const cardHeight = height*.22
const dummyData = [
  {
      name : "Prem"
  },
  {
      name : "Prem"
  },
  {
      name : "Prem"
  },
  {
      name : "Prem"
  },
  {
      name : "Prem"
  },
  {
      name : "Prem"
  },
  {
      name : "Prem"
  },
  {
      name : "Prem"
  },
]


export default class UpComingFlight extends Component {

  constructor(props){
      super(props)
      this.state = {
          noOfTrip : 0
      }
  } 
  openAddFlightScreen = () =>{
      this.props.navigation.navigate('')
  }

  renderItem = (item) => {
    if(Platform.OS === 'android'){
       return(
           <TouchableNativeFeedback onPress={()=> this.handleItemClick()}>
               {this.commonView(item)}
           </TouchableNativeFeedback>
       )
    }else{
        return(
            <TouchableHighlight>
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
                        <Text style={{marginTop:6,color:'black',fontSize:12,alignSelf:'center'}}>IndiGo</Text>
                        <Text style={{marginTop:6,color:'black',fontSize:12,alignSelf:'center'}}>6E | 443</Text>
            </View>
            <View style={{flex:0.2,justifyContent:'center',alignContent:'center'}}>
                    <Text style={{alignSelf:'center'}}> Mumbai </Text>
                    <Text style={{alignSelf:'center'}}> 00:10 </Text>
            </View>
            <View style={{flex:0.2,justifyContent:'center'}}>
                    <Image style={{alignSelf:'center'}}
                        source={require('../images/airplane_horizontal.png')}
                    />
            </View>
            <View style={{flex:0.22,justifyContent:'center',alignContent:'center'}}>
                    <Text style={{alignSelf:'center'}}> Delhi </Text>
                    <Text style={{alignSelf:'center'}}> 02:10 </Text>
            </View>

       </View>

       )
 }

 openChatWindow = () =>{
   this.props.navigation.navigate('SelectFlight')
 }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
              <Text> What is your upcoming Trip </Text>
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
