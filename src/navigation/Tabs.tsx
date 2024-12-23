import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Groups from "@/screens/tabs/Groups";
import Profile from "@/screens/tabs/Profile";
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
import { TouchableOpacity, Text, View } from "react-native";
import ContactStack from "./tabs/ContactStack";
import Typography from "@/shared/ui/Typography";
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
          title: "Groups",
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
                  navigation.navigate("Groups");
                }}
              />
            );
          },
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: focused ? colors.white : colors.blue,
              }}
            >
              <Typography color="white" size={14} font="r-m">
                Groups
              </Typography>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ContactStack"
        component={ContactStack}
        options={{
          title: "Contacts",
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
                  navigation.navigate("ContactStack");
                }}
              />
            );
          },
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: focused ? colors.white : colors.blue,
              }}
            >
              <Typography color="white" size={14} font="r-m">
                Contacts
              </Typography>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Groups}
        options={{
          title: "",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => {
            return <ButtonAddSvg color={color} width={65} />;
          },
          tabBarButton: (props) => {
            const handlePress = () => {
              if (route === "group") {
                navigation.navigate("Expense", { type: "group" });
              } else {
                navigation.navigate("Expense", { type: "personal" });
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
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: focused ? colors.white : colors.blue,
              }}
            >
              <Typography color="white" size={14} font="r-m">
                History
              </Typography>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <AccountSVG width={26} height={26} />;
          },
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: focused ? colors.white : colors.blue,
              }}
            >
              <Typography color="white" size={14} font="r-m">
                Profile
              </Typography>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
