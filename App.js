import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './Component/Auth';
import ListScreen from './Component/screen/listScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator(
  {
    Auth: Auth,
    list: ListScreen
  },
  {
  initialRouteName:'Auth',
  defaultNavigationOptions:{
    title: 'AUTH'
  }
  }
);
export default createAppContainer(navigator);