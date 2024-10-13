import { View, Text, FlatList } from "react-native";
import React from "react";
import Card from "./Card";
const ContactList = () => {
  return (
    <View
      style={{
        alignItems: "flex-start",
      }}
    >
      <FlatList
        data={["Alex", "S", "s"]}
        renderItem={() => {
          return <Card />;
        }}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default ContactList;
