import { View, Text, ScrollView } from "react-native";
import React from "react";
import HistoryCard from "./HistoryCard";
import Typography from "@/shared/ui/Typography";
import ScreenLayout from "@/shared/ui/Layout";

const HistoryList = () => {
  return (
    <View
      style={{
        marginVertical: "5%",
      }}
    >
      <Typography font="r-m" size={18} align="left">
        September 2024
      </Typography>
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </View>
  );
};

export default HistoryList;
