import { View, Text } from "react-native";
import React from "react";
import { Group } from "@/entities/groups/lib/types";
import ParticipantCard from "./cards/ParticipantsCard";
import { billToDebts, calcOweIsOwed } from "@/entities/groups/lib/store";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";
import { useAppNavigation } from "@/shared/lib/navigation";

const ParticipantsList = ({
  group,
  action,
}: {
  group: Group;
  action: () => void;
}) => {
  const navigation = useAppNavigation();
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      {group?.participants.map((item, index) => {
        const debts = group.bills.flatMap((x) => billToDebts(x));
        const oweOwed = calcOweIsOwed(debts, item);
        const avatar = index > 15 ? 1 : index;
        return (
          <ParticipantCard
            key={index}
            participantAddr={item}
            oweOwed={oweOwed}
            avatarId={avatar}
          />
        );
      })}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <LargeButton
          styles={{ width: "48%", height: 40 }}
          text="Add member"
          textStyle={{ fontSize: 18 }}
          textColor={"white"}
          bg={colors.blue}
          action={() => navigation.navigate("ChooseContact", { group })}
        />
        <LargeButton
          styles={{ width: "48%", height: 40 }}
          text="Leave group"
          textStyle={{ fontSize: 18 }}
          textColor="blue"
          bg={colors.middleGray}
          action={action}
        />
      </View>
    </View>
  );
};

export default ParticipantsList;
