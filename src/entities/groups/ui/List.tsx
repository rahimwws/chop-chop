import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { billToDebts, calcOweIsOwed, calcUserOwe, useGroupsStore } from "../lib/store";
import Card from "./Card";
import { useAccount } from "wagmi";

const List = () => {
  const groupsStore = useGroupsStore();
  const { address } = useAccount();
  return (
    <View
      style={{
        marginVertical: "5%",
        gap: 10,
      }}
    >
      {groupsStore.groups.map((item, index) => {
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
          />
        );
      })}
    </View>
  );
};

export default List;
