import React, { useState } from 'react';
import {View, Text,StyleSheet, Button} from 'react-native';
import { Icon } from 'react-native-elements'


// import { AntDesign } from '@expo/vector-icons'; 


export default function Img(){

    return(
       
        <View style={styles.container}>
          
          <Icon
  name='edit'
  color='black' 
  onPress={() => alert('edit')}
  />
  <Icon
  name='delete'
  color='black' 
  onPress={() => alert('delete')}
  />
      </View>
    )

}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      alignSelf: 'flex-end',
    marginRight:20

    },
  });
