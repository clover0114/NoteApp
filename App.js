import React from 'react';
import { StyleSheet, View } from 'react-native';
// 作ったコンポーネントをインポートする
import MemoList from './src/components/MemoList';
import AppBar from './src/components/AppBar';
import CircleButton from './src/elements/CircleButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoList />
        <CircleButton>＋</CircleButton>
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
