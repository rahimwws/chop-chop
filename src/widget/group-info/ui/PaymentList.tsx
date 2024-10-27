import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { Group } from "@/entities/groups/lib/types";
import PaymentCard from "./cards/PaymentCard";
import { billToDebts, calcOweIsOwed, calcUserOwe } from "@/entities/groups/lib/store";
import { useAccount } from "wagmi";

const PaymentList = ({ group }: { group: Group }) => {
  const { address } = useAccount();
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
        const oweOwed = calcUserOwe(b, address as string);

        return (
          <PaymentCard key={index} userOwe={oweOwed} bill={b} />
        );
      })}
    </View>
  );
};

export default PaymentList;
