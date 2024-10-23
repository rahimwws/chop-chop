import { View } from "react-native";
import React, { useMemo } from "react";
import Card from "./Card";
import { useContactsStore } from "@/entities/contacts/lib/store";
import {
  billToDebts,
  calcOweIsOwedContact,
  useGroupsStore,
} from "@/entities/groups/lib/store";
import { useUserStore } from "@/shared/lib/store/userStore";

const ContactList = () => {
  const { contacts } = useContactsStore();
  const { groups } = useGroupsStore();
  const userAddress = useUserStore((store) => store.address);

  const allDebts = groups.flatMap((group) =>
    group.bills.flatMap((bill) => billToDebts(bill))
  );

  const sortedContactsWithDebts = useMemo(() => {
    const contactsWithDebts = contacts.map((contact) => {
      const { userOwe, userIsOwed } = calcOweIsOwedContact(
        allDebts,
        userAddress,
        contact.address
      );
      return { ...contact, userOwe, userIsOwed };
    });

    return contactsWithDebts.sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts, allDebts, userAddress]);

  return (
    <View
      style={{
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      {sortedContactsWithDebts.map((contact, index) => (
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
