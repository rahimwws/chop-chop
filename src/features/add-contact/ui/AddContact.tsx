import { View, Text, TextInput } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import LargeButton from "@/shared/ui/Button/LargeButton";

const AddContact = () => {
  return (
    <View
      style={{
        marginVertical: "5%",
        alignItems: "flex-start",
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Typography font="ar-r" size={24}>
        Add new Contact
      </Typography>
      <TextInput
        placeholder="Enter Wallet Number or EMC Name"
        style={{
          borderWidth: 1,
          borderColor: colors.blue,
          width: "100%",
          marginVertical: "5%",
          padding: 10,
          borderRadius: 5,
          fontFamily: "r-r",
          fontSize: 16,
        }}
        placeholderTextColor={colors.lightBlue}
      />
      <LargeButton
        text="Add"
        bg={colors.blue}
        textColor="white"
        styles={{
          marginBottom: 10,
          height: 40,
        }}
      />
    </View>
  );
};

export default AddContact;
