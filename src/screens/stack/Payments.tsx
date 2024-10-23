import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import ScreenLayout from "@/shared/ui/Layout";
import Header from "@/components/header";
import Typography from "@/shared/ui/Typography";
import { currencies } from "@/shared/config/currency";
import { colors } from "@/shared/lib/theme";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useState } from "react";

const Payments = () => {
  const navigation = useAppNavigation();
  const [searchText, setSearchText] = useState("");

  const filteredCurrencies = currencies.all.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const RenderCurrency = ({
    item,
  }: {
    item: { name: string; code: string; symbol: string };
  }) => (
    <TouchableOpacity
      style={styles.currencyRow}
      onPress={() =>
        navigation.navigate("Expense", { currency: item.symbol, type: "group" })
      }
    >
      <Typography>{item.name}</Typography>
      <Typography>
        {item.code} ({item.symbol})
      </Typography>
    </TouchableOpacity>
  );

  return (
    <ScreenLayout>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Header title="" type="stack" />

        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        {!searchText && (
          <Typography align="left" font="r-m" size={22}>
            Recent
          </Typography>
        )}
        {!searchText &&
          currencies.recent.map((item, index) => {
            return <RenderCurrency item={item} key={index} />;
          })}
        {!searchText && (
          <Typography align="left" font="r-m" size={22}>
            All
          </Typography>
        )}
        {filteredCurrencies.map((item, index) => {
          return <RenderCurrency item={item} key={index} />;
        })}
        {filteredCurrencies.length === 0 && (
          <Typography size={18} font="r-m" color="middleGray">
            Unfortunately, we have not this currency on our list
          </Typography>
        )}
      </ScrollView>
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
  searchInput: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.lightGray,
    marginTop: "-25%",
    marginBottom: 15,
    height: 40,
    fontFamily: "r-r",
  },
});
export default Payments;
