import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import backendUrl from "../enviroment";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const value="hello"
  const getElement = async () => {
    props.navigation.navigate("list");
  };

  const Register = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        pass: pass,
        firstName: firstName,
        lastName: lastName,
      }),
    };
    await fetch(`${backendUrl}/register`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.status == true) {
          // props.navigation.navigate('list')
          alert("user register");
          console.log("user already created");
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <View>
      <Text style={styles.heading}>Sign-Up</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.name}
          autoCapitalize="none"
          placeholder="First Name"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <TextInput
          placeholder="Last Name"
          autoCapitalize="none"
          style={styles.name}
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(email) => setEmail(email)}
        style={styles.input}
      />

      <TextInput
        placeholder="password"
        autoCapitalize="none"
        onChangeText={(pass) => setPass(pass)}
        style={styles.input}
      />

      <Button
        style={styles.btn}
        title="Register User"
        onPress={() => Register()}
      />
      <View
        style={{
          paddingTop: 19,
        }}
      />
      <Button onPress={() => getElement()} title="View User" />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    height: 40,
    width: "40%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    margin: 100,
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
  },
});
