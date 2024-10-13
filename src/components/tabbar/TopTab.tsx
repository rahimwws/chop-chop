import { View, Text } from "react-native";
import React from "react";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";

const TopTab = ({
  mode,
  firstTitle,
  secondTitle,
  setMode,
}: {
  mode: string;
  firstTitle: string;
  secondTitle: string;
  setMode: any;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: "5%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <LargeButton
        styles={{
          width: "48%",
          height: 35,
        }}
        action={() => setMode(firstTitle)}
        text={firstTitle}
        textStyle={{
          fontSize: 18,
        }}
        textColor={mode === firstTitle ? "white" : "lightBlue"}
        bg={mode === firstTitle ? colors.black : colors.lightGray}
      />
      <LargeButton
        styles={{
          width: "48%",
          height: 35,
        }}
        action={() => setMode(secondTitle)}
        text={secondTitle}
        textStyle={{
          fontSize: 18,
        }}
        textColor={mode === secondTitle ? "white" : "lightBlue"}
        bg={mode === secondTitle ? colors.black : colors.lightGray}
      />
    </View>
  );
};

export default TopTab;
