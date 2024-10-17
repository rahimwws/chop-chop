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
type RouteParams = {
  bill: {
    bill: Bill;
  };
};

type routeT = RouteProp<RouteParams, "bill">;
const PurchaseDetail = () => {
  const { params } = useRoute<routeT>();
  console.log(params.bill);

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
        <Typography>
          Added by {params.bill.payerAddress} on 19th October 2024
        </Typography>
      </View>
      <PurchasePeople bill={params.bill} />
    </ScreenLayout>
  );
};

export default PurchaseDetail;
