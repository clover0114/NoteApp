import React from 'react';
import { StyleSheet, View } from 'react-native';
// 作ったコンポーネントをインポートする

import AppBar from './src/components/AppBar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoEditScreen from './src/screens/memoEditScreen';
import MemoDatailScreen from './src/screens/MemoDetailScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        {/* <MemoListScreen /> */}
        {/* <MemoDatailScreen /> */}
        <MemoEditScreen />
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
