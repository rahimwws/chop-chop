import React, { RefObject, useMemo, useState } from "react";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import Typography from "@/shared/ui/Typography";
import { Sheet } from "@/shared/ui/Sheets";
import Portal from "@/components/portal/Portal";
import { AVATARS } from "@/shared/config/avatars";
import {
  Image,
  ImageProps,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import LargeButton from "@/shared/ui/Button/LargeButton";

const AvatarSheet = ({
  bottomSheetRef,
  setImage,
}: {
  bottomSheetRef: RefObject<BottomSheetMethods>;
  setImage: (avatar: ImageProps) => void;
}) => {
  const snapPoints = useMemo(() => ["60%"], []);

  const [id, setId] = useState<number>(0);
  return (
    <Portal name="bottom-sheet">
      <Sheet
        ref={bottomSheetRef}
        customSnapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <Typography size={24} color="white" align="left">
          Avatar
        </Typography>
        <ScrollView
          style={{
            marginVertical: 10,
          }}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {AVATARS.map((image) => (
            <TouchableOpacity key={image.id} onPress={() => setId(image.id)}>
              <Image
                source={image.src}
                style={{
                  width: 60,
                  height: 60,
                  borderColor: "black",
                  opacity: id != 0 ? (id === image.id ? 1 : 0.5) : 1,
                  //   borderWidth: a.id == selectionStore.selectedAvatarId ? 8 : 0,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
          {id != 0 && (
            <LargeButton
              text="Confirm"
              action={() => {
                setImage(AVATARS[id - 1].src);
                bottomSheetRef.current?.close();
              }}
            />
          )}
        </ScrollView>
      </Sheet>
    </Portal>
  );
};

export default AvatarSheet;
