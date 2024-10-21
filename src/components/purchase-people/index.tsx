import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { Bill } from "@/entities/groups/lib/types";

const PurchasePeople = ({ bill }: { bill: Bill }) => {
  return (
    <View
      style={{
        marginVertical: "5%",
        alignItems: "flex-start",
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 5,
        gap: 10,
      }}
    >
      {bill.spenersAddresses.map((people, index) => {
        const price = bill.spentAmounts[index];
        return (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
            key={index}
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
                {people}
              </Typography>
              <Typography font="r-m">
                <Typography color="blue">Paid:</Typography> {price}$
              </Typography>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default PurchasePeople;
