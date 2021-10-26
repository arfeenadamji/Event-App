import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export default function OtherEvent(){
  return(
      <View style={styles.container}>
          <Text>OtherEvent</Text>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    textStyle: {
      fontSize: 10,
    },
    inputEmail: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginBottom: 25,
    },
    inputPassword: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginBottom: 25,
    },
    btn: {
      margin: 100,
      marginTop: 10,
    },
    heading: {
      textAlign: "center",
      fontSize: 30,
    },
    btnR: {
      margin: 100,
      marginTop: 50,
      paddingTop: 50,
    },
  });