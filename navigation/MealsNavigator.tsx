import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { LoadAssets } from "../components";
import { Dimensions } from "react-native";

const fonts = {
  regular: require("../assets/fonts/OpenSans-Regular.ttf"),
  bold: require("../assets/fonts/OpenSans-Bold.ttf"),
};
const AuthenticationStack = createStackNavigator();
const AuthMealsNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      headerMode="float"
      screenOptions={{
        headerTitle: "Meals App",
        headerTitleStyle: {
          position: "absolute",
          left: Dimensions.get("window").width / 3,
          top: -10,
          fontSize: 20,
          fontWeight: "bold",
          color: "#E64A19",
        },
      }}
    >
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
      <StatusBar style="dark" />
      <AuthMealsNavigator />
    </LoadAssets>
  );
}
