import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Link } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Signup({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Sign Up <Icon name="sign-in" size={28} color="#fff" />
        </Text>
      </View>
      <View style={styles.footer}>
        {" "}
        <View style={styles.action}>
          <Text style={styles.text}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="  useless placeholder"
            keyboardType="numeric"
          />
          <br />
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="  useless placeholder"
            keyboardType="numeric"
          />
          <br />
          <Text style={styles.text}> Password</Text>
          <TextInput
            style={styles.input}
            placeholder="  useless placeholder"
            keyboardType="numeric"
          />
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("recipe")}
          >
            <Text style={styles.textButton}>Inscription</Text>
          </Pressable>
          <br />
          <Text style={styles.textSwitch}>
            Already Have an account,{" "}
            <Text style={{ color: "#e90052" }}>
              <Link to={{ screen: "login" }}>Login</Link>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: "30px",
    fontSize: "20px",
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50px",
    backgroundColor: "rgb(56,0,56)",
    padding: "15px",
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "600",
  },
  textSwitch: {
    fontSize: "15px",
    color: "gray",
    textAlign: "right",
  },
  title: {
    textAlign: "left",
    fontSize: "30px",
    fontWeight: "600",
    marginTop: "70px",
    margin: "10px",
    color: "white",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    marginTop: "20%",
    paddingHorizontal: 200,
  },
  container: {
    backgroundImage:
      "radial-gradient(circle at 99% 33%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 37%,transparent 37%, transparent 100%),radial-gradient(circle at 46% 16%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 43%,transparent 43%, transparent 100%),radial-gradient(circle at 99% 25%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),radial-gradient(circle at 57% 88%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 86%,transparent 86%, transparent 100%),radial-gradient(circle at 82% 78%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),linear-gradient(90deg, rgb(56,0,56),rgb(56,0,56));",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-black",
  },
  text: {
    fontSize: "20px",
  },
  input: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#05375a",
    height: "50px",
    width: "300px",
    border: "1px solid #38003c",
    borderRadius: "50px",
  },
  action: {
    flex: 1,

    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
});
