import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { Balance, ContactList } from "@/widget/contacts";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";

const Contact = () => {
  return (
    <ScreenLayout>
      <Header title="Contact" />
      <Balance />
      <ContactList />
      <LargeButton
        text="Add more friends"
        bg={colors.blue}
        textColor="white"
        styles={{
          marginTop: "5%",
          marginBottom: 10,
        }}
      />
      <LargeButton
        text="Invite"
        bg={colors.lightGray}
        textColor="blue"
        styles={{}}
      />
    </ScreenLayout>
  );
};

export default Contact;
