import React,{useState} from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import backendUrl from "../enviroment";

const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};

const showDatepicker = () => {
  showMode("date");
};

const showTimepicker = () => {
  showMode("time");
};
export default function CreateEvent (){
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('abc');
  const [venue, setVenue] = useState("abc123");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const CreateEvent = async()=>{
    const requestOptions = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        title:title,
        venue:venue
      }),
    };

    await fetch(`${backendUrl}/createEvent`, requestOptions)
    .then((response) => response.json())
    .then((data) =>{
      console.log("data from event", data);
      if (data.status == true) {
        alert("event created");
        console.log("event created");
      } else {
        alert(data.message);
      }
    })
  }
  return (
    <View style={styles.container}>
      <Text>Create Event</Text>
       <TextInput
        placeholder="title"
        autoCapitalize="none"
        onChangeText={(title) => setTitle(title)}
        style={styles.name}
        value={title}
      />
       <TextInput
        placeholder="Venue"
        autoCapitalize="none"
        onChangeText={(venue) => setVenue(venue)}
        style={styles.name}
        value={venue}
      />
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )} */}

<Button
        style={styles.btn}
        title="Create Event"
        onPress={() => CreateEvent()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
    paddingTop: 150,
    padding: 10,
  },
  name: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
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
