import React from "react";
import { MealList } from "../components";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props: any) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
