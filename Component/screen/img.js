import React, { Component } from 'react';
import {View, Text,StyleSheet, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import { Header } from 'react-native-elements';

<Header
     leftComponent={{ icon: 'menu', color: '#fff' }}
     centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
/>

class Img extends Component{
    render(){
    return(
        <View style={styles.container}>
        <Text style="">Img</Text>
        <AntDesign name="banckward" size={24} color="black"
        onPress={()=>this.props.navigation.navigate('list')}/> 
       
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Img;