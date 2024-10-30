import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "../storage";

interface ConfirmationGroup {
  groupId: string;
  contactAddress: string;
  status: "pending" | "accepted" | "declined";
  ownerAddress: string;
}

interface confirmationStore {
  groups: ConfirmationGroup[];
  setGroups: (groups: ConfirmationGroup[]) => void;
}

export const useConfirmationStore = create<confirmationStore>()(
  persist(
    (set) => ({
      groups: [
        {
          groupId: "cb2b0e6e-1608-49ea-a37f-a600b722b01d",
          contactAddress: "jifs",
          status: "pending",
          ownerAddress: "",
        },
      ],
      setGroups: (groups: ConfirmationGroup[]) => set({ groups }),
    }),
    {
      name: "confirmation",
      storage: createJSONStorage(() => storage),
    }
  )
);
