import { createStackNavigator } from "@react-navigation/stack";
import Groups from "@/screens/tabs/Groups";
import CreateGroup from "@/screens/stack/CreateGroup";
import ChooseContact from "@/screens/stack/ChooseContact";
import GroupDetail from "@/screens/stack/GroupDetail";
import SettleUp from "@/screens/stack/SettleUp";
import PurchaseDetail from "@/screens/stack/PurchaseDetail";
import AddExpense from "@/screens/stack/AddExpense";
import Payments from "@/screens/stack/Payments";
import Calendar from "@/screens/stack/Calendar";

const GroupStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Groups" component={Groups} />
      <Stack.Screen name="CreateGroup" component={CreateGroup} />
      <Stack.Screen name="ChooseContact" component={ChooseContact} />
      <Stack.Screen name="GroupDetail" component={GroupDetail} />
      <Stack.Screen name="SettleUp" component={SettleUp} />
      <Stack.Screen name="PurchaseDetail" component={PurchaseDetail} />
      <Stack.Screen name="Expense" component={AddExpense} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  );
};

export default GroupStack;
