import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/cartContext";

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

import { FlatList, TouchableOpacity } from "react-native-web";

function Recipewishlist({ navigation }) {
  const [cart, setCart] = useContext(CartContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );

  console.log(cartItems);
  // const removeFromCart = (id) => {
  /* const newCart = cartItems.splice(1);
    setCartItems(newCart);
    localStorage.setItem("item", JSON.stringify(newCart));
    console.log(cart);*/

  /*const newCart = cart.splice(i, 1);
    console.log(newCart);
    setCart(newCart);*/
  //  setCartItems(cartItems.filter((item) => item !== id));
  /*setCartItems(cartItems.filter((item) => item !== itemToRemove));*/
  // setCart(cart.filter((item) => item !== id));

  //localStorage.removeItem(cart);
  //console.log(cart);
  //};
  /* const empty = () => {
    setCartItems([]);
    setCart([]);
  };
*/

  useEffect(() => {
    setCart(cartItems);
    localStorage.setItem("item", JSON.stringify(cartItems));
  }, []);
  /* const EmptyCart = () => {
    return (
      <div className="emptycart" id="#">
        <div>
          <Button
            style={{ margin: "0 auto", display: "block", fontWeight: "700" }}
            onClick={back}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Choisir le menu 🍲
          </Button>
          <img className="image-error" src={emptyy} />
        </div>
      </div>
    );
  };*/
  const RenderCartItems = () => {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Your List Of Favorites Recipes </Text>
        </View>
        <View style={styles.action}>
          <br />
        </View>

        <ScrollView style={styles.footer}>
          {cartItems.map((recipe, index) => (
            <Card style={styles.card}>
              <Card.Cover source={recipe.image} />
              <Card.Content>
                <Title>{recipe.name}</Title>
                <Paragraph>{recipe.cal} Cal</Paragraph>
                <Paragraph>{recipe.description} </Paragraph>
              </Card.Content>
              <Card.Actions></Card.Actions>
            </Card>
          ))}
        </ScrollView>
      </View>
    );
  };
  return (
    <>
      <RenderCartItems />
    </>
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
export default Recipewishlist;
