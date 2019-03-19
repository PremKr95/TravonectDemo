import React, { Component } from 'react'
import {
    View,FlatList,Platform,TouchableHighlight,TouchableNativeFeedback,Dimensions,Image,Text,TouchableOpacity,
    Slider,ViewPagerAndroid

} from
'react-native'
import CustomAlert from '../../CustomComponents/CustomAlert'
let cardHeight = 500;
let {height, width} = Dimensions.get('window');
const dummyData = [
    {
        name : "Prem | 65% Match",
        habbit : "HATES DAY DRINKING",
        age : 23,
        place : "Maharastra, India"
    },
    {
        name : "Arijit | 40% Match",
        habbit : "HATES DANCING",
        age : 27,
        place : "Kolkata, India"
    },
    {
        name : "Prashant | 65% Match",
        habbit : "HATES DAY DRINKING",
        age : 23,
        place : "Maharastra, India"
    },
    {
        name : "Satyam | 40% Match",
        habbit : "HATES DANCING",
        age : 27,
        place : "Kolkata, India"
    },
    {
        name : "Mukesh | 65% Match",
        habbit : "HATES DAY DRINKING",
        age : 23,
        place : "Maharastra, India"
    },
    {
        name : "KK | 40% Match",
        habbit : "HATES DANCING",
        age : 27,
        place : "Kolkata, India"
    }
]
export default class Second extends Component {
  
  constructor(props){
        super(props)
        this.state = {

        }
  }

  renderItem = (item) => {
    if(Platform.OS === 'android'){
          return(
          <TouchableNativeFeedback> 
                {this.commonView(item)}
            </TouchableNativeFeedback>)
    }else{
        return(
            <TouchableHighlight>
                {this.commonView(item)}
            </TouchableHighlight>)
    }
  }

  
  commonView = (item) => {
      return(
        <View style={{height:height*0.8,width:width*0.9,alignSelf:'center',marginBottom:'5%',}}>
                <View style = {{flex:0.7}}>
                    <Image style= {{height:'100%',width:'100%'}} source={require('../../images/prem.png')}/>
                    <View style={{justifyContent:'center',backgroundColor:'rgba(52, 52, 52, 0.3)',position:'absolute',bottom:0,width:'90%',height:'40%',alignSelf:'center',borderRadius:10}}>
                        <TouchableOpacity style={{height: 28,
                                            alignSelf: "center",
                                            width: "50%",
                                            backgroundColor:'#c21c4a',
                                            borderRadius:28,
                                            justifyContent:'center'
                                            }}
                                        onPress = {()=>this.openChatWindow()}>
                                   <Text style={{ textAlign: 'center',
                                                  textAlignVertical: 'center',
                                                  color:'white',
                                                  fontSize:14}}> Send Message </Text> 
                        </TouchableOpacity>
                        <Text style={{color:'white',fontSize:24,alignSelf:'center',fontWeight:'bold'}}>
                            {item.item.name}
                        </Text>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{color:'white',fontSize:24,alignSelf:'center',fontWeight:'bold'}}>
                                {item.item.age}
                            </Text>
                            <Text style={{color:'white',fontSize:24,alignSelf:'center',fontWeight:'bold'}}> {""}  </Text>
                            <Text style={{color:'white',fontSize:24,alignSelf:'center',fontWeight:'bold'}}>
                                {item.item.place}
                            </Text>
                        </View>
                    </View>
                </View>   
                <View style={{flex:0.3,backgroundColor:'rgba(52, 52, 52, 0.3)'}}>
                <ViewPagerAndroid
                        style={{}}
                        initialPage={0}>
                        <View style={{alignItems: 'center',
                                        padding: 20,}}>
                            <Text>First page</Text>
                        </View>
                        <View style={{alignItems: 'center',
                                         padding: 20,}}>
                            <Text>Second page</Text>
                        </View>
                </ViewPagerAndroid>
                </View>

                {this.state.openChatWindow && 
                <CustomAlert
                ref={alertchild => {this.alertchild = alertchild}}
                title = "Send Message!"
                message="Car Location Not Found"
                onOkButtonClick={()=>{
                 //this.deleteRoute()
               }}
          />
                }
        </View>
      )
  }

  renderSeperator = () => {
      return (
          <View> </View>
      )
  }
  
  openChatWindow = () =>{
      // this.props.navigation.navigate('Chat')
      this.setState({showPopUp : true}, ()=>{
        var temp = this.alertchild;
        if(temp===undefined){
      
        }else{
          temp.ShowAlert(true)
        }
      })
    

      
    }
  render() {
    return (
      <View style={{flex:1 , backgroundColor:'white'}}>
              <FlatList
                data = {dummyData}
                extraData = {this.state}
                style={{marginTop:'5%'}}
                keyExtractor={(item , index)=>index.toString()}
                renderItem = {this.renderItem}
              />     
      </View>
    )
  }
}


