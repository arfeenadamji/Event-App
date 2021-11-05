import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

import Auth from "../Auth";
import ListScreen from "../screen/listScreen";
import Register from "../screen/register";
import ProfileScreen from "../screen/profileScreen";

import CreateEvent from '../Event/createEvent';
import GetEvent from '../Event/getEvent'

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import OtherEvent from "../Event/otherEvent";
import Counter from "../screen/counter";
import JoinEvent from "../Event/joinEvent";
import Img from "../screen/img"

const AuthNavigator = createStackNavigator(
  {
    Auth: Auth,
    Register: Register,
    img:Img
    
    
  },
  {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
      title: "AUTH",
      headerTintColor: "black",
      headerStyle: { backgroundColor: '#06bcee' },    },
  }
);
const DrawerNavigator = createDrawerNavigator(
  {
    list: ListScreen,
    Profile: ProfileScreen,
    createEvent: CreateEvent,
    getEvent:GetEvent,
    otherEvent: OtherEvent,
    counter:Counter,
    
 
  },
  {
    initialRouteName: "list",
    // drawerPosition:'right'
  }
);

export default createAppContainer(
  createSwitchNavigator({
    AuthStack: AuthNavigator,
    HomeStack: DrawerNavigator,
  })
);
