import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components";

const CategoriesScreen = (props: any) => {
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
