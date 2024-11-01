import { LightHeptic } from "@/shared/lib/heptics";
import { useAppNavigation } from "@/shared/lib/navigation";
import { colors } from "@/shared/lib/theme";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export const CustomTabButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignContent: "center",
      }}
      onPress={() => {
        LightHeptic();
        onPress();
      }}
      activeOpacity={0.8}
    >
      <View
        style={{
          width: 78,
          height: 78,
          borderRadius: 45,
          backgroundColor: colors.white,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default CustomTabButton;
