import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList } from "react-native";
import backendUrl from '../enviroment';

export default function OtherEvent() {
  
  const [otherEvent, setOtherEvent] = useState('')
  useEffect(() => {
    getOtherEvent();
  }, [])

  const joinEvent= async(item) =>{
    let eventId= item._id
    //  await AsyncStorage.setItem("user-id", item._id);    
    let id = await AsyncStorage.getItem("user-id")
    const requestOptions={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        // title:item.eventTitle,
        // venue:item.eventVenue,
        // fee:item.eventFee,
        // date:item.eventDate.toString(),
        // time:item.eventTime,
        eventId:eventId,
        userId:id

      })
    };
    await fetch(`${backendUrl}/joinEvent`, requestOptions)
    .then(response => response.json())
    .then(data =>{
      console.log('data from join-1 event', data)
      if (data.status == true) {
        // setOtherEvent(data.data)
        console.log('event Id from join event', eventId)
      } else {
        alert(data.message)
      }
    }).catch(err => console.log('err from getEvent', err))  
  }
  const getOtherEvent = async () => {
    let id = await AsyncStorage.getItem("user-id")
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: id
      })
    };
    await fetch(`${backendUrl}/otherEvent`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('data form other event', data.data)
        if (data.status == true) {
          setOtherEvent(data.data)
        } else {
          alert(data.message)
        }
      }).catch(err => console.log('err from getEvent', err))
  }
  return (

    <View style={styles.container}>
      <Text>OtherEvent</Text>
      <FlatList
        keyExtractor={otherEvent => otherEvent.eventTitle}
        data={otherEvent}
        renderItem={({ item }) => {
          return <Text>Title = {item.eventTitle}{'\n'}Venue = {item.eventVenue}{'\n'}Fee= {item.eventFee}{'\n'}Date= {item.eventDate.toString().substr(4, 12)}{'\n'}Time= {item.eventTime}{'\n'} id={item._id}{'\n'} 
            <Button
              onPress={() => joinEvent(item)}
              title="join Event" />
          </Text>
        }}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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