import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Intro from "@/screens/introduction/Intro";
import ChooseChains from "@/screens/introduction/ChooseChains";
import ChooseToken from "@/screens/introduction/ChooseToken";

const Introduction = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="ChooseChains" component={ChooseChains} />
      <Stack.Screen name="ChooseToken" component={ChooseToken} />
    </Stack.Navigator>
  );
};

export default Introduction;
