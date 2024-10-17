import { View, Text, FlatList } from "react-native";
import React from "react";
import Card from "./Card";
import { useContactsStore } from "@/entities/contacts/lib/store";
import {
  billToDebts,
  calcOweIsOwedContact,
  useGroupsStore,
} from "@/entities/groups/lib/store";
const ContactList = () => {
  const { contacts } = useContactsStore();
  const { groups } = useGroupsStore();

  const allDebts = groups.flatMap((group) =>
    group.bills.flatMap((bill) => billToDebts(bill))
  );

  const userAddress = "0xYourUserAddress";

  const contactsWithDebts = contacts.map((contact) => {
    const { userOwe, userIsOwed } = calcOweIsOwedContact(
      allDebts,
      userAddress,
      contact.tokenAddress
    );
    return { ...contact, userOwe, userIsOwed };
  });

  return (
    <View
      style={{
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      {contactsWithDebts.map((contact, index) => (
        <Card
          key={index}
          contact={contact}
          userOwe={contact.userOwe}
          userIsOwed={contact.userIsOwed}
        />
      ))}
    </View>
  );
};

export default ContactList;
