import { View, Text } from "react-native";
import React from "react";
import Avatar from "@/shared/ui/Avatar";
import Typography from "@/shared/ui/Typography";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Group } from "@/entities/groups/lib/types";

const ContactField = ({ group }: { group: Group }) => {
  if (!group) return null;
  return (
    <View
      style={{
        marginVertical: "5%",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Avatar imageUri={group.image} onEdit={() => {}} />
      <View
        style={{
          gap: 5,
        }}
      >
        <Typography size={22} font="r-m" align="left">
          {group.name}
        </Typography>
        <Typography align="left">
          Group members: {group.participants.length}
        </Typography>
      </View>
    </View>
  );
};

export default ContactField;
