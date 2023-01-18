import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react"
import { AddItem, AddModal } from "./components"
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
      <AddModal
      isModalVisible={isModalVisible}
      selectedTask={selectedTask}
      onHandleCancel={onHandleCancel}
      onHandleDelete={onHandleDelete}
      />
    </View>
  );
}

export default App