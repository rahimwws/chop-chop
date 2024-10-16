import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import Typography from "@/shared/ui/Typography";
import { currencies } from "@/shared/config/currency";
import { colors } from "@/shared/lib/theme";
const Payments = () => {
  const renderCurrency = ({
    item,
  }: {
    item: { name: string; code: string };
  }) => (
    <View style={styles.currencyRow}>
      <Typography>{item.name}</Typography>
      <Typography>{item.code}</Typography>
    </View>
  );

  return (
    <ScreenLayout>
      <Header title="" type="stack" />
      <Typography
        styles={{
          marginTop: "-25%",
        }}
        align="left"
        font="r-m"
        size={22}
      >
        Recent
      </Typography>
      <FlatList
        data={currencies.recent}
        renderItem={renderCurrency}
        keyExtractor={(_, index) => index.toString()}
      />

      <Typography
        styles={{
          marginTop: "-25%",
        }}
        align="left"
        font="r-m"
        size={22}
      >
        All
      </Typography>
      <FlatList
        data={currencies.all}
        renderItem={renderCurrency}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({
  currencyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
});
export default Payments;
