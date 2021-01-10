import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import { CustomHeaderButton } from "../components";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const MealDetailScreen = (props: any) => {
  const mealId = props?.route?.params?.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const { setOptions } = props?.navigation;

  useEffect(() => {
    setOptions({
      headerTitle: selectedMeal?.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log("FAV!");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [setOptions]);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
    </View>
  );
};

export default MealDetailScreen;
