import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react"

export default function App() {
  const [task, setTask] = useState("");
  
  const onHandlerChange = (text) => {
    setTask(text)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Add a new task"
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          value={task}
          onChangeText={onHandlerChange}
          />
        <Button style={styles.inputButton} title="Add" />      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    width: "80%",
    borderBottomColor: "#626893",
    borderBottomWidth: 1,
    height: 40,
    color: "#212121",
  },
});
