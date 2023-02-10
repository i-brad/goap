import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Goal from "./Goal";

const Goals = ({ goals, deleteHandler, achievedHandler }) => {
  return (
    <View style={styles.bodyContainer}>
      {goals.length === 0 && <Text style={styles.emptyText}>No Goals Yet</Text>}
      {goals.length > 0 && (
        <FlatList
          data={goals}
          style={styles.container}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Goal
              deleteHandler={deleteHandler}
              achievedHandler={achievedHandler}
              id={item.id}
              name={item.name}
              achieved={item.achieved}
              description={item.description}
            />
          )}
        />
      )}
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  emptyText: {
    fontSize: 20,
    textAlign: "center",
    opacity: 0.3,
  },
});
