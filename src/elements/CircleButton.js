import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fa-solid-900.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;

    let bgColor = '#DE2F75';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
        <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
          {
             this.state.fontLoaded ? (
              <Text style={[styles.circleButtonTitle, { color: textColor }]}>
               {'\uf303'}
              </Text>
            ) : null
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButtonTitle: {
    fontSize: 30,
    fontFamily: 'fontAwesome',
  },
  circleButton: {
    position: 'absolute',
    bottom: 32,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default CircleButton;
