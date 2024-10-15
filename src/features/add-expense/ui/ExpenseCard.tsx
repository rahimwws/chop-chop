import { View, TextInput } from "react-native";
import React, { useState } from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import CheckBox from "@/shared/ui/CheckBox";

const ExpenseCard = () => {
  const [price, setPrice] = useState<string>();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: colors.white,
          }}
        />
        <Typography>Mizori Shirouki</Typography>
      </View>
      <TextInput
        defaultValue={price}
        onChangeText={(text) => setPrice(text)}
        placeholder="0.00"
        style={{
          borderBottomWidth: 1,
          borderColor: colors.blue,
          height: 30,
          fontFamily: "r-r",
          fontSize: 18,
          width: "10%",
          textAlign: "right",
        }}
        keyboardType="numeric"
        returnKeyType="done"
        maxLength={3}
        placeholderTextColor={colors.lightBlue}
      />
      <CheckBox selected setSelected={() => {}} />
    </View>
  );
};

export default ExpenseCard;
