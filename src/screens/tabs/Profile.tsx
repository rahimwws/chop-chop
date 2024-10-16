import React, { useRef, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { AvatarSheet, ProfileTokens, ProfileView } from "@/widget/profile";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { useAccount } from "wagmi";
import { ScrollView, Switch, View } from "react-native";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const Profile = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [profileImage, setProfileImage] = useState<string>("");
  const { address } = useAccount();
  // console.log(address);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Profile" />
        <ProfileView
          openSheet={() => bottomSheetRef.current?.collapse()}
          image={profileImage}
        />
        <AvatarSheet
          bottomSheetRef={bottomSheetRef}
          setImage={setProfileImage}
        />
        <ProfileTokens />
        <Typography
          size={20}
          font="r-m"
          align="left"
          styles={{
            marginVertical: "3%",
          }}
        >
          Application settings
        </Typography>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography size={18}>Notification</Typography>
          <Switch
            trackColor={{ false: colors.middleGray, true: colors.blue }}
            thumbColor={isEnabled ? colors.white : "#f4f3f4"}
            ios_backgroundColor={colors.middleGray}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Profile;
