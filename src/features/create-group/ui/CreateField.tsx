import { View, Text, TextInput } from "react-native";
import React, { useCallback, useState } from "react";
import Avatar from "@/shared/ui/Avatar";
import { pickImageAsync } from "../lib/config/picker";
import { colors } from "@/shared/lib/theme";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { useGroupsStore } from "@/entities/groups/lib/store";
import uuid from "react-native-uuid";
import { Group } from "@/entities/groups/lib/types";
import { useAppNavigation } from "@/shared/lib/navigation";

const CreateField = () => {
  const groupsStore = useGroupsStore();
  const navigation = useAppNavigation();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [name, setName] = useState<string>();

  const handleChangeAvatar = useCallback(async () => {
    const result = await pickImageAsync();
    if (!result?.assets?.length) return;
    const uri = result.assets[0].uri;
    setImageUri(uri);
  }, []);
  return (
    <>
      <View
        style={{
          marginVertical: "5%",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Avatar imageUri={imageUri} onEdit={handleChangeAvatar} />
        <TextInput
          defaultValue={name}
          onChangeText={(text) => setName(text)}
          placeholder="Group name"
          style={{
            borderBottomWidth: 1,
            borderColor: colors.blue,
            flex: 1,
            height: 30,
            fontFamily: "r-r",
            fontSize: 18,
          }}
          placeholderTextColor={colors.lightBlue}
        />
      </View>
      <LargeButton
        text="Create a Group"
        bg={colors.blue}
        textColor={"white"}
        styles={{ height: 40 }}
        action={() => {
          const id = uuid.v4();
          groupsStore.setGroups([
            ...groupsStore.groups,
            {
              id,
              name,
              image: imageUri,
              participants: [],
              bills: [],
            } as Group,
          ]);

          navigation.navigate("ChooseContact", {
            group: {
              id,
              name,
              participants: [],
              bills: [],
              image: imageUri,
            },
          });
        }}
      />
    </>
  );
};

export default CreateField;
