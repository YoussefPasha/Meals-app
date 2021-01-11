import React, { useEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealList } from "../components";

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

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
