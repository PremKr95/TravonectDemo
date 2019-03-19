import React, { Component } from 'react'
import {View,Image,Text,Dimensions,TouchableOpacity,Picker} from 'react-native'
import DatePicker from '../CustomComponents/datepicker'
import  LinearGradient  from 'react-native-linear-gradient';
let {height,width} = Dimensions.get('window')
var onResumeListener;
var onPauseListener;
export default class Tours extends Component {

  constructor(props){
    super(props)
    this.state = {
      dateofpurchase: "",
      datePlaceHolder: "",
      dateofRoundTrip:"",
      onGoingAirport:'PATNA',
      returnAirport:'KOLKATA',
      classType:''
    }
  }

  componentDidMount(){
    global.totalTravellers = 1;
    global.ticketType = 'Economy'
  }
  onResumeListener=this.props.navigation.addListener(
    'didFocus',
    payload => {
      console.debug('on Resume called');
      this.forceUpdate()
    },
  );


 onPauseListener=this.props.navigation.addListener(
    'didBlur',
    payload => {
        console.debug('on pause called');
       //alert("didBlur called");
      //  clearInterval(mThis._interval);
    }
  );

  trimString = (str) =>{
      str = str.substring(0,3)
      str = str.toUpperCase()
      return str 
  }
  render() {
    return (
        <View style = {{flex:1}}>
        <LinearGradient
        colors={['#a13388', '#10356c']}
        style={{ height:'8%',justifyContent:'center'}}
        start={{x:0,y: 0}}
        end={{x:1,y: 1}}>
        <Text style={{marginLeft: height * .02,fontSize:16,color:'white',textAlignVertical:'center',left:10}}>
          Search your flight here.
        </Text>
        </LinearGradient>
       
        <View style={{height:'100%',width:'100%',padding:'5%',borderRadius:10}}>
          
          {/* <View style={{width:'100%',height:'5%',backgroundColor:'black'}}></View> */}
            <View style = {{height:'25%',borderRadius:10,flexDirection:'column',backgroundColor:'white'}}>
              <View style={{justifyContent:'space-between',flexDirection:'row',flex:1,marginTop:'5%',marginLeft:'5%',marginRight:'5%'}}>
                  <Text style={{color:'green',textAlignVertical:'center'}}>
                    {this.trimString(this.state.onGoingAirport)}
                  </Text>
                  <View style={{marginLeft:2,marginRight:2,backgroundColor:'grey',height:1,flex:1,alignSelf:'center'}}></View>
                  <Text style={{color:'red',justifyContent:'flex-end',textAlignVertical:'center'}}>
                  {this.trimString(this.state.returnAirport)}
                  </Text>
              </View>
              <View style={{justifyContent:'space-between',flexDirection:'row',flex:1,marginBottom:'5%',marginLeft:'5%',marginRight:'5%'}}>
              {/* <Text style={{color:'black',alignSelf:'center'}}>
                      Bombay
                  </Text> */}
                  <Picker selectedValue={this.state.onGoingAirport}
                  style={{height:50,width:100,alignSelf:'center'}}
                  mode='dropdown'
                  onValueChange={(itemValue,itemIndex) => this.setState({onGoingAirport:itemValue})}
                  >
                  <Picker.Item label="Bombay" value = "Bombay"/>
                  <Picker.Item label="Delhi" value = "Delhi"/>
                  <Picker.Item label="Kolkata" value = "Kolkata"/>
                  <Picker.Item label="Patna" value = "Patna"/>
                  <Picker.Item label="Bangalore" value = "Bangalore"/>
                  <Picker.Item label="Hyderabad" value = "Hyderabad"/>
                  <Picker.Item label="Jammu" value = "Jammu"/>
                  <Picker.Item label="Thailand" value = "Thailand"/>

                    </Picker>
                  <Image
                      source={require('../images/airplane_horizontal.png')}
                      style={{alignSelf:'center'}}
                 />
                  <Picker selectedValue={this.state.returnAirport}
                  style={{height:50,width:100,alignSelf:'center'}}
                  mode='dropdown'
                  onValueChange={(itemValue,itemIndex) => this.setState({returnAirport:itemValue})}
                  >
                  <Picker.Item label="Bombay" value = "Bombay"/>
                  <Picker.Item label="Delhi" value = "Delhi"/>
                  <Picker.Item label="Kolkata" value = "Kolkata"/>
                  <Picker.Item label="Patna" value = "Patna"/>
                  <Picker.Item label="Bangalore" value = "Bangalore"/>
                  <Picker.Item label="Hyderabad" value = "Hyderabad"/>
                  <Picker.Item label="Jammu" value = "Jammu"/>
                  <Picker.Item label="Thailand" value = "Thailand"/>

                    </Picker>
              </View>

            </View>
            <View style = {{height:'20%',borderRadius:10,marginTop:'3%',flexDirection:'row',backgroundColor:'white'}}>
                <View style = {{height:'100%',width:'50%',padding:'5%'}}>
                   <View style={{height:'70%',justifyContent:'space-between'}}>
                      <Text style={{fontSize:14}}>
                        Depart
                      </Text>
                      {/* <Text style={{fontSize:16,fontWeight:'bold',color:'black'}}>
                        Sun, 23rd May
                      </Text> */}
                      <DatePicker
                style={{ width: '100%', backgroundColor: 'white',alignSelf:'flex-start',left:0 }}
                date={this.state.dateofpurchase}
                mode="date"
                placeholder="Onward Journey"
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                //iconSource = {require('./Assets/date_icon.png')}
                onDateChange={(date) => { this.setState({ dateofpurchase: date, datePlaceHolder: 'Onward Journey' }); }}
              />
                   </View>
                </View>
                <View style = {{height:'70%',width:1,backgroundColor:'black',alignSelf:'center'}}>
                  </View>
                <View style = {{height:'100%',width:'50%',padding:'5%'}}>
                <View style={{height:'70%',justifyContent:'space-between'}}>
                      <Text style={{fontSize:14,alignSelf:'flex-end'}}>
                        Return
                      </Text>
                      <DatePicker
                           style={{ width: '100%', backgroundColor: 'white',alignSelf:'flex-end' }}
                           date={this.state.dateofRoundTrip}
                mode="date"
                placeholder="Book Round Trip"
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                //iconSource = {require('./Assets/date_icon.png')}
                onDateChange={(date) => { this.setState({ dateofRoundTrip: date, datePlaceHolder: 'Book Round Trip' }); }}
              />
                   </View>
                </View>
            </View>
            <View style = {{height:'20%',borderRadius:10,marginTop:'3%',backgroundColor:'white'}}>
            <View style={{height:'70%',justifyContent:'space-between',padding:'5%',alignContent:'space-between'}}>
                <Text style={{fontSize:14}}>
                        Ticket Type
                </Text>
               
               <View style={{justifyContent:'space-between',flexDirection:'row',flex:1}}>
                  <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center'}}onPress={()=>this.props.navigation.navigate('TravelAndClass')}>{global.totalTravellers} {""} Traveller {" . "} {global.ticketType} </Text>

                 <Image
                    source={require('../images/coffee_cup.png')}
                    resizeMode = {Image.resizeMode.contain}
                    style={{ alignSelf:'center'}}
                 />
                </View>

                </View>
            </View>
            <View style={{marginTop:"10%",justifyContent:"center",alignItems:"center", width:"100%", height:48}}>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('FlightDetails')}
            style={{marginTop:'10%',justifyContent:"center",alignItems:"center", alignContent:"center",backgroundColor:"#FF4E00", width:'50%',borderRadius:30, height:48}}>
            <Text style={{position:'absolute',fontSize:18, fontWeight:'bold', color:"white"}}>Search Flight</Text>
            </TouchableOpacity>
        </View>
        </View>

       </View>
    )
  }
}
