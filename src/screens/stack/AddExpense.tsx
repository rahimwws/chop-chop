import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { ExpenseDescription, ExpenseName } from "@/features/add-expense";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useGroupDetailStore } from "@/shared/lib/store/groupDetail";
type RouteParams = {
  type: {
    type: "personal" | "group";
  };
};

type routeT = RouteProp<RouteParams, "type">;
const AddExpense = () => {
  const group = useGroupDetailStore((store) => store.groupDetails);
  const { params } = useRoute<routeT>();
  if (!group) return null;
  return (
    <ScreenLayout>
      <Header
        title={
          params.type === "personal"
            ? "Add Personal Expense"
            : "Add Group Expense"
        }
      />
      <ExpenseName type={params.type} name={group.name} />
      <ExpenseDescription group={group} type={params.type} />
      <LargeButton
        text="Add Payment"
        bg={colors.blue}
        textColor="white"
        styles={{
          height: 40,
          marginVertical: "5%",
        }}
        isRoute
        route="Payments"
      />
    </ScreenLayout>
  );
};

export default AddExpense;
