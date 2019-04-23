import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDatailScreen from './src/screens/MemoDetailScreen'
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoEditScreen from './src/screens/memoEditScreen';

const App = createStackNavigator({
  Home: { screen: MemoListScreen },
  Memoedit: { screen: MemoEditScreen },
  MemoDatail: { screen: MemoDatailScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
}, {
    defaultNavigationOptions: {
      headerTitle: 'Quick',
      headerStyle: {
        backgroundColor: '#EBC51B',
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 25,
      },
    },
  });

export default createAppContainer(App)