import { View, Switch } from "react-native";
import React, { useState } from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const NotificationSwitch = () => {
  const notifications = [
    { id: 1, text: "Adds me to a group" },
    { id: 2, text: "Adds as a contact" },
    { id: 3, text: "When an expense is added" },
    { id: 4, text: "When someone settled up with me" },
  ];

  const [isEnabled, setIsEnabled] = useState<boolean[]>(
    new Array(notifications.length).fill(false)
  );

  const toggleSwitch = (index: number) => {
    setIsEnabled((previousState) => {
      const newState = [...previousState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <Typography
        size={20}
        font="r-m"
        align="left"
        styles={{
          marginVertical: "2%",
        }}
      >
        Application settings
      </Typography>
      {notifications.map((notification, index) => (
        <View
          key={notification.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography size={18}>{notification.text}</Typography>
          <Switch
            trackColor={{ false: colors.middleGray, true: colors.blue }}
            thumbColor={isEnabled[index] ? colors.white : "#f4f3f4"}
            ios_backgroundColor={colors.middleGray}
            onValueChange={() => toggleSwitch(index)}
            value={isEnabled[index]}
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
        </View>
      ))}
    </View>
  );
};

export default NotificationSwitch;
