interface Chain {
  id: string;
  tokens: Token[];
}

interface Token {
  id: string;
  text: string;
}
export const tokens: Chain[] = [
  {
    id: "ethereum",
    tokens: [
      {
        id: "usdc",
        text: "USDC",
      },
      {
        id: "weth",
        text: "WETH",
      },
    ],
  },
  {
    id: "optimism",
    tokens: [
      {
        id: "usdc",
        text: "USDC",
      },
      {
        id: "op",
        text: "OP",
      },
    ],
  },
  {
    id: "zksynck",
    tokens: [
      {
        id: "usdc",
        text: "USDC",
      },
      {
        id: "zksynck",
        text: "zkSynck",
      },
    ],
  },
  {
    id: "base",
    tokens: [
      {
        id: "usdc",
        text: "USDC",
      },
      {
        id: "weth",
        text: "WHETH",
      },
    ],
  },
  {
    id: "flow",
    tokens: [
      {
        id: "usdc",
        text: "USDC",
      },
      {
        id: "wflow",
        text: "WFLOW",
      },
    ],
  },
  {
    id: "bnb",
    tokens: [
      {
        id: "usdc",
        text: "USDC",
      },
      {
        id: "1inch",
        text: "1Inch",
      },
    ],
  },
  {
    id: "polygon",
    tokens: [
      {
        id: "usdc",
        text: "USDC",
      },
      {
        id: "weth",
        text: "WHETH",
      },
    ],
  },
  {
    id: "gnosis",
    tokens: [
      {
        id: "usdc",
        text: "USDC",
      },
      {
        id: "wbtc",
        text: "WBTC",
      },
    ],
  },
];
