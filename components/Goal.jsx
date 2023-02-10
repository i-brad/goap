import {
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Goal = ({
  id,
  name,
  description,
  achieved,
  deleteHandler,
  achievedHandler,
}) => {
  return (
    <View style={[styles.container, styles.textContainer]}>
      <View>
        <Text
          style={
            achieved ? [styles.textName, styles.textAchieved] : styles.textName
          }
        >
          {name}
        </Text>
        <Text
          style={
            achieved
              ? [styles.textDescription, styles.textAchieved]
              : styles.textDescription
          }
        >
          {description}
        </Text>
      </View>
      <View style={styles.container}>
        {achieved ? (
          <EvilIcons
            name="undo"
            onPress={achievedHandler.bind(this, id)}
            size={28}
            color="black"
          />
        ) : (
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={28}
            color="#30bd28"
            onPress={achievedHandler.bind(this, id)}
          />
        )}
        <MaterialCommunityIcons
          name="close-circle-outline"
          size={28}
          color="#e66a6a"
          onPress={deleteHandler.bind(this, id)}
        />
      </View>
    </View>
  );
};

export default Goal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  textDescription: {
    fontSize: 12,
    opacity: 0.65,
    maxWidth: 250,
  },
  textContainer: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: 5,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  textAchieved: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  achievedButton: {
    opacity: 0.3,
  },
});
