import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { LoadAssets } from "../components";

const fonts = {
  regular: require("../assets/fonts/OpenSans-Regular.ttf"),
  bold: require("../assets/fonts/OpenSans-Bold.ttf"),
};
const AuthenticationStack = createStackNavigator();
const AuthMealsNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      />
      <AuthenticationStack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
      />
      <AuthenticationStack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
      />
    </AuthenticationStack.Navigator>
  );
};

export default function MealsNavigator() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthMealsNavigator />
    </LoadAssets>
  );
}
