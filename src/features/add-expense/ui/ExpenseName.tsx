import { View, TouchableOpacity } from "react-native";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import GroupSVG from "@/shared/assets/svg/tabs/group-svg.svg";
import CalendarSvg from "@/shared/assets/svg/icons/calendar.svg";
import { getFormattedDate } from "../model/format";
import { useAppNavigation } from "@/shared/lib/navigation";

const ExpenseName = ({
  type,
  name,
  selectedDate,
}: {
  type: "personal" | "group";
  name: string | undefined;
  selectedDate: number;
}) => {
  const navigation = useAppNavigation();

  return (
    <View
      style={{
        marginVertical: "5%",
        backgroundColor: colors.lightGray,
        borderRadius: 5,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          marginBottom: 5,
          alignItems: "center",
        }}
      >
        <GroupSVG width={26} height={26} stroke={colors.blue} strokeWidth={2} />
        <Typography size={18} font="r-m" align="left">
          {type === "personal" ? " With Person" : name}
        </Typography>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          gap: 5,
          marginBottom: 5,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Calendar", { date: selectedDate })}
      >
        <CalendarSvg
          width={26}
          height={26}
          stroke={colors.blue}
          strokeWidth={0.05}
        />
        <Typography size={18} font="r-m" align="left">
          {getFormattedDate(selectedDate)}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseName;
