import React, { useEffect,useState } from "react";
import {View, StyleSheet,Text, ScrollView, FlatList,TouchableOpacity} from 'react-native';
import backendUrl from "../enviroment";


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
        await fetch(`${backendUrl}/getElement`)
            .then(response => response.json())
            .then(data => {
                console.log('data 12', data)
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



    // const friends = [
    //     {name:'Friend-1' , age:'Age-20'},
    //     {name:'Friend-2' , age:'Age-20'},
    //     {name:'Friend-3' , age:'Age-20'},
    //     {name:'Friend-4' , age:'Age-20'},
    //     {name:'Friend-5' , age:'Age-20'},
    //     {name:'Friend-6' , age:'Age-20'},
    //     {name:'Friend-7' , age:'Age-20'},
    //     {name:'Friend-8' , age:'Age-20'},
    //     {name:'Friend-9' , age:'Age-20'},
    //    {name:'Friend-10' , age:'Age-20'},
    // ];
    
    return(
        <ScrollView>
       
              <Text style={styles.heading}>User List</Text>
             
        <FlatList 
        keyExtractor={users => users.email}
        data={users} renderItem={({item}) =>{
            return <Text>FirstName= {item.firstName}{'\n'} LastName= {item.lastName}{'\n'} Email= {item.email} {'\n'} Password= {item.password}{'\n'}</Text>
           
        }} />
        
        <TouchableOpacity onPress={() => props.navigation.navigate('list')} />
        </ScrollView>
    )
} 

const styles= StyleSheet.create({
    textStyle:{
        fontSize:30,
        paddingLeft:'5px'
    },
    heading:{
        textAlign:'center',
        fontSize:30
    }
})