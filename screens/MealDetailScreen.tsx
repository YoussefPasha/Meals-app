import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MealDetailScreenProps {}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const MealDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetail Screen!</Text>
    </View>
  );
};

export default MealDetailScreen;
