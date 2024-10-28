import { useState } from "react";
import { useEnsAddress } from "wagmi";
import { normalize } from "viem/ens";
import { Alert, ImageProps } from "react-native";
import { useContactsStore } from "@/entities/contacts/lib/store";
import { useAppNavigation } from "@/shared/lib/navigation";

export const useAddContact = () => {
  const [address, setAddress] = useState<string>("");
  const addContact = useContactsStore((store) => store.addContact);
  const contacts = useContactsStore.getState().contacts;
  const navigation = useAppNavigation();
  const {
    data: ensAddress,
    isLoading,
    isError,
  } = useEnsAddress({
    name: address ? normalize(address) : undefined,
  });

  const handleAddContact = (name: string, avatarUrl: ImageProps) => {
    if (!address) {
      Alert.alert("Error", "Please enter a wallet address or ENS name");
      return;
    }

    if (!name) {
      Alert.alert("Error", "Please enter a contact name");
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
    console.log(ensAddress);

    if (
      contacts.some(
        (contact) =>
          contact.address.toLowerCase() === contactAddress.toLowerCase()
      )
    ) {
      Alert.alert("Error", "A contact with this address already exists");
      return;
    }

    Alert.alert("Success", `Contact added: ${name} (${contactAddress})`);
    addContact({
      address: contactAddress,
      name: name,
      avatarUrl: avatarUrl,
    });
    setAddress("");
    navigation.navigate("Contacts");
  };

  return {
    address,
    setAddress,
    handleAddContact,
    isLoading,
  };
};
