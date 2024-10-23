import { View, TextInput, Image, ImageProps } from "react-native";
import React, { useState, useEffect } from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import CheckBox from "@/shared/ui/CheckBox";

const ExpenseCard = ({
  name,
  avatarUrl,
  token,
  updatePrice,
  selected,
  setPaidBy,
}: {
  name: string;
  avatarUrl: ImageProps;
  token: string;
  updatePrice: (token: string, price: number) => void;
  selected: boolean;
  setPaidBy: (token: string) => void;
}) => {
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    const priceValue = parseFloat(price) || 0;
    updatePrice(token, priceValue);
  }, [price]);

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
          width: "70%",
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            resizeMode: "contain",
          }}
          source={avatarUrl}
        />
        <Typography>{name}</Typography>
      </View>

      <TextInput
        value={price}
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
        placeholderTextColor={colors.lightBlue}
      />

      <CheckBox selected={selected} setSelected={() => setPaidBy(token)} />
    </View>
  );
};

export default ExpenseCard;
