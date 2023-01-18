import React from "react"
import { FlatList } from "react-native"
import TaskItem from "./item"
import { styles } from "./styles"

const TaskList = ({ tasks, onHandlerModal }) => {

    const renderItem = ({ item}) => (
        <TaskItem 
        item={item}
        onHandlerModal={onHandlerModal}
        />
      )
    
      const keyExtractor = (item) => item.id;

    return (
        <FlatList
        style={styles.listContainer}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    )
}

export default TaskList