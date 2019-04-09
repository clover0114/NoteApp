import React from 'react';
import { StyleSheet, View } from 'react-native';
// 作ったコンポーネントをインポートする

import AppBar from './src/components/AppBar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoDetailScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E1CD',
    alignItems: 'center',
    paddingTop: 78,
  },
});
