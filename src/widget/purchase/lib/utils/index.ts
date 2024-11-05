import { useGroupsStore } from "@/entities/groups/lib/store";
import { Group, Bill } from "@/entities/groups/lib/types";
export const updateBillImageInGroups = (
  groups: Group[],
  groupId: string | null,
  billId: string,
  image: string
): Group[] => {
  return groups.map((group) => {
    if (group.id === groupId) {
      return {
        ...group,
        bills: group.bills.map((bill) => {
          if (bill.id === billId) {
            return { ...bill, image };
          }
          return bill;
        }),
      };
    }
    return group;
  });
};

export const handleActionSheetPress = (
  buttonIndex: number,
  groupId: string | null,
  bill: Bill,
  pickImage: () => Promise<string | null>,
  takePicture: () => Promise<string | null>
) => {
  const groups = useGroupsStore((store) => store.groups);
  const setGroups = useGroupsStore((store) => store.setGroups);
  if (buttonIndex === 1) {
    takePicture().then((uri) => {
      if (uri) {
        const group = updateBillImageInGroups(groups, groupId, bill.id, uri);
        setGroups(group);
      }
    });
  } else if (buttonIndex === 2) {
    pickImage().then((uri) => {
      if (uri) {
        const group = updateBillImageInGroups(groups, groupId, bill.id, uri);
        setGroups(group);
      }
    });
  }
};
