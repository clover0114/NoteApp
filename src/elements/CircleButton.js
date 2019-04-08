import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component {
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
           <Text style={[styles.circleButtonTitle, { color: textColor }]}>
            { this.props.children }
           </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButtonTitle: {
    fontSize: 30,
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
