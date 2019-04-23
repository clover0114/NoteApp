import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import { withNavigation } from 'react-navigation';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton onPress={() => { this.props.navigation.navigate('Memoedit') }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFDF6'
  },
});

export default MemoListScreen;
