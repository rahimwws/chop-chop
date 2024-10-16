import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { storage } from "@/shared/lib/storage";
import { Contact } from "../../model/types";

export interface ContactsStore {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
  addContact: (contact: Contact) => void;
  removeContact: (contactId: string) => void;
}

export const useContactsStore = create<
  ContactsStore,
  [["zustand/persist", never]]
>(
  persist(
    (set, get) => ({
      contacts: [
        {
          name: "Alexander Nolan",
          tokenAddress: "0x12345abcde",
          avatarUrl: require("@/shared/assets/images/avatars/avatar-1.png"),
        },
        {
          name: "Mizori Shirouki",
          tokenAddress: "0x67890fghij",
          avatarUrl: require("@/shared/assets/images/avatars/avatar-2.png"),
        },
        {
          name: "Andrey 101",
          tokenAddress: "0xabc123def456",
          avatarUrl: require("@/shared/assets/images/avatars/avatar-3.png"),
        },
      ],
      setContacts(contacts: Contact[]) {
        set({
          contacts,
        });
      },

      addContact(contact: Contact) {
        set((state) => ({
          contacts: [...state.contacts, contact],
        }));
      },

      removeContact(address: string) {
        set((state) => ({
          contacts: state.contacts.filter(
            (contact) => contact.tokenAddress !== address
          ),
        }));
      },
    }),
    {
      name: "contactsStore",
      storage: createJSONStorage(() => storage),
    }
  )
);
