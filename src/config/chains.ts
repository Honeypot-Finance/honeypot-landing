/**
 * Chain Metadata Configuration
 *
 * Contains chain information including names, native currencies, RPC URLs,
 * block explorers, chain icons, and token information.
 */

export type ChainId = number;

export interface TokenInfo {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
  isRouterToken?: boolean;
  isPopular?: boolean;
  isStableCoin?: boolean;
}

export interface ChainMetadata {
  id: ChainId;
  name: string;
  shortName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
  iconUrl?: string;
  tokens: Record<string, TokenInfo>;
}

export const CHAIN_METADATA: Record<ChainId, ChainMetadata> = {
  // Berachain Mainnet
  80094: {
    id: 80094,
    name: "Berachain",
    shortName: "Berachain",
    nativeCurrency: {
      name: "BERA",
      symbol: "BERA",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.berachain.com/"],
    blockExplorerUrls: ["https://berascan.com/"],
    iconUrl: "/images/chains/berachain.png",
    tokens: {
      "0x6969696969696969696969696969696969696969": {
        address: "0x6969696969696969696969696969696969696969",
        name: "Wrapped Bera",
        symbol: "WBERA",
        decimals: 18,
        logoURI: "/images/tokens/wbera-token-icon.png",
        isRouterToken: true,
      },
      "0xfcbd14dc51f0a4d49d5e53c2e0950e0bc26d0dce": {
        address: "0xfcbd14dc51f0a4d49d5e53c2e0950e0bc26d0dce",
        name: "Honey",
        symbol: "HONEY",
        decimals: 18,
        logoURI: "/images/tokens/honey-token-icon.png",
        isRouterToken: true,
        isPopular: true,
        isStableCoin: true,
      },
      "0xa32bfaf94e37911d08531212d32eade94389243b": {
        address: "0xa32bfaf94e37911d08531212d32eade94389243b",
        name: "Pots Buy This Coin",
        symbol: "PBTC",
        decimals: 18,
        logoURI: "/images/tokens/pbtc.png",
      },
      "0x9b37d542114070518a44e200fdcd8e4be737297f": {
        address: "0x9b37d542114070518a44e200fdcd8e4be737297f",
        name: "Honeypot Finance",
        symbol: "HPOT",
        decimals: 18,
        logoURI: "/images/tokens/thpot-token-icon.jpg",
        isRouterToken: true,
      },
      "0x549943e04f40284185054145c6e4e9568c1d3241": {
        address: "0x549943e04f40284185054145c6e4e9568c1d3241",
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        logoURI: "/images/tokens/usdc-token-icon.png",
        isRouterToken: true,
        isStableCoin: true,
      },
      "0x0555e30da8f98308edb960aa94c0db47230d2b9c": {
        address: "0x0555e30da8f98308edb960aa94c0db47230d2b9c",
        name: "WBTC",
        symbol: "WBTC",
        decimals: 18,
        logoURI: "/images/tokens/wbtc-token-icon.png",
        isRouterToken: true,
      },
      "0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590": {
        address: "0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590",
        name: "WETH",
        symbol: "WETH",
        decimals: 18,
        logoURI: "/images/tokens/weth-token-icon.png",
        isRouterToken: true,
      },
      "0x1ce0a25d13ce4d52071ae7e02cf1f6606f4c79d3": {
        address: "0x1ce0a25d13ce4d52071ae7e02cf1f6606f4c79d3",
        name: "NECT",
        symbol: "NECT",
        decimals: 18,
        logoURI: "/images/tokens/nect-token.jpg",
        isStableCoin: true,
      },
      "0x467aa1bfa3dcc714f7c16b3d779200431f6a833b": {
        address: "0x467aa1bfa3dcc714f7c16b3d779200431f6a833b",
        name: "3BC",
        symbol: "3BC",
        decimals: 18,
        logoURI: "/images/tokens/3bc.png",
      },
      "0xd77552d3849ab4d8c3b189a9582d0ba4c1f4f912": {
        address: "0xd77552d3849ab4d8c3b189a9582d0ba4c1f4f912",
        name: "wgBERA",
        symbol: "wgBERA",
        decimals: 18,
        logoURI: "/images/tokens/wgbera.png",
        isPopular: true,
      },
      "0x779ded0c9e1022225f8e0630b35a9b54be713736": {
        address: "0x779ded0c9e1022225f8e0630b35a9b54be713736",
        name: "USD₮0",
        symbol: "USD₮0",
        decimals: 6,
        logoURI: "/images/tokens/usdt-token-icon.png",
        isStableCoin: true,
      },
      "0xbc665a196220043b738de189aef05250e2acc700": {
        address: "0xbc665a196220043b738de189aef05250e2acc700",
        name: "Boyz",
        symbol: "Boyz",
        decimals: 18,
        logoURI: "/images/tokens/boyz-token-icon.png",
      },
      "0x9b6761bf2397bb5a6624a856cc84a3a14dcd3fe5": {
        address: "0x9b6761bf2397bb5a6624a856cc84a3a14dcd3fe5",
        name: "iBERA",
        symbol: "iBERA",
        decimals: 18,
        logoURI: "https://infrared.finance/assets/tokens/ibera.svg",
      },
      "0x08a38caa631de329ff2dad1656ce789f31af3142": {
        address: "0x08a38caa631de329ff2dad1656ce789f31af3142",
        name: "YEET",
        symbol: "YEET",
        decimals: 18,
        logoURI: "/images/tokens/yeet-token-icon.jpg",
      },
      "0x1f7210257fa157227d09449229a9266b0d581337": {
        address: "0x1f7210257fa157227d09449229a9266b0d581337",
        name: "Beramonium Coin",
        symbol: "BERAMO",
        decimals: 18,
        logoURI: "/images/tokens/beramonium.png",
      },
      "0x331865bf2ea19e94bbf438cf4ee590cb6392e5a9": {
        address: "0x331865bf2ea19e94bbf438cf4ee590cb6392e5a9",
        name: "Moola",
        symbol: "MOOLA",
        decimals: 18,
        logoURI: "/images/tokens/moola.jpeg",
      },
      "0xa452810a4215fccc834ed241e6667f519b9856ec": {
        address: "0xa452810a4215fccc834ed241e6667f519b9856ec",
        name: "Berabot",
        symbol: "BBOT",
        decimals: 18,
        logoURI: "/images/tokens/berabot.png",
      },
      "0xac03caba51e17c86c921e1f6cbfbdc91f8bb2e6b": {
        address: "0xac03caba51e17c86c921e1f6cbfbdc91f8bb2e6b",
        name: "Infrared BGT",
        symbol: "iBGT",
        decimals: 18,
        logoURI: "/images/tokens/ibgt-token-icon.png",
      },
      "0xb2f776e9c1c926c4b2e54182fac058da9af0b6a5": {
        address: "0xb2f776e9c1c926c4b2e54182fac058da9af0b6a5",
        name: "henlo",
        symbol: "HENLO",
        decimals: 18,
        logoURI: "/images/tokens/henlo.png",
        isPopular: true,
      },
      "0xbaadcc2962417c01af99fb2b7c75706b9bd6babe": {
        address: "0xbaadcc2962417c01af99fb2b7c75706b9bd6babe",
        name: "Liquid BGT",
        symbol: "LBGT",
        decimals: 18,
        logoURI: "/images/tokens/lbgt-token-icon.svg",
      },
      "0xa40e6433782ffb18c8eeb16d201e331e37abfb74": {
        address: "0xa40e6433782ffb18c8eeb16d201e331e37abfb74",
        name: "Xi BERA",
        symbol: "XI",
        decimals: 18,
        logoURI: "/images/tokens/xi.webp",
      },
      "0x10acd894a40d8584ad74628812525ef291e16c47": {
        address: "0x10acd894a40d8584ad74628812525ef291e16c47",
        name: "Q5",
        symbol: "Q5",
        decimals: 18,
        logoURI: "/images/tokens/q5.webp",
      },
      "0x539aced84ebb5cbd609cfaf4047fb78b29553da9": {
        address: "0x539aced84ebb5cbd609cfaf4047fb78b29553da9",
        name: "the chain has a bear on it",
        symbol: "BERACHAIN",
        decimals: 18,
        logoURI: "/images/tokens/berachain.webp",
      },
      "0xab7e0f3d69de8061aa46d7c9964dbc11878468eb": {
        address: "0xab7e0f3d69de8061aa46d7c9964dbc11878468eb",
        name: "Berally Token",
        symbol: "BRLY",
        decimals: 18,
        logoURI: "/images/tokens/berally.png",
      },
      "0x18878df23e2a36f81e820e4b47b4a40576d3159c": {
        address: "0x18878df23e2a36f81e820e4b47b4a40576d3159c",
        name: "Olympus",
        symbol: "OHM",
        decimals: 18,
        logoURI: "https://berascan.com/token/images/olympusdao2_32.png",
      },
      "0x6536cead649249cae42fc9bfb1f999429b3ec755": {
        address: "0x6536cead649249cae42fc9bfb1f999429b3ec755",
        name: "NavFinance",
        symbol: "NAV",
        decimals: 18,
        logoURI: "https://images.oogabooga.io/nav.png",
      },
      "0x28e0e3b9817012b356119df9e217c25932d609c2": {
        address: "0x28e0e3b9817012b356119df9e217c25932d609c2",
        name: "Burr Governance Token",
        symbol: "BURR",
        decimals: 18,
        logoURI: "/images/tokens/burr_bear_logo.webp",
      },
      "0x009af46df68db0e76bfe9ea35663f6ed17877956": {
        address: "0x009af46df68db0e76bfe9ea35663f6ed17877956",
        name: "Ooga Token",
        symbol: "OOGA",
        decimals: 18,
        logoURI:
          "https://app.oogabooga.io/_next/image?url=https%3A%2F%2Fimages.oogabooga.io%2Fooga.png&w=64&q=75",
      },
      "0x93a0cb3ee34aa983db262f904021911ecd199228": {
        address: "0x93a0cb3ee34aa983db262f904021911ecd199228",
        name: "Bee Token",
        symbol: "BEE",
        decimals: 18,
        logoURI: "/images/tokens/bee-token-icon.jpg",
        isPopular: true,
      },
      "0x773f8b20cc9bb82a67ad2c5d996bb3db79118ee1": {
        address: "0x773f8b20cc9bb82a67ad2c5d996bb3db79118ee1",
        name: "(:-):-):-))",
        symbol: ":-)",
        decimals: 18,
        logoURI: "/images/tokens/happy_face_3.avif",
      },
    },
  },
  // BNB Smart Chain
  56: {
    id: 56,
    name: "BNB Smart Chain",
    shortName: "BSC",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed.binance.org"],
    blockExplorerUrls: ["https://bscscan.com"],
    iconUrl: "/images/chains/bsc.png",
    tokens: {
      "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": {
        address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
        name: "Wrapped BNB",
        symbol: "WBNB",
        decimals: 18,
        logoURI:
          "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
        isRouterToken: true,
        isPopular: true,
      },
      "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": {
        address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        name: "Binance-Peg USD Coin",
        symbol: "USDC",
        decimals: 18,
        logoURI: "https://bscscan.com/token/images/centre-usdc_28.png",
        isRouterToken: true,
        isStableCoin: true,
        isPopular: true,
      },
      "0x55d398326f99059ff775485246999027b3197955": {
        address: "0x55d398326f99059ff775485246999027b3197955",
        name: "Binance-Peg BSC-USD",
        symbol: "USDT",
        decimals: 18,
        logoURI: "https://bscscan.com/token/images/busdt_32.png",
        isRouterToken: true,
        isStableCoin: true,
        isPopular: true,
      },
      "0xe9e7cea3dedca5984780bafc599bd69add087d56": {
        address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        name: "Binance-Peg BUSD Token",
        symbol: "BUSD",
        decimals: 18,
        logoURI: "https://bscscan.com/token/images/busd_32.png",
        isRouterToken: true,
        isStableCoin: true,
      },
      "0x2170ed0880ac9a755fd29b2688956bd959f933f8": {
        address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        name: "Binance-Peg Ethereum Token",
        symbol: "ETH",
        decimals: 18,
        logoURI: "https://bscscan.com/token/images/ethereum_32.png",
        isRouterToken: true,
        isPopular: true,
      },
      "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c": {
        address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        name: "Binance-Peg BTCB Token",
        symbol: "BTCB",
        decimals: 18,
        logoURI: "https://bscscan.com/token/images/btcb_32.png",
        isRouterToken: true,
        isPopular: true,
      },
      "0x8d0d000ee44948fc98c9b98a4fa4921476f08b0d": {
        address: "0x8d0d000ee44948fc98c9b98a4fa4921476f08b0d",
        name: "World Liberty Financial USD",
        symbol: "USD1",
        decimals: 18,
        logoURI: "https://bscscan.com/token/images/wlfi-usd1_32.png",
      },
    },
  },
  // Add more chains as needed
};

/**
 * Get chain metadata by ID
 */
export function getChainMetadata(chainId: ChainId): ChainMetadata | null {
  return CHAIN_METADATA[chainId] || null;
}

/**
 * Get chain name (short version for display)
 */
export function getChainName(chainId: ChainId): string {
  return CHAIN_METADATA[chainId]?.shortName || `Chain ${chainId}`;
}

/**
 * Get all configured chain IDs
 */
export function getAllChainIds(): ChainId[] {
  return Object.keys(CHAIN_METADATA).map(Number);
}

/**
 * Get token information by address and chain
 */
export function getTokenInfo(
  chainId: ChainId,
  tokenAddress: string
): TokenInfo | null {
  const chain = CHAIN_METADATA[chainId];
  if (!chain) return null;

  const normalizedAddress = tokenAddress.toLowerCase();
  return chain.tokens[normalizedAddress] || null;
}

/**
 * Get all tokens for a specific chain
 */
export function getChainTokens(chainId: ChainId): TokenInfo[] {
  const chain = CHAIN_METADATA[chainId];
  if (!chain) return [];

  return Object.values(chain.tokens);
}

/**
 * Get popular tokens for a chain
 */
export function getPopularTokens(chainId: ChainId): TokenInfo[] {
  const tokens = getChainTokens(chainId);
  return tokens.filter((token) => token.isPopular);
}

/**
 * Get router tokens (commonly used in swaps)
 */
export function getRouterTokens(chainId: ChainId): TokenInfo[] {
  const tokens = getChainTokens(chainId);
  return tokens.filter((token) => token.isRouterToken);
}

/**
 * Get stablecoin tokens
 */
export function getStablecoins(chainId: ChainId): TokenInfo[] {
  const tokens = getChainTokens(chainId);
  return tokens.filter((token) => token.isStableCoin);
}

/**
 * Search tokens by symbol or name
 */
export function searchTokens(chainId: ChainId, query: string): TokenInfo[] {
  const tokens = getChainTokens(chainId);
  const lowerQuery = query.toLowerCase();

  return tokens.filter(
    (token) =>
      token.symbol.toLowerCase().includes(lowerQuery) ||
      token.name.toLowerCase().includes(lowerQuery)
  );
}
