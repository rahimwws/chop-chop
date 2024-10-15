import React from "react";
import {
  View,
  TouchableOpacity,
  Image as RNImage,
  StyleSheet,
} from "react-native";

import { colors } from "@/shared/lib/theme";

interface AvatarProps {
  imageUri: any;
  onEdit: () => void;
  avatar?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUri,
  onEdit,
  avatar = false,
}) => (
  <View style={styles.avatarContainer}>
    {avatar && imageUri && (
      <RNImage source={imageUri} style={styles.avatarImage} />
    )}
    {!avatar && imageUri && (
      <RNImage source={{ uri: imageUri }} style={styles.avatarImage} />
    )}
    <TouchableOpacity onPress={onEdit} style={styles.avatarEditButton}>
      {!imageUri && (
        <RNImage
          source={require("@/shared/assets/images/interface/media.png")}
          style={{
            width: 25,
          }}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.middleGray,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  avatarEditButton: {
    position: "absolute",
  },
});

export default Avatar;
