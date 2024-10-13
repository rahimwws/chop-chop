import React, { useRef, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import { AvatarSheet, ProfileTokens, ProfileView } from "@/widget/profile";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";

const Profile = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [profileImage, setProfileImage] = useState<string>("");
  return (
    <ScreenLayout>
      <Header title="Profile" />
      <ProfileView
        openSheet={() => bottomSheetRef.current?.collapse()}
        image={profileImage}
      />
      <AvatarSheet bottomSheetRef={bottomSheetRef} setImage={setProfileImage} />
      <ProfileTokens />
    </ScreenLayout>
  );
};

export default Profile;
