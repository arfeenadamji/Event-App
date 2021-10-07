import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import ComponentScreen from './screen/componentScreen';


export default function Auth() {
    const name="Arfeen"
    return(
        <View>
            <Text>Auth Component</Text>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text styles={{fontSize:20}}>My name is {name}</Text>
            <ComponentScreen />
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize: 40
    }
})