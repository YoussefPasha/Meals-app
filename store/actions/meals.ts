export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id: any) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilter = (filterSettings: object) => {
  return { type: SET_FILTERS, filters: filterSettings };
};
