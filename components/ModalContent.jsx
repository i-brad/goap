import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { CloseButton, SubmitButton } from "./Button";

const ModalContent = ({ closeModal, handler }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const onSubmitHandler = () => {
    if (!name) {
      Alert.alert("Error", "Please enter a name for your goal", [
        {
          text: "OK",
          style: "destructive",
        },
      ]);
      return;
    }

    handler(name, description);
    closeModal();
  };
  return (
    <View style={styles.container}>
      <CloseButton onPress={closeModal} />
      <Text style={styles.textHeader}>Add New Goal</Text>
      <View>
        <View style={styles.inputContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Name</Text>
            <Text style={[styles.textSmall, { alignSelf: "flex-start" }]}>
              *
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(value) => setName(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Description</Text>
            <Text style={styles.textSmall}>(Optional)</Text>
          </View>
          <TextInput
            style={styles.textInput}
            textAlignVertical="top"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={(value) => setDescription(value)}
          />
        </View>
        <SubmitButton onPress={onSubmitHandler} />
      </View>
    </View>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "95%",
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 40,
    elevation: 35,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    marginBottom: 3,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#ddb52f",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textSmall: {
    opacity: 0.5,
    marginLeft: 5,
  },
});
