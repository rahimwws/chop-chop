import { View, Text, TextInput, ImageProps } from "react-native";
import React, { useState, useRef } from "react";
import Avatar from "@/shared/ui/Avatar";
import { colors } from "@/shared/lib/theme";
import LargeButton from "@/shared/ui/Button/LargeButton";
import Typography from "@/shared/ui/Typography";
import { useUserStore } from "@/shared/lib/store/userStore";
import * as Clipboard from "expo-clipboard";
import Edit from "@/shared//assets/svg/icons/edit.svg";
import Copy from "@/shared//assets/svg/icons/copy.svg";

const ProfileView = ({
  openSheet,
  image,
}: {
  openSheet: () => void;
  image: ImageProps;
}) => {
  const username = useUserStore((store) => store.username);
  const setUsername = useUserStore((store) => store.setUsername);
  const address = useUserStore((store) => store.address);
  const [isCopied, setIsCopied] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  return (
    <View
      style={{
        marginVertical: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          width: "72%",
        }}
      >
        <Avatar imageUri={image} onEdit={openSheet} avatar />
        <View
          style={{
            gap: 5,
            flex: 1,
          }}
        >
          <TextInput
            ref={textInputRef}
            defaultValue={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Enter username"
            style={{
              borderBottomWidth: 1,
              borderColor: colors.blue,
              flex: 1,
              height: 30,
              fontFamily: "r-r",
              fontSize: 18,
            }}
            placeholderTextColor={colors.lightBlue}
            returnKeyType="default"
          />
          <View
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: colors.blue,
              borderRadius: 5,
              justifyContent: "center",
              paddingHorizontal: 5,
            }}
          >
            <Typography color="lightBlue" size={18}>
              {address}
            </Typography>
          </View>
        </View>
      </View>

      <View
        style={{
          gap: 10,
          width: "25%",
        }}
      >
        <LargeButton
          styles={{
            height: 30,
          }}
          text="Edit"
          textStyle={{
            fontSize: 16,
          }}
          textColor="white"
          bg={colors.blue}
          action={() => {
            textInputRef.current?.focus();
          }}
          icon={<Edit />}
        />
        <LargeButton
          styles={{
            height: 30,
          }}
          text={isCopied ? "Copied!" : "Copy"}
          textStyle={{
            fontSize: 16,
          }}
          textColor="white"
          bg={colors.blue}
          action={() => {
            Clipboard.setStringAsync(address);
            setIsCopied(true);
          }}
          icon={<Copy />}
        />
      </View>
    </View>
  );
};

export default ProfileView;
