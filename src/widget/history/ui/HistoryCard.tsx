import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";

const HistoryCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: colors.lightGray,
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 5,
          backgroundColor: colors.lightGray,
        }}
      ></View>
      <View
        style={{
          alignItems: "flex-start",
        }}
      >
        <Typography
          align="left"
          styles={{
            width: "70%",
          }}
        >
          Alexander added “Millenium Dinner” in Group Number 1
        </Typography>
        <Typography color="red" font="r-m">
          You owe: 25$
        </Typography>
      </View>
    </View>
  );
};

export default HistoryCard;
