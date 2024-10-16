import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { mainnet } from "viem/chains";
import { useEnsName } from "wagmi";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function PaymentCard({
  date,
  place,
  paidBy,
  billAmount,
  userOwe,
}: {
  date: { number: number; month: string };
  place: string;
  paidBy: string;
  billAmount: number;
  userOwe: number;
}) {
  const { data: ensName } = useEnsName({
    address: paidBy as any,
    chainId: mainnet.id,
  });
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", gap: 5 }}
      onPress={() => navigation.navigate("PurchaseDetail")}
    >
      <View
        style={{
          backgroundColor: colors.lightGray,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          width: 54,
          height: 54,
          gap: 4,
          flexDirection: "column",
        }}
      >
        <Typography font="ar-r">{date.number}TH</Typography>
        <Typography font="ar-r">{date.month}</Typography>
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 2,
          marginRight: "auto",
          alignItems: "flex-start",
        }}
      >
        <Typography color="blue">{place}</Typography>

        <Typography size={14}>
          <Typography size={14} color="blue">
            Paid:
          </Typography>
          {ensName || shortenAddress(paidBy)}
        </Typography>

        <Typography>
          <Typography color="blue">Bill:</Typography>
          {billAmount}$
        </Typography>
      </View>

      <Typography color="red">You owe</Typography>
      <Typography color="red">{userOwe} $</Typography>
    </TouchableOpacity>
  );
}
