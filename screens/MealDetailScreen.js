import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen!</Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
      <Button
        title="Go Back To Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailsScreen;
