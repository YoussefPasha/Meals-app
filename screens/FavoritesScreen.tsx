import React, { useEffect } from "react";
import { Text, View } from "react-native";
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

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "regular", fontSize: 16 }}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
