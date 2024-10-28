import { View, Image } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { Bill } from "@/entities/groups/lib/types";
import { getPersonInfo } from "@/entities/contacts/lib/config";

const VerticalLine = ({ height }: { height: number }) => (
  <View
    style={{
      position: "absolute",
      left: 25,
      top: 25,
      width: 2,
      height: height,
      backgroundColor: colors.blue,
    }}
  />
);

const HorizontalLine = () => (
  <View
    style={{
      position: "absolute",
      left: -25,
      top: 25,
      width: 30,
      height: 2,
      backgroundColor: colors.blue,
    }}
  />
);

const PurchasePeople = ({ bill }: { bill: Bill }) => {
  const sortedAddresses = [...bill.spenersAddresses].sort((a) =>
    a === bill.payerAddress ? -1 : 1
  );
  const lineHeight = 70 * (sortedAddresses.length - 1); // 80 - примерное расстояние между элементами
  return (
    <View
      style={{
        marginVertical: "5%",
        alignItems: "flex-start",
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 5,
        position: "relative",
      }}
    >
      <VerticalLine height={lineHeight} />

      {sortedAddresses.map((address, index) => {
        const price = bill.spentAmounts[index];
        const { name, avatar } = getPersonInfo(address);
        const isPayed = address === bill.payerAddress;
        const isOwed = !isPayed;

        return (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginLeft: isOwed ? 40 : 0,
              position: "relative",
              marginVertical: 5,
            }}
            key={index}
          >
            {isOwed && <HorizontalLine />}

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
              <Typography font="r-m" color={isOwed ? "red" : "blue"}>
                {isOwed ? `Owes: ${price}$` : `Paid: ${bill.sum}$`}
              </Typography>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default PurchasePeople;
