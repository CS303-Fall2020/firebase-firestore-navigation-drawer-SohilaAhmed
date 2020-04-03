import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header2({ navigation }) {
  
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons name="menu" size={50} color="#333" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: "100%",
    width: "100%",
    backgroundColor: "coral",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1
  },
  menu: {
    position: "absolute",
    left: 10,
    top: 50
  }
});
