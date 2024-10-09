import { colors } from "@/shared/lib/theme";
import React from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  ImageProps,
  TouchableOpacity,
} from "react-native";
import Mark from "@/shared/assets/svg/icons/check-mark.svg";
import Typography from "@/shared/ui/Typography";
import { LightHeptic } from "@/shared/lib/heptics";
export default function ChainsCard({
  image,
  text,
  isSelected,
  setIsSelected,
}: {
  image: ImageProps;
  text: string;
  isSelected: boolean;
  setIsSelected: () => void;
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isSelected ? colors.lightBlue : colors.lightGray,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 60,
      }}
      onPress={() => {
        setIsSelected();
        LightHeptic();
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 19,
        }}
      >
        <Image
          source={image}
          style={{ width: 34, height: 34, objectFit: "contain" }}
        />
        <Typography size={18}>{text}</Typography>
      </View>
      {isSelected && <Mark width={22} />}
    </TouchableOpacity>
  );
}
