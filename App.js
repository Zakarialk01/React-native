import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Recipe from "./Recipe";
import Details from "./Details";
import { CartProvider } from "./context/cartContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
  const Stack = createStackNavigator();
  const persistenceFunctions = (() => {
    return __DEV__
      ? {
          async persistNavigationState(value) {
            GLOBAL.__nav__state = value;
          },
          async loadNavigationState() {
            if (GLOBAL.__nav__state == null) {
              await Promise.reject("no data");
            }
            return GLOBAL.__nav__state;
          },
        }
      : {};
  })();
  /* const config = {
    screens: {
      Home: "/",
      Signin: "/signup",
      Login: "/login",
      Recipe: "/recipe",
    },
  };
  const linking = {
    prefixes: ["https://example.com"],
    config,
  };*/
  return (
    <CartProvider>
      <NavigationContainer
        {...persistenceFunctions}
        linking={{
          prefixes: [""],
          config: {
            screens: {
              Root: {
                path: "/",
                initialRouteName: "/",
                screens: {
                  Home: "/",
                  Signin: "/signup",
                  Login: "/login",
                  Recipe: "/recipe",
                },
              },
            },
          },
        }}
        fallback={<Text>Loading ... </Text>}
      >
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="recipe" component={Recipe} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({});
