import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { chains } from "@/shared/config/chains";
import { useSelectionsStore } from "@/shared/lib/store/userSelectionStore";
import ChainsCard from "./Card";

const List = () => {
  const selectionsStore = useSelectionsStore();
  return (
    <View
      style={{
        gap: 10,
        width: "100%",
      }}
    >
      {chains.map((item, index) => (
        <ChainsCard
          key={index}
          image={item.image}
          text={item.text}
          isSelected={selectionsStore.selectedSourceChains.includes(item.id)}
          setIsSelected={() =>
            selectionsStore.selectedSourceChains.includes(item.id)
              ? selectionsStore.setSelectedSourceChains(
                  selectionsStore.selectedSourceChains.filter(
                    (chainId) => chainId != item.id
                  )
                )
              : selectionsStore.setSelectedSourceChains([
                  ...selectionsStore.selectedSourceChains,
                  item.id,
                ])
          }
        />
      ))}
    </View>
  );
};

export default List;
