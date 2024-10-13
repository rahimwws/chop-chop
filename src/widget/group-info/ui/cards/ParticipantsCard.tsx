import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import React from "react";
import { View, Text, Image } from "react-native";
import { mainnet } from "viem/chains";
import { useEnsName } from "wagmi";

type Props = {
  avatarId: number;
  participantAddr: string;
  oweOwed: {
    userOwe: number;
    userIsOwed: number;
  };
};

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function ParticipantCard({ participantAddr, oweOwed }: Props) {
  const { data: name } = useEnsName({
    address: participantAddr as any,
    chainId: mainnet.id,
  });

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 40,
            backgroundColor: colors.lightGray,
          }}
        />
        <Typography font="r-m" size={18}>
          {name || shortenAddress(participantAddr)}
        </Typography>
      </View>

      <View style={{ flexDirection: "column", gap: 3 }}>
        <Typography
          size={16}
          align="right"
          color={oweOwed.userOwe ? "red" : "green"}
        >
          {oweOwed.userOwe ? "You owe" : "Owes you"}
        </Typography>
        <Typography align="right" color={oweOwed.userOwe ? "red" : "green"}>
          {oweOwed.userOwe ?? oweOwed.userIsOwed} $
        </Typography>
      </View>
    </View>
  );
}
