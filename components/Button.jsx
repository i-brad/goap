import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const AddButton = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{
          color: "#e7d9ab",
        }}
        style={styles.buttonContainerInner}
        onPress={onPress}
      >
        <MaterialIcons name="add" size={24} color="#fff" />
      </Pressable>
    </View>
  );
};

const CloseButton = ({ onPress }) => {
  return (
    <View style={styles.closeButtonContainer}>
      <Pressable
        android_ripple={{
          color: "#f09e9e8b",
        }}
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <MaterialCommunityIcons
          name="close-circle-outline"
          size={24}
          color="black"
        />
      </Pressable>
    </View>
  );
};

const SubmitButton = ({ onPress }) => {
  return (
    <View style={styles.submitButtonContainer}>
      <Pressable
        android_ripple={{
          color: "#eedc9eff",
        }}
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonContainerInner]
            : styles.buttonContainerInner
        }
      >
        <Text style={styles.buttonText}>Create</Text>
      </Pressable>
    </View>
  );
};

export { AddButton, CloseButton, SubmitButton };

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "#ddb52f",
    height: 55,
    width: 55,
    borderRadius: 100 / 2,
    zIndex: 100,
    elevation: 5,
    shadowColor: "#black",
    shadowRadius: 5,
    shadowOffset: 5,
    shadowOpacity: 0.75,
    overflow: "hidden",
  },
  buttonContainerInner: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 48 / 2,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.5,
  },
  submitButtonContainer: {
    borderRadius: 10,
    overflow: "hidden",
    width: 100,
    height: 50,
    backgroundColor: "#ddb52f",
  },
  submitButtonContainerInner: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
