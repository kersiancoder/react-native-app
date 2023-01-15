import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react"

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([])
  
  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask("");
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
          placeholder="Add a new task"
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          value={task}
          onChangeText={onHandlerChange}
          />
        <Button style={styles.inputButton}
          disabled={!task}
          title="Add"
          onPress={onHandlerSubmit} 
        />
      </View>
      <View style={styles.listContainer}>
        {
          tasks.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Text style={styles.itemList}>{item.value}</Text>
            </View>
          ))
        }
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
  inputButton: {
    borderRadius: 10,
  },
  listContainer: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#2196f3",
    marginBottom: 10,
    borderRadius: 10,
  },
  itemList: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
