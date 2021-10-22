import React, { useEffect, useState } from 'react';
import { View, FlatList,Text, StyleSheet, Button, TextInput } from "react-native";
import backendUrl from '../enviroment';

export default function GetEvent(){
const [event, setEvent] = useState('')
  useEffect(()=>{
    console.log('use Effect from getEvent')
    getEvent();
  }, [])

  const getEvent = async () =>{
    const requestOptions = {
      method:'GET',
      headers:{'Content-Type':'application/json'},
    };
    await fetch(`${backendUrl}/getEvent`)
    .then (response =>response.json())
    .then(data =>{
      console.log('data form event', data.data)
      console.log('data form event', data.message)

      if(data.status == true){
        setEvent(data.data)
      }else {
        alert(data.message)
      }
      
    }).catch(err => console.log('err from getEvent', err))
  }
  return(
      <View>
          <Text>GetEvent</Text>
          <FlatList
          keyExtractor={event => event.eventTitle} 
          data={event}
          renderItem={({item}) =>{
            return <Text>Title = {item.eventTitle}{'\n'}Venue = {item.eventVenue}{'\n'}Fee= {item.eventFee}{'\n'}Date= {item.eventDate.toString().substr(4, 12)}{'\n'}Time= {item.eventTime}{'\n'}</Text>
          }}/>
      </View>
  )
}
const styles = StyleSheet.create({
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