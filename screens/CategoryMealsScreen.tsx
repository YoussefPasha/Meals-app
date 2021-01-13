import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import { MealList } from "../components";

const CategoryMealsScreen = (props: any) => {
  const catId = props.route.params.categoryId;

  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

  const availableMeals = useSelector((state: any) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal: any) => meal.categoryIds.indexOf(catId) >= 0
  );

  const { setOptions } = props.navigation;
  useEffect(() => {
    setOptions({ headerTitle: selectedCat?.title });
  }, [setOptions]);

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
