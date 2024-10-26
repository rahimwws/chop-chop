import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { Group } from "@/entities/groups/lib/types";
import PaymentCard from "./cards/PaymentCard";
import { billToDebts, calcOweIsOwed } from "@/entities/groups/lib/store";

const PaymentList = ({ group }: { group: Group }) => {
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      {group?.bills.length !== 0 && (
        <Typography align="left" font="r-m">
          September 2024
        </Typography>
      )}
      {group?.bills.map((b, index) => {
        const debts = group.bills.flatMap((x) => billToDebts(x));
        const oweOwed = calcOweIsOwed(debts, b.payerAddress);
        return (
          <PaymentCard key={index} userOwe={oweOwed.userIsOwed} bill={b} />
        );
      })}
    </View>
  );
};

export default PaymentList;
