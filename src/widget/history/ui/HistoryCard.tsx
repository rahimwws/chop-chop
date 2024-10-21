import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import { formatDate } from "../model/format";

const HistoryCard = ({
  groupName,
  billName,
  billSum,
  billDate,
}: {
  groupName: string;
  billName: string;
  billSum: number;
  billDate: number;
}) => {
  const formattedDate = formatDate(new Date(billDate));
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
          {`${groupName} added “${billName}”`}
        </Typography>
        <Typography color="red" font="r-m">
          You owe: {billSum}$
        </Typography>
      </View>
    </View>
  );
};

export default HistoryCard;
