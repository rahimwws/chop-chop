import { View, Text, Image } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { useAppNavigation } from "@/shared/lib/navigation";
import { Contact } from "@/entities/contacts/model/types";

interface CardProps {
  contact: Contact;
  userOwe: number;
  userIsOwed: number;
}

const Card = ({ contact, userOwe, userIsOwed }: CardProps) => {
  const navigation = useAppNavigation();

  const debtMessage =
    userOwe > 0
      ? `You owe: ${userOwe} $`
      : userIsOwed > 0
      ? `You are owed: ${userIsOwed} $`
      : "No debts";

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
          <Typography color={userOwe > 0 ? "red" : "green"}>
            {debtMessage}
          </Typography>
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
