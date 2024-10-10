import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { ContactField } from "@/features/create-group";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";
import { ContactList } from "@/entities/contacts";
import { Group } from "@/entities/groups/lib/types";
import { RouteProp, useRoute } from "@react-navigation/native";
type RouteParams = {
  ChooseContact: {
    group: Group;
  };
};

type routeT = RouteProp<RouteParams, "ChooseContact">;
const ChooseContact = () => {
  const [mode, setMode] = useState<"member" | "contact">("member");
  const { params } = useRoute<routeT>();
  const [participants, setParticipants] = useState<string[]>([
    "hellio",
    "ioafnm",
  ]);

  // TODO: Add logic for relations between contact and participants

  return (
    <ScreenLayout>
      <Header title="Add members " />
      <ContactField group={params.group} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LargeButton
          styles={{ width: "48%", height: 40 }}
          text="Add member"
          textStyle={{ fontSize: 18 }}
          textColor={mode === "member" ? "white" : "blue"}
          bg={mode === "member" ? colors.blue : colors.white}
          theme={mode === "contact" ? "outline" : "default"}
          action={() => setMode(mode === "contact" ? "member" : "contact")}
        />
        <LargeButton
          styles={{ width: "48%", height: 40 }}
          text="Share"
          textStyle={{ fontSize: 18 }}
          textColor="blue"
          bg={colors.middleGray}
        />
      </View>
      {mode === "member" ? (
        <LargeButton
          route="Tabs"
          isRoute
          text="Add more friends"
          bg={colors.blue}
          textColor="white"
          styles={{
            marginVertical: "3%",
          }}
        />
      ) : (
        <ContactList
          participants={participants}
          setParticipants={setParticipants}
        />
      )}
    </ScreenLayout>
  );
};

export default ChooseContact;
