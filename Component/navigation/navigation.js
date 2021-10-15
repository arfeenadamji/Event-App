import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import { createAppContainer,createSwitchNavigator} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'


const navigator = createStackNavigator(
    {
        One:screen1,
        Two:screen2
    },
    {
    initialRouteName:'One',
    defaultNavigationOptions:{
      title: 'ONE'
    }
    }
  );
const DrawerNavigator = createDrawerNavigator({
    One:screen1,
    Two:screen2
});

export default createAppContainer(
    createSwitchNavigator(
      {
        Auth: navigator,
        Home:DrawerNavigator
      }
    )
  );
