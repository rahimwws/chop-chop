import { View, Text } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { RouteProp, useRoute } from "@react-navigation/native";
import Header from "@/components/header";
type RouteParams = {
  detail: {
    id: string;
  };
};

type routeT = RouteProp<RouteParams, "detail">;
const GroupDetail = () => {
  const { params } = useRoute<routeT>();
  return (
    <ScreenLayout>
      <Header title="" type="stack" />
    </ScreenLayout>
  );
};

export default GroupDetail;
