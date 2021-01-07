import React from "react";
import { Text, View } from "react-native";
import { LoadAssets } from "./components";

const fonts = {
  Bold: require("./assets/fonts/OpenSans-Bold.ttf"),
  Regular: require("./assets/fonts/OpenSans-Regular.ttf"),
};

export default function App() {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
