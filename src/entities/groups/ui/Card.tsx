import {
  Pressable,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useGroupsStore } from "../lib/store";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import Mark from "@/shared/assets/svg/icons/check-mark.svg";
import Trash from "@/shared/assets/svg/icons/trash.svg";
import { styles } from "../lib/styles";
import ConfirmBottom from "./ConfirmBottom";

export default function Card({
  id,
  groupName,
  isOwed,
  owe,
  image,
  isSettled,
  confirmation = false,
  participants,
  owner,
}: {
  id: string;
  groupName: string;
  isOwed: number;
  owe: number;
  image?: string;
  isSettled: boolean;
  confirmation?: boolean;
  participants: number;
  owner?: string;
}) {
  const navigation = useAppNavigation();
  const groupsStore = useGroupsStore((store) => store.groups);
  const setGroups = useGroupsStore((store) => store.setGroups);
  return (
    <View
      style={{
        backgroundColor: colors.lightGray,
      }}
    >
      {confirmation && (
        <Typography align="left" styles={{ margin: 5 }}>
          Your contact {owner} add your in group
        </Typography>
      )}
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>
          navigation.navigate("GroupDetail", {
            group: groupsStore.find((group) => group.id === id),
          })
        }
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: image }}
          />
        </View>
        <View style={styles.textContainer}>
          <Typography font="r-m" size={18} align="left">
            {groupName}
          </Typography>
          {isSettled && !confirmation ? (
            <View style={styles.settledContainer}>
              <Mark width={22} />
              <Typography size={14}>Already Settled</Typography>
            </View>
          ) : !confirmation ? (
            <>
              <View style={styles.owedContainer}>
                <Typography size={14} color="green">
                  You are owed:
                </Typography>
                <Typography size={14} color="green">
                  {isOwed}$
                </Typography>
              </View>
              <View style={styles.oweContainer}>
                <Typography size={14} color="red">
                  You owe:
                </Typography>
                <Typography size={14} color="red">
                  {owe}$
                </Typography>
              </View>
            </>
          ) : (
            <Typography color="blue">Participants: {participants}</Typography>
          )}
        </View>
        {!confirmation && (
          <View style={styles.actionContainer}>
            <View style={styles.actionButtonContainer}>
              {isSettled ? (
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => {
                    setGroups(groupsStore.filter((x) => x.id != id));
                  }}
                >
                  <Trash width={16} />
                </TouchableOpacity>
              ) : (
                <Pressable
                  style={styles.settleButton}
                  onPress={() => navigation.navigate("SettleUp")}
                >
                  <Typography color="white">SETTLE UP</Typography>
                </Pressable>
              )}
            </View>
          </View>
        )}
      </TouchableOpacity>
      {confirmation && <ConfirmBottom id={id} />}
    </View>
  );
}
