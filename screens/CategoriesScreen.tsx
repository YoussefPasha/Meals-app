import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const CategoriesScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate("CategoryMealsScreen");
        }}
      />
    </View>
  );
};

export default CategoriesScreen;
