import React from "react";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { MealsNavigator } from "./navigation";
import mealsReducer from "./store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
