import { View, Text, ScrollView } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import Card from "./Card";

const List = ({
  participants,
  setParticipants,
}: {
  participants: string[];
  setParticipants: Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <ScrollView
      style={{
        marginVertical: "5%",
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    >
      {participants.map((item, index) => (
        <Card
          key={index}
          text={item}
          isSelected={true}
          setIsSelected={() => {
            setParticipants(
              participants.filter((participant) => participant != item)
            );
          }}
        />
      ))}
    </ScrollView>
  );
};

export default List;
