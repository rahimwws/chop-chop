import React, { useRef, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { AvatarSheet, ProfileTokens, ProfileView } from "@/widget/profile";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { ScrollView } from "react-native";
import { colors } from "@/shared/lib/theme";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { useUserStore } from "@/shared/lib/store/userStore";
import { NotificationSwitch } from "@/features/notification";

const Profile = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const profileImage = useUserStore((store) => store.avatar);
  const setProfileImage = useUserStore((store) => store.setAvatar);
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Profile" showDemo />
        <ProfileView
          openSheet={() => bottomSheetRef.current?.collapse()}
          image={profileImage}
        />
        <AvatarSheet
          bottomSheetRef={bottomSheetRef}
          setImage={setProfileImage}
        />
        <ProfileTokens />
        <LargeButton
          text="manage networks & tokens"
          bg={colors.blue}
          textColor="white"
          styles={{
            marginTop: "5%",
            marginBottom: 10,
            height: 40,
          }}
          isRoute
          route="Introduction"
        />
        <NotificationSwitch />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Profile;
