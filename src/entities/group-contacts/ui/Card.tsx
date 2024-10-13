import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Mark from "@/shared/assets/svg/icons/check-mark.svg";

export default function Card({
  //   image,
  text,
  isSelected,
  setIsSelected,
}: {
  //   image: any;
  text: string;
  isSelected: boolean;
  setIsSelected: () => void;
}) {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        backgroundColor: isSelected ? colors.lightBlue : colors.lightGray,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderRadius: 5,
      }}
      onPress={setIsSelected}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 19,
        }}
      >
        {/* <Image
          source={image}
          style={{ width: 34, height: 34, objectFit: "contain" }}
        /> */}
        <Typography size={18} font="r-m">
          {text}
        </Typography>
      </View>
      {isSelected && <Mark width={22} />}
    </TouchableOpacity>
  );
}
