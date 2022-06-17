import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Details = ({ navigation, route }) => {
  const recipe = route.params.recipe;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  console.log(recipe);
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={style.header}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",

            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {recipe.label}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image
            source={recipe.image}
            style={{
              height: 250,
              width: 280,
              borderRadius: "50px",
              boxShadow: "5px 2px 12px	#38003c",
            }}
          />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {recipe.healthLabels.slice(3, 4).map((free) => (
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "#04f5ff" }}
              >
                {free}
              </Text>
            ))}
            <View style={style.iconContainer}>
              <Text style={{ color: "white", fontWeight: "700" }}>
                {recipe.calories.toFixed()}Cal
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>
              {recipe.digest.slice(0, 3).map((macro) => (
                <Text style={style.detailsTextMacro}>
                  <View style={style.iconContainerMacro}> </View> {macro.label}{" "}
                  = {macro.total.toFixed()} {macro.unit} <br />
                </Text>
              ))}
            </Text>
            <View>
              {recipe.digest.slice(6, 9).map((micro) => (
                <Text style={style.detailsTextMicro}>
                  <View style={style.iconContainerMicro}> </View> {micro.label}{" "}
                  = {micro.total.toFixed()} {micro.unit}
                </Text>
              ))}
            </View>
          </View>
          <Text style={style.detailsTextMicro}>
            {recipe.ingredients.map((ing) => (
              <>
                <View style={style.iconContainerIng}> </View>{" "}
                <Text style={style.detailsTextMicro}> {ing.text} </Text>
                <br />
              </>
            ))}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 25,

    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: "#38003c",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: "#00ff85",
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  iconContainerMacro: {
    backgroundColor: "#04f5ff",
    height: 10,
    width: 10,

    borderRadius: 30,
  },
  iconContainerMicro: {
    backgroundColor: "#00ff85",
    height: 10,
    width: 10,

    borderRadius: 30,
  },
  iconContainerIng: {
    backgroundColor: "#e90052",
    height: 10,
    width: 10,
    lineHeight: 22,
    borderRadius: 30,
  },
  detailsTextMacro: {
    marginTop: "30px",
    lineHeight: 32,
    fontSize: 16,
    color: "white",
  },
  detailsTextMicro: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: "white",
  },
});

export default Details;
