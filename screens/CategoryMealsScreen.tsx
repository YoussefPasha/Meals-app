import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import { MealList } from "../components";
import { Text, View } from "react-native";

const CategoryMealsScreen = (props: any) => {
  const catId = props.route.params.categoryId;

  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

  const availableMeals = useSelector((state: any) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal: any) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "regular", fontSize: 16 }}>
          No meals found. maybe check your filters!
        </Text>
      </View>
    );
  }

  const { setOptions } = props.navigation;
  useEffect(() => {
    setOptions({ headerTitle: selectedCat?.title });
  }, [setOptions]);

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
