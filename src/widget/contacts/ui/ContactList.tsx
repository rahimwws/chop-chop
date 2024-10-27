import { View } from "react-native";
import React, { Dispatch, SetStateAction, useMemo } from "react";
import Card from "./Card";
import { useContactsStore } from "@/entities/contacts/lib/store";
import {
  billToDebts,
  calcContactOweIsOwed,
  useGroupsStore,
} from "@/entities/groups/lib/store";
import { useUserStore } from "@/shared/lib/store/userStore";

const ContactList = ({
  setTotalOwed,
}: {
  setTotalOwed: Dispatch<SetStateAction<number>>;
}) => {
  const { contacts } = useContactsStore();
  const { groups } = useGroupsStore();
  const userAddress = useUserStore((store) => store.address);

  const allBills = groups.flatMap((group) =>
    group.bills
  );

  const sortedContactsWithDebts = useMemo(() => {
    const contactsWithDebts = contacts.map((contact) => {
      const { userOwe, userIsOwed } = calcContactOweIsOwed(
        allBills,
        userAddress,
        contact.address
      );
      return { ...contact, userOwe, userIsOwed };
    });

    // Calculate total owed and set it
    const totalOwed = contactsWithDebts.reduce(
      (total, contact) => total + contact.userIsOwed,
      0
    );
    setTotalOwed(totalOwed);

    return contactsWithDebts.sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts, allBills, userAddress]);

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
