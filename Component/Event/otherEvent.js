import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import backendUrl from '../enviroment';

export default function OtherEvent(){
    const [otherEvent, setOtherEvent] = useState('')
    useEffect(() =>{
        console.log('use Effect from Others Event')
        getOtherEvent();
    })

    const getOtherEvent = async ()=>{
        let id = await AsyncStorage.getItem("mongodb-id")
        const requestOptions ={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                userId:id
            })
        };

        await fetch(`${backendUrl}/otherEvent`, requestOptions)
        .then (response =>response.json())
    .then(data =>{
      console.log('data form other event', data.data)
      // console.log('data form event', data.message)

      if(data.status == true){
        setEvent(data.data)
      }else {
        alert(data.message)
      }
      
    }).catch(err => console.log('err from getEvent', err))
    }
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