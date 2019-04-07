import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButton}>
         <Text style={styles.circleButtonTitle}>
          {this.props.children}
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButtonTitle: {
    color: '#fff',
    fontSize: 30,
  },
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 60,
    height: 60,
    backgroundColor: '#DE2F75',
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
