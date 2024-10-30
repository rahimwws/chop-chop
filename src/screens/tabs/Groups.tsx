import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { ListGroup } from "@/entities/groups";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";
const Groups = () => {
  return (
    <ScreenLayout>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Header title="Groups" showDemo />
        <ListGroup />
        <LargeButton
          text="Create a Group"
          bg={colors.lightGray}
          isRoute
          route="CreateGroup"
          icon={
            <Image
              source={require("@/shared/assets/images/interface/plus.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
          }
        />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Groups;
