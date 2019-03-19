import React, { Component } from 'react'
import {
    Image,TouchableOpacity
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
        <View >
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
              </Card>
            }
          />
        </View>

         <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 0, left: 0, right: 0, justifyContent: 'space-evenly', padding: 15 }}>
      
          <TouchableOpacity onPress={() => this._deckSwiper._root.swipeLeft()}>
              <Image
                source = {require('../../images/angry.png')}
              />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this._deckSwiper._root.swipeRight()}>
              <Image
                source = {require('../../images/love.png')}
              />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
