import { View, Text, ScrollView } from "react-native";
import React from "react";
import HistoryCard from "./HistoryCard";
import Typography from "@/shared/ui/Typography";
import { useGroupsStore } from "@/entities/groups/lib/store";

const HistoryList = () => {
  const groups = useGroupsStore((state) => state.groups);

  return (
    <View
      style={{
        marginVertical: "5%",
      }}
    >
      <Typography font="r-m" size={18} align="left">
        September 2024
      </Typography>

      {groups.map((group) =>
        group.bills.map((bill, index) => (
          <HistoryCard
            key={`${group.id}-${index}`}
            groupName={group.name}
            billName={bill.name}
            billSum={bill.sum}
            billDate={bill.date}
          />
        ))
      )}
    </View>
  );
};

export default HistoryList;
