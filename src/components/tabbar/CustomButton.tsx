import { LightHeptic } from "@/shared/lib/heptics";
import { colors } from "@/shared/lib/theme";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export const CustomTabButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignContent: "center",
      }}
      onPress={LightHeptic}
      activeOpacity={0.8}
    >
      <View
        style={{
          width: 80,
          height: 80,
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
