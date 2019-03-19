import React, { Component } from 'react'
import {
    View,Image,TouchableOpacity,Text,Dimensions,StyleSheet,ToastAndroid,FlatList,Platform,TouchableNativeFeedback
} from
'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
let {height,width} = Dimensions.get('window')
import LinearGradient  from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {digitsResponseAdults,digitsResponseChildren,digitsResponseInfants} from './dummyResponse'
let dummyValueAdults = digitsResponseAdults.elements;
let dummyValueChildren = digitsResponseChildren.elements;
let dummyValueInfants = digitsResponseInfants.elements;

 export default class TravelAndClass extends Component {

  constructor(props){
    super(props)
    this.state = {
      buttonState:false,
      noOfAdults:1,
      noOfChildren : '',
      noOfInfants :'',
    }
  }

  componentWillUnmount(){
    global.totalTravellers = this.state.noOfAdults + this.state.noOfChildren + this.state.noOfInfants;
    for(i=0;i<9;i++){
      dummyValueAdults[i].isSelect = false
      dummyValueChildren[i].isSelect = false
      dummyValueInfants[i].isSelect = false
    }
  }
  static navigationOptions  = ({navigation}) =>  ({
    headerTitle : "Travellers & Class",
    headerTintColor :'white',
    headerTitleStyle:{fontWeight:'normal'},
    headerLeft: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack(null)}>
    <View style={{ height: height * .05, width: height * .065 }}>
      <Image style={{ height: height * .03, width: height * .03, marginLeft: height * .02, top: height * .01 }} source={require('./images/back_arrow.png')} />
    </View>
    </TouchableOpacity>,
    headerRight: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack()}>
    <View style={{alignItems:'center',height: height * .05, width: height * .1,top:height*.01,right:10 }}>
        <Text style={{color:'white',fontSize:18}}>DONE</Text>
    </View>
    </TouchableOpacity>,
    headerBackground: (
        <LinearGradient
          colors={['#a13388', '#10356c']}
          style={{ flex: 1 }}
          start={{x:0,y: 0}}
          end={{x:1,y: 0}}
        />
      ),
  })


  renderOneToNineAdults=(item)=>{
    if(Platform.OS === 'android'){
      return(
        <TouchableNativeFeedback onPress={this.GetItemAdults.bind(this,item)}
           >
            {this.commonViewAdults(item)}
        </TouchableNativeFeedback>
      );
    }
    else{
      return(
        <TouchableHighlight
           underlayColor = {color.cardBackgroundColor} activeOpacity = { .5 } onPress={this.GetItemAdults.bind(this, item)}  delayPressIn={0}
           >
            {this.commonViewAdults(item)}
        </TouchableHighlight>
      );
    }
  }

  renderOneToNineChildren=(item)=>{
    if(Platform.OS === 'android'){
      return(
        <TouchableNativeFeedback onPress={this.GetItemChildren.bind(this,item)}
           >
            {this.commonViewChildren(item)}
        </TouchableNativeFeedback>
      );
    }
    else{
      return(
        <TouchableHighlight
           underlayColor = {color.cardBackgroundColor} activeOpacity = { .5 } onPress={this.GetItemChildren.bind(this, item)}  delayPressIn={0}
           >
            {this.commonViewChildren(item)}
        </TouchableHighlight>
      );
    }
  }

  renderOneToNineInfants=(item)=>{
    if(Platform.OS === 'android'){
      return(
        <TouchableNativeFeedback onPress={this.GetItemInfants.bind(this,item)}
           >
            {this.commonViewInfants(item)}
        </TouchableNativeFeedback>
      );
    }
    else{
      return(
        <TouchableHighlight
           underlayColor = {color.cardBackgroundColor} activeOpacity = { .5 } onPress={this.GetItemInfants.bind(this, item)}  delayPressIn={0}
           >
            {this.commonViewInfants(item)}
        </TouchableHighlight>
      );
    }
  }


  commonViewAdults  (item)  {
    console.log("prem",item)
    return(
      <View style={{flexDirection:'row',paddingTop:'2%',justifyContent:'center',alignItems:'center'}}>
       <Text style={{borderRadius:6,width:width/11,height:width/10,fontSize:18,color:'grey',backgroundColor:item.item.isSelect?'red':'white',textAlign:'center',textAlignVertical:'center'}}> {item.item.digit} </Text>
      </View>
    )
  }

  commonViewChildren = (item) => {
    console.log("prem",item)
    return(
      <View style={{flexDirection:'row',paddingTop:'2%',justifyContent:'center',alignItems:'center'}}>
       <Text style={{borderRadius:6,width:width/11,height:width/10,fontSize:18,color:'grey',backgroundColor:item.item.isSelect?'red':'white',textAlign:'center',textAlignVertical:'center'}}> {item.item.digit} </Text>
      </View>
    )
  }

  commonViewInfants = (item) => {
    console.log("prem",item)
    return(
      <View style={{flexDirection:'row',paddingTop:'2%',justifyContent:'center',alignItems:'center'}}>
       <Text style={{borderRadius:6,width:width/11,height:width/10,fontSize:18,color:'grey',backgroundColor:item.item.isSelect?'red':'white',textAlign:'center',textAlignVertical:'center'}}> {item.item.digit} </Text>
      </View>
    )
  }

  GetItemAdults= (item) => {   
      for(i=0;i<9;i++){
        if(item.item.digit === i+1){
           dummyValueAdults[i].isSelect = true;
           this.setState({noOfAdults:i+1})
        }else{
          dummyValueAdults[i].isSelect = false;
        }
        this.setState({buttonState : true})
      }
   }

   GetItemChildren= (item) => {   
    for(i=0;i<10;i++){
      if(item.item.digit === i){
         dummyValueChildren[i].isSelect = true;
         this.setState({noOfChildren:i+1})
      }else{
        dummyValueChildren[i].isSelect = false;
      }
      this.setState({buttonState : true})
    }
 }

 GetItemInfants= (item) => {   
  for(i=0;i<10;i++){
    if(item.item.digit === i){
       dummyValueInfants[i].isSelect = true;
       this.setState({noOfInfants:i+1})
    }else{
      dummyValueInfants[i].isSelect = false;
    }
    this.setState({buttonState : true})
  }
}
  
  

  
  onSelect(index, value) {
    global.ticketType = value
  }

  render() {
    return (
      <View style={{flex:1}}>
      {/* <KeyboardAwareScrollView style={{flex:1 }}> */}
            <View style ={{height:'55%',backgroundColor:'white',padding:'5%'}}>
                <Text style={{fontSize:24,color:'black',fontWeight:'bold'}}> Travellers </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:'4%'}}>
                <Text style={{fontSize:18,color:'black'}}> Adults {this.state.noOfAdults} </Text>
                <Text style={{fontSize:12,color:'grey'}}> 12 yr and above </Text>
                </View>
                <FlatList extraData={this.state}
                        style={{}}
                        horizontal={true}
                        scrollEnabled={false}
                        data={dummyValueAdults}
                        renderItem={this.renderOneToNineAdults}
                        keyExtractor = {(item, index) => index.toString()}
                />
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:'4%'}}>
                <Text style={{fontSize:18,color:'black'}}> Children {this.state.noOfChildren}</Text>
                <Text style={{fontSize:12,color:'grey'}}> 2 - 12yr </Text>
                </View>
                <FlatList extraData={this.state}
                        style={{}}
                        horizontal={true}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        data={dummyValueChildren}
                        renderItem={this.renderOneToNineChildren}
                        keyExtractor = {(item, index) => index.toString()}
                />
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:'4%'}}>
                <Text style={{fontSize:18,color:'black'}}> Infants {this.state.noOfInfants}</Text>
                <Text style={{fontSize:12,color:'grey'}}> 0 - 2yr at the time of travel </Text>
                </View>
                <FlatList extraData={this.state}
                        style={{}}
                        horizontal={true}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        data={dummyValueInfants}
                        renderItem={this.renderOneToNineInfants}
                        keyExtractor = {(item, index) => index.toString()}
                />

            </View>
            <View style ={{height:'45%',backgroundColor:'white',marginTop:'5%',paddingTop:'5%',paddingLeft:'5%'}}>
            <Text style={{fontSize:24,color:'black',fontWeight:'bold'}}> Class </Text>
            <View style={{marginTop: 5,flexDirection: 'row',flex:1}}>
     <RadioGroup
          selectedIndex='0'
          onSelect={(index, value) => this.onSelect(index, value)}
          style={{
            marginTop: 10,
            marginLeft: 5,
            flex:1,
            flexDirection: 'column',
            justifyContent:'space-evenly'
          }}
          thickness={2}
          activeColor='#F11339'
          color='#535353'>
          <RadioButton style={{alignItems:'center'}} value={'Economy'}>
            <Text style={{alignSelf:'center',fontSize:20}}>Economy</Text>
          </RadioButton>
          <RadioButton style={{alignItems:'center'}} value={'Premium Economy'}>
            <Text style={{fontSize:20}}>Premium Economy</Text>
          </RadioButton>
          <RadioButton style={{alignItems:'center'}} value={'Business'}>
            <Text style={{fontSize:20}}>Business</Text>
          </RadioButton>
        </RadioGroup>
        </View>
       </View>
       {/* </KeyboardAwareScrollView> */}
       </View>
    )
  }
}

// const style = StyleSheet.create({
//     digitStyle={
//       borderRadius:6,
//       width:width/10,
//       height:width/10,
//       fontSize:18,color:'grey',
//       backgroundColor:'black',
//       textAlign:'center',
//       textAlignVertical:'center'
//     }
// })
