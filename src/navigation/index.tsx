import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Introduction from "./Introduction";
import { useUserStore } from "@/shared/lib/store/userStore";
import Tabs from "./Tabs";

SplashScreen.preventAutoHideAsync();
const Index = () => {
  const Stack = createStackNavigator();
  const address = useUserStore((store) => store.address);
  const initialRoute = address ? "Tabs" : "Introduction";
  const [loaded] = useFonts({
    "ar-r": require("../../assets/fonts/Arame.ttf"),
    "ar-b": require("../../assets/fonts/Arame-Bold.ttf"),
    "r-b": require("../../assets/fonts/Roboto-Bold.ttf"),
    "r-m": require("../../assets/fonts/Roboto-Medium.ttf"),
    "r-r": require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};
export default Index;
