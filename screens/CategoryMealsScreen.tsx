import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const CategoryMealsScreen = (props: any) => {
  const catId = props.route.params.categoryId;
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);
  const { setOptions } = props.navigation;
  useEffect(() => {
    setOptions({ headerTitle: selectedCat?.title });
  }, [setOptions]);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
      <Text>{selectedCat?.title}</Text>
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
