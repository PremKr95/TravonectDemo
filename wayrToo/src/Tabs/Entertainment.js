import React, { Component } from 'react'
import {
    View,Image,Dimensions,FlatList,Text,TouchableOpacity,Platform,TouchableNativeFeedback,TouchableHighlight
} from
'react-native'
import {basicInfo} from '../dummyResponse'
let {height, width} = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import TextInput from '../CustomComponents/TextInput/Input.js'
let count = 0;
import MapViewAnimated, { PROVIDER_GOOGLE} from "react-native-maps";
// import { Container, Content, Card, CardItem, Thumbnail, Button, Icon } from 'native-base';
const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
 ]

 const basicQuestion = [
    {
    question : "Do You Smoke ?",
    Answer : "No" 
    },    
    {
    question : "Do You Drink ? ",
    Answer : "No" 
    },
    {
    question : "Do You Party ?",
    Answer : "No" 
    },
    {
    question : "Do You Smoke ?",
    Answer : "No" 
    },
    {
    question : "Do You Dance ?",
    Answer : "No" 
    }
 ]
 getUserName = () => {
   return Prem
 }
 

export default class Entertainment extends Component {

  constructor(props){
      super(props)
      this.state = {
        coordinate : null,
        showPopUp : false,
      }
  }
  renderItem=(item)=>{

    console.disableYellowBox = true;

    if(Platform.OS === 'android'){
      return(
        <TouchableNativeFeedback onPress ={()=> this.openBasicInfoQuestions()}
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
      <View style={{flexDirection:'row',padding:10}}>
           <Image style = {{height:24,width:24,alignSelf:'center'}} source={require('../images/suitcase.png')}/>
           <Text style={{fontSize:18, alignSelf:'center',marginLeft:10}}> {item.item.Answer} </Text>
           <View
           style = {{
             backgroundColor:'grey',
             height:'100%',
             width:1
           }} 
          />
      </View>
    )
  }

  openBasicInfoQuestions = () => {
    //this.props.navigation.navigate('BasicInfo')
    this.showHidePopUp()
  }

  renderPopUpView = () => {
    return (
      <View style= {{flex:1,backgroundColor: 'rgba(52, 52, 52, 0.8)',padding:'10%'}}>
            <View style={{height:300 , width:300, backgroundColor:'white'}}>
            </View>
      </View>
    )
  }

  showHidePopUp = () => {
    this.setState({showPopUp : true})
  }

    
  onSelect(index, value) {

  }

  nextQuestion = () => {
    if(count>basicQuestion.length-2){
      count = 0;
    }
    count++;
    this.setState({coordinate:null})
  }

  activeAllTextInput = ()=> {

  }
  render() {
    return (
      <View style={{flex:1,padding:'5%',backgroundColor:'white' }}>
      <KeyboardAwareScrollView style={{}}>
                  <Image style= {{ marginTop: '6%',
                                  width: 156,
                                  height: 156,
                                  borderRadius:78,
                                  borderColor: '#9B9B9B',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  alignSelf:'center',
                                  backgroundColor:'transparent'}} source={require('../images/prem.png')}/>
                  <TouchableOpacity style={{backgroundColor:'black',
                                width:48,
                                height:48,
                                borderRadius:24,
                                alignSelf:'center',
                                top:-24 ,
                                justifyContent:'center'
                                }}
                                onPress={()=>this.activeAllTextInput()}>
                           <Image style={{height:30,width:30,alignSelf:'center'}}
                              source={require('../images/Edit_Blue.png')}
                           />       
                  </TouchableOpacity>

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <View style={{width:'38%',height:1,backgroundColor:'grey'}}></View>
                  <Text style={{alignSelf:'center',fontWeight:'bold',color:'black'}}> PREM </Text>
                  <View style={{width:'38%',height:1,backgroundColor:'grey'}}></View>
            </View>
            <Text style={{alignSelf:'center',fontSize:16,marginTop:10}}> Travonect Member. </Text>

            <TextInput style={{unfontSize:20, fontWeight:'bold',margin:10}}
                       value = {this.state}
              /> 
            <View style={{flexDirection:'column',height:100}}>
                  <View style={{flex:0.33}}>
                        <View style={{flexDirection:'row',paddingLeft:10}}>
                        <Image style = {{height:24,width:24,alignSelf:'center'}} source={require('../images/suitcase.png')}/>
                              <Text style={{fontSize:16, alignSelf:'center',marginLeft:10}}> Facebook </Text>
                        </View>
                  </View>
                  <View style={{flex:0.33}}>
                        <View style={{flexDirection:'row',paddingLeft:10}}>
                        <Image style = {{height:24,width:24,alignSelf:'center'}} source={require('../images/suitcase.png')}/>
                              <Text style={{fontSize:16, alignSelf:'center',marginLeft:10}}> R.D National College, Bandra </Text>
                        </View>
                  </View>

                  <View style={{flex:0.33}}>
                        <View style={{flexDirection:'row',paddingLeft:10}}>
                              <Image style = {{height:24,width:24,alignSelf:'center'}} source={require('../images/suitcase.png')}/>
                              <Text style={{fontSize:16, alignSelf:'center',marginLeft:10}}> 13 Kilometeres away </Text>
                        </View>
                  </View>

                 
             </View>
             <TextInput multiline
              label='About Me'
              style={{ width: '50%', color: '#66666' }}
              placeholder='Description (optional)'
              fontSize={16}
              // value={this.state.description}
              // error = {objUtils.stringValidationWithNumbers(this.state.description)?"Not allowed numbers and special Characters.":null}
              maxLength={140}
              onChangeText={text => {
                this.setState({
                  // description: text
                })
              }}
            />
             {/* <View
              style = {{
                backgroundColor:'grey',
                width:'100%',
                height:1
              }} 
             /> */}
              <Text style={{marginLeft:10,marginTop:10,fontSize:16}}>  Basic Info</Text>
             <FlatList 
                  extraData ={this.state}
                  data = {basicInfo.elements}
                  horizontal={true}
                  renderItem={this.renderItem}
                  keyExtractor = {(item, index) => index.toString()}
             />

              <View
              style = {{
                backgroundColor:'grey',
                width:'100%',
                height:1
              }} 
             />
              <Text style={{marginLeft:10,marginTop:10,fontSize:16}}> Travel Interest</Text>

             <FlatList 
                  extraData ={this.state}
                  data = {basicInfo.elements}
                  horizontal={true}
                  renderItem={this.renderItem}
                  keyExtractor = {(item, index) => index.toString()}
             />
            <View
              style = {{
                backgroundColor:'grey',
                width:'100%',
                height:1
              }} 
             />
           
              {/* <View style={{flexDirection:'row',backgroundColor:'black',height:100}}>
                  <View style={{backgroundColor:'red',flex:1}}>
                  </View>
                  <View style={{backgroundColor:'grey',flex:1}}>
                  </View>
             </View> */}

            
      </KeyboardAwareScrollView>
          {this.state.showPopUp && 
          <View style={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0}}>
                     <View style={{height:300 , width:300, backgroundColor:'white'}}>
                        <TouchableOpacity onPress={()=>this.setState({showPopUp:false})}>
                          <Image source = {require('../images/cross.png')}/> 
                        </TouchableOpacity>
                        <Text style={{fontSize:24,fontWeight:'bold',alignSelf:'center',marginTop:40}}> {basicQuestion[count].question} </Text>
                        
                        <View style={{marginTop: 5,flexDirection: 'row',flex:1,justifyContent:'center'}}>
                            <RadioGroup
                                  selectedIndex='0'
                                  onSelect={(index, value) => this.onSelect(index, value)}
                                  style={{
                                    marginTop: 10,
                                    marginLeft: '30%',
                                    flex:1,
                                    flexDirection: 'column',
                                    // justifyContent:'space-evenly'
                                  }}
                                  thickness={2}
                                  activeColor='#F11339'
                                  color='#535353'>
                                  <RadioButton style={{alignItems:'center'}} value={'Yes'}>
                                    <Text style={{alignSelf:'center',fontSize:20}}>Yes</Text>
                                  </RadioButton>
                                  <RadioButton style={{alignItems:'center'}} value={'No'}>
                                    <Text style={{fontSize:20}}>No</Text>
                                  </RadioButton>
                                  {/* <RadioButton style={{alignItems:'center'}} value={'Business'}>
                                    <Text style={{fontSize:20}}>Business</Text>
                                  </RadioButton> */}
                            </RadioGroup>
                        </View>
                        <TouchableOpacity style={{height: 56,
                                                    alignSelf: "center",
                                                    width: "70%",
                                                    backgroundColor:'#c21c4a',
                                                    borderRadius:28,
                                                    justifyContent:'center',
                                                    alignItems:'center',
                                                    position:'absolute',
                                                    bottom: '8%'
                                                    }}
                                                    onPress={()=>this.nextQuestion()}
                                                    >
                        <Text style={{ textAlign: 'center',
                                        textAlignVertical: 'center',
                                        fontSize:17,
                                        color:'#FFFFFF',
                                        fontWeight:"bold",
                                        }}> NEXT </Text>
                        </TouchableOpacity>
                        
                     </View>
          </View>
          }
      </View>
    )
  }
}
