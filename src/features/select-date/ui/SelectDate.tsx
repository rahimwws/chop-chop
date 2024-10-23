import { View, Text, Button } from "react-native";
import React, { memo, useState } from "react";
import {
  Calendar as FlashCalendar,
  toDateId,
} from "@marceloterreiro/flash-calendar";
import { useAppNavigation } from "@/shared/lib/navigation";
import { linearTheme } from "../lib/styles";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { colors } from "@/shared/lib/theme";

const SelectDate = memo(({ date }: { date: number }) => {
  const navigation = useAppNavigation();

  const today = toDateId(new Date(date));
  const [selectedDate, setSelectedDate] = useState(today);

  const handleConfirm = () => {
    const [year, month, day] = selectedDate.split("-").map(Number);
    const dateObject = new Date(year, month - 1, day);
    const timestamp = dateObject.getTime();
    navigation.navigate("Expense", { selectedDate: timestamp, type: "group" });
  };
  return (
    <View style={{ marginTop: "-20%" }}>
      <FlashCalendar
        calendarActiveDateRanges={[
          {
            startId: selectedDate,
            endId: selectedDate,
          },
        ]}
        calendarMonthId={today}
        onCalendarDayPress={setSelectedDate}
        theme={linearTheme}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      ></View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LargeButton
          styles={{
            width: "33%",
            height: 30,
          }}
          text="Cancel"
          textStyle={{
            fontSize: 18,
          }}
          textColor="blue"
          bg={colors.middleGray}
        />
        <LargeButton
          styles={{
            width: "33%",
            height: 30,
          }}
          text="Done"
          textStyle={{
            fontSize: 18,
          }}
          textColor="white"
          bg={colors.blue}
          action={handleConfirm}
        />
      </View>
    </View>
  );
});

export default SelectDate;
