interface Chain {
  id: string;
  image: any;
  text: string;
}

export const chains: Chain[] = [
  {
    id: "ethereum",
    image: require("@/shared/assets/images/chains/ether.png"),
    text: "Ethereum Main Network",
  },
  {
    id: "bnb",
    image: require("@/shared/assets/images/chains/bnb.png"),
    text: "BNB Smart Chain",
  },
  {
    id: "arbitrum",
    image: require("@/shared/assets/images/chains/arbitrum.png"),
    text: "Arbitrum One",
  },
  {
    id: "gnosis",
    image: require("@/shared/assets/images/chains/gnosis.png"),
    text: "Gnosis Chain",
  },
  {
    id: "flow",
    image: require("@/shared/assets/images/chains/flow.png"),
    text: "Flow Network",
  },
  {
    id: "optimism",
    image: require("@/shared/assets/images/chains/optimism.png"),
    text: "Optimism Main Network",
  },
];
