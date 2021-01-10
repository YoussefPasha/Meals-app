import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../components";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

const CategoryMealsScreen = (props: any) => {
  const catId = props.route.params.categoryId;

  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const { setOptions } = props.navigation;
  useEffect(() => {
    setOptions({ headerTitle: selectedCat?.title });
  }, [setOptions]);

  const renderMealItem = (itemData: any) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetailScreen", {
            mealId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default CategoryMealsScreen;
