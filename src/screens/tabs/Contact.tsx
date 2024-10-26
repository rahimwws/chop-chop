import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import Balance from "@/widget/contacts/ui/Balance";
import ContactList from "@/widget/contacts/ui/ContactList";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";
import { Image, ScrollView } from "react-native";

const Contact = () => {
  const [totalOwed, setTotalOwed] = useState<number>(0);

  return (
    <ScreenLayout pb={0}>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Contacts" />
        <Balance totalOwed={totalOwed} />
        <ContactList setTotalOwed={setTotalOwed} />
        <LargeButton
          text="Add more friends"
          bg={colors.blue}
          textColor="white"
          styles={{
            marginTop: "5%",
            marginBottom: 10,
            height: 40,
          }}
          isRoute
          route="AddContact"
          icon={
            <Image
              source={require("@/shared/assets/images/interface/plus-white.png")}
              style={{
                width: 17,
                height: 17,
              }}
            />
          }
        />
        <LargeButton
          text="Invite"
          bg={colors.lightGray}
          textColor="blue"
          styles={{
            height: 40,
          }}
        />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Contact;
