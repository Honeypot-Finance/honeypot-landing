/**
 * How-To Structured Data for GEO
 *
 * Provides step-by-step instructions in JSON-LD format
 * for AI systems and search engines to extract procedural content.
 */

export function HowToSchema() {
  const howToTradeSpot = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Trade on Honeypot DEX",
    description:
      "Step-by-step guide to swap tokens on Honeypot Finance decentralized exchange on Berachain or BSC.",
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    tool: [
      {
        "@type": "HowToTool",
        name: "Web3 Wallet (MetaMask, Rabby, or similar)",
      },
      {
        "@type": "HowToTool",
        name: "Tokens on Berachain or BSC",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Connect Your Wallet",
        text: "Visit dex.honeypotfinance.xyz and click 'Connect Wallet'. Select your Web3 wallet (MetaMask, Rabby, etc.) and approve the connection.",
        url: "https://dex.honeypotfinance.xyz",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Select Trading Pair",
        text: "Choose the tokens you want to swap. Select the input token (what you're selling) and output token (what you're buying).",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Enter Amount",
        text: "Enter the amount you want to trade. The interface will show you the estimated output and price impact.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Review and Confirm",
        text: "Review the trade details including slippage tolerance and fees. Click 'Swap' and confirm the transaction in your wallet.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Transaction Complete",
        text: "Wait for the transaction to be confirmed on the blockchain. Your new tokens will appear in your wallet.",
      },
    ],
  };

  const howToStakeNFT = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Stake Honey Genesis NFT",
    description:
      "Guide to staking your Honey Genesis NFT to earn rewards on Honeypot Finance.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Own a Honey Genesis NFT",
        text: "Purchase a Honey Genesis NFT from Magic Eden or another secondary marketplace. The mint is sold out.",
        url: "https://magiceden.io/collections/berachain/honeygenesis-44",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Visit Staking Page",
        text: "Go to nft.honeypotfinance.xyz/staking and connect your wallet containing the NFT.",
        url: "https://nft.honeypotfinance.xyz/staking",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Select NFTs to Stake",
        text: "Choose which Honey Genesis NFTs you want to stake from your wallet.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Confirm Staking",
        text: "Approve and confirm the staking transaction. Your NFTs will be staked and you'll start earning rewards.",
      },
    ],
  };

  const howToProvideLiquidity = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Provide Liquidity on Honeypot DEX",
    description:
      "Learn how to add liquidity to Honeypot Finance pools and earn trading fees.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Connect Wallet",
        text: "Visit dex.honeypotfinance.xyz/pools and connect your Web3 wallet.",
        url: "https://dex.honeypotfinance.xyz/pools",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Choose a Pool",
        text: "Browse available liquidity pools and select one based on the token pair and APY.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Deposit Tokens",
        text: "Enter the amount of tokens to deposit. For standard pools, you need both tokens in the pair.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Confirm Transaction",
        text: "Review the transaction details and confirm. You'll receive LP tokens representing your pool share.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Earn Fees",
        text: "Your LP tokens automatically earn a share of trading fees from the pool.",
      },
    ],
  };

  const howToTradePerpetuals = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Trade Perpetual Futures on Honeypot",
    description:
      "Step-by-step guide to trading perpetual contracts on Honeypot Perp DEX.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Access Perp DEX",
        text: "Visit perp.honeypotfinance.xyz and connect your wallet.",
        url: "https://perp.honeypotfinance.xyz",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Deposit Collateral",
        text: "Deposit supported tokens as collateral for your trades.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Select Market",
        text: "Choose a perpetual market to trade (e.g., BTC-PERP, ETH-PERP).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Set Position",
        text: "Choose Long or Short, set your leverage, and enter position size.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Execute Trade",
        text: "Review order details and confirm. Your position will be opened via AMM-native matching.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToTradeSpot),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStakeNFT),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToProvideLiquidity),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToTradePerpetuals),
        }}
      />
    </>
  );
}
