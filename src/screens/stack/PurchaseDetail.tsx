import { View, Text } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import PurchasePeople from "@/components/purchase-people";

const PurchaseDetail = () => {
  return (
    <ScreenLayout>
      <Header title="" type="stack" />
      <View
        style={{
          marginTop: "-25%",
          backgroundColor: colors.lightGray,
          borderRadius: 5,
          alignItems: "flex-start",
          padding: 10,
        }}
      >
        <Typography size={18} font="r-m">
          Purchase details
        </Typography>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: colors.black,
            marginVertical: "3%",
          }}
        />
        <Typography size={20} color="blue" font="r-m">
          Millenium Hotel Bar
        </Typography>
        <Typography size={22} styles={{ marginVertical: "1%" }} font="r-m">
          134,00 $
        </Typography>
        <Typography>Added by Alexander.S on 19th October 2024</Typography>
      </View>
      <PurchasePeople />
    </ScreenLayout>
  );
};

export default PurchaseDetail;
