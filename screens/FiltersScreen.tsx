import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../components";

interface FiltersScreenProps {}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const FiltersScreen = (props: any) => {
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
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen!</Text>
    </View>
  );
};

export default FiltersScreen;
