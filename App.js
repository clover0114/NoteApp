import React from 'react';
import { StyleSheet, View } from 'react-native';
// 作ったコンポーネントをインポートする
import MemoListScreen from './src/screens/MemoListScreen';
import AppBar from './src/components/AppBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoListScreen />
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
