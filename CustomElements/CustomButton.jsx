import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.textButton}>Submit</Text>
    </Pressable>
  );
};

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
});

export default CustomButton;
