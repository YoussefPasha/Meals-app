import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface FiltersScreenProps {}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen!</Text>
    </View>
  );
};

export default FiltersScreen;
