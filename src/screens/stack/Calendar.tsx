import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { SelectDate } from "@/features/select-date";
import { RouteProp, useRoute } from "@react-navigation/native";
type RouteParams = {
  date: {
    date: number;
  };
};

type routeT = RouteProp<RouteParams, "date">;
const Calendar = () => {
  const { params } = useRoute<routeT>();

  return (
    <ScreenLayout>
      <Header type="stack" title="" />
      <SelectDate date={params.date} />
    </ScreenLayout>
  );
};

export default Calendar;
