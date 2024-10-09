import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import OneInch from "@/shared/assets/images/tokens/1inch.svg";
import Op from "@/shared/assets/images/tokens/op.svg";
import Usdc from "@/shared/assets/images/tokens/usdc.svg";
import Weth from "@/shared/assets/images/tokens/weth.svg";
import Wflow from "@/shared/assets/images/tokens/wflow.svg";
import Zksync from "@/shared/assets/images/tokens/zksync.svg";
import Wbtc from "@/shared/assets/images/tokens/wbtc.svg";
import Mark from "@/shared/assets/svg/icons/check-mark.svg";
import Typography from "@/shared/ui/Typography";
import { LightHeptic } from "@/shared/lib/heptics";
import { colors } from "@/shared/lib/theme";
export const TokenCard = ({
  text,
  isSelected,
  setIsSelected,
  tokenId,
  chain,
}: {
  text: string;
  isSelected: boolean;
  setIsSelected: () => void;
  tokenId: string;
  chain: string;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isSelected ? colors.lightBlue : colors.lightGray,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 60,
      }}
      onPress={() => {
        setIsSelected();
        LightHeptic();
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 19,
        }}
      >
        {tokenId && tokenId == "usdc" && <Usdc width={34} height={34} />}
        {tokenId && tokenId == "1inch" && <OneInch width={34} height={34} />}
        {tokenId && tokenId == "op" && <Op width={34} height={34} />}
        {tokenId && tokenId == "weth" && <Weth width={34} height={34} />}
        {tokenId && tokenId == "wflow" && <Wflow width={34} height={34} />}
        {tokenId && tokenId == "zksync" && <Zksync width={34} height={34} />}
        {tokenId && tokenId == "wbtc" && <Wbtc width={34} height={34} />}

        <Typography size={18}>{text}</Typography>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography>{chain}</Typography>
        {isSelected && <Mark width={22} />}
      </View>
    </TouchableOpacity>
  );
};

export default TokenCard;
