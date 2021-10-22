import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import backendUrl from "../Component/enviroment";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Auth(props) {
  const [email, setEmail] = useState("hello@test.com");
  const [pass, setPass] = useState("test123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState();

  const login = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, pass: pass }),
    };
    await fetch(`${backendUrl}/login`, requestOptions)
      .then((response) => response.json())
      .then(async (data) => {
        console.log("data from auth", data);
        // console.log('data from auth', data.data[0]._id)
        if (data.status == true) {
          try {
            await AsyncStorage.setItem("mongodb-id", data.data[0]._id);
          } catch (e) {
            console.log("error from aysnc", e);
          }
          props.navigation.navigate("Profile", { profile: data });
          console.log("user already created");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.log("err", err));
  };
  return (
    <View>
      <Text style={styles.heading}>Login Screen</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        style={styles.inputEmail}
        onChangeText={(email) => setEmail(email)}
      />

      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        value={pass}
        style={styles.inputPassword}
        onChangeText={(p) => setPass(p)}
      />
      <Button
        style={[styles.btn]}
        onPress={() => props.navigation.navigate("list")}
        onPress={() => login()}
        title="Login "
      />
      <View
        style={{
          paddingTop: 19,
        }}
      />
      <Button
        style={[styles.btnR]}
        title="Register User"
        onPress={() => props.navigation.navigate("Register")}
      />
    </View>
  );
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
// app.get('/getElement',async (req,res) =>{
//   console.log("req.body",req.body)
//   await User.find().exec((err,resp)=>{
//       if(err){
//           console.log('err finding',err)
//       }
//       else{
//           console.log('user authenticate')
//           console.log('user',resp)
//           if(resp.length > 0){
//               res.send({message:'user exist',status:true,data:resp})
//            }else{
//               res.send({message:'user not found',status:false,data:resp})
//           }
//       }
//   })
// })