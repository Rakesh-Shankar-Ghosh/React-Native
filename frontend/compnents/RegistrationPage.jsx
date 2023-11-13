import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigation = useNavigation();

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        "http://192.168.0.105:5000/api/v1/addStudent",
        {
          name,
          email,
          mobile,
        }
      );

      console.log(response.data); // Log the response data from the API (optional)
      navigation.navigate("SinglePage");
      // Redirect to SinglePage after successful registration
      // Replace 'SinglePage' with the name of your SinglePage screen
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        value={mobile}
        onChangeText={(text) => setMobile(text)}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrationPage;
