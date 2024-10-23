import { View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "@/shared/lib/theme";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { useAddContact } from "../hooks/useAddContact";
import { AVATARS } from "@/shared/config/avatars";

const AddContact = () => {
  const { address, setAddress, handleAddContact, isLoading } = useAddContact();

  const [name, setName] = useState("");
  const [avatarIndex, setAvatarIndex] = useState(0);

  useEffect(() => {
    setAvatarIndex(Math.floor(Math.random() * AVATARS.length));
  }, []);

  const avatarSource = AVATARS[avatarIndex].src;

  return (
    <View
      style={{
        marginVertical: "5%",
        alignItems: "flex-start",
      }}
    >
      <TextInput
        placeholder="Contact Name"
        style={{
          borderWidth: 1,
          borderColor: colors.blue,
          width: "100%",
          padding: 10,
          borderRadius: 5,
          fontFamily: "r-r",
          fontSize: 16,
          marginBottom: 10,
        }}
        placeholderTextColor={colors.lightBlue}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter Wallet Address or ENS Name"
        style={{
          borderWidth: 1,
          borderColor: colors.blue,
          width: "100%",
          padding: 10,
          borderRadius: 5,
          fontFamily: "r-r",
          fontSize: 16,
          marginBottom: 20,
        }}
        placeholderTextColor={colors.lightBlue}
        value={address}
        onChangeText={setAddress}
      />
      <LargeButton
        text={isLoading ? "Loading..." : "Add"}
        bg={colors.blue}
        textColor="white"
        styles={{
          marginBottom: 10,
          height: 40,
        }}
        action={() => handleAddContact(name, avatarSource)}
        disabled={isLoading || !name || !address}
      />
    </View>
  );
};

export default AddContact;
