import { View } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import { formatDate } from "../model/format";
import { useUserStore } from "@/shared/lib/store/userStore";

const HistoryCard = ({
  groupName,
  billName,
  billDate,
  userOwe,
  paidBy,
}: {
  groupName: string;
  billName: string;
  billDate: number;
  userOwe: number;
  paidBy: string;
}) => {
  const formattedDate = formatDate(new Date(billDate));
  const userAddress = useUserStore((store) => store.address);
  const isUserPayer = paidBy === userAddress;

  const getDebtText = () => {
    if (isUserPayer) {
      return "You paid";
    } else if (userOwe > 0) {
      return `You owe: ${userOwe.toFixed(2)}$`;
    } else if (userOwe < 0) {
      return `You are owed: ${Math.abs(userOwe).toFixed(2)}$`;
    } else {
      return "No debt";
    }
  };

  const debtColor = isUserPayer ? "green" : userOwe > 0 ? "red" : "blue";

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: colors.lightGray,
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 5,
          backgroundColor: colors.lightGray,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography size={18} color="black" font="r-m">
          {formattedDate}
        </Typography>
      </View>
      <View
        style={{
          alignItems: "flex-start",
        }}
      >
        <Typography align="left" styles={{}} size={18}>
          {`${groupName} added "${billName}"`}
        </Typography>
        <Typography color={debtColor} font="r-m">
          {getDebtText()}
        </Typography>
      </View>
    </View>
  );
};

export default HistoryCard;
