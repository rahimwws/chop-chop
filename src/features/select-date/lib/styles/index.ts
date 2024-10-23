import { colors } from "@/shared/lib/theme";
import { CalendarTheme } from "@marceloterreiro/flash-calendar";

const linearAccent = colors.blue;

export const linearTheme: CalendarTheme = {
  rowMonth: {
    content: {
      textAlign: "center",
      fontFamily: "r-m",
      fontSize: 20,
    },
  },
  rowWeek: {
    container: {
      borderBottomWidth: 1,
      borderBottomColor: colors.lightGray,
      borderStyle: "solid",
    },
  },
  itemWeekName: { content: { color: colors.black } },
  itemDayContainer: {
    activeDayFiller: {
      backgroundColor: linearAccent,
    },
  },
  itemDay: {
    idle: ({ isPressed, isWeekend }) => ({
      container: {
        backgroundColor: isPressed ? linearAccent : "transparent",
        borderRadius: 4,
      },
      content: {
        color: isWeekend && !isPressed ? colors.middleGray : colors.black,
      },
    }),
    today: ({ isPressed }) => ({
      container: {
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: isPressed ? 4 : 30,
        backgroundColor: isPressed ? linearAccent : "transparent",
      },
      content: {
        color: isPressed ? "#ffffff" : colors.black,
      },
    }),
    active: ({ isEndOfRange, isStartOfRange }) => ({
      container: {
        backgroundColor: linearAccent,
        borderTopLeftRadius: isStartOfRange ? 10 : 0,
        borderBottomLeftRadius: isStartOfRange ? 10 : 0,
        borderTopRightRadius: isEndOfRange ? 10 : 0,
        borderBottomRightRadius: isEndOfRange ? 10 : 0,
      },
      content: {
        color: "#ffffff",
      },
    }),
  },
};
