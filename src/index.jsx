import { Button, FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react"
import { AddItem } from "./components"
import { colors } from "./constants/theme/colors"


import { styles } from "./styles"

const App = () => {
  
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
      <AddItem 
      buttonColor={colors.primary}
      buttonText="Add"
      onHandlerChange={onHandlerChange}
      onHandlerSubmit={onHandlerSubmit}
      placeholder="Add a new task"
      task={task}
      />
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

export default App