import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const CustomInput = ({
  text,
  textColor,
  space,
  handleInput,
  showPassword,
  setShowPassword,
  msg,
  isValid,
}) => {
  let eye = showPassword ? (
    <Entypo
      onPress={() => setShowPassword(false)}
      name="eye-with-line"
      style={styles.eyeIcon}
    />
  ) : (
    <AntDesign
      onPress={() => setShowPassword(true)}
      name="eye"
      style={styles.eyeIcon}
    />
  );
  return (
    <View style={{ ...styles.TextInputContainer, paddingBottom: space }}>
      <TextInput
        multiline
        secureTextEntry={showPassword}
        placeholder={text}
        placeholderTextColor="#C4C4C4"
        underlineColorAndroid="#9DE8FF"
        style={{ ...styles.textInput, color: textColor }}
        onChangeText={(input) => handleInput(input.trim())}
        clearButtonMode="always"
      />
      {text === "Password" && eye}
      {isValid ? null : <Text style={{ color: "tomato" }}>{msg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputContainer: {
    paddingBottom: 45,
  },
  textInput: {
    height: 40,
    paddingLeft: 6,
  },
  eyeIcon: {
    fontSize: 20,
    color: "darkgray",
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default CustomInput;
