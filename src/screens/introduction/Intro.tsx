import React from "react";
import Typography from "@/shared/ui/Typography";
import ScreenLayout from "@/shared/ui/Layout";
import { colors } from "@/shared/lib/theme";
import { Image, View } from "react-native";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { ModalController } from "@reown/appkit-core-react-native";
import { useAppNavigation } from "@/shared/lib/navigation";
const Intro = () => {
  const navigation = useAppNavigation();
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
      <LargeButton
        text="CONNECT WALLET"
        action={() => {
          navigation.navigate("ChooseChains");
          // ModalController.open();
        }}
      />
    </ScreenLayout>
  );
};

export default Intro;
