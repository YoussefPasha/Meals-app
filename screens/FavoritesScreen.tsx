import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface FavoritesScreenProps {}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen!</Text>
    </View>
  );
};

export default FavoritesScreen;
