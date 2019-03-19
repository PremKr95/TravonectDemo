import React, { Component } from 'react'
import {
    View,Dimensions,Text
} from
'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

let {height, width} = Dimensions.get('window');
const cardHeight = height*.15;
export default class Filter extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:cardHeight*1.2,backgroundColor:'grey'}}>
        </View>

        <View style={{marginTop :'4%',height:cardHeight,backgroundColor:'grey'}}>
                <Text style={{fontWeight:'bold',fontSize:28}}> Stop </Text>
                <RadioGroup
          selectedIndex='0'
          onSelect={(index, value) => this.onSelect(index, value)}
          style={{
            marginTop: 10,
            marginLeft: 5,
            flex:1,
            flexDirection: 'row',
            justifyContent:'space-evenly'
          }}
          thickness={2}
          activeColor='#F11339'
          color='#535353'>
          <RadioButton style={{alignItems:'center'}} value={'Non-stop'}>
            <Text style={{alignSelf:'center',fontSize:20}}>Non-stop</Text>
          </RadioButton>
          <RadioButton style={{alignItems:'center'}} value={'1 Stop'}>
            <Text style={{fontSize:20}}>1 Stop</Text>
          </RadioButton>
          <RadioButton style={{alignItems:'center'}} value={'2 Stop'}>
            <Text style={{fontSize:20}}>2 Stop</Text>
          </RadioButton>
        </RadioGroup>
        </View>

        <View style={{marginTop :'4%',flex:1,backgroundColor:'red'}}>
        
        </View>

        <View style={{marginTop :'4%',flex:1,backgroundColor:'blue'}}>
        </View>
      </View>
    )
  }
}
