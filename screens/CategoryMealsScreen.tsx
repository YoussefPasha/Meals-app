import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CategoryMealsScreenProps {}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
    </View>
  );
};

export default CategoryMealsScreen;
