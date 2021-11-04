import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Counter Screen</Text>
      <Button
        title="Increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
       <View
        style={{
          paddingTop: 19,
        }}
      />
      <Button
        onPress={() => {
          setCounter(counter - 1);
        }}
        title="decrease"
      />

      <Text>counter: {counter}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
