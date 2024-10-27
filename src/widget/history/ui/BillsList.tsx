import React from "react";
import { View } from "react-native";
import HistoryCard from "./HistoryCard";
import { billToDebts, calcOweIsOwed, calcUserOwe } from "@/entities/groups/lib/store";
import { Bill } from "@/entities/groups/lib/types";

interface BillsListProps {
  bills: (Bill & { groupName: string; groupId: string })[];
  userAddress: string;
}

const BillsList: React.FC<BillsListProps> = ({ bills, userAddress }) => {
  return (
    <View>
      {bills.map((bill, index) => {
        const userOwe = calcUserOwe(bill, userAddress);
        return (
          <HistoryCard
            key={`${bill.groupId}-${index}`}
            groupName={bill.groupName}
            billName={bill.name}
            billDate={bill.date}
            userOwe={userOwe}
            paidBy={bill.payerAddress}
          />
        );
      })}
    </View>
  );
};

export default BillsList;
