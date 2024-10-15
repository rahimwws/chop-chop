import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { ExpenseDescription, ExpenseName } from "@/features/add-expense";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";
import { useAppNavigation } from "@/shared/lib/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
type RouteParams = {
  type: {
    type: "personal" | "group";
  };
};

type routeT = RouteProp<RouteParams, "type">;
const AddExpense = () => {
  const navigation = useAppNavigation();
  const { params } = useRoute<routeT>();
  return (
    <ScreenLayout>
      <Header
        title={
          params.type === "personal"
            ? "Add Personal Expense"
            : "Add Group Expense"
        }
      />
      <ExpenseName type={params.type} />
      <ExpenseDescription />
      <LargeButton
        text="Add Payment"
        bg={colors.blue}
        textColor="white"
        styles={{
          height: 40,
          marginVertical: "5%",
        }}
        action={() => navigation.goBack()}
      />
    </ScreenLayout>
  );
};

export default AddExpense;
