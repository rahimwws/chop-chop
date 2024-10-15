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
import Trash from "@/shared/assets/svg/icons/trash.svg";
import Typography from "@/shared/ui/Typography";
import { LightHeptic } from "@/shared/lib/heptics";
export default function TokenCard({
  image,
  text,
  action,
  tokens,
}: {
  image: ImageProps;
  text: string;
  action: () => void;
  tokens: string[];
}) {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 5,
        height: 60,
      }}
      onPress={() => {
        LightHeptic();
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={image}
          style={{ width: 34, height: 34, objectFit: "contain" }}
        />
        <View
          style={{
            alignItems: "flex-start",
          }}
        >
          <Typography size={18} font="r-m">
            {text}
          </Typography>
          <Typography>
            Tokens:{" "}
            {tokens.map((item, index) => (
              <Typography key={index}>{item} </Typography>
            ))}
          </Typography>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          backgroundColor: colors.lightGray,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          action();
        }}
      >
        <Trash />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
