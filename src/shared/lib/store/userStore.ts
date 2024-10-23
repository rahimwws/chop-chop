import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "../storage";
import { ImageProps } from "react-native";

interface useUserStore {
  address: string;
  username: string;
  avatar: ImageProps;
  setAddress: (address: string) => void;
  setUsername: (username: string) => void;
  setAvatar: (avatar: ImageProps) => void;
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
