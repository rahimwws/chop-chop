import { useEffect } from "react";
import React, { Dispatch, SetStateAction, useMemo } from "react";
import Card from "./Card";
import { useContactsStore } from "@/entities/contacts/lib/store";
import {
  billToDebts,
  calcContactOweIsOwed,
  useGroupsStore,
} from "@/entities/groups/lib/store";
import { useUserStore } from "@/shared/lib/store/userStore";
import { View } from "react-native";

const ContactList = ({
  setTotalOwed,
}: {
  setTotalOwed: Dispatch<SetStateAction<number>>;
}) => {
  const { contacts } = useContactsStore();
  const { groups } = useGroupsStore();
  const userAddress = useUserStore((store) => store.address);

  const allBills = groups.flatMap((group) => group.bills);

  const sortedContactsWithDebts = useMemo(() => {
    const contactsWithDebts = contacts.map((contact) => {
      const { userOwe, userIsOwed } = calcContactOweIsOwed(
        allBills,
        userAddress,
        contact.address
      );
      return { ...contact, userOwe, userIsOwed };
    });

    return contactsWithDebts.sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts, allBills, userAddress]);

  useEffect(() => {
    const totalOwed = sortedContactsWithDebts.reduce(
      (total, contact) => total + contact.userIsOwed,
      0
    );
    setTotalOwed(totalOwed);
  }, [sortedContactsWithDebts, setTotalOwed]);

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
