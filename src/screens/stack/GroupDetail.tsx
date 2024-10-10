import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { RouteProp, useRoute } from "@react-navigation/native";
import Header from "@/components/header";
import { GroupHeader } from "@/widget/group-info";
import { useGroupsStore } from "@/entities/groups/lib/store";
type RouteParams = {
  detail: {
    id: string;
  };
};

type routeT = RouteProp<RouteParams, "detail">;
const GroupDetail = () => {
  const { params } = useRoute<routeT>();
  const store = useGroupsStore();
  const group = store.groups.find((g) => g.id == params.id);
  if (!group) return null;
  return (
    <ScreenLayout>
      <Header title="" type="stack" />
      <GroupHeader group={group} />
    </ScreenLayout>
  );
};

export default GroupDetail;
