import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { LoadAssets } from "../components";
import colors from "../constants/colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

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

const FavStack = createStackNavigator();
const FavNavigator = () => {
  return (
    <FavStack.Navigator
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? colors.primaryColor : "white",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : colors.primaryColor,
        headerTitle: "Your Favorites",
        headerTitleStyle: { fontSize: 22, fontFamily: "bold" },
      }}
    >
      <FavStack.Screen
        name="Favorites"
        component={FavoritesScreen}
      ></FavStack.Screen>
      <FavStack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
      ></FavStack.Screen>
    </FavStack.Navigator>
  );
};

const Tab: any =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealsTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      shifting={true}
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
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color }: any) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "ios-star" : "ios-star-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={AuthMealsNavigator}
        options={{
          tabBarColor: colors.primaryColor,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavNavigator}
        options={{
          tabBarColor: colors.accentColor,
        }}
      />
    </Tab.Navigator>
  );
};

const FilterStack = createStackNavigator();

const FilterNav = () => {
  return (
    <FilterStack.Navigator
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
      <FilterStack.Screen
        name="FilterScreen"
        component={FiltersScreen}
      ></FilterStack.Screen>
    </FilterStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
export default function MainNavigator() {
  return (
    <LoadAssets {...{ fonts }}>
      <StatusBar style="dark" />
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: colors.primaryColor,
          labelStyle: {
            fontFamily: "bold",
            fontSize: 18,
          },
        }}
      >
        <Drawer.Screen
          name="MealsFavs"
          options={{ title: "Meals" }}
          component={MealsTab}
        ></Drawer.Screen>
        <Drawer.Screen name="Filters" component={FilterNav}></Drawer.Screen>
      </Drawer.Navigator>
    </LoadAssets>
  );
}
