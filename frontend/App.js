import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SinglePage from "./pages/SinglePage";
import RegistrationPage from "./compnents/RegistrationPage";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegistrationPage">
        <Stack.Screen name="SinglePage" component={SinglePage} />
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
