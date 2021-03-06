import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Alert,
} from "react-native";
import { Link } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useForm } from "react-hook-form";
import CustomInput from "../CustomElements/CustomInput";
import CustomButton from "../CustomElements/CustomButton";
//import { Auth } from "aws-amplify";
export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
      navigation.navigate("recipe");
    } catch (e) {
      navigation.navigate("recipe");
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Login <Icon name="sign-in" size={28} color="#fff" />
        </Text>
      </View>
      <View style={styles.footer}>
        {" "}
        <View style={styles.action}>
          <Text style={styles.text}>Username</Text>
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
          <Text style={styles.text}> Password</Text>
          <CustomInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 3,
                message: "Password should be minimum 3 characters long",
              },
            }}
          />
          <CustomButton
            text={loading ? "Loading..." : "recipe"}
            onPress={handleSubmit(onSignInPressed)}
          />

          <br />
          <Text style={styles.textSwitch}>
            Don't Have an account,{" "}
            <Text style={{ color: "#e90052" }}>
              <Link to={{ screen: "signup" }}>Sign Up</Link>
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
    marginTop: "35%",
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
