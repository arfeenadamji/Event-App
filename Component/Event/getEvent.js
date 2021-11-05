import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, ScrollView, Button, TextInput } from "react-native";
import backendUrl from '../enviroment';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from 'react-native-elements'


export default function GetEvent() {
  const [event, setEvent] = useState('')
  useEffect(() => {
    console.log('use Effect from getEvent')
    getEvent();
  }, [])

  const deleteEvent = async (item) =>{

    let userId= await AsyncStorage.getItem("user-id")
    let eventId = item._id
    let type= item.type
    
    const requestOptions={
      method:"POSt",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
        userId: userId,
        eventId:eventId,
        type:type
      })
    }

    await fetch(`${backendUrl}/deleteEvent`, requestOptions)
    .then(response =>response.json())
    .then(data =>{
      console.log('data from delete event', data)
    })

}
  const getEvent = async () => {
    let adminId = '6173f09870b2e06b497746c4'

    let id = await AsyncStorage.getItem("user-id")
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: id === adminId ? '' : id
      })
    };
    await fetch(`${backendUrl}/getEvent`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('data form event', data.data)
        // console.log('data form event', data.message)
        let temp = []
        data.data.map((event) => {
          event.type = 'created'
          temp.push(event)
          // temp.push(a)

        })
        let a = [...data.data[0].userId.eventId]
        a.map(eve => {
          eve.eventTitle = eve.eventTitle + '(joined)'
          eve.type = 'joined'
          temp.push(eve)
        })

        console.log('..a.dadahdjkasbhdjkasbhdjk', temp)
        if (data.status == true) {
          // setEvent(data.data)
          setEvent(temp) // jooin event also
        } else {
          alert(data.message)
        }

      }).catch(err => console.log('err from getEvent', err))
  }
  return (
    <View>
      <Text style={{ marginTop: 20 }}>GetEvent</Text>

      <FlatList
        style={{ marginTop: 10, marginLeft: 10, }}
        keyExtractor={event => event.eventTitle}
        data={event}
        renderItem={({ item }) => {
          return <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%'}}>
            <Text>Title = {item.eventTitle}{'\n'}Venue = {item.eventVenue}{'\n'}Fee= {item.eventFee}{'\n'}Date= {item.eventDate.toString().substr(4, 12)}{'\n'}Time= {item.eventTime}{'\n'}
          </Text>
            <Icon
              name='delete'
              color='black'
              onPress={() => deleteEvent(item)}
            />
          </View>
        }} />
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