import React, { useRef, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { RouteProp, useRoute } from "@react-navigation/native";
import Header from "@/components/header";
import {
  ActionSheet,
  GroupHeader,
  ParticipantsList,
  PaymentList,
} from "@/widget/group-info";
import { useGroupsStore } from "@/entities/groups/lib/store";
import TopTab from "@/components/tabbar/TopTab";
import { ScrollView, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
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
  const [mode, setMode] = useState<"payments" | "participants">("payments");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const openSheet = () => {
    bottomSheetRef.current?.expand();
  };
  if (!group) return null;
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="" type="stack" />
        <GroupHeader group={group} />
        <TopTab
          mode={mode}
          setMode={setMode}
          firstTitle="payments"
          secondTitle="participants"
        />
        {mode === "payments" ? (
          <PaymentList group={group} />
        ) : (
          <ParticipantsList group={group} action={openSheet} />
        )}
      </ScrollView>
      <ActionSheet bottomSheetRef={bottomSheetRef} />
    </ScreenLayout>
  );
};

export default GroupDetail;
