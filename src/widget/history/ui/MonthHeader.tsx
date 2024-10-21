import React from "react";
import { View } from "react-native";
import Typography from "@/shared/ui/Typography";

const formatMonth = (month: number): string => {
  return new Date(2024, month).toLocaleString("default", { month: "long" });
};

interface MonthHeaderProps {
  selectedMonth: number;
}

const MonthHeader: React.FC<MonthHeaderProps> = ({ selectedMonth }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography font="r-m" size={18} align="left">
        {formatMonth(selectedMonth)} 2024
      </Typography>
    </View>
  );
};

export default MonthHeader;
