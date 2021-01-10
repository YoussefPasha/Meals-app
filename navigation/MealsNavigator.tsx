import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { LoadAssets } from "../components";
import colors from "../constants/colors";
import FavoritesScreen from "../screens/FavoritesScreen";

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
        headerTitleStyle: { fontSize: 22, fontFamily: "bold" },
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
        options={{
          headerTitle: "",
        }}
      />
    </AuthenticationStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function MealsTabNavigator() {
  return (
    <LoadAssets {...{ fonts }}>
      <StatusBar style="dark" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primaryColor,
          inactiveTintColor: "gray",
          style: {
            backgroundColor: "#E1BEE7",
          },
          labelStyle: {
            fontSize: 14,
            fontFamily: "bold",
          },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === "Home") {
              iconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "ios-star" : "ios-star-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={AuthMealsNavigator} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </LoadAssets>
  );
}
