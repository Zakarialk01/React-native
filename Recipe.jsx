import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipeHome from "./Recipehome";
import RecipeSearch from "./Recipesearch";
import RecipeWishlist from "./Recipewishlist";
import Ionicons from "react-native-vector-icons/Ionicons";
const Recipe = ({ navigation }) => {
  //Screen names
  const Tab = createBottomTabNavigator();
  const homeName = "homeRecipe";
  const detailsName = "searchRecipe";
  const wishListName = "WishListRecipe";
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <Tab.Navigator
      mode="card"
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        cardStyle: { flex: 1 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === wishListName) {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#e90052",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 5, fontSize: 10 },
        style: { padding: 20, height: 70 },
      }}
    >
      <Tab.Screen name={homeName} component={RecipeHome} />
      <Tab.Screen name={detailsName} component={RecipeSearch} />
      <Tab.Screen name={wishListName} component={RecipeWishlist} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default Recipe;
