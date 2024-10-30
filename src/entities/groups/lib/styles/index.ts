import { colors } from "@/shared/lib/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.lightGray,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 5,
    borderRadius: 5,
    gap: 10,
  },
  imageContainer: {
    backgroundColor: colors.middleGray,
    borderRadius: 5,
    width: 62,
    height: 62,
  },
  image: {
    borderRadius: 5,
    width: 62,
    height: 62,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: "auto",
  },
  settledContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginBottom: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  owedContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginBottom: 3,
  },
  oweContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  actionContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
  },
  actionButtonContainer: {
    flexDirection: "row",
    gap: 5,
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.middleGray,
    padding: 14,
    borderRadius: 5,
  },
  settleButton: {
    backgroundColor: colors.blue,
    paddingVertical: 6,
    paddingHorizontal: 9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
