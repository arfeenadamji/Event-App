import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
// import { Input } from 'react-native-elements';


export default function Auth(props) {
    // console.log(props);
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const login = async ()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email,pass:pass })
        };
       await fetch('http://192.168.18.147:3000/app', requestOptions)
            .then(response => response.json())
            .then(data => {console.log('data',data)
            if(data.status == true){
                props.navigation.navigate('list')
            }else{
                alert('user already exist')
            }
        });
    }
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <TextInput
                placeholder="Email"
                style={styles.inputEmail}
                onChangeText={(email) => setEmail(email)}
            />

            <TextInput
                placeholder="Password"
                style={styles.inputPassword}
                onChangeText={(email) => setPass(email)}
            />
            <Button
                style={styles.btn}
                
                // onPress={() => props.navigation.navigate('list')}
                onPress={()=>login()}
                title="Login " />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 10
    },
    inputEmail: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: 40,
        marginTop:20
    },
    inputPassword:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: 40,
    },
    btn: {
        margin: 100,
    }
})