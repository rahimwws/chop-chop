import { useAddContact } from "@/features/add-contact/hooks/useAddContact";
import { useAppNavigation } from "@/shared/lib/navigation";
import { colors } from "@/shared/lib/theme";
import { QrOverlay } from "@/shared/ui/Animation";
import ScreenLayout from "@/shared/ui/Layout";
import Typography from "@/shared/ui/Typography";
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { Button, StyleSheet, View } from "react-native";

export const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const navigation = useAppNavigation();
  if (!permission) {
    return <View />;
  }
  const handleBarCodeScanned = (scanningResult: BarcodeScanningResult) => {
    console.log(scanningResult.data);

    const address = scanningResult.data.split(":").pop()?.split("@")[0];

    if (address) {
      navigation.navigate("AddContact", { address });
    }
  };
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Typography>We need your permission to show the camera</Typography>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <ScreenLayout showPx={false} pt={0} pb={0}>
      <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={handleBarCodeScanned}
      >
        <QrOverlay />
      </CameraView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});
