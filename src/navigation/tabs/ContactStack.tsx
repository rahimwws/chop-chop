import AddContact from "@/screens/stack/AddContact";
import { Camera } from "@/screens/stack/Camera";
import Contact from "@/screens/tabs/Contact";
import { createStackNavigator } from "@react-navigation/stack";

const ContactStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Contact} name="Contacts" />
      <Stack.Screen component={AddContact} name="AddContact" />
      <Stack.Screen component={Camera} name="Camera" />
    </Stack.Navigator>
  );
};

export default ContactStack;
