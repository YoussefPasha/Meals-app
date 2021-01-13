import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import { CustomHeaderButton, MealList } from "../components";

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

  const favMeals = useSelector((state: any) => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
