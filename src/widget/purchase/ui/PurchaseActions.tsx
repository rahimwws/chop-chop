import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import LargeButton from "@/shared/ui/Button/LargeButton";
import Trash from "@/shared/assets/svg/icons/trash.svg";
import Edit from "@/shared/assets/svg/icons/edit.svg";
import { useGroupsStore } from "@/entities/groups/lib/store";
import { useAppNavigation } from "@/shared/lib/navigation";

const PurchaseActions = ({
  groupId,
  billId,
}: {
  groupId: string | null;
  billId: string;
}) => {
  const groups = useGroupsStore((store) => store.groups);
  const setGroups = useGroupsStore((store) => store.setGroups);
  const navigation = useAppNavigation();
  const handleDelete = () => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        return {
          ...group,
          bills: group.bills.filter((b) => b.id !== billId),
        };
      }
      return group;
    });

    if (updatedGroups) {
      setGroups(updatedGroups);
      navigation.navigate("Groups");
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: "2%",
      }}
    >
      <LargeButton
        styles={{
          width: "40%",
          height: 30,
        }}
        text="Delete"
        textStyle={{
          fontSize: 18,
        }}
        textColor="blue"
        bg={colors.middleGray}
        icon={<Trash />}
        action={handleDelete}
      />
      <LargeButton
        styles={{
          width: "40%",
          height: 30,
        }}
        text="Edit"
        textStyle={{
          fontSize: 18,
        }}
        textColor="white"
        bg={colors.blue}
        icon={<Edit />}
      />
    </View>
  );
};

export default PurchaseActions;
