import React, { useContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feather from "react-native-vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList, TouchableOpacity } from "react-native-web";
import categoriesData from "../assets/data/categoriesData";
import popularData from "../assets/data/popularData";
import colors from "../assets/colors/colors";

function Recipehome({ navigation }) {
  const signOut = () => {
    Auth.signOut();
    navigation.navigate("login");
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {" "}
          Hello There😄
          <br />{" "}
          <Text style={styles.paragraph}>
            Delicious and detailed recipes on your phone
          </Text>
        </Text>
        <Pressable
          style={styles.buttonSignOut}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.text} onPress={signOut}>
            Sign out
          </Text>
        </Pressable>
      </View>
      <View style={styles.action}>
        <br />
      </View>
      <ScrollView style={styles.footer}>
        {" "}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories 🍴</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Diets 🍴</Text>
          <View style={styles.categoryItemWrapperDiet}>
            <View style={styles.body}>
              <View style={styles.cardText}>
                <Text style={styles.text}>High-Protein </Text>
              </View>{" "}
              <View style={styles.cardText}>
                <Text style={styles.text}>Keto</Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.text}> Low-Carb </Text>
              </View>
            </View>
            <View style={styles.body}>
              <View style={styles.cardText}>
                <Text style={styles.text}>Low-Fat</Text>
              </View>{" "}
              <View style={styles.cardText}>
                <Text style={styles.text}>Low-Sodium</Text>
              </View>{" "}
              <View style={styles.cardText}>
                <Text style={styles.text}>No oil added</Text>
              </View>
            </View>
            <View style={styles.body}>
              <View style={styles.cardText}>
                <Text style={styles.text}> No-sugar</Text>
              </View>{" "}
              <View style={styles.cardText}>
                <Text style={styles.text}> Red meat-free </Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.text}> Pork-free </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-black",
    backgroundImage:
      "radial-gradient(circle at 99% 33%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 37%,transparent 37%, transparent 100%),radial-gradient(circle at 46% 16%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 43%,transparent 43%, transparent 100%),radial-gradient(circle at 99% 25%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),radial-gradient(circle at 57% 88%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 86%,transparent 86%, transparent 100%),radial-gradient(circle at 82% 78%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),linear-gradient(90deg, rgb(56,0,56),rgb(56,0,56));",
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: "35%",
    borderTopRightRadius: "35%",

    paddingHorizontal: 200,
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    fontSize: "18px",
    color: "white",
    height: "50px",

    border: "2px solid 	#e90052",
  },
  title: {
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "700",
    marginRight: "45px",
    margin: "50px",
    color: "#04f5ff",
  },

  paragraph: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#04f5ff",
    marginRight: "45px",
  },
  button: {
    fontSize: "20px",
    borderRadius: "20px",
    margin: "5px",
    backgroundColor: "#e90052",
    padding: "15px",
  },
  buttonSignOut: {
    fontSize: "20px",
    borderRadius: "20px",
    margin: "5px",
    backgroundColor: "#e90052",
    padding: "15px",
    marginRight: "30px",
  },
  buttonMeat: {
    fontSize: "15px",
    borderRadius: "20px",
    color: "white",
    backgroundColor: "#38003c",
    padding: "10px",
  },
  buttonVegan: {
    fontSize: "15px",
    borderRadius: "20px",
    color: "white",
    backgroundColor: "#00ff85",
    padding: "10px",
  },
  buttonFruit: {
    fontSize: "15px",
    borderRadius: "20px",
    color: "white",
    backgroundColor: "#e90052",
    padding: "10px",
  },

  textButton: {
    color: "white",
    textAlign: "center",
    fontWeight: 600,
  },

  card: {
    width: "350px",
    marginTop: "5%",
    boxShadow: "5px 2px 12px	#38003c",
  },
  cardAction: {
    margin: 5,
    marginRight: "auto",
    marginLeft: "auto",
    padding: "10px",
    border: "none",

    backgroundColor: "#38003c",
  },
  text: {
    fontSize: "15px",
    fontWeight: 600,
    color: "white",
  },
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "5%",
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginLeft: "20px",
    color: "black",
  },
  categoriesListWrapper: {
    paddingTop: 15,

    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: "#e90052",
    marginRight: 20,
    borderRadius: 20,
    boxShadow: "1px 2px 5px	#38003c",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemWrapperDiet: {
    backgroundColor: "#fff",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    height: "200px",
    borderRadius: 20,
    boxShadow: "1px 2px 5px	#38003c",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: "center",
    fontFamily: "Poppins-black",
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
  cardText: {
    padding: "10px",
    borderRadius: "20px",
    backgroundColor: "#e90052",
  },
});
export default Recipehome;
