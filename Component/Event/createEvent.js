import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import backendUrl from "../enviroment";
import moment from 'moment';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function CreateEvent(props) {

  const [title, setTitle] = useState('');
  const [venue, setVenue] = useState("");
  const [fee, setFee] = useState("");

  // const [dateToShow, setDateToShow] = useState('');
  // const [date, setDate] = useState('2012-10-01T09:45:00.000+02:00');

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  //   setDateToShow(moment(currentDate).format("YYYY-MM-DD"));
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  let newTime= new Date(time).getHours() +':'+ new Date(time).getMinutes()
  
  const CreateEvent = async () => {
    console.log('time',time)
    console.log(new Date(time).getHours() +':'+ new Date(time).getMinutes() > 10 ? + 0 : new
    Date(time).getMinutes())

    let id = await AsyncStorage.getItem("mongodb-id")
    let adminId ='6173f09870b2e06b497746c4'
    
   
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        venue: venue,
        fee:fee,
        date:date,
        time:newTime,
        userId: id
      }),
    };
    // console.log(id)
    // return
    await fetch(`${backendUrl}/createEvent`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data from events", data);
        // if (data.status == true) {
        //   alert("event created");
        //   console.log("event created");
        // } else {
        //   alert(data.message);
        // }
      })
  }
  return (
    <View style={{flex:1}}>
    <View 
    style={styles.container}>
      <Text style={{textAlign:'center'}}>Create Event</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}>Event Title</Text>
      <TextInput
        placeholder="title"
        autoCapitalize="none"
        onChangeText={(title) => setTitle(title)}
        style={styles.name}
        value={title}
      />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}>Event Venue</Text>
      <TextInput
        placeholder="Venue"
        autoCapitalize="none"
        onChangeText={(venue) => setVenue(venue)}
        style={styles.name}
        value={venue}
      />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}>Event Fee</Text>
      <TextInput
        placeholder="Fee"
        autoCapitalize="none"
        onChangeText={(fee) => setFee(fee)}
        style={styles.name}
        value={fee}
      />
      </View>
      {/* <Text style={{paddingLeft:20, fontWeight:'bold',fontSize:15}}>{dateToShow}</Text>
        <View
          style={styles.date}> 
        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
      /> 
  </View> */}
</View>
      <View style={styles.pickerContainer}>
        <DateTimePicker
          style={styles.picker}
          display="spinner"
          isVisible={isDatePickerVisible}
          // value={date}
          value={new Date(date)}
          mode="date"
          onChangeText={(date) => setDate(date)}
          onChange={(event,dates) => setDate(dates)}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <DateTimePicker
          isVisible={isDatePickerVisible}
          style={styles.picker}
          fontSize='10'
          value={time}
          display="spinner"
          mode="time"
          onChangeText={(time) => setTime(time)}
          onChange={(event,times) =>{
            // console.log(new Date(times))}}
            setTime(times)}}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
           <Text>{newTime.toString()}</Text>
           <Text>{date.toString().substr(4, 12)}</Text>
      </View>
      <View style={{height:'17%'}}>
      <Button
        title="Create Event"
        onPress={() => CreateEvent()}
      />

<Button
        title="Show Event"
        onPress={() => props.navigation.navigate("getEvent")}
      />
   </View>
   </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "yellow",

    // alignItems: "center",
    height:'38%',

    paddingTop: 30,
    padding: 10,
  },
  pickerContainer:{
    alignItems:'center',
    // backgroundColor:'red',
    // marginBottom:'100',
    height:'45%'
  },
  picker: {
    width: '80%',
    height: '30%',
    fontSize:10,
    // backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowContainer:{
    flexDirection:"row",
    height: 40,
    width: "30%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  label: {
    height: 40,
    width: "40%",
    margin: 12,
    fontWeight:'bold',
    padding: 10,
    borderRadius: 10,
  },
  name: {
    height: 40,
    width: "40%",
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    height: 40,
    width: "100%",
    margin: 12,
    fontSize: 25,
    fontWeight: 'bold',
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  date: {
    height: 40,
    width: "100%",
    margin: 12,
    padding: 10,
    borderRadius: 10,
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
    // margin: 100,
    // height:'40%',
    backgroundColor:'green',
    marginTop: -100,
    paddingTop:-100
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
  },
 
});
