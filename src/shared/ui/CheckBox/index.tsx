import { View, Text, TouchableOpacity } from "react-native";
import React, { Dispatch } from "react";
import { colors } from "@/shared/lib/theme";
import MarkSvg from "@/shared/assets/svg/icons/check-mark.svg";
const CheckBox = ({
  setSelected,
  selected,
}: {
  setSelected: any;
  selected: boolean;
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 25,
        height: 25,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={setSelected}
    >
      {selected && <MarkSvg width={17} height={17} />}
    </TouchableOpacity>
  );
};

export default CheckBox;
