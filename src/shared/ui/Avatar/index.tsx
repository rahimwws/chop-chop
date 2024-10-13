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
}

const Avatar: React.FC<AvatarProps> = ({ imageUri, onEdit }) => (
  <View style={styles.avatarContainer}>
    {imageUri && <RNImage source={imageUri} style={styles.avatarImage} />}
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
