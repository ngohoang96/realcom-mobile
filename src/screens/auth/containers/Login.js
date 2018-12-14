import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { goToRegister, goToMain } from "../../../app-navigation/navigation";

class Login extends Component {
  handleNavigate = () => {
    goToRegister();
  };
  handleGoToMain = () => {
    goToMain();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screens</Text>
        <Button
          onPress={this.handleNavigate}
          title="  Navigate to Register Screen"
        />
        <Button onPress={this.handleGoToMain} title="  Navigate to Main" />
      </View>
    );
  }
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
