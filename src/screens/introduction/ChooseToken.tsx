import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import LargeButton from "@/shared/ui/Button/LargeButton";
import ScreenLayout from "@/shared/ui/Layout";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { TokenList } from "@/widget/tokens";
const ChooseToken = () => {
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
            tokens
          </Typography>{" "}
          in which you want to refund your paiments
        </Typography>
        <TokenList />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LargeButton
          text="Back"
          bg={colors.middleGray}
          textColor="black"
          styles={{ width: "48%" }}
          isRoute
          route="ChooseChains"
        />
        <LargeButton
          text="Next"
          bg={colors.blue}
          textColor="white"
          styles={{ width: "48%" }}
          isRoute
          route="Service"
        />
      </View>
    </ScreenLayout>
  );
};

export default ChooseToken;
