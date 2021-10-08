import React from 'react';
import {View, Text,StyleSheet,Button,TouchableOpacity} from 'react-native';
import ListScreen from  './screen/listScreen';

// export default function Auth({navigation})
export default function Auth(props) {
    console.log(props)
    const name="Arfeen"
    return(
        <View>
            <Text>Auth Component</Text>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text styles={{fontSize:20}}>My name is {name}</Text>
            <Button 
            onPress={() => props.navigation.navigate('list')}
            title="Go to component "/>
            <TouchableOpacity onPress={() => props.navigation.navigate('list')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('list')}> */}
                <Text>Go to list Demo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize: 10
    }
})