import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function ListScreen(){
    const friends = [
        {name:'Friend-1' , age:'Age-20'},
        {name:'Friend-2' , age:'Age-20'},
        {name:'Friend-3' , age:'Age-20'},
        {name:'Friend-4' , age:'Age-20'},
        {name:'Friend-5' , age:'Age-20'},
        {name:'Friend-6' , age:'Age-20'},
        {name:'Friend-7' , age:'Age-20'},
        {name:'Friend-8' , age:'Age-20'},
        {name:'Friend-9' , age:'Age-20'},
       {name:'Friend-10' , age:'Age-20'},
    ];
    
    return(
        <FlatList 
        keyExtractor={friend => friend.name}
        data={friends} renderItem={({item}) =>{
            return <Text>{item.name} - {item.age}</Text>
            // <Text></Text>
        }}></FlatList>
    )
} 

const styles= StyleSheet.create({
    textStyle:{
        fontSize:30,
       
    }
})