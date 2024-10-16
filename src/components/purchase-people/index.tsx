import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const PurchasePeople = () => {
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
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: colors.white,
          }}
        />
        <View
          style={{
            alignItems: "flex-start",
          }}
        >
          <Typography font="r-m" size={18}>
            Alexander Savinchuk
          </Typography>
          <Typography font="r-m">
            <Typography color="blue">Paid:</Typography> 143$
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default PurchasePeople;
