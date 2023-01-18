import React from "react"
import { Modal, Button, View, Text } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

const AddModal = ({ 
    isModalVisible, 
    selectedTask, 
    onHandleDelete,
    onHandleCancel
}) => {


    
    return (
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
    )
}

export default AddModal;