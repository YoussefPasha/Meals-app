import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  detailFont: {
    fontFamily: "regular",
    fontSize: 16,
  },
});

interface MealItemProps {
  onSelectMeal: VoidFunction;
  image: string;
  title: string;
  affordability: string;
  complexity: string;
  duration: string;
}

const MealItem = ({
  onSelectMeal,
  image,
  title,
  affordability,
  complexity,
  duration,
}: MealItemProps) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.detailFont}>{duration} m</Text>
            <Text style={styles.detailFont}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailFont}>{affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;
