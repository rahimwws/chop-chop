import { View } from "react-native";
import React from "react";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";
import Check from "@/shared/assets/svg/icons/white-mark.svg";
import Reject from "@/shared/assets/svg/icons/reject.svg";
import { useConfirmationStore } from "@/shared/lib/store/сonfirmationStore";
import { useGroupsStore } from "../lib/store";
const ConfirmBottom = ({ id }: { id: string }) => {
  const confirmationStore = useConfirmationStore((store) => store.groups);
  const setStore = useConfirmationStore((store) => store.setGroups);
  const groupsStore = useGroupsStore((store) => store.groups);
  const setGroupsStore = useGroupsStore((store) => store.setGroups);

  const handleAccept = () => {
    setStore(confirmationStore.filter((group) => group.groupId !== id));
  };

  const handleReject = () => {
    setStore(confirmationStore.filter((group) => group.groupId !== id));
    setGroupsStore(groupsStore.filter((group) => group.id !== id));
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "1%",
      }}
    >
      <LargeButton
        styles={{
          width: "48%",
          height: 30,
        }}
        text="accept invite"
        textStyle={{
          fontSize: 18,
        }}
        textColor="white"
        bg={colors.green}
        icon={<Check width={20} />}
        action={handleAccept}
      />
      <LargeButton
        styles={{
          width: "48%",
          height: 30,
        }}
        text="reject group"
        textStyle={{
          fontSize: 18,
        }}
        textColor="white"
        bg={colors.red}
        action={handleReject}
        icon={<Reject width={20} />}
      />
    </View>
  );
};

export default ConfirmBottom;
