import React, { Component } from 'react'
import { Text, Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    label: PropTypes.string,
    labelDuration: PropTypes.number,
    labelColor: PropTypes.string,
    labelActiveColor: PropTypes.string,
    labelActiveScale: PropTypes.number,
    labelActiveTop: PropTypes.number
  }

  static defaultProps = {
    labelDuration: 200,
    labelColor: '#666666',
    labelActiveColor: '#51b0ba',
    labelActiveScale: 0.8,
    labelActiveTop: -18,
    labelFontStyle:'italic',
    
  }

  constructor(props) {
    super(props)

    let { hasValue, focused, labelActiveScale, labelActiveTop } = props

    this.state = {
      animatedScale: new Animated.Value(hasValue || focused ? labelActiveScale : 1),
      animatedTranslate: new Animated.Value(hasValue || focused ? labelActiveTop : 0)
    }
  }

  componentWillReceiveProps = nextProps => {
    let { animatedScale, animatedTranslate } = this.state
    let { labelDuration, labelActiveScale, labelActiveTop, hasValue, focused } = nextProps

    if (this.props.hasValue !== hasValue || this.props.focused !== focused) {
      Animated.timing(animatedScale, {
        toValue: hasValue || focused ? labelActiveScale : 1,
        duration: labelDuration,
        useNativeDriver: true
      }).start()

      Animated.timing(animatedTranslate, {
        toValue: hasValue || focused ? labelActiveTop : 0,
        duration: labelDuration,
        useNativeDriver: true
      }).start()
    }
  }

  render() {
    let {
      focused,
      paddingTop,
      paddingRight,
      paddingLeft,
      activeColor,
      fontSize,
      fontFamily,
      fontWeight,
      label,
      labelColor,
      labelActiveColor,
      error,
      errorColor
    } = this.props
    let { animatedScale, animatedTranslate } = this.state

    return (
      <Animated.View
        style={{
          position: 'absolute',
          width: '200%',
          marginLeft: '-100%',
          top: paddingTop,
          transform: [{ translateY: animatedTranslate }, { scale: animatedScale }]
        }}
        numberOfLines={1}>
        <Text
          style={{
            left: '50%',
            top: 0,
            paddingRight,
            paddingLeft,
            color: error ? labelActiveColor : focused ? labelActiveColor || labelActiveColor : labelColor,
            fontFamily,
            //fontSize:this.props.hasValue>0 || focused? 10:17,
            fontSize:this.props.hasValue>0 || focused? 14:17,
            fontWeight:this.props.hasValue>0 || focused?'bold':'normal',
            fontStyle:this.props.hasValue>0 || focused?'normal':'italic'
          }}>
          {label}
        </Text>
      </Animated.View>
    )
  }
}
