import React, { useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { colors } from "@/shared/lib/theme";
import ExpenseCard from "./ExpenseCard";
import { Group } from "@/entities/groups/lib/types";
import { useAppNavigation } from "@/shared/lib/navigation";
import LargeButton from "@/shared/ui/Button/LargeButton";
import Typography from "@/shared/ui/Typography";
import Description from "@/shared/assets/svg/icons/description.svg";
import { useExpense } from "../lib/hook/useExpense";
import { useUserStore } from "@/shared/lib/store/userStore";
import { useContactsStore } from "@/entities/contacts/lib/store";

const ExpenseDescription = ({
  group,
  selectedDate,
  currency,
}: {
  group: Group;
  selectedDate: number;
  currency: string;
}) => {
  const {
    description,
    setDescription,
    sum,
    setSum,
    paidBy,
    setPaidBy,
    updatePrice,
    handleAddPayment,
  } = useExpense(group, selectedDate, currency);

  const navigation = useAppNavigation();

  const userToken = useUserStore((store) => store.address);
  const userName = useUserStore((store) => store.username);
  const userAvatarUrl = useUserStore((store) => store.avatar);
  const contacts = useContactsStore((store) => store.contacts);

  useEffect(() => {
    if (!paidBy) {
      setPaidBy(userToken);
    }
  }, []);

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
            <Typography size={20} color="white">
              {currency}
            </Typography>
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

        <ScrollView contentContainerStyle={{ marginTop: "2%", gap: 10 }}>
          {group &&
            group.participants
              .filter((token) => token !== userToken)
              .map((token) => {
                const contact = contacts.find((c) => c.address === token);
                return contact ? (
                  <ExpenseCard
                    key={token}
                    name={contact.name}
                    avatarUrl={contact.avatarUrl}
                    token={token}
                    updatePrice={updatePrice}
                    selected={paidBy === token}
                    setPaidBy={setPaidBy}
                  />
                ) : null;
              })}

          <ExpenseCard
            key={userToken}
            name={userName}
            avatarUrl={userAvatarUrl}
            token={userToken}
            updatePrice={updatePrice}
            selected={paidBy === userToken}
            setPaidBy={setPaidBy}
          />
        </ScrollView>
      </View>

      <LargeButton
        text="Add Payment"
        bg={colors.blue}
        textColor="white"
        styles={{
          height: 40,
          marginVertical: "5%",
        }}
        action={handleAddPayment}
      />
    </>
  );
};

export default ExpenseDescription;
