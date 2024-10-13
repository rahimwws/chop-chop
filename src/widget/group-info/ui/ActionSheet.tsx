import { View, Text } from "react-native";
import React, { RefObject, useMemo } from "react";
import { Sheet } from "@/shared/ui/Sheets";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const ActionSheet = ({
  bottomSheetRef,
}: {
  bottomSheetRef: RefObject<BottomSheetMethods>;
}) => {
  const snapPoints = useMemo(() => ["25%"], []);

  return (
    <Sheet ref={bottomSheetRef} customSnapPoints={snapPoints}>
      <Typography
        size={24}
        font="ar-r"
        styles={{ marginVertical: "5%", lineHeight: 30 }}
        color="white"
      >
        Are you shure that you want to leave group?
      </Typography>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <LargeButton
          styles={{ width: "48%", height: 40 }}
          text="Leave"
          textStyle={{ fontSize: 18 }}
          textColor={"white"}
          bg={colors.green}
        />
        <LargeButton
          styles={{ width: "48%", height: 40 }}
          text="Cancel"
          textStyle={{ fontSize: 18 }}
          textColor="white"
          bg={colors.red}
          action={() => bottomSheetRef.current?.close()}
        />
      </View>
    </Sheet>
  );
};

export default ActionSheet;
