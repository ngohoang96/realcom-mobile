import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { goToLogin } from "../../../app-navigation/navigation";

class Register extends Component {
  handleNavigate = () => {
    goToLogin();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Register Screen</Text>
        <Button
          onPress={this.handleNavigate}
          title="Navigate to Login Screen"
        />
      </View>
    );
  }
}
export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
