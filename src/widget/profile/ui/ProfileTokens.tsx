import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { chains } from "@/shared/config/chains";
import TokenCard from "./TokenCard";
import { useSelectionsStore } from "@/shared/lib/store/userSelectionStore";
import { tokens } from "@/shared/config/tokens";
import { colors } from "@/shared/lib/theme";

const ProfileTokens = () => {
  const selectionsStore = useSelectionsStore();
  return (
    <View>
      <Typography size={20} font="r-m" align="left">
        Choosen Networks & Tokens
      </Typography>
      <View
        style={{
          padding: 10,
          backgroundColor: colors.lightGray,
          borderRadius: 5,
          marginVertical: "3%",
        }}
      >
        <Typography font="ar-r" size={18} align="left">
          Your chain: BNB Smart chain
        </Typography>
      </View>
      <View
        style={{
          gap: 10,
          width: "100%",
        }}
      >
        {chains.map((item, index) => {
          if (selectionsStore.selectedSourceChains.includes(item.id))
            return (
              <TokenCard
                key={index}
                image={item.image}
                text={item.text}
                tokens={selectionsStore.selectedTokens
                  .filter((token) => token.chain === item.id)
                  .map((token) => token.token)}
                action={() => {
                  if (selectionsStore.selectedSourceChains.includes(item.id)) {
                    // Удаляем chain и соответствующие токены
                    selectionsStore.setSelectedSourceChains(
                      selectionsStore.selectedSourceChains.filter(
                        (chainId) => chainId !== item.id
                      )
                    );
                    selectionsStore.setSelectedTokens(
                      selectionsStore.selectedTokens.filter(
                        (token) => token.chain !== item.id
                      )
                    );
                  } else {
                    // Добавляем chain, но не трогаем токены
                    selectionsStore.setSelectedSourceChains([
                      ...selectionsStore.selectedSourceChains,
                      item.id,
                    ]);
                  }
                }}
              />
            );
        })}
      </View>
    </View>
  );
};

export default ProfileTokens;
