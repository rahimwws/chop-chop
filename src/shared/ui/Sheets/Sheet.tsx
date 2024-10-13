import React, { useCallback, forwardRef } from "react";
import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";

import { View } from "react-native";
import { colors } from "@/shared/lib/theme";

interface SheetProps extends Omit<BottomSheetProps, "snapPoints"> {
  children: React.ReactNode;
  customSnapPoints?: string[] | false;
}

const Sheet = forwardRef<BottomSheet, SheetProps>(
  ({ children, customSnapPoints = false, ...props }, ref) => {
    const snapPointsCustom = ["40%"];

    return (
      <BottomSheet
        ref={ref}
        snapPoints={customSnapPoints ? customSnapPoints : snapPointsCustom}
        enableHandlePanningGesture={true}
        handleIndicatorStyle={{ backgroundColor: colors.blue, width: 50 }}
        enableContentPanningGesture={true}
        backgroundStyle={{
          backgroundColor: colors.blue,
          borderRadius: 40,
        }}
        index={-1}
        {...props}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: colors.blue,
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
