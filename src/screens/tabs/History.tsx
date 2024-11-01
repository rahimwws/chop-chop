import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { HistoryList } from "@/widget/history";

const History = () => {
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="History" showDemo />
        <HistoryList />
      </ScrollView>
    </ScreenLayout>
  );
};

export default History;
