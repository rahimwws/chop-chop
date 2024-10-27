import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { mainnet } from "viem/chains";
import { useEnsName } from "wagmi";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { Bill } from "@/entities/groups/lib/types";
import { formatDate } from "@/widget/history/model/format";

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function PaymentCard({
  userOwe,
  bill,
}: {
  userOwe: number;
  bill: Bill;
}) {
  const { data: ensName } = useEnsName({
    address: bill.payerAddress as any,
    chainId: mainnet.id,
  });
  const navigation = useAppNavigation();
  const formattedDate = formatDate(new Date(bill.date));
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", gap: 5 }}
      onPress={() => navigation.navigate("PurchaseDetail", { bill })}
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
        <Typography font="ar-r" styles={{ lineHeight: 17 }}>
          {formattedDate}
        </Typography>
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 2,
          marginRight: "auto",
          alignItems: "flex-start",
        }}
      >
        <Typography color="blue">{bill.name}</Typography>

        <Typography size={14}>
          <Typography size={14} color="blue">
            Paid:
          </Typography>
          {ensName || shortenAddress(bill.payerAddress)}
        </Typography>

        <Typography>
          <Typography color="blue">Bill:</Typography>
          {bill.sum} {bill.currency}
        </Typography>
      </View>

      {userOwe > 0 ? (
        <>
          <Typography color="red">You owe</Typography>
          <Typography color="red">
            {userOwe} {bill.currency}
          </Typography>
        </>
      ) : (
        <>
          <Typography color="green">You are owed</Typography>
          <Typography color="green">
            {-userOwe} {bill.currency}
          </Typography>
        </>
      )}
    </TouchableOpacity>
  );
}
