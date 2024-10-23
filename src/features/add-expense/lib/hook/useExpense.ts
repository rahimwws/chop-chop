import { useState, useCallback, useMemo } from "react";
import { Alert } from "react-native";
import { useUpdatePrice } from "./useUpdatePrice";
import { useGroupsStore } from "@/entities/groups/lib/store";
import { useAddNewBill } from "./useAddNewBill";
import { Group } from "@/entities/groups/lib/types";
import { validateSum } from "../../model/validation/validateSum";
import { useAppNavigation } from "@/shared/lib/navigation";

export const useExpense = (
  group: Group,
  selectedDate: number,
  currency: string
) => {
  const navigation = useAppNavigation();

  const { participantsPrices, updatePrice } = useUpdatePrice();
  const [description, setDescription] = useState<string>("");
  const [sum, setSum] = useState<string>("");
  const [paidBy, setPaidBy] = useState<string | null>(null);
  const groups = useGroupsStore((store) => store.groups);
  const setGroups = useGroupsStore((store) => store.setGroups);

  const { addNewBill } = useAddNewBill(groups, setGroups);

  const sumGroup = useMemo(
    () =>
      Object.values(participantsPrices).reduce(
        (total, price) => total + price,
        0
      ),
    [participantsPrices]
  );

  const handleAddPayment = useCallback(() => {
    const result = validateSum(sum, sumGroup);

    if (!paidBy) {
      Alert.alert("Error", "Please select the person who paid the bill.");
      return;
    }

    if (result.success) {
      addNewBill(
        group.id,
        description,
        sumGroup,
        paidBy,
        participantsPrices,
        selectedDate,
        currency
      );

      Alert.alert("Success", "Bill has been added successfully!");
      setDescription("");
      setSum("");
      setPaidBy(null);

      navigation.navigate("GroupDetail", { group });
    } else {
      Alert.alert("Error", result.message);
    }
  }, [
    sum,
    sumGroup,
    paidBy,
    description,
    participantsPrices,
    addNewBill,
    selectedDate,
  ]);

  return {
    description,
    setDescription,
    sum,
    setSum,
    paidBy,
    setPaidBy,
    participantsPrices,
    updatePrice,
    handleAddPayment,
  };
};
