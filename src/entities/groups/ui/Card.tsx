import React from "react";
import {
  Pressable,
  View,
  ImageProps,
  TouchableOpacity,
  Image,
} from "react-native";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useGroupsStore } from "../lib/store";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import Mark from "@/shared/assets/svg/icons/check-mark.svg";
import Trash from "@/shared/assets/svg/icons/trash.svg";
export default function Card({
  id,
  groupName,
  owned,
  owe,
  image,
  isSettled,
}: {
  id: string;
  groupName: string;
  owned: number;
  owe: number;
  image?: string;
  isSettled: boolean;
}) {
  const navigation = useAppNavigation();
  const groupsStore = useGroupsStore();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.lightGray,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 5,
        borderRadius: 5,
        gap: 10,
      }}
      onPress={() =>
        navigation.navigate("GroupDetail", {
          group: groupsStore.groups.find((group) => group.id === id),
        })
      }
    >
      <View
        style={{
          backgroundColor: colors.middleGray,
          borderRadius: 5,
          width: 62,
          height: 62,
        }}
      >
        <Image
          style={{
            borderRadius: 5,
            width: 62,
            height: 62,
          }}
          resizeMode="contain"
          source={{ uri: image }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "auto",
        }}
      >
        <Typography font="r-m" size={18} align="left">
          {groupName}
        </Typography>
        {isSettled && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginBottom: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Mark width={22} />
            <Typography size={14}>Already Settled</Typography>
          </View>
        )}
        {!isSettled && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginBottom: 3,
            }}
          >
            <Typography size={14} color="green">
              You are owed:
            </Typography>
            <Typography size={14} color="green">
              {owned}$
            </Typography>
          </View>
        )}
        {!isSettled && (
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Typography size={14} color="red">
              You owe:
            </Typography>
            <Typography size={14} color="red">
              {owe}$
            </Typography>
          </View>
        )}
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          {isSettled ? (
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.middleGray,
                padding: 14,
                borderRadius: 5,
              }}
              onPress={() => {
                groupsStore.setGroups(
                  groupsStore.groups.filter((x) => x.id != id)
                );
              }}
            >
              <Trash width={16} />
            </TouchableOpacity>
          ) : (
            <Pressable
              style={{
                backgroundColor: colors.blue,
                paddingVertical: 6,
                paddingHorizontal: 9,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                opacity: isSettled ? 0 : 1,
              }}
              onPress={() => navigation.navigate("SettleUp")}
            >
              <Typography color="white">SETTLE UP</Typography>
            </Pressable>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
