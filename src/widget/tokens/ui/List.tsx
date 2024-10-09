import { View, Text } from "react-native";
import React from "react";
import { useSelectionsStore } from "@/shared/lib/store/userSelectionStore";
import { TokenCard } from "./Card";
import { tokens } from "@/shared/config/tokens";

const List = () => {
  const selectionsStore = useSelectionsStore();
  return (
    <View
      style={{
        gap: 10,
        width: "100%",
      }}
    >
      {selectionsStore.selectedSourceChains.map((chainId, chainIndex) =>
        tokens
          .filter((chain) => chain.id == chainId)
          .map((item, index) =>
            item.tokens.map((token, tokenIndex) => (
              <TokenCard
                chain={item.id}
                key={tokenIndex}
                text={token.text}
                isSelected={selectionsStore.selectedTokens.includes(
                  token.id + item.id
                )}
                tokenId={token.id}
                setIsSelected={() =>
                  selectionsStore.selectedTokens.includes(token.id + item.id)
                    ? selectionsStore.setSelectedTokens(
                        selectionsStore.selectedTokens.filter(
                          (tokenId) => tokenId != token.id + item.id
                        )
                      )
                    : selectionsStore.setSelectedTokens([
                        ...selectionsStore.selectedTokens,
                        token.id + item.id,
                      ])
                }
              />
            ))
          )
      )}
    </View>
  );
};

export default List;
