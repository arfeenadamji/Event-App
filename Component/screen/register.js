import React, {useState} from 'react';
import {View, TextInput, Button,StyleSheet} from 'react-native';

export default function Register(props){
    
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');

    const getElement = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, pass: pass })
        };
        await fetch('http://192.168.18.147:3000/getElement')
            .then(response => response.json())
            .then(data => {
                console.log('data', JSON.stringify(data))
                if (data.status == true) {
                    // props.navigation.navigate('list')
                    // alert('user register')
                    console.log("user already created")
                } else {
                    alert(data.message)
                }
            }).catch(err=> console.log('err',err))
            ;
    }


    const Register = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, pass: pass })
        };
        await fetch('http://192.168.18.147:3000/Register', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                if (data.status == true) {
                    // props.navigation.navigate('list')
                    alert('user register')
                    console.log("user already created")
                } else {
                    alert(data.message)
                }
            });
    }

    return(
        <View>
            <TextInput 
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            style= {styles.inputEmail}
            />
            
            <TextInput 
            placeholder="password"
            onChangeText={(pass) => setPass(pass)}
            style={styles.inputPassword}
            />

            <Button 
            style={styles.btn}
            title="Register User"
            onPress={() => Register()}
            />

            <Button 
            title="GetElement"
            onPress={() => getElement()}
            />
        </View>
    )
}

const styles= StyleSheet.create({
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