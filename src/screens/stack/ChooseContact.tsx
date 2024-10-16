import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { ContactField } from "@/features/create-group";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";
import { ContactList } from "@/entities/contacts";
import { Group } from "@/entities/groups/lib/types";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useGroupsStore } from "@/entities/groups/lib/store";
import { useAppNavigation } from "@/shared/lib/navigation";

type RouteParams = {
  ChooseContact: {
    group: Group;
  };
};

type routeT = RouteProp<RouteParams, "ChooseContact">;

const ChooseContact = () => {
  const navigation = useAppNavigation();
  const [mode, setMode] = useState<"member" | "contact">("member");
  const { params } = useRoute<routeT>();
  const [participants, setParticipants] = useState<string[]>([]);
  const store = useGroupsStore();

  if (!params.group) return null;
  const saveGroupWithNewParticipants = () => {
    console.log(participants);
    const updatedGroup = {
      ...params.group,
      participants: [...participants],
    };

    const updatedGroups = store.groups.map((group) =>
      group.id === updatedGroup.id ? updatedGroup : group
    );
    store.setGroups(updatedGroups);

    navigation.navigate("GroupDetail", { group: updatedGroup });
  };

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
          icon={
            <Image
              source={require("@/shared/assets/images/interface/plus-white.png")}
              style={{
                width: 17,
                height: 17,
              }}
            />
          }
        />
        <LargeButton
          styles={{ width: "48%", height: 40 }}
          text="Share a link"
          textStyle={{ fontSize: 18 }}
          textColor="blue"
          bg={colors.middleGray}
          action={() => {}}
          icon={
            <Image
              source={require("@/shared/assets/images/interface/share-link.png")}
              style={{
                width: 17,
                height: 17,
              }}
            />
          }
        />
      </View>

      {mode != "member" && (
        <ContactList
          participants={participants}
          setParticipants={setParticipants}
        />
      )}
      {mode != "member" && (
        <LargeButton
          styles={{ width: "100%" }}
          text="Confirm"
          textColor={"white"}
          bg={colors.blue}
          action={saveGroupWithNewParticipants}
        />
      )}
    </ScreenLayout>
  );
};

export default ChooseContact;
