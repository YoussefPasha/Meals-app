import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { LoadAssets } from "../components";
import colors from "../constants/colors";

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
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? colors.primaryColor : "white",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : colors.primaryColor,
      }}
    >
      <AuthenticationStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerTitle: "Meal Categories",
        }}
      />
      <AuthenticationStack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
        options={{
          headerTitle: "",
        }}
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
