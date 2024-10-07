import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();
import { createStackNavigator } from "@react-navigation/stack";
import Intro from "@/screens/stack/Intro";

const Index = () => {
  const Stack = createStackNavigator();
  const [loaded] = useFonts({
    "ar-t": require("../../assets/fonts/Arame Thin.ttf"),
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
    >
      <Stack.Screen name="Home" component={Intro} />
    </Stack.Navigator>
  );
};
export default Index;
