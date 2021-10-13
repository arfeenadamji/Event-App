import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
// import { Input } from 'react-native-elements';
import backendUrl  from '../Component/enviroment'


export default function Auth(props) {
    // console.log(props);
    const [email, setEmail] = useState('hello@test.com')
    const [pass, setPass] = useState('test123')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState()

    const login = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, pass: pass})
        };
        await fetch(`${backendUrl}/login`, requestOptions)
        .then(response => response.json())
            .then(data => {
                console.log('data', data)
                if (data.status == true) {
                    props.navigation.navigate('Profile',{profile:data})
                    console.log("user already created")
                } else {
                    alert(data.message);
                }
            }).catch(err=> console.log('err',err))
    }
    return (
        <View>
            <Text style={styles.heading}>Login Screen</Text>
            <TextInput
                placeholder="Email"
                autoCapitalize='none'
                style={styles.inputEmail}
                onChangeText={(email) => setEmail(email)}
            />

            <TextInput
                placeholder="Password"
                autoCapitalize='none'
                style={styles.inputPassword}
                onChangeText={(p) => setPass(p)}
            />
            <Button
                style={[styles.btn]}
                onPress={() => props.navigation.navigate('list')}
                onPress={() => login()}
                title="Login " />
            <View 
                style={{
                    paddingTop:19
                }}
            />
            <Button
                style={[styles.btnR]}
                title="Register User"
                onPress={() => props.navigation.navigate('Register')}
            />
            
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
        marginTop: 10
    },
    heading:{
        textAlign:'center',
        fontSize:30
    },
    btnR: {
        margin: 100,
        marginTop:50,
        paddingTop:50
        // marginTop: '100px',
        // paddingTop: '100px'
    },
})