import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { auth } from "../../config/config";
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkgray",
  },
});
