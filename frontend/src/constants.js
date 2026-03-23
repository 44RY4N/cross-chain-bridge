// Supported Chains
export const CHAINS = [
  {
    id: "eth-sepolia",
    name: "Ethereum",
    short: "ETH",
    ico: "⬡",
    bg: "#627eea"
  },
  {
    id: "poly-mumbai",
    name: "Polygon",
    short: "POL",
    ico: "◈",
    bg: "#8247e5"
  },
  {
    id: "bnb-testnet",
    name: "BNB Chain",
    short: "BNB",
    ico: "⬢",
    bg: "#f3ba2f"
  }
];

// Tokens available on chains
export const CHAIN_TOKENS = {
  "eth-sepolia": [
    {
      sym: "ETH",
      name: "Ethereum",
      rate: 1850,
      bal: "1.24",
      emoji: "⬡",
      bg: "#627eea"
    },
    {
      sym: "USDT",
      name: "Tether",
      rate: 1,
      bal: "520",
      emoji: "💲",
      bg: "#26a17b"
    }
  ],

  "poly-mumbai": [
    {
      sym: "MATIC",
      name: "Polygon",
      rate: 0.76,
      bal: "240",
      emoji: "◈",
      bg: "#8247e5"
    },
    {
      sym: "USDT",
      name: "Tether",
      rate: 1,
      bal: "310",
      emoji: "💲",
      bg: "#26a17b"
    }
  ],

  "bnb-testnet": [
    {
      sym: "BNB",
      name: "BNB Coin",
      rate: 310,
      bal: "4.5",
      emoji: "⬢",
      bg: "#f3ba2f"
    },
    {
      sym: "USDT",
      name: "Tether",
      rate: 1,
      bal: "210",
      emoji: "💲",
      bg: "#26a17b"
    }
  ]
};

// Swap tabs
export const SWAP_TABS = ["Swap", "Bridge", "Limit"];

// Dummy transaction status
export const TX_STATUS = {
  PENDING: "pending",
  SUCCESS: "completed",
  FAILED: "failed"
};