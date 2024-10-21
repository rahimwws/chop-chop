import { useState } from "react";
import { useEnsAddress } from "wagmi";
import { normalize } from "viem/ens";
import { Alert } from "react-native";
import { useContactsStore } from "@/entities/contacts/lib/store";

export const useAddContact = () => {
  const [address, setAddress] = useState<string>("");
  const addContact = useContactsStore((store) => store.addContact);
  const contacts = useContactsStore.getState().contacts;
  const {
    data: ensAddress,
    isLoading,
    isError,
  } = useEnsAddress({
    name: address ? normalize(address) : undefined,
  });

  const handleAddContact = () => {
    if (!address) {
      Alert.alert("Error", "Please enter a wallet address or ENS name");
      return;
    }

    if (isLoading) {
      Alert.alert("Please wait", "Resolving address...");
      return;
    }

    if (isError) {
      Alert.alert("Error", "Failed to resolve address. Please try again.");
      return;
    }

    const contactAddress = ensAddress || address;

    if (
      contacts.some(
        (contact) =>
          contact.address.toLowerCase() === contactAddress.toLowerCase()
      )
    ) {
      Alert.alert("Error", "A contact with this address already exists");
      return;
    }

    console.log("Adding contact:", contactAddress);
    Alert.alert("Success", `Contact added: ${contactAddress}`);
    addContact({
      address: contactAddress,
      name: contactAddress.slice(0, 5),
      avatarUrl: require("@/shared/assets/images/avatars/avatar-1.png"),
    });
    setAddress("");
  };

  return {
    address,
    setAddress,
    handleAddContact,
    isLoading,
  };
};
