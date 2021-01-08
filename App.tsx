import React from "react";
import { Text } from "react-native";
import { LoadAssets } from "./components";
import { MealsNavigator } from "./navigation";

const fonts = {
  Bold: require("./assets/fonts/OpenSans-Bold.ttf"),
  Regular: require("./assets/fonts/OpenSans-Regular.ttf"),
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <MealsNavigator />
    </LoadAssets>
  );
}
