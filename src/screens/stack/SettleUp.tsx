import { View, Text } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";

const SettleUp = () => {
  return (
    <ScreenLayout>
      <Header title="Settle Up" />
      <View
        style={{
          padding: 10,
          backgroundColor: colors.lightGray,
          borderRadius: 5,
          marginVertical: "5%",
        }}
      >
        <Typography font="ar-r" size={18} align="left">
          Your chain: BNB Smart chain
        </Typography>
      </View>
    </ScreenLayout>
  );
};

export default SettleUp;
