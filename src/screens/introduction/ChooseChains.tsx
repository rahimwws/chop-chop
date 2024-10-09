import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Typography from "@/shared/ui/Typography";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";
import { ChainsList } from "@/widget/chains";

const ChooseChains = () => {
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/shared/assets/images/blue-logo.png")}
          style={{
            width: 200,
            height: 200,
            marginTop: "-15%",
          }}
          resizeMode="contain"
        />
        <Typography
          font="ar-r"
          styles={{ lineHeight: 26, marginTop: "-15%", marginBottom: "5%" }}
          size={24}
        >
          choose the{" "}
          <Typography
            font="ar-r"
            styles={{ lineHeight: 26 }}
            size={24}
            color="blue"
          >
            chains
          </Typography>{" "}
          in which you want to refund your paiments
        </Typography>
        <ChainsList />
      </ScrollView>
      <LargeButton
        text="Next"
        bg={colors.blue}
        textColor="white"
        isRoute
        route="ChooseToken"
      />
    </ScreenLayout>
  );
};

export default ChooseChains;
