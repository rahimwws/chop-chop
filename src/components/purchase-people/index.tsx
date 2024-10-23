import { View, Image } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { Bill } from "@/entities/groups/lib/types";
import { useContactsStore } from "@/entities/contacts/lib/store";
import { useUserStore } from "@/shared/lib/store/userStore";

const PurchasePeople = ({ bill }: { bill: Bill }) => {
  const contacts = useContactsStore((store) => store.contacts);
  const username = useUserStore((store) => store.username);
  const avatar = useUserStore((store) => store.avatar);
  const userAddress = useUserStore((store) => store.address);

  const getPersonInfo = (address: string) => {
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

  return (
    <View
      style={{
        marginVertical: "5%",
        alignItems: "flex-start",
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 5,
        gap: 10,
      }}
    >
      {bill.spenersAddresses.map((address, index) => {
        const price = bill.spentAmounts[index];
        const { name, avatar } = getPersonInfo(address);
        return (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
            key={index}
          >
            {avatar ? (
              <Image
                source={avatar}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            ) : (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography font="r-m" size={18}>
                  {name.charAt(0).toUpperCase()}
                </Typography>
              </View>
            )}
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Typography font="r-m" size={18}>
                {name}
              </Typography>
              <Typography font="r-m">
                <Typography color="blue">Paid:</Typography> {price}$
              </Typography>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default PurchasePeople;
