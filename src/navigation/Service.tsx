import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import CreateGroup from "@/screens/stack/CreateGroup";
import ChooseContact from "@/screens/stack/ChooseContact";
import GroupDetail from "@/screens/stack/GroupDetail";
import SettleUp from "@/screens/stack/SettleUp";
import AddExpense from "@/screens/stack/AddExpense";

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
      <Stack.Screen name="SettleUp" component={SettleUp} />
      <Stack.Screen name="Expense" component={AddExpense} />
    </Stack.Navigator>
  );
};

export default Service;
