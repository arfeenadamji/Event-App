import React,{useEffect, useState} from 'react';
import {View, Text,Button, TextInput, StyleSheet} from 'react-native';
import backendUrl from '../enviroment';

export default function ProfileScreen(props) {
    const profile=props.navigation.getParam('profile')
    console.log("profile",profile) 
    
    const getElement = async () => {
        props.navigation.navigate("list");
      };

    const [email, setEmail] = useState(profile.data[0].email )
    const [pass, setPass] = useState(profile.data[0].password)
    const[firstName,setFirstName] = useState(profile.data[0].firstName)
    const [lastName, setLastName] = useState(profile.data[0].lastName)
    const [user, setUser] = useState([]);

   useEffect(() =>{
       console.log('use Effect from Profile Screen');
    //    updateUser();
   },[])

    const updateUser= async() =>{
        const data={
            firstName: firstName, 
            lastName: lastName,
            id:profile.data[0]._id 
        }
        console.log("data",data)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(data)
        };
        // await fetch('http://192.168.18.78:3000/updateUser',requestOptions)
        await fetch(`${backendUrl}/updateUser`,requestOptions)
        
        .then(response => response)
        .then(data =>{
            console.log('profileData', data.data)
        }).catch(err=>console.log("err",err))
    }
    return(
        <View>
            <Text style={styles.heading}>Edit User Profile</Text>
            <View style={{flexDirection:'row'}}>
        <TextInput 
        style= {styles.name}
        autoCapitalize='none'
        placeholder="First Name"
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
        />
        <TextInput 
        placeholder="Last Name"
        autoCapitalize='none'
        style={styles.name}
        value={lastName}
        onChangeText={(lastName) =>setLastName(lastName)}
        />
        </View>
        <TextInput 
        placeholder="Email"
        autoCapitalize='none'
        value={email}
        onChangeText={(email) => setEmail(email)}
        style= {styles.input}
        />
        
        <TextInput 
        placeholder="password"
        autoCapitalize='none'
        value={pass}
        onChangeText={(pass) => setPass(pass)}
        style={styles.input}
        />

        <Button 
        style={styles.btn}
        title="Update User"
        onPress={() => updateUser()}
        />
        <View 
                style={{
                    paddingTop:19
                }}
            />
 <Button onPress={() => getElement()} title="View User" />
    </View>
)
}

const styles= StyleSheet.create({

name:{
    height: 40,
    width:'40%',
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
heading:{
    textAlign:'center',
    fontSize:30
}
})