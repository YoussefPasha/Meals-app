import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile, CustomHeaderButton } from "../components";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const CategoriesScreen = (props: any) => {
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

  const renderGridItem = (itemData: any) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMealsScreen", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

export default CategoriesScreen;
