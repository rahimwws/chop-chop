import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { useAppNavigation } from "@/shared/lib/navigation";

const Card = () => {
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
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: colors.middleGray,
            borderRadius: 50,
          }}
        />
        <View
          style={{
            alignItems: "flex-start",
          }}
        >
          <Typography size={18} font="r-b">
            Alexander Nolan
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
