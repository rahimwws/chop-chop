import { View, Text, FlatList } from "react-native";
import React from "react";
import Card from "./Card";
import { useContactsStore } from "@/entities/contacts/lib/store";
const ContactList = () => {
  const { contacts } = useContactsStore();
  return (
    <View
      style={{
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      {contacts.map((contact, index) => (
        <Card key={index} contact={contact} />
      ))}
    </View>
  );
};

export default ContactList;
