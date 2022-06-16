import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Home = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>Recipe App 🍽️</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",

          backgroundColor: "white",
        }}
      >
        <Image
          source={require("./assets/recipe.png")}
          style={styles.tinyLogo}
        />
      </View>
      <View style={styles.footer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.text}> Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "600",
  },
  title: {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "600",
    marginTop: "25px",
  },

  tinyLogo: {
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-black",
    backgroundColor: "white",
  },
  button: {
    fontSize: "20px",
    marginTop: "100%",
    backgroundColor: "#e90052",
    padding: "15px",
    borderRadius: "50px",
  },
  footer: {
    flex: 1,
    backgroundImage:
      "radial-gradient(circle at 99% 33%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 37%,transparent 37%, transparent 100%),radial-gradient(circle at 46% 16%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 43%,transparent 43%, transparent 100%),radial-gradient(circle at 99% 25%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),radial-gradient(circle at 57% 88%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 86%,transparent 86%, transparent 100%),radial-gradient(circle at 82% 78%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),linear-gradient(90deg, rgb(56,0,56),rgb(56,0,56));",
    /* backgroundImage:
      "radial-gradient(circle at 28% 93%, rgba(2, 2, 2,0.04) 0%, rgba(2, 2, 2,0.04) 50%,rgba(223, 223, 223,0.04) 50%, rgba(223, 223, 223,0.04) 100%),radial-gradient(circle at 13% 75%, rgba(185, 185, 185,0.04) 0%, rgba(185, 185, 185,0.04) 50%,rgba(25, 25, 25,0.04) 50%, rgba(25, 25, 25,0.04) 100%),radial-gradient(circle at 79% 39%, rgba(34, 34, 34,0.04) 0%, rgba(34, 34, 34,0.04) 50%,rgba(57, 57, 57,0.04) 50%, rgba(57, 57, 57,0.04) 100%),linear-gradient(56deg, rgb(56, 0, 56),rgb(56, 0, 56));",
*/
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 50,
    paddingHorizontal: 130,
  },
});

export default Home;
