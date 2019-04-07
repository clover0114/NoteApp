import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// 作ったコンポーネントをインポートする
import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.appbar}>
         <View>
          <Text style={styles.appbarTitle}>QUICK Chip</Text>
         </View>
      </View>

      <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>あ</Text>
            <Text style={styles.memoDate}>2019/04/03</Text>
          </View>
      </View>

      <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/04/03</Text>
          </View>
      </View>

      <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/04/03</Text>
          </View>
      </View>

      <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/04/03</Text>
          </View>
      </View>

      <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/04/03</Text>
          </View>
      </View>

      <View style={styles.memoAddButton}>
       <Text style={styles.memoAddButtonTitle}>＋</Text>
      </View>

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
  memoList: {
    width: '100%',
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff'
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#EBC51B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 30
  },
  memoAddButtonTitle: {
    color: '#fff',
    fontSize: 30,
  },
  memoAddButton: {
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
  }
});
