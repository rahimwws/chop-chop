import { View, Text } from "react-native";
import React from "react";
import { billToDebts, calcOweIsOwed, useGroupsStore } from "../lib/store";
import Card from "./Card";

const List = () => {
  const groupsStore = useGroupsStore();
  const userAddress = "0xuser";
  return (
    <View
      style={{
        marginVertical: "5%",
        gap: 10,
      }}
    >
      {groupsStore.groups.map((item, index) => {
        const debts = item.bills.flatMap((x) => billToDebts(x));
        const oweOwed = calcOweIsOwed(debts, userAddress);
        return (
          <Card
            key={index}
            id={item.id}
            groupName={item.name}
            owned={oweOwed.userIsOwed}
            owe={oweOwed.userOwe}
            isSettled={oweOwed.userOwe == 0}
            image={item.image}
          />
        );
      })}
    </View>
  );
};

export default List;
