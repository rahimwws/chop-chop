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

  // Фильтруем контакты, которых нет в списке участников
  const availableContacts = contacts.filter(
    (contact) => !participants.includes(contact.address)
  );
  console.log("render");

  return (
    <ScrollView
      style={{
        marginVertical: "5%",
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    >
      {participants.map((participant, index) => {
        const participantContact = contacts.find(
          (contact) => contact.address === participant
        );

        return (
          <Card
            key={index}
            text={participantContact?.name || participant}
            isSelected={true}
            setIsSelected={() => {
              setParticipants(
                participants.filter((item) => item !== participant)
              );
            }}
            image={
              participantContact?.avatarUrl ||
              "@/shared/assets/images/avatars/avatar-1.png"
            }
          />
        );
      })}

      {availableContacts.map((contact, index) => (
        <Card
          key={index}
          text={contact.name}
          isSelected={false}
          setIsSelected={() => {
            setParticipants([...participants, contact.address]);
          }}
          image={
            contact.avatarUrl || "@/shared/assets/images/avatars/avatar-1.png"
          }
        />
      ))}
    </ScrollView>
  );
};

export default ContactList;
