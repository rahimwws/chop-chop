import { View, ScrollView } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import Card from "./Card";
import { useContactsStore } from "@/entities/contacts/lib/store";

const ContactList = ({
  participants,
  setParticipants,
}: {
  participants: string[];
  setParticipants: Dispatch<SetStateAction<string[]>>;
}) => {
  const { contacts } = useContactsStore();

  console.log("render");

  return (
    <ScrollView
      style={{
        marginVertical: "5%",
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    >
      {contacts.map((contact, index) => {
        const isSelected = participants.includes(contact.address);

        return (
          <Card
            key={index}
            text={contact.name}
            isSelected={isSelected}
            setIsSelected={() => {
              if (isSelected) {
                setParticipants(
                  participants.filter((p) => p !== contact.address)
                );
              } else {
                setParticipants([...participants, contact.address]);
              }
            }}
            image={
              contact.avatarUrl || "@/shared/assets/images/avatars/avatar-1.png"
            }
          />
        );
      })}
    </ScrollView>
  );
};

export default ContactList;
