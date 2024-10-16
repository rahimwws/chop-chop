import { Group } from "@/entities/groups/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "../storage";
interface GroupDetailStore {
  groupDetails: Group | null;
  setGroupDetails: (group: Group) => void;
  clearGroupDetails: () => void;
}
export const useGroupDetailStore = create<
  GroupDetailStore,
  [["zustand/persist", never]]
>(
  persist(
    (set, get) => ({
      groupDetails: null,
      setGroupDetails(group: Group) {
        set({
          groupDetails: group,
        });
      },

      clearGroupDetails() {
        set({
          groupDetails: null,
        });
      },
    }),
    {
      name: "groupDetailStore",
      storage: createJSONStorage(() => storage),
    }
  )
);
