import React, { useState, useEffect } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { ExpenseDescription, ExpenseName } from "@/features/add-expense";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useGroupDetailStore } from "@/shared/lib/store/groupDetail";

type RouteParams = {
  type: {
    type: "personal" | "group";
    selectedDate?: number;
    currency?: string;
  };
};

type routeT = RouteProp<RouteParams, "type">;

const AddExpense = () => {
  const group = useGroupDetailStore((store) => store.groupDetails);
  const { params } = useRoute<routeT>();
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [currency, setCurrency] = useState("$");

  useEffect(() => {
    if (params.selectedDate) setSelectedDate(params.selectedDate);
    if (params.currency) setCurrency(params.currency);
  }, [params]);

  return (
    <ScreenLayout>
      <Header
        title={
          params.type === "personal"
            ? "Add Personal Expense"
            : "Add Group Expense"
        }
        showDemo
      />
      <ExpenseName
        type={params.type}
        name={group?.name}
        selectedDate={selectedDate}
      />
      {params.type === "group" && (
        <ExpenseDescription
          group={group!}
          selectedDate={selectedDate}
          currency={currency}
        />
      )}
    </ScreenLayout>
  );
};

export default AddExpense;
