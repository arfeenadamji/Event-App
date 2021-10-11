import React, { useEffect,useState } from "react";
import {View, Text, StyleSheet, FlatList,TouchableOpacity} from 'react-native';

// export default function Auth({navigation})
export default function ListScreen(props){

    const [users, setUsers] = useState([]);
    

    useEffect(()=>{
        console.log("Use Effect ")
        getElement();
       

    },[])

    const getElement = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },      
        };
        await fetch('http://192.168.18.147:3000/getElement')
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                if (data.status == true) {
                    setUsers(data.data)
                    // props.navigation.navigate('list')
                    // alert('user register')
                    console.log("user already created")
                } else {
                    alert(data.message)
                }
            }).catch(err=> console.log('err',err))
            ;
    }



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
              <Text>Go to list Demo</Text>
        <FlatList 
        keyExtractor={friend => friend.email}
        data={users} renderItem={({item}) =>{
            return <Text>{item.email} - {item.password}</Text>
            // <Text></Text>
        }}></FlatList>
        <TouchableOpacity onPress={() => props.navigation.navigate('list')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('list')}> */}
              
            </TouchableOpacity>
        </View>
    )
} 

const styles= StyleSheet.create({
    textStyle:{
        fontSize:30,
       
    }
})