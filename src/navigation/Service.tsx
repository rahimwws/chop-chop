import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import CreateGroup from "@/screens/stack/CreateGroup";
import ChooseContact from "@/screens/stack/ChooseContact";
import GroupDetail from "@/screens/stack/GroupDetail";

const Service = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="CreateGroup" component={CreateGroup} />
      <Stack.Screen name="ChooseContact" component={ChooseContact} />
      <Stack.Screen name="GroupDetail" component={GroupDetail} />
    </Stack.Navigator>
  );
};

export default Service;
