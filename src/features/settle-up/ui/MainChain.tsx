import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import ArrowUp from "@/shared/assets/svg/icons/arrow-up.svg";
import ArrowDown from "@/shared/assets/svg/icons/arrow-down.svg";
import Reanimated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";
import { ChainsList } from "@/widget/chains";
import { useSelectionsStore } from "@/shared/lib/store/userSelectionStore";

const MainChain = () => {
  const selectionsStore = useSelectionsStore();
  const [expanded, setExpanded] = useState(false);
  const dropdownHeight = useSharedValue(0);

  const toggleDropdown = () => {
    setExpanded(!expanded);
    dropdownHeight.value = expanded
      ? withTiming(0, { duration: 300 })
      : withTiming(420, { duration: 300 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: dropdownHeight.value,
    opacity: dropdownHeight.value > 0 ? 1 : 0,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography
          font="ar-r"
          size={18}
          align="left"
          styles={{
            lineHeight: 20,
          }}
        >
          Your chain:{" "}
          {Array.isArray(selectionsStore.selectedSourceChains) &&
          selectionsStore.selectedSourceChains.length > 1
            ? selectionsStore.selectedSourceChains.join(", ")
            : selectionsStore.selectedSourceChains}
        </Typography>
        <TouchableOpacity onPress={toggleDropdown}>
          {expanded ? <ArrowUp /> : <ArrowDown />}
        </TouchableOpacity>
      </View>

      <Reanimated.View style={[styles.dropdown, animatedStyle]}>
        <ChainsList />
      </Reanimated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: "3%",
  },
  header: {
    padding: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdown: {
    overflow: "hidden",
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    marginTop: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
});

export default MainChain;
