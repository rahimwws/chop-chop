import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import { Group } from "@/entities/groups/lib/types";
import Typography from "@/shared/ui/Typography";
import LargeButton from "@/shared/ui/Button/LargeButton";

const GroupHeader = ({ group }: { group: Group }) => {
  return (
    <View
      style={{
        marginTop: "-25%",
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 5,
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      <Typography size={18} font="ar-r">
        {group.name}
      </Typography>
      <Typography
        size={18}
        font="r-r"
        styles={{
          marginVertical: 3,
        }}
      >
        You are owed: 153,6 $
      </Typography>
      <Typography size={18} font="r-r">
        You owe: 13,5 $
      </Typography>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <LargeButton
          styles={{
            width: "40%",
            height: 30,
          }}
          text="Settle Up"
          textStyle={{
            fontSize: 18,
          }}
          textColor="white"
          bg={colors.blue}
        />
        <LargeButton
          styles={{
            width: "40%",
            height: 30,
          }}
          text="Delete"
          textStyle={{
            fontSize: 18,
          }}
          textColor="blue"
          bg={colors.middleGray}
        />
      </View>
    </View>
  );
};

export default GroupHeader;
