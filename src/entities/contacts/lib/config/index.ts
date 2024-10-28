import { useUserStore } from "@/shared/lib/store/userStore";
import { useContactsStore } from "../store";

export const getPersonInfo = (address: string) => {
  const contacts = useContactsStore((store) => store.contacts);
  const username = useUserStore((store) => store.username);
  const avatar = useUserStore((store) => store.avatar);
  const userAddress = useUserStore((store) => store.address);
  const contact = contacts.find((c) => c.address === address);
  if (contact) {
    return {
      name: contact.name,
      avatar: contact.avatarUrl,
    };
  }
  if (address === userAddress) {
    return {
      name: username,
      avatar: avatar,
    };
  }
  return {
    name: address,
    avatar: null,
  };
};
