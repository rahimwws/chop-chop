import React from "react";
import Typography from "@/shared/ui/Typography";
import ScreenLayout from "@/shared/ui/Layout";
import { colors } from "@/shared/lib/theme";
import { Image, View } from "react-native";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { AppKitButton } from "@reown/appkit-wagmi-react-native";
const Intro = () => {
  return (
    <ScreenLayout styles={{ backgroundColor: colors.blue }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("@/shared/assets/images/logo.png")}
          style={{
            width: 200,
            height: 200,
            marginTop: "-15%",
          }}
          resizeMode="contain"
        />
        <Typography color="white" styles={{ marginTop: "-15%" }}>
          Pay off without paying attention
        </Typography>
      </View>
      <AppKitButton
        connectStyle={
          {
            // backgroundColor: colors.white,
          }
        }
        label=""
      />
      <LargeButton text="CONNECT WALLET" isRoute route="ChooseChains" />
    </ScreenLayout>
  );
};

export default Intro;
