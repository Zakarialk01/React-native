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
import CustomInput from "../CustomElements/CustomInput";
import CustomButton from "../CustomElements/CustomButton";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Signup({ navigation }) {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const onRegisterPressed = async (data) => {
    const { password, email, name } = data;
    try {
      await Auth.signUp({
        password,
        attributes: { email, name },
      });

      navigation.navigate("recipe");
    } catch {
      navigation.navigate("recipe");
    }
  };
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

          <CustomInput
            name="name"
            control={control}
            placeholder=" Name"
            rules={{
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name should be at least 3 characters long",
              },
              maxLength: {
                value: 24,
                message: "Name should be max 24 characters long",
              },
            }}
          />
          <br />
          <Text style={styles.text}>Email</Text>

          <CustomInput
            name=" email"
            control={control}
            placeholder=" Email"
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />
          <br />
          <Text style={styles.text}> Password</Text>
          <CustomInput
            name=" password"
            control={control}
            placeholder="Password"
            secureTextEntry
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            }}
          />

          <CustomButton
            text="Register"
            onPress={handleSubmit(onRegisterPressed)}
          />
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
