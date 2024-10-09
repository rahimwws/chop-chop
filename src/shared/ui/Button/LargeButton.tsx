import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { useAppNavigation } from "@/shared/lib/navigation";
import { ColorsT, colors } from "@/shared/lib/theme";
import Typography from "../Typography";
import { LightHeptic } from "@/shared/lib/heptics";
const LargeButton = ({
  text,
  isRoute,
  route = "",
  action = false,
  heptic = true,
  disabled = false,
  bg,
  textColor,
  styles,
  textStyle,
  theme = "default",
}: {
  text: string;
  isRoute?: boolean;
  route?: string;
  action?: Function | false;
  heptic?: boolean;
  disabled?: boolean;
  bg?: string;
  textColor?: keyof ColorsT;
  styles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  theme?: "default" | "outline";
}) => {
  const navigation = useAppNavigation();
  const HandleClick = () => {
    isRoute && navigation.navigate(route);
    action && action();
    heptic && LightHeptic();
  };
  return (
    <TouchableOpacity
      style={[
        {
          width: "100%",
          backgroundColor: bg ?? colors.white,
          height: 55,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          opacity: disabled ? 0.5 : 1,
          borderWidth: theme === "outline" ? 1 : 0,
          borderColor: textColor,
        },
        styles && styles,
      ]}
      disabled={disabled}
      activeOpacity={0.7}
      onPress={HandleClick}
    >
      <Typography
        color={textColor ?? "blue"}
        size={24}
        font="ar-r"
        styles={textStyle}
      >
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

export default LargeButton;
