import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { ListGroup } from "@/entities/groups";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";

const Groups = () => {
  return (
    <ScreenLayout>
      <ScrollView style={{ flex: 1 }}>
        <Header title="Groups" />
        <ListGroup />
        <LargeButton
          text="Create a Group"
          bg={colors.lightGray}
          isRoute
          route="CreateGroup"
        />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Groups;
