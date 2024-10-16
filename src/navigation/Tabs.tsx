import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Groups from "@/screens/tabs/Groups";
import Profile from "@/screens/tabs/Profile";
import Contact from "@/screens/tabs/Contact";
import History from "@/screens/tabs/History";
import AccountSVG from "@/shared/assets/svg/tabs/account-svg.svg";
import ContactSVG from "@/shared/assets/svg/tabs/contacts-svg.svg";
import GroupSVG from "@/shared/assets/svg/tabs/group-svg.svg";
import HistorySVG from "@/shared/assets/svg/tabs/history-svg.svg";
import ButtonAddSvg from "@/shared/assets/svg/tabs/button-add-svg.svg";
import { colors } from "@/shared/lib/theme";
import CustomTabButton from "@/components/tabbar/CustomButton";
import GroupStack from "./tabs/GroupStack";
import { useAppNavigation } from "@/shared/lib/navigation";
import { TouchableOpacity } from "react-native";
const Tab = createBottomTabNavigator();
const Tabs = () => {
  const [route, setRoute] = useState<"contact" | "group">("group");
  const navigation = useAppNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.blue,
          paddingTop: 5,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          color: colors.white,
          fontFamily: "r-b",
        },
      }}
    >
      <Tab.Screen
        name="GroupStack"
        component={GroupStack}
        options={{
          title: "Group",
          tabBarIcon: () => {
            return (
              <GroupSVG
                width={26}
                height={26}
                stroke={colors.white}
                strokeWidth={2}
              />
            );
          },
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
                {...props}
                activeOpacity={0.8}
                onPress={() => {
                  setRoute("group");
                  navigation.navigate("GroupStack");
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: () => {
            return <ContactSVG width={26} height={26} />;
          },
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
                {...props}
                activeOpacity={0.8}
                onPress={() => {
                  setRoute("contact");
                  navigation.navigate("Contact");
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={Groups}
        options={{
          title: "",
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            height: 0,
          },
          tabBarIcon: ({ color }) => {
            return <ButtonAddSvg color={color} width={70} />;
          },
          tabBarButton: (props) => {
            const handlePress = () => {
              if (route === "contact") {
                navigation.navigate("Expense", { type: "personal" });
              } else {
                navigation.navigate("Expense", { type: "group" });
              }
            };

            return <CustomTabButton {...props} onPress={handlePress} />;
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: () => {
            return <HistorySVG width={26} height={26} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <AccountSVG width={26} height={26} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
