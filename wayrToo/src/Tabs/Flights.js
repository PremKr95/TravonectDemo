import React, { Component } from 'react'
import{
    View,Image,FlatList,Text,  Dimensions,StatusBar

}from
'react-native'
import LinearGradient from 'react-native-linear-gradient'

let {height, width} = Dimensions.get('window');
const cardHeight = height*.15;

import {ticketResponse} from '../dummyResponse.js'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import MapViewAnimated ,{PROVIDER_GOOGLE,MapView} from 'react-native-maps'
export default class Tickets extends Component {

  constructor(props){
      super(props)
      this.state = {
        coordinate: null
      }
  }
  FlatListItemSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: "red",
            }}
        />
    );
}



  renderItem = (item) =>{

    return(
      <View style={{height:cardHeight*1.2,flexDirection:'row',flex:1,backgroundColor:'white',padding:cardHeight*.1}}>
                        <View style={{height:cardHeight*1.2,width:width/3}}>
                          <Image style = {{borderRadius:20,height:cardHeight,width:width/3,alignSelf:'center',justifyContent:'center',alignItems:'center'}} source={require('../images/listicon.png')}/>
                        </View>
                        <View style={{marginLeft:10,width:2*width/3,height:cardHeight*1.2,flexDirection:'column'}}>
                          <Text style={{fontSize:16,color:'brown'}}> {item.item.placeName} </Text>
                          <Text style={{fontSize:14, fontWeight:'bold',color:'black'}}> {item.item.name} </Text>
                          <Text> {item.item.duration} </Text>
                          <Text style={{bottom:cardHeight*.2,color:'green',fontWeight:'bold',position:'absolute'}}> {item.item.price} </Text>
                        </View>
      </View>
    )
  }
  
  render() {
    return (
          // <KeyboardAwareScrollView width="100%" height="100%" keyboardShouldPersistTaps= 'handled'>          
          //     <View style={{height:'100%',width:'100%'}}>
          //        <View style={{}}>
          //           <Image style={{height:height/3,alignSelf:'center'}} source={require('../images/tickets.png')}/>
          //        </View>
          //        <View style={{position:'relative'}}>
          //           <FlatList
          //               extraData={this.state}
          //               style={{}}
          //               data={ticketResponse.elements}
          //               renderItem={this.renderItem}
          //               keyExtractor = {(item, index) => index.toString()}
          //           />
          //            </View>   
                        
          //   <MapViewAnimated
          //     ref={ref => {
          //       this.mapRef = ref;
          //     }}
          //     fitToCoordinates={this.state.coordinate}
          //     provider={PROVIDER_GOOGLE}
          //     style={{height:'100%',width:'100%',bottom:0}}
          //     showsUserLocation={true}
          //     fitToElements={true}
          //     onLayout={() => {}}
          //   >              
          //   </MapViewAnimated>
          

          //     </View>
             
          // </KeyboardAwareScrollView>
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
