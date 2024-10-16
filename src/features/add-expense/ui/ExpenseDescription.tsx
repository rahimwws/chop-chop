import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { colors } from "@/shared/lib/theme";
import Description from "@/shared/assets/svg/icons/description.svg";
import Money from "@/shared/assets/svg/icons/money.svg";
import ExpenseCard from "./ExpenseCard";
import { Group } from "@/entities/groups/lib/types";
const ExpenseDescription = ({
  group,
  type,
}: {
  group: Group;
  type: "personal" | "group";
}) => {
  const [description, setDescription] = useState<string>();
  return (
    <View
      style={{
        backgroundColor: colors.lightGray,
        borderRadius: 5,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: "2%",
        }}
      >
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
          defaultValue={description}
          onChangeText={(text) => setDescription(text)}
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
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: "2%",
        }}
      >
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
          <Money />
        </View>
        <TextInput
          defaultValue={description}
          onChangeText={(text) => setDescription(text)}
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
      <View
        style={{
          marginTop: "5%",
          gap: 10,
        }}
      >
        {type === "group" &&
          group.participants.map((item, index) => {
            return <ExpenseCard address={item} key={index} />;
          })}
      </View>
    </View>
  );
};

export default ExpenseDescription;
