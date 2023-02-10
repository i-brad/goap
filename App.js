import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Modal, SafeAreaView, StyleSheet, View } from "react-native";
import { AddButton } from "./components/Button";
import Goals from "./components/Goals";
import Header from "./components/Header";
import ModalContent from "./components/ModalContent";

export default function App() {
  const [isModalOpened, setModalState] = useState(false);
  const modalToggleHandler = () => setModalState(!isModalOpened);
  const [goals, setGoals] = useState([]);
  const [result, setResult] = useState([]);

  const goalHandler = (name, description) => {
    setGoals((prev) => [
      ...prev,
      { id: Date.now().toString(), name, description, achieved: false },
    ]);
    setResult([]);
  };

  const deleteGoalHandler = (id) => {
    let state = goals.filter((goal) => goal.id !== id);
    let stateR = result.filter((goal) => goal.id !== id);
    setGoals([...state]);
    setResult([...stateR]);
  };

  const achievedGoalHandler = (id) => {
    let state = goals.map((goal) => {
      if (goal.id === id) {
        goal.achieved = !goal.achieved;
      }
      return goal;
    });

    setGoals([...state]);
  };

  const searchHandler = (value) => {
    if (value) {
      let state = goals.filter((goal) =>
        goal.name.toLowerCase().includes(value.toLowerCase())
      );
      setResult([...state]);
    } else {
      setResult([]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBackground}></View>
      <SafeAreaView style={styles.containerInner}>
        <Header searchHandler={searchHandler} />
        <Goals
          goals={result.length > 0 ? result : goals}
          deleteHandler={deleteGoalHandler}
          achievedHandler={achievedGoalHandler}
        />
        <AddButton onPress={modalToggleHandler} />
        <Modal visible={isModalOpened} animationType="slide" transparent>
          <ModalContent closeModal={modalToggleHandler} handler={goalHandler} />
        </Modal>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    position: "relative",
  },
  containerInner: {
    flex: 1,
    position: "relative",
  },
  topBackground: {
    backgroundColor: "#ddb52f",
    height: 250,
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
  },
});
