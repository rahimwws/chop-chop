import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { Balance, ContactList } from "@/widget/contacts";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";

import { Image, ScrollView } from "react-native";

const Contact = () => {
  return (
    <ScreenLayout pb={0}>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Contacts" />
        <Balance />
        <ContactList />
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
