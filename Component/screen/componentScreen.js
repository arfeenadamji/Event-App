import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function ComponentScreen(){
    return(
        <View>
            <Text style={styles.textStyle}>componentScreen</Text>
        </View>
    )
} 

const styles= StyleSheet.create({
    textStyle:{
        fontSize:30,
       
    }
})