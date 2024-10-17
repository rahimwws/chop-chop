import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { billToDebts, calcOweIsOwed, useGroupsStore } from "../lib/store";
import Card from "./Card";
import { useAccount } from "wagmi";

const List = () => {
  const groupsStore = useGroupsStore();
  const { address } = useAccount();
  useEffect(() => {
    if (groupsStore.groups.length === 0)
      groupsStore.setGroups([
        {
          id: "1",
          name: "Friends Group",
          image: "https://example.com/friends-group.png",
          participants: ["0x123", "0x456", "0x789"],
          bills: [
            {
              sum: 100,
              payerAddress: "0x123",
              spenersAddresses: ["0x456", "0x789"],
              spentAmounts: [50, 50],
              name: "Dinner",
            },
            {
              sum: 50,
              payerAddress: "0x789",
              spenersAddresses: ["0x123", "0x456"],
              spentAmounts: [25, 25],
              name: "Coffee",
            },
          ],
        },
        {
          id: "2",
          name: "Family Group",
          image: "https://example.com/family-group.png",
          participants: ["0xabc", "0xdef", "0xghi"],
          bills: [
            {
              sum: 200,
              payerAddress: "0xabc",
              spenersAddresses: ["0xdef", "0xghi"],
              spentAmounts: [100, 100],
              name: "Vacation",
            },
            {
              sum: 300,
              payerAddress: "0xghi",
              spenersAddresses: ["0xabc", "0xdef"],
              spentAmounts: [150, 150],
              name: "Groceries",
            },
          ],
        },
      ]);
  }, []);
  return (
    <View
      style={{
        marginVertical: "5%",
        gap: 10,
      }}
    >
      {groupsStore.groups.map((item, index) => {
        const debts = item.bills.flatMap((x) => billToDebts(x));
        const oweOwed = calcOweIsOwed(debts, address!);
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
