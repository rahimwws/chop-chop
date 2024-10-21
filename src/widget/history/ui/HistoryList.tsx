import { View } from "react-native";
import React, { useState, useMemo } from "react";
import { useGroupsStore } from "@/entities/groups/lib/store";
import { useUserStore } from "@/shared/lib/store/userStore";
import MonthHeader from "./MonthHeader";
import BillsList from "./BillsList";
import { filterBillsByMonth } from "../model/format";
const HistoryList = () => {
  const groups = useGroupsStore((state) => state.groups);
  const userAddress = useUserStore((state) => state.address);

  const selectedMonth = new Date().getMonth();

  const filteredBills = useMemo(
    () => filterBillsByMonth(groups, selectedMonth),
    [groups, selectedMonth]
  );

  return (
    <View style={{ marginVertical: "5%" }}>
      <MonthHeader selectedMonth={selectedMonth} />
      <BillsList bills={filteredBills} userAddress={userAddress} />
    </View>
  );
};

export default HistoryList;
