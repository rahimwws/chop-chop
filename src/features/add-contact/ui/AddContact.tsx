import { View, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "@/shared/lib/theme";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { useAddContact } from "../hooks/useAddContact";
import { AVATARS } from "@/shared/config/avatars";
import QRCode from "@/shared/assets/svg/icons/qr.svg";
import { useAppNavigation } from "@/shared/lib/navigation";

const AddContact = ({ QrAddress }: { QrAddress: undefined | string }) => {
  const { address, setAddress, handleAddContact, isLoading } = useAddContact();
  const navigation = useAppNavigation();
  const [name, setName] = useState<string>("");
  const [avatarIndex, setAvatarIndex] = useState<number>(0);

  useEffect(() => {
    setAvatarIndex(Math.floor(Math.random() * AVATARS.length));
    if (QrAddress) setAddress(QrAddress);
  }, [QrAddress]);

  const avatarSource = AVATARS[avatarIndex].src;

  const handleSubmit = () => {
    if (!address && !name) {
      Alert.alert("Error", "Please enter a wallet address or name");
      return;
    }

    handleAddContact(name, avatarSource);
  };

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
          height: 40,
        }}
        placeholderTextColor={colors.lightBlue}
        value={name}
        onChangeText={setName}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <TextInput
          placeholder="Enter Wallet Address or ENS Name"
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: colors.blue,
            padding: 10,
            borderRadius: 5,
            fontFamily: "r-r",
            fontSize: 16,
            marginVertical: 10,
            flex: 1,
          }}
          placeholderTextColor={colors.lightBlue}
          value={address}
          onChangeText={setAddress}
        />
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: colors.blue,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Camera")}
        >
          <QRCode
            style={{ backgroundColor: "transparent" }}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <LargeButton
        text={isLoading ? "Loading..." : "Add"}
        bg={colors.blue}
        textColor="white"
        styles={{
          marginBottom: 10,
          height: 40,
        }}
        action={handleSubmit}
        disabled={isLoading || (!address && !name)}
      />
    </View>
  );
};

export default AddContact;
