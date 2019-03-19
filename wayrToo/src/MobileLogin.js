import React, {Component} from 'react'
import {StyleSheet,Dimensions,Button,TextInput,View,TouchableOpacity,Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native'
import  LinearGradient  from 'react-native-linear-gradient';
let {height,width} =Dimensions.get('window')
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;
    
// ...

// Attempt a login using the Facebook login dialog,
// asking for default permissions.

export default class MobileLogin extends Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
      }
   
    //   _fbsdk () {
    //   LoginManager.logInWithReadPermissions(['public_profile']).then(
    //     function(result) {
    //       if (result.isCancelled) {
    //         alert('Login was cancelled');
    //       } else {
    //         alert('Login was successful with permissions: '
    //           + result.grantedPermissions.toString());
    //       }
    //     },
    //     function(error) {
    //       alert('Login failed with error: ' + error);
    //     }
    //   );
    // }
      
    render(){
        return(
        <KeyboardAvoidingView  
      behavior="padding">
       <View style = {{flex:1}}>
        <LinearGradient
        colors={['#a13388', '#10356c']}
        style={{ height:'8%',justifyContent:'center'}}
        start={{x:0,y: 0}}
        end={{x:1,y: 1}}>
        <Text style={{marginLeft: height * .02,fontSize:16,color:'white',textAlignVertical:'center',left:10}}>
          Please enter your mobile number here.
        </Text>
        </LinearGradient>
    <View style={{paddingHorizontal:"4%"}}> 
              <TextInput maxLength={10} keyboardType='numeric' underlineColorAndroid="transparent"  
              style={{borderColor:'grey',paddingHorizontal:"5%",borderRadius:8,  height:"22%",  borderWidth:1, marginTop: "15%", fontSize:18}}>
              </TextInput>
              <Text style={{textAlignVertical:'center',right:'6%',color:"grey", width:90, position:'absolute',alignItems:'center', textAlign:'right',marginTop: "15%",fontWeight:'bold'}}> Mobile </Text>

              <View style={{marginTop:"20%",justifyContent:"center",alignItems:"center", width:"100%", height:"12%"}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('OTPLogin')}
            style={{justifyContent:"center",alignItems:"center", alignContent:"center",backgroundColor:"#FF4E00", width:'50%',borderRadius:30, height:"100%"}}>
            
            <Text style={{fontSize:18, fontWeight:'bold', color:"white"}}>GET OTP</Text>
            </TouchableOpacity>
            <View>
      </View>
            </View>
            </View>
            </View>

        </KeyboardAvoidingView>
     
//     <View style={styles.container}>
//     <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
//     <FBLoginButton />
//   </View>
         

            
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    label: {
      fontSize: 16,
      fontWeight: 'normal',
      marginBottom: 48,
    },
  });

