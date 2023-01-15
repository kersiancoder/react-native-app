import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react"

export default function App() {
  
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
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
  
  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }

  const renderItem = ({ item}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
  )

  const keyExtractor = (item) => item.id;

  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task)  => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
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
        <Button
          style={styles.inputButton}
          disabled={!task}
          title="Add"
          onPress={onHandlerSubmit} 
        />
      </View>
      <FlatList
        style={styles.listContainer}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title="Cancel"
              color="#2196f3"
              onPress={onHandleCancel}
            />
            <Button
              title="Delete"
              color="red"
              onPress={onHandleDelete}
            />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: "#212121",
  },
  selectedTask: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#212121",
    paddingVertical: 10,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
