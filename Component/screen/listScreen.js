import React from "react";
import {View, Text, StyleSheet, FlatList,TouchableOpacity} from 'react-native';

// export default function Auth({navigation})
export default function ListScreen(props){
// console.log(props)
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
        <View>
        <FlatList 
        keyExtractor={friend => friend.name}
        data={friends} renderItem={({item}) =>{
            return <Text>{item.name} - {item.age}</Text>
            // <Text></Text>
        }}></FlatList>
        <TouchableOpacity onPress={() => props.navigation.navigate('list')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('list')}> */}
                <Text>Go to list Demo</Text>
            </TouchableOpacity>
        </View>
    )
} 

const styles= StyleSheet.create({
    textStyle:{
        fontSize:30,
       
    }
})