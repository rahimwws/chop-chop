import { View, Text } from "react-native";
import React, { RefObject, useMemo } from "react";
import { Sheet } from "@/shared/ui/Sheets";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import Portal from "@/components/portal/Portal";
import QRCode from "react-native-qrcode-svg";

const QrSheet = ({
  bottomSheetRef,
  id,
  close,
}: {
  bottomSheetRef: RefObject<BottomSheetMethods>;
  id: string;
  close: () => void;
}) => {
  const snapPoints = useMemo(() => ["35%"], []);

  return (
    <Portal name="bottom-sheet">
      <Sheet
        ref={bottomSheetRef}
        customSnapPoints={snapPoints}
        bg={colors.lightGray}
        onClose={close}
        enableContentPanningGesture
        enablePanDownToClose
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Typography
            size={24}
            font="ar-r"
            styles={{ marginVertical: "5%", lineHeight: 30 }}
            color="blue"
          >
            Install app using qr-code
          </Typography>
          <QRCode
            value={`https://chopchop.dev/${id}`}
            size={180}
            color={colors.blue}
            backgroundColor="transparent"
          />
        </View>
      </Sheet>
    </Portal>
  );
};

export default QrSheet;
