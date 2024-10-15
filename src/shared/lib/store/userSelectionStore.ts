import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "../storage";
interface SelectedToken {
  chain: string;
  token: string;
}

interface Debt {
  from: string;
  to: string;
  debt: number;
}

export interface UserSelectionsStore {
  selectedSourceChains: string[];
  setSelectedSourceChains: (chains: string[]) => void;

  selectedTokens: SelectedToken[];
  setSelectedTokens: (tokens: SelectedToken[]) => void;

  selectedAvatarId: number;
  setSelectedAvatar: (avatarId: number) => void;
}

export const useSelectionsStore = create<
  UserSelectionsStore,
  [["zustand/persist", never]]
>(
  persist(
    (set, get) => ({
      selectedSourceChains: [],
      setSelectedSourceChains(selectedSourceChains) {
        set({
          selectedSourceChains,
        });
      },

      selectedTokens: [],
      setSelectedTokens(selectedTokens) {
        set({
          selectedTokens,
        });
      },

      selectedAvatarId: 1,
      setSelectedAvatar(selectedAvatarId) {
        set({
          selectedAvatarId,
        });
      },
    }),
    {
      name: "selectionsStore",
      storage: createJSONStorage(() => storage),
    }
  )
);
