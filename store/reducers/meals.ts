import { MEALS } from "../../data/dummy-data";

const initialState: object = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action: any) => {
  return state;
};

export default mealsReducer;
