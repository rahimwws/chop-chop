import React from "react";
import { View } from "react-native";
import HistoryCard from "./HistoryCard";
import { billToDebts, calcOweIsOwed } from "@/entities/groups/lib/store";
import { Bill } from "@/entities/groups/lib/types";

interface BillsListProps {
  bills: (Bill & { groupName: string; groupId: string })[];
  userAddress: string;
}

const BillsList: React.FC<BillsListProps> = ({ bills, userAddress }) => {
  return (
    <View>
      {bills.map((bill, index) => {
        const debts = billToDebts(bill);
        const oweOwed = calcOweIsOwed(debts, userAddress);
        return (
          <HistoryCard
            key={`${bill.groupId}-${index}`}
            groupName={bill.groupName}
            billName={bill.name}
            billDate={bill.date}
            userOwe={oweOwed.userIsOwed}
            paidBy={bill.payerAddress}
          />
        );
      })}
    </View>
  );
};

export default BillsList;
