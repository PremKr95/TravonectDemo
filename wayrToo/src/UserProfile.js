import React, { Component } from 'react'
import {
    View,Dimensions,Text,FlatList,Image
} from
'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
let {height, width} = Dimensions.get('window');
const cardHeight = height*.15;
import {flightDetails} from './dummyResponse'
export default class UserProfile extends Component {

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: 0,
                    backgroundColor: "grey",
                }}
            />
        );
    }

    renderLinkedInDetails = (item) =>{

        return(
          <View style={{height:cardHeight,flexDirection:'row',flex:1,backgroundColor:'white',}}>
                           
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{width:'25%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                      <Image style = {{}} source={require('./images/FlightList.png')}/>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',width:'45%',height:'100%',flexDirection:'column'}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}> {item.item.time} </Text>
                            <Text style={{color:"grey"}}> {item.item.duration} {" "} {item.item.type} </Text>
                        </View>
                        <View style={{width:'30%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}> {item.item.price} </Text>
                        <Text style={{color:"grey",textDecorationLine:'line-through',textDecorationStyle:'solid'}}>{item.item.price}</Text>
                        </View>
                    </View>                            
          </View>
        )
      }


  render() {
    return (
      <View style={{flex:1}}>
       <View style={{borderBottomEndRadius:10,justifyContent:'center',height:cardHeight*1.3,width:'100%'}}>            
         <LinearGradient
            colors={['#a13388', '#10356c']}
            style={{justifyContent:'center',flex:1,borderBottomLeftRadius:10,borderBottomRightRadius:10}}
            start={{x:0,y: 0}}
            end={{x:1,y: 1}}>
                   
        </LinearGradient>

        <View style={{flex:1,backgroundColor:'red'}}>
        </View>
        </View>   
        <KeyboardAwareScrollView style={{padding:'3%'}}>
        <Text style={{fontSize:16}}> Interests </Text>
        <View style={{backgroundColor:'black',height:cardHeight*1.2,borderRadius:10}}>
        </View>
        {/* <View style={{}}> </View> */}
        <FlatList
          style={{marginTop:'2%',borderTopEndRadius:10,backgroundColor:'white'}}
          data={flightDetails.elements}
          renderItem ={this.renderLinkedInDetails}
        //   ItemSeparatorComponent = {this.FlatListItemSeparator}
        />

        <Text style={{marginTop:'3%',fontSize:16}}> Flight Details </Text>
         <View style={{marginBottom:'5%',marginTop:'3%',backgroundColor:'black',height:cardHeight*1.5,borderRadius:10}}>
        </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}
