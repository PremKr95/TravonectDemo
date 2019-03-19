import React, { Component } from 'react'
import {
    Image
} from
'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,Button } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../images/prem.png'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../../images/prem.png'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('../../images/prem.png'),
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: require('../../images/prem.png'),
  },
  {
    text: 'Card Five',
    name: 'Five',
    image: require('../../images/prem.png'),
  },
  {
    text: 'Card Six',
    name: 'Six',
    image: require('../../images/prem.png'),
  },
];
export default class setting extends Component {

  static navigationOptions = {
      header : null
  }
  render() {
    return (
      <Container>
        <View>
         
        </View>
      </Container>
    );
  }
}
