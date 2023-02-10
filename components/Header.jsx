import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Header({ searchHandler }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Goals</Text>
      <View style={styles.inputContainer}>
        <EvilIcons name="search" size={32} color="#0000009a" />
        <TextInput
          style={styles.input}
          placeholder="Search for Goals"
          onChangeText={(value) => searchHandler(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 44,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  input: {
    marginTop: 5,
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 16,
  },
});
