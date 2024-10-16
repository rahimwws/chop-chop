import { View, Text, Image } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { useAppNavigation } from "@/shared/lib/navigation";
import { Contact } from "@/entities/contacts/model/types";

const Card = ({ contact }: { contact: Contact }) => {
  const navigation = useAppNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={contact.avatarUrl}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            resizeMode: "contain",
          }}
        />
        <View
          style={{
            alignItems: "flex-start",
          }}
        >
          <Typography size={18} font="r-b">
            {contact.name}
          </Typography>
          <Typography color="red">You owe: 25 $</Typography>
        </View>
      </View>
      <LargeButton
        styles={{
          width: "35%",
          height: 30,
        }}
        text="Settle Up"
        textStyle={{
          fontSize: 18,
        }}
        textColor="white"
        bg={colors.blue}
        action={() => navigation.navigate("Expense", { type: "personal" })}
      />
    </View>
  );
};

export default Card;
