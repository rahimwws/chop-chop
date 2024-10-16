import React, { useEffect, useRef, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { RouteProp, useRoute } from "@react-navigation/native";
import Header from "@/components/header";
import {
  ActionSheet,
  GroupHeader,
  ParticipantsList,
  PaymentList,
} from "@/widget/group-info";
import TopTab from "@/components/tabbar/TopTab";
import { ScrollView, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { Group } from "@/entities/groups/lib/types";
import { useGroupDetailStore } from "@/shared/lib/store/groupDetail";
type RouteParams = {
  detail: {
    group: Group;
  };
};

type routeT = RouteProp<RouteParams, "detail">;
const GroupDetail = () => {
  const setDetail = useGroupDetailStore((store) => store.setGroupDetails);

  const { params } = useRoute<routeT>();
  const [mode, setMode] = useState<"payments" | "participants">("payments");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const openSheet = () => {
    bottomSheetRef.current?.expand();
  };
  useEffect(() => {
    if (params.group) setDetail(params.group);
  }, []);
  if (!params.group) return null;
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="" type="stack" />
        <GroupHeader group={params.group} />
        <TopTab
          mode={mode}
          setMode={setMode}
          firstTitle="payments"
          secondTitle="participants"
        />
        {mode === "payments" ? (
          <PaymentList group={params.group} />
        ) : (
          <ParticipantsList group={params.group} action={openSheet} />
        )}
      </ScrollView>
      <ActionSheet bottomSheetRef={bottomSheetRef} />
    </ScreenLayout>
  );
};

export default GroupDetail;
