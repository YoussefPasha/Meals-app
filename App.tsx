import React from "react";
import { enableScreens } from "react-native-screens";

import { MealsNavigator } from "./navigation";
enableScreens();

export default function App() {
  return <MealsNavigator />;
}
