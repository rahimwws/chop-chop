import { View, ActionSheetIOS, Image, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { getFormattedDate } from "@/features/add-expense/model/format";
import { Bill } from "@/entities/groups/lib/types";
import Camera from "@/shared/assets/svg/icons/camera.svg";
import { handleActionSheetPress } from "../lib/utils";
import useImagePicker from "../lib/hooks/useImagePicker";
import PurchaseActions from "./PurchaseActions";
const PurchaseHeader = ({
  bill,
  groupId,
  getPayerName,
}: {
  bill: Bill;
  groupId: string | null;
  getPayerName: (address: string) => string;
}) => {
  const { pickImage, takePicture, image } = useImagePicker(bill.image);

  const openSheet = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Take a picture", "Choose from gallery"],
        cancelButtonIndex: 0,
        userInterfaceStyle: "light",
      },
      (buttonIndex) =>
        handleActionSheetPress(
          buttonIndex,
          groupId,
          bill,
          pickImage,
          takePicture
        )
    );

  return (
    <View
      style={{
        marginTop: "-25%",
        backgroundColor: colors.lightGray,
        borderRadius: 5,
        alignItems: "flex-start",
        padding: 10,
      }}
    >
      <Typography size={18} font="r-m">
        Purchase details
      </Typography>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: colors.black,
          marginVertical: "3%",
        }}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
          }}
        >
          <Typography size={20} color="blue" font="r-m">
            {bill.name}
          </Typography>
          <Typography size={22} styles={{ marginVertical: "1%" }} font="r-m">
            {bill.sum}$
          </Typography>
        </View>
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "#B5B5B5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                borderRadius: 5,
              }}
            />
          ) : (
            <TouchableOpacity onPress={openSheet}>
              <Camera width={30} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Typography align="left">
        Added by {getPayerName(bill.payerAddress)} on{" "}
        {getFormattedDate(bill.date)}
      </Typography>
      <PurchaseActions billId={bill.id} groupId={groupId} />
    </View>
  );
};

export default PurchaseHeader;
