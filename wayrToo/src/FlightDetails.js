import React, { Component } from 'react'
import {View,FlatList,Dimensions,Text,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {ticketResponse,profileResponse,flightDetails} from './dummyResponse'
let {height, width} = Dimensions.get('window');
const cardHeight = height*.15;
export default class FlightDetails extends Component {

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

    renderItem = (item) =>{

        return(
          <View style={{
            margin:cardHeight*0.1,borderRadius:10,height:cardHeight,flexDirection:'row',flex:1,backgroundColor:'white',alignSelf:'center'}}>
                            <View style={{marginLeft:10,width:2*width/10,height:cardHeight*1.2,flexDirection:'column'}}>
                              <Text style={{textAlignVertical:'center',fontSize:20,color:'black'}}> {item.item.date} </Text>
                              <Text style={{fontSize:16,bottom:cardHeight*.3,color:'green',fontWeight:'bold',position:'absolute'}}> {item.item.price} </Text>
                          </View>
                                                
          </View>
        )
      }

      renderItemProfile = (item) =>{

        return(
          <View style={{
            margin:cardHeight*0.1,borderRadius:10,height:cardHeight*1.5,flexDirection:'row',flex:1,backgroundColor:'white',alignSelf:'center'}}>
                            <View style={{width:2*width/6,height:cardHeight*1.2,flexDirection:'column',justifyContent:'center'}}>
                              {/* <Text style={{fontSize:16,color:'black'}}> {item.item.name} </Text>
                              <Text style={{bottom:cardHeight*.2,color:'green',fontWeight:'bold',position:'absolute'}}> {item.item.profile} </Text> */}
                        <Image style = {{marginTop: 10,height:cardHeight*0.8 , width : cardHeight*0.8,alignSelf:'center',justifyContent:'center',alignItems:'center'}} source={require('./images/profileImage.png')}/>
                        <Text style={{fontSize:16,color:'black',alignSelf:'center'}}> {item.item.name} </Text>
                        <Text style={{color:'green',fontWeight:'bold',alignSelf:'center'}}> {item.item.profile} </Text>
                          </View>
          </View>
        )
      }

      renderItemFlightDetails = (item) =>{

        return(
          <View style={{borderRadius:10,height:cardHeight,flexDirection:'row',flex:1,backgroundColor:'white',marginLeft:cardHeight*.1,marginRight:cardHeight*0.1}}>
                           
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
      <View style ={{flex:1}}>
    <LinearGradient
    colors={['#a13388', '#10356c']}
    style={{justifyContent:'center',height:cardHeight*1.3}}
    start={{x:0,y: 0}}
    end={{x:1,y: 1}}>
      <FlatList
             extraData={this.state}
             style={{}}
             horizontal={true}
             data={ticketResponse.elements}
                        renderItem={this.renderItem}
                        keyExtractor = {(item, index) => index.toString()}
                    />
    </LinearGradient>

    <FlatList
             extraData={this.state}
             style={{ width: '100%',
             position: 'absolute',
             top:cardHeight*1.3
    }}
             horizontal={true}
             data={profileResponse.elements}
                        renderItem={this.renderItemProfile}
                        keyExtractor = {(item, index) => index.toString()}
                    />

     <FlatList
             extraData={this.state}
             style={{ 
              width: '100%',
              // height:'48%',
              top:cardHeight*3,
              position: 'absolute',
              bottom: height*.10,
              marginBottom:10,
              // marginTop:20
            }}
            ItemSeparatorComponent={this.FlatListItemSeparator}
             data={flightDetails.elements}
                        renderItem={this.renderItemFlightDetails}
                        keyExtractor = {(item, index) => index.toString()}
      />

      <View style={{ 
          flexDirection:'row',
          width:'94%',
          height:height*.1,
          backgroundColor:'white',
          borderRadius:10,
          marginLeft:'3%',
          marginRight:'3%',
   // justifyContent:'space-between',
          position:'absolute',
          bottom:0}}>

            <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Image
                  source={require("./images/search.png")}
                />
                <Text> FILTER </Text>
            </View>

            
            <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Image
                  source={require("./images/price_tag.png")}
                />
                <Text> NON-STOP </Text>
            </View>
            
            <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Image
                  source={require("./images/wallet.png")}
                />
                <Text> TIME </Text>
            </View>

            <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Image
                  source={require("./images/suitcase.png")}
                />
                <Text> AIRLINES </Text>
            </View>

             <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Image
                  source={require("./images/profiles.png")}
                />
                <Text> SORT </Text>
            </View>
      </View>
    </View>)
  }
}
