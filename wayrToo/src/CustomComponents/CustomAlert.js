import React ,{Component} from 'react'
import { Platform, StyleSheet, View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
var background = 'rgba(52, 52, 52, 0.8)';
export default class CustomAlert extends Component {
  constructor(props) {
    super(props);
    background=props.backgroundColor?props.backgroundColor:'rgba(52, 52, 52, 0.8)';
    this.state = {
        Alert_Visibility: true
    };
  }
  ShowAlert(visible) {
    this.setState({Alert_Visibility: visible});
  }
  dismissAlert=()=>{
    this.setState({Alert_Visibility: false});
  }

  handleOkButton=()=>{
    this.setState({Alert_Visibility: false});
    this.props.onOkButtonClick()
  }


render() {
   return (

      <View style={styles.MainContainer}>
        <Modal
          visible={this.state.Alert_Visibility}
          transparent={true}
          animationType={"fade"}
          onRequestClose={ () => { this.ShowAlert(!this.state.Alert_Visibility)} } >
          <View style={[styles.container,{backgroundColor: background}]}>

                <View style={styles.Alert_Main_View}>
                    <Text style={styles.Alert_Title}>{this.props.title}</Text>
                    <Text style={styles.Alert_Message}> {this.props.message} </Text>
                    <View style={{ width: '100%', height: 0, backgroundColor: '#fff'}} />
                    <View style={{flexDirection: 'row', height: '30%', backgroundColor: '#51b0ba',borderBottomLeftRadius:10,borderBottomRightRadius:10, }}>
                        <TouchableOpacity
                            style={styles.buttonStyle1}
                            onPress={this.dismissAlert}
                            activeOpacity={0.7}>
                            <Text style={styles.TextStyle1}>OK </Text>
                        </TouchableOpacity>
                    {/* <View style={{ width: 0, height: '100%', backgroundColor: '#fff'}} />
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={this.handleOkButton }
                            activeOpacity={0.7}>
                            <Text style={styles.TextStyle}> OK </Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>

         </Modal>

      </View>


   );
}


}
CustomAlert.propTypes = {
    onOkButtonClick: PropTypes.func,

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
MainContainer :{
 flex:1,
justifyContent: 'center',
alignItems: 'center',
marginTop: (Platform.OS == 'ios') ? 20 : 0
},
Alert_Main_View:{
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : "#FFFFFF",
  height: 180 ,
  width: '85%',
  borderWidth: 0,
  borderRadius:10,
},
Alert_Title:{
  fontSize: 22,
  width: '100%',
  color: "#000000",
  backgroundColor:"#FFFFFF",
  textAlign: 'center',
  padding: 10,
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
  height: '28%'

},

Alert_Message:{
    fontSize: 16,
    backgroundColor:"#FFFFFF",
    color: "#666666",
    textAlign: 'center',
    width: '100%',
    height: '42%',
    top:'5%'
  },

buttonStyle: {

    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#51b0ba',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10

},
buttonStyle1: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#51b0ba',
    marginTop:2,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
},

TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
    marginTop: -5
},
TextStyle1:{
    color:'white',
    textAlign:'center',
    fontSize: 20,
    marginTop: -5
}

});
