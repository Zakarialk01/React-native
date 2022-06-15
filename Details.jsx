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

const Details = ({
  navigation,
  history,

  title,
  calories,
  image,
  ingredients,
  cautions,
  totalWeight,
  cuisineType,
  healthLabels,
  digest,
}) => {
  // const item = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);
  console.log(ingredients);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={style.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
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
            source={require("./assets/recipe.png")}
            style={{ height: 220, width: 220 }}
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
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              pizza
            </Text>
            <View style={style.iconContainer}></View>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>zz</View>
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
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: "#38003c",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: "white",
  },
});

export default Details;
