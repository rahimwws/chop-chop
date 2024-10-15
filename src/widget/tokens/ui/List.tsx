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
            item.tokens.map((token, tokenIndex) => {
              const selectedToken = { chain: item.id, token: token.id };

              const isSelected = selectionsStore.selectedTokens.some(
                (selected) =>
                  selected.chain === selectedToken.chain &&
                  selected.token === selectedToken.token
              );

              return (
                <TokenCard
                  chain={item.id}
                  key={tokenIndex}
                  text={token.text}
                  isSelected={isSelected}
                  tokenId={token.id}
                  setIsSelected={() =>
                    isSelected
                      ? selectionsStore.setSelectedTokens(
                          selectionsStore.selectedTokens.filter(
                            (selected) =>
                              selected.chain !== selectedToken.chain ||
                              selected.token !== selectedToken.token
                          )
                        )
                      : selectionsStore.setSelectedTokens([
                          ...selectionsStore.selectedTokens,
                          selectedToken,
                        ])
                  }
                />
              );
            })
          )
      )}
    </View>
  );
};

export default List;
