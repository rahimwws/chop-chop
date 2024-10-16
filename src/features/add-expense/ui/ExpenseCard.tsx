import { View, TextInput, Image } from "react-native";
import React, { useState } from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import CheckBox from "@/shared/ui/CheckBox";
import { useContactsStore } from "@/entities/contacts/lib/store";

const ExpenseCard = ({ address }: { address: string }) => {
  const [price, setPrice] = useState<string>();
  const user = useContactsStore((store) =>
    store.contacts.find((item) => item.tokenAddress === address)
  );
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
          source={user?.avatarUrl}
        />
        <Typography>{user?.name}</Typography>
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
