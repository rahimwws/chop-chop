import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const useImagePicker = (initialImage?: string) => {
  const [image, setImage] = useState(initialImage);

  const pickImage = async (): Promise<string | null> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      return result.assets[0].uri;
    } else {
      alert("Choose Image");
      return null;
    }
  };

  const takePicture = async (): Promise<string | null> => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      return result.assets[0].uri;
    } else {
      alert("Choose Image");
      return null;
    }
  };

  return {
    image,
    pickImage,
    takePicture,
  };
};

export default useImagePicker;
