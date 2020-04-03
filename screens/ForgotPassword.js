import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import * as firebase from "firebase";

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errormessage: null
    };
  }

  OnResetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(
        () => {
          this.setState({ errormessage: "Password reset email has been sent" });
        },
        error => {
          Alert.alert(error.message);
        }
      );
  };

  OnBackToLogin = () => {
    this.props.navigation.navigate("Login");
  };

  OnBackToSignUp = () => {
    this.props.navigation.navigate("SignUp");
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log("dismissed keyboard");
        }}
      >
        <View style={styles.ForgotPassword}>
          <Text style = {{ fontWeight: 'bold', fontSize: 20 }}>Forgot Password?</Text>
          <View style={{ paddingTop: 10 }} />
          <TextInput
            value={this.state.email}
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />

          <View style={{ paddingTop: 10 }} />

          <Text> {this.state.errormessage} </Text>

          <View style={{ paddingTop: 40 }} />

          <Button title="Reset Password" onPress={this.OnResetPassword} />

          <View style={{ paddingTop: 50 }} />

          <Button
            title="Back to SignUp"
            color="coral"
            onPress={this.OnBackToSignUp}
          />
          <View style={{ paddingTop: 50 }} />

          <Button
            title="Back to login"
            color="coral"
            onPress={this.OnBackToLogin}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  ForgotPassword: {
    paddingTop: 20
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
