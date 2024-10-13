import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { Balance, ContactList } from "@/widget/contacts";

const Contact = () => {
  return (
    <ScreenLayout>
      <Header title="Contact" />
      <Balance />
      <ContactList />
    </ScreenLayout>
  );
};

export default Contact;
