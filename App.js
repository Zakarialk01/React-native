import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Home from "./Home/Home";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Recipe from "./Recipe/Recipe";
import Details from "./Recipe/Details";
import { CartProvider } from "./context/cartContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { Auth, Hub } from "aws-amplify";
export default function App() {
  /* const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
      console.log(user);
    };

    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
*/
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
