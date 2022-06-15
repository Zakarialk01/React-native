import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Recipehome = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.title}>Hi,Welcome...😊</Text>

        <Text style={styles.right}>Hi,Welcome...😊</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-black",
    backgroundImage:
      "radial-gradient(circle at 99% 33%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 37%,transparent 37%, transparent 100%),radial-gradient(circle at 46% 16%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 43%,transparent 43%, transparent 100%),radial-gradient(circle at 99% 25%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),radial-gradient(circle at 57% 88%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 86%,transparent 86%, transparent 100%),radial-gradient(circle at 82% 78%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),linear-gradient(90deg, rgb(56,0,56),rgb(56,0,56));",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "25px",
    margin: 5,
    color: "#04f5ff",
    marginRight: "auto",
  },
  right: {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "25px",
    margin: 5,
    color: "#04f5ff",
    marginLeft: "auto",
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});

export default Recipehome;
