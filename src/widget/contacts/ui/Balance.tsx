import { View } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const Balance = ({ totalOwed }: { totalOwed: number }) => {
  return (
    <View
      style={{
        marginVertical: "5%",
        alignItems: "flex-start",
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Typography size={24} color="blue" font="ar-r">
        You are owed: {totalOwed} $
      </Typography>
    </View>
  );
};

export default Balance;
