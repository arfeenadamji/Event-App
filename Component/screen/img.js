import React, { useState } from 'react';
import {View, Text,StyleSheet, Button} from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment';

// import { AntDesign } from '@expo/vector-icons'; 


export default function Img(){

  // const [dateToShow, setDateToShow] = useState('');
  // const [date, setDate] = useState('2012-10-01T09:45:00.000+02:00');


  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);
  // const [title, setTitle] = useState('abc');
  // const [venue, setVenue] = useState("abc123");

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  //   setDateToShow(moment(currentDate).format("YYYY-MM-DD"));

  // };
    return(
       
        <View>
          <Text> img</Text>
        {/* <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
      /> 
       <Text>{dateToShow}</Text>*/}
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
  });
