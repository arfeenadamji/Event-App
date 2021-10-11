import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Auth from './Component/Auth';
import ListScreen from './Component/screen/listScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Register from './Component/screen/register';

const navigator = createStackNavigator(
  {
    Auth: Auth,
    list: ListScreen,
    Register: Register
  },
  {
  initialRouteName:'Auth',
  defaultNavigationOptions:{
    title: 'AUTH'
  }
  }
);
export default createAppContainer(navigator);