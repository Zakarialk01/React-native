import React from "react";

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
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { useEffect, useState, useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native-web";
import { CartContext } from "./context/cartContext";

const Recipesearch = ({ navigation }) => {
  const [cart, setCart] = useContext(CartContext);
  const APP_ID = "040594c7";
  const APP_KEY = "995bae889439ba857a9aea02299ce4c0	";
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const [recipes, setRecipes] = useState([]);
  const [query, setquery] = useState("");
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  useEffect(() => {
    getRecipes();

    console.log(recipes);
  }, []); //query*/
  const getRecipes = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();

    if (data && data.hits && data.hits.length > 0) {
      setRecipes(data.hits);
      console.log(data.hits);
      console.log(query);
    } else {
      alert("not found");
    }
  };

  const getSearch = () => {
    localStorage.setItem("query", query);
    getRecipes(query);
  };
  const addToWishlist = () => {
    const favorites = {
      name: recipes.label,
      cal: recipes.calories,
      description: recipes.cuisineType,
      image: recipes.image,
    };
    setCart((curr) => [...curr, favorites]);
  };
  console.log(cart);
  //dont get real data
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Find Your Best Recipe For Cooking </Text>
      </View>
      <View style={styles.action} onSubmit={getSearch}>
        <TextInput
          style={styles.input}
          placeholder=" Search For a Recipe"
          type="text"
          defaultValue={query}
          onChangeText={(text) => setquery(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={getSearch}>
          <Icon style={styles.textButton} name="search" size={16} />
        </TouchableOpacity>

        <br />
      </View>

      <ScrollView style={styles.footer}>
        {recipes.map((recipe, index) => (
          <Card style={styles.card} left={LeftContent}>
            <Card.Cover source={recipe.recipe.image} />
            <Card.Content>
              <Title>{recipe.recipe.label}</Title>
              <Paragraph>{recipe.recipe.calories.toFixed(0)} Cal</Paragraph>
              <Paragraph>{recipe.recipe.cuisineType} </Paragraph>
            </Card.Content>
            <Card.Actions>
              <TouchableOpacity
                style={styles.cardAction}
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate("Details", {
                    title: recipes.label,
                    calories: recipes.calories,
                    image: recipes.image,
                    ingredients: recipes.ingredients,
                    cautions: recipes.cautions,
                    cuisineType: recipes.cuisineType,
                    healthLabels: recipes.healthLabels,
                    totalWeight: recipes.totalWeight,
                    totalNutrients: recipes.totalNutrients,
                    digest: recipes.digest,
                  });
                }}
              >
                <Text style={styles.text}>View Detail</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.text} onPress={addToWishlist}>
                  ❤️
                </Text>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
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
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: "20%",
    borderTopRightRadius: "20%",
    marginTop: "16%",
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
    fontSize: "30px",
    fontWeight: "600",

    margin: "40px",
    color: "white",
  },
  button: {
    fontSize: "20px",

    marginLeft: "auto",
    marginRight: "auto",

    backgroundColor: "#e90052",
    padding: "15px",
  },

  textButton: {
    color: "white",
    textAlign: "center",
  },
  card: {
    width: "350px",
    marginTop: "5%",
    boxShadow: "5px 2px 12px	#38003c",
  },
  cardAction: {
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
});

export default Recipesearch;
