import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CustomHeaderButton } from "../components";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  font: {
    fontFamily: "regular",
    fontWeight: "normal",
    fontSize: 16,
  },
});

const FilterSwitch = (props: any) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.font}> {props?.label} </Text>
      <Switch
        value={props?.valueOfSwitch}
        onValueChange={props?.onChange}
        trackColor={{ true: colors.primaryColor, false: "gray" }}
        thumbColor="white"
      />
    </View>
  );
};

const FiltersScreen = (props: any) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      isVegan: isVegan,
      isVegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  };

  const { setOptions } = props?.navigation;
  const { navigation } = props;

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Save" iconName="ios-save" onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, [setOptions, saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        valueOfSwitch={isGlutenFree}
        onChange={(newVal: boolean) => setIsGlutenFree(newVal)}
      />
      <FilterSwitch
        label="Lactose-Free"
        valueOfSwitch={isLactoseFree}
        onChange={(newVal: boolean) => setIsLactoseFree(newVal)}
      />
      <FilterSwitch
        label="Vegan"
        valueOfSwitch={isVegan}
        onChange={(newVal: boolean) => setIsVegan(newVal)}
      />
      <FilterSwitch
        label="Vegetarian"
        valueOfSwitch={isVegetarian}
        onChange={(newVal: boolean) => setIsVegetarian(newVal)}
      />
    </View>
  );
};

export default FiltersScreen;
