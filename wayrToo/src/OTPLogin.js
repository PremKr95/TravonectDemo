import React, {Component} from 'react'
import {Dimensions,TextInput,View,TouchableOpacity,Text, KeyboardAvoidingView, Button, TouchableWithoutFeedback} from 'react-native'
import  LinearGradient  from 'react-native-linear-gradient';
let {height,width} =Dimensions.get('window')
export default class OTPLogin extends Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
      }
   
    render(){
        return(

<View style={{flex:1}}> 
<LinearGradient
        colors={['#a13388', '#10356c']}
        style={{ height:'5%',justifyContent:'center'}}
        start={{x:0,y: 0}}
        end={{x:1,y: 1}}>
        <Text style={{marginLeft: height * .02,fontSize:16,color:'white',textAlignVertical:'center',left:10}}>
          Verify OTP
        </Text>
        </LinearGradient>
 <View style={{marginTop:"10%", paddingHorizontal:"4%"}}> 

   <View>
     <Text  style={{alignSelf:"flex-start", fontSize:16}}>Please enter the OTP has sent to your mobile</Text>
     <Text style={{marginTop:'2%',alignSelf:"flex-start", fontSize:16}}>number 7021278223</Text>
   </View>

<View style={{marginTop:'5%',flexDirection:"row", justifyContent:"space-between", width:"100%", height:"5%"}}>
{/* <Button color="#FF4E00"  title="Edit Number">
</Button>
<Button color="#FF4E00" title="Resend OTP">
</Button> */}

<View style={{width:"30%", height:"100%"}}>

<TouchableOpacity style={{justifyContent:"center",alignItems:"center", alignContent:"center" }}>
            <Text style={{fontSize:15, fontWeight:'bold', color:"#FF4E00"}}>Edit Number</Text>
            </TouchableOpacity>
</View>
<View style={{width:"30%", height:"100%"}}>

<TouchableOpacity style={{justifyContent:"center",alignItems:"center", alignContent:"center"}}>
            <Text style={{fontSize:15, fontWeight:'bold', color:"#FF4E00"}}>Resend OTP</Text>
</TouchableOpacity>
</View>


</View>
<View style={{paddingHorizontal:'2%'}}>
<TextInput maxLength={10} keyboardType='numeric' underlineColorAndroid="transparent"  
              style={{borderColor:'grey',paddingHorizontal:"5%",borderRadius:8,  height:"35%",  borderWidth:1, marginTop: "5%", fontSize:18}}>
              </TextInput>
              <Text style={{textAlignVertical:'center',right:'6%',color:"grey", width:90, position:'absolute',alignItems:'center', textAlign:'right',marginTop: "5%",fontWeight:'bold'}}> OTP </Text>


</View>
             
              <View style={{justifyContent:"center",alignItems:"center", width:"100%", height:"15%"}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tabs')} style={{justifyContent:"center",alignItems:"center", alignContent:"center",backgroundColor:"#FF4E00", width:'50%',borderRadius:30, height:"100%"}}>
            <Text style={{fontSize:15, fontWeight:'bold', color:"white"}}>CONFIRM</Text>
            </TouchableOpacity>

            </View>
            </View>
      
            </View>

           
         

            
        )
    }

}

