import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton, MealList } from "../components";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props: any) => {
  const { setOptions } = props?.navigation;

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              props?.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [setOptions]);
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
