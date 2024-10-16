import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import GroupSVG from "@/shared/assets/svg/tabs/group-svg.svg";
import CalendarSvg from "@/shared/assets/svg/icons/calendar.svg";
import { getFormattedDate } from "../model/format";
const ExpenseName = ({
  type,
  name,
}: {
  type: "personal" | "group";
  name: string;
}) => {
  const date = getFormattedDate();
  return (
    <View
      style={{
        marginVertical: "5%",
        backgroundColor: colors.lightGray,
        borderRadius: 5,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          marginBottom: 5,
          alignItems: "center",
        }}
      >
        <GroupSVG width={26} height={26} stroke={colors.blue} strokeWidth={2} />
        <Typography size={18} font="r-m" align="left">
          {type === "personal" ? " With Alexandr" : name}
        </Typography>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          marginBottom: 5,
          alignItems: "center",
        }}
      >
        <CalendarSvg
          width={26}
          height={26}
          stroke={colors.blue}
          strokeWidth={0.05}
        />
        <Typography size={18} font="r-m" align="left">
          {date}
        </Typography>
      </View>
    </View>
  );
};

export default ExpenseName;
