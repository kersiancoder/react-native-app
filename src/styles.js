import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
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