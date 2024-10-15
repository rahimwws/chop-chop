import React, { useRef, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { AvatarSheet, ProfileTokens, ProfileView } from "@/widget/profile";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { useAccount } from "wagmi";
import { ScrollView } from "react-native";
import Typography from "@/shared/ui/Typography";

const Profile = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [profileImage, setProfileImage] = useState<string>("");
  const { address } = useAccount();
  // console.log(address);
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
        <Typography size={20} font="r-m" align="left">
          Application settings
        </Typography>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Profile;
