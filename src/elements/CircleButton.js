import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
// import * as Font from 'expo-font';
// import { createIconSet } from '@expo/vector-icons';
// import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

// const CustomIcon = createIconSet({
//   pencil: '\uf303',
//   plus: '\uf067'
// }, fontAwesome);

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  // async componentWillMount() {
  //   await Font.loadAsync({
  //     FontAwesome: fontAwesome,
  //   });
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    const { name, style, color, onPress } = this.props;

    let bgColor = '#DE2F75';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    // const { fontLoaded } = this.state;

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
          {/* {
          fontLoaded ? (
            <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
          ) : null
        } */}
        </View>
      </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 32,
    right: 32,
  },
  circleButtonTitle: {
    fontSize: 24,
    fontFamily: 'fontAwesome',
  },
  circleButton: {
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
