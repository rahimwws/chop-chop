import React, { useEffect } from "react";
import Typography from "@/shared/ui/Typography";
import ScreenLayout from "@/shared/ui/Layout";
import { colors } from "@/shared/lib/theme";
import { Image, View } from "react-native";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { ModalController } from "@reown/appkit-core-react-native";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useAccount } from "wagmi";
import { useUserStore } from "@/shared/lib/store/userStore";
const Intro = () => {
  const navigation = useAppNavigation();
  const { isConnected, address } = useAccount();
  const setAddress = useUserStore((store) => store.setAddress);
  useEffect(() => {
    if (isConnected && address) {
      navigation.navigate("ChooseToken");
      setAddress(address);
    }
  }, [isConnected]);
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
          ModalController.open();
        }}
      />
    </ScreenLayout>
  );
};

export default Intro;
