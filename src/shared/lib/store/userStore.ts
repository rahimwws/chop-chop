import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "../storage";

interface useUserStore {
  address: string;
  username: string;
  avatar: string;
  setAddress: (address: string) => void;
  setUsername: (username: string) => void;
  setAvatar: (avatar: string) => void;
}

export const useUserStore = create<useUserStore>()(
  persist(
    (set) => ({
      address: "",
      username: "",
      avatar: "",
      setAddress: (address) => set({ address }),
      setUsername: (username) => set({ username }),
      setAvatar: (avatar) => set({ avatar }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => storage),
    }
  )
);
