import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDatail') }} underlayColor="transparent">
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>衝撃の瞬間5</Text>
            <Text style={styles.memoDate}>Yesterday</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDatail') }} underlayColor="transparent">
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>女くどき飯</Text>
            <Text style={styles.memoDate}>2019/04/03</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDatail') }} underlayColor="transparent">
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>小手鞠るいさんの空中都市</Text>
            <Text style={styles.memoDate}>2019/03/25</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDatail') }} underlayColor="transparent">
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>GoogleのOKR</Text>
            <Text style={styles.memoDate}>2019/03/13</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDatail') }} underlayColor="transparent">
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>今年の目標</Text>
            <Text style={styles.memoDate}>2019/01/03</Text>
          </View>
        </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '95%',
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 2, height: 2,
    },
    shadowOpacity: .5,
  },
  memoListItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
