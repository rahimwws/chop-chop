import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useAccount } from "wagmi";
import { ModalController } from "@reown/appkit-core-react-native";

const Header = ({
  title = "default",
  type,
  showDemo = false,
}: {
  title: string;
  type?: "stack" | "default";
  showDemo?: boolean;
}) => {
  const navigation = useAppNavigation();
  const { address, chain } = useAccount();
  return (
    <View
      style={{
        flexDirection: type === "stack" ? "row" : "column",
        alignItems: type === "stack" ? "center" : "flex-start",
      }}
    >
      {type === "stack" && (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",

            backgroundColor: colors.lightGray,
            justifyContent: "center",
            borderRadius: 5,
            marginTop: "-25%",
            width: 100,
            paddingVertical: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("@/shared/assets/images/interface/arrow-left.png")}
            style={{
              width: 20,
              height: 18,
            }}
          />
          <Typography>Back</Typography>
        </TouchableOpacity>
      )}
      {type === "stack" ? (
        <View
          style={{
            flex: 1,
            marginTop: "-25%",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 100,
          }}
        >
          <Image
            source={require("@/shared/assets/images/blue-logo.png")}
            style={{
              width: 150,

              marginLeft: "-2%",
            }}
            resizeMode="contain"
          />
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("@/shared/assets/images/blue-logo.png")}
            style={{
              width: "40%",
              marginTop: "-25%",
              marginLeft: "-2%",
            }}
            resizeMode="contain"
          />
          {showDemo && (
            <TouchableOpacity
              onPress={() => ModalController.open()}
              style={{
                position: "absolute",
                top: "15%",
                right: 0,
                borderWidth: 1,
                borderColor: colors.blue,
                borderRadius: 50,
                height: 40,
                paddingHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color="blue">
                {address
                  ? chain?.name.slice(0, 3) +
                    ": " +
                    address.slice(0, 10) +
                    "..."
                  : "Connect Wallet"}
              </Typography>
            </TouchableOpacity>
          )}
        </View>
      )}
      <Typography
        styles={{ marginTop: "-20%", lineHeight: 32 }}
        align="left"
        font="ar-r"
        size={32}
      >
        {title}
      </Typography>
    </View>
  );
};

export default Header;
