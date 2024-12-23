import { View, Text, Alert } from "react-native";
import { colors } from "@/shared/lib/theme";
import { Group } from "@/entities/groups/lib/types";
import Typography from "@/shared/ui/Typography";
import LargeButton from "@/shared/ui/Button/LargeButton";
import { useAccount } from "wagmi";
import { calcOweIsOwed, useGroupsStore } from "@/entities/groups/lib/store";
import Trash from "@/shared/assets/svg/icons/trash.svg";
import { useAppNavigation } from "@/shared/lib/navigation";
const GroupHeader = ({ group }: { group: Group }) => {
  const navigation = useAppNavigation();
  const account = useAccount();

  const groups = useGroupsStore((store) => store.groups);
  const setGroups = useGroupsStore((store) => store.setGroups);

  const allBills = group!.bills;
  const oweOwed = calcOweIsOwed(allBills, account.address as any);
  const handleDelete = () => {
    if (allBills.length === 0) {
      Alert.alert("Delete Group?", "Are you sure that you want to delete?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            setGroups(groups.filter((g) => g.id !== group.id));
            navigation.goBack();
          },
        },
      ]);
    } else {
      Alert.alert("Error", "You have debts");
    }
  };
  return (
    <View
      style={{
        marginTop: "-25%",
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 5,
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      <Typography size={18} font="ar-r">
        {group.name}
      </Typography>
      <Typography
        size={18}
        font="r-r"
        styles={{
          marginVertical: 3,
        }}
      >
        You are owed: {oweOwed.userIsOwed}$
      </Typography>
      <Typography size={18} font="r-r">
        You owe: {oweOwed.userOwe}$
      </Typography>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <LargeButton
          styles={{
            width: "40%",
            height: 30,
          }}
          text="Settle Up"
          textStyle={{
            fontSize: 18,
          }}
          textColor="white"
          bg={colors.blue}
          isRoute
          route="SettleUp"
        />
        <LargeButton
          styles={{
            width: "40%",
            height: 30,
          }}
          text="Delete"
          textStyle={{
            fontSize: 18,
          }}
          textColor="blue"
          bg={colors.middleGray}
          icon={<Trash />}
          action={handleDelete}
        />
      </View>
    </View>
  );
};

export default GroupHeader;
