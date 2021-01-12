import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import { CustomHeaderButton } from "../components";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  detailFont: {
    fontFamily: "regular",
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  boldTitle: {
    fontFamily: "bold",
    color: "black",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height * 0.3,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#CCC",
    borderWidth: 1,
    padding: 10,
  },
});

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.detailFont}>{props?.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props: any) => {
  const mealId = props?.route?.params?.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const { setOptions } = props?.navigation;

  useEffect(() => {
    setOptions({
      headerTitle: selectedMeal?.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log("FAV!");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [setOptions]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <ListItem style={{ ...styles.detailFont }}>
          {selectedMeal?.duration} m
        </ListItem>
        <ListItem style={{ ...styles.detailFont }}>
          {selectedMeal?.complexity.toUpperCase()}
        </ListItem>
        <ListItem style={{ ...styles.detailFont }}>
          {selectedMeal?.affordability}
        </ListItem>
      </View>
      <Text style={{ ...styles.detailFont, ...styles.boldTitle }}>
        Ingrediants
      </Text>
      {selectedMeal?.ingrediants.map((ingredient, index) => (
        <ListItem key={index}>{ingredient}</ListItem>
      ))}
      <Text style={{ ...styles.detailFont, ...styles.boldTitle }}>Steps</Text>
      {selectedMeal?.steps.map((step, index) => (
        <ListItem key={index}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

export default MealDetailScreen;
