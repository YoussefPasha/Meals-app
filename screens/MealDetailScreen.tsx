import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const MealDetailScreen = (props: any) => {
  const mealId = props.route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const { setOptions } = props.navigation;

  useEffect(() => {
    setOptions({ headerTitle: selectedMeal?.title });
  }, [setOptions]);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
    </View>
  );
};

export default MealDetailScreen;
