import React, { useState, useCallback, useMemo } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { colors } from "@/shared/lib/theme";
import ExpenseCard from "./ExpenseCard";
import { Group } from "@/entities/groups/lib/types";
import { useAppNavigation } from "@/shared/lib/navigation";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { useUpdatePrice } from "../lib/hook/useUpdatePrice";
import { validateSum } from "../model/validation/validateSum";
import Typography from "@/shared/ui/Typography";
import { useGroupsStore } from "@/entities/groups/lib/store";
import { useAddNewBill } from "../lib/hook/useAddNewBill";
import Description from "@/shared/assets/svg/icons/description.svg";
import Money from "@/shared/assets/svg/icons/money.svg";
const ExpenseDescription = ({
  group,
  type,
}: {
  group: Group;
  type: "personal" | "group";
}) => {
  const { participantsPrices, updatePrice } = useUpdatePrice();
  const [description, setDescription] = useState<string>("");
  const [sum, setSum] = useState<string>("");
  const [paidBy, setPaidBy] = useState<string | null>(null);
  const navigation = useAppNavigation();

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

  const action = useCallback(() => {
    const result = validateSum(sum, sumGroup);

    if (!paidBy) {
      Alert.alert("Error", "Please select the person who paid the bill.");
      return;
    }

    if (result.success) {
      addNewBill(group.id, description, sumGroup, paidBy, participantsPrices);

      Alert.alert("Success", "Bill has been added successfully!");
      setDescription("");
      setSum("");
      setPaidBy(null);
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
    group.id,
  ]);

  return (
    <>
      <View
        style={{
          backgroundColor: colors.lightGray,
          borderRadius: 5,
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, marginTop: "2%" }}>
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: colors.blue,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Иконка описания */}
            <Description />
          </View>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Enter Description"
            style={{
              borderBottomWidth: 1,
              borderColor: colors.blue,
              flex: 1,
              height: 30,
              fontFamily: "r-r",
              fontSize: 18,
            }}
            placeholderTextColor={colors.lightBlue}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 10, marginTop: "2%" }}>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              backgroundColor: colors.blue,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Payments")}
          >
            <Money />
          </TouchableOpacity>
          <TextInput
            value={sum}
            onChangeText={setSum}
            placeholder="Enter full sum of the bill"
            style={{
              borderBottomWidth: 1,
              borderColor: colors.blue,
              flex: 1,
              height: 30,
              fontFamily: "r-r",
              fontSize: 18,
            }}
            keyboardType="numeric"
            returnKeyType="done"
            placeholderTextColor={colors.lightBlue}
          />
        </View>

        <Typography
          color="blue"
          align="right"
          styles={{
            marginTop: "5%",
          }}
        >
          Paid by
        </Typography>

        <View style={{ marginTop: "2%", gap: 10 }}>
          {type === "group" &&
            group.participants.map((item, index) => (
              <ExpenseCard
                key={index}
                address={item}
                updatePrice={updatePrice}
                selected={paidBy === item}
                setPaidBy={setPaidBy}
              />
            ))}
        </View>
      </View>

      <LargeButton
        text="Add Payment"
        bg={colors.blue}
        textColor="white"
        styles={{
          height: 40,
          marginVertical: "5%",
        }}
        action={action}
      />
    </>
  );
};

export default ExpenseDescription;
