import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface CategoryMealsScreenProps {}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const CategoryMealsScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("MealDetailScreen");
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;
