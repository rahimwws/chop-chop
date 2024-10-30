import { View, Text } from "react-native";
import { calcOweIsOwed, useGroupsStore } from "../lib/store";
import Card from "./Card";
import { useAccount } from "wagmi";
import { useConfirmationStore } from "@/shared/lib/store/сonfirmationStore";

const List = () => {
  const groupsStore = useGroupsStore((store) => store.groups);
  const confirmationStore = useConfirmationStore((store) => store.groups);
  const { address } = useAccount();
  return (
    <View
      style={{
        marginVertical: "5%",
        gap: 10,
      }}
    >
      {groupsStore.map((item, index) => {
        const oweOwed = calcOweIsOwed(item.bills, address!);
        return (
          <Card
            key={index}
            id={item.id}
            groupName={item.name}
            owe={oweOwed.userOwe}
            isOwed={oweOwed.userIsOwed}
            isSettled={oweOwed.userOwe == 0 && oweOwed.userIsOwed == 0}
            image={item.image}
            confirmation={
              !!confirmationStore.find((group) => group.groupId === item.id)
            }
            participants={item.participants.length}
            owner={
              confirmationStore.find((group) => group.groupId === item.id)
                ?.contactAddress
            }
          />
        );
      })}
    </View>
  );
};

export default List;
