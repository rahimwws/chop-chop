import { View, Text } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import PurchasePeople from "@/components/purchase-people";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useGroupsStore } from "@/entities/groups/lib/store";
import { Bill } from "@/entities/groups/lib/types";
import { getFormattedDate } from "@/features/add-expense/model/format";
import { useContactsStore } from "@/entities/contacts/lib/store";
import { useUserStore } from "@/shared/lib/store/userStore";
type RouteParams = {
  bill: {
    bill: Bill;
  };
};

type routeT = RouteProp<RouteParams, "bill">;
const PurchaseDetail = () => {
  const { params } = useRoute<routeT>();
  const contacts = useContactsStore((store) => store.contacts);
  const username = useUserStore((store) => store.username);

  const getPayerName = (address: string) => {
    const contact = contacts.find((c) => c.address === address);
    if (contact) {
      return contact.name;
    }
    return username;
  };
  return (
    <ScreenLayout>
      <Header title="" type="stack" />
      <View
        style={{
          marginTop: "-25%",
          backgroundColor: colors.lightGray,
          borderRadius: 5,
          alignItems: "flex-start",
          padding: 10,
        }}
      >
        <Typography size={18} font="r-m">
          Purchase details
        </Typography>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: colors.black,
            marginVertical: "3%",
          }}
        />
        <Typography size={20} color="blue" font="r-m">
          {params.bill.name}
        </Typography>
        <Typography size={22} styles={{ marginVertical: "1%" }} font="r-m">
          {params.bill.sum}$
        </Typography>
        <Typography align="left">
          Added by {getPayerName(params.bill.payerAddress)} on{" "}
          {getFormattedDate(params.bill.date)}
        </Typography>
      </View>
      <PurchasePeople bill={params.bill} />
    </ScreenLayout>
  );
};

export default PurchaseDetail;
