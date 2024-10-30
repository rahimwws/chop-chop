import React, { useCallback, forwardRef } from "react";
import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";

import { View } from "react-native";
import { colors } from "@/shared/lib/theme";

interface SheetProps extends Omit<BottomSheetProps, "snapPoints"> {
  children: React.ReactNode;
  customSnapPoints?: string[] | false;
  bg?: string;
}

const Sheet = forwardRef<BottomSheet, SheetProps>(
  ({ children, customSnapPoints = false, bg = colors.blue, ...props }, ref) => {
    const snapPointsCustom = ["40%"];

    return (
      <BottomSheet
        ref={ref}
        snapPoints={customSnapPoints ? customSnapPoints : snapPointsCustom}
        enableHandlePanningGesture={true}
        handleIndicatorStyle={{ backgroundColor: bg ?? colors.blue, width: 50 }}
        enableContentPanningGesture={true}
        backgroundStyle={{
          backgroundColor: bg ?? colors.blue,
          borderRadius: 40,
        }}
        index={-1}
        {...props}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: bg ?? colors.blue,
            borderRadius: 40,
          }}
        >
          {children}
        </View>
      </BottomSheet>
    );
  }
);

export default Sheet;
