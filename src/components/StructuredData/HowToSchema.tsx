/**
 * HowTo Structured Data
 *
 * Properly structured HowTo schemas with:
 * - @graph for multiple guides
 * - @id for entity linking
 * - Images for steps
 * - Proper tool/supply definitions
 * - Estimated time and cost
 */

export function HowToSchema() {
  const baseUrl = "https://honeypotfinance.xyz";

  const howToSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. How to Trade on Honeypot Finance (Spot)
      {
        "@type": "HowTo",
        "@id": `${baseUrl}/#howto-trade-spot`,
        name: "How to Trade on Honeypot Finance - Spot Trading Guide",
        description:
          "Complete step-by-step guide on how to trade on Honeypot Finance. Swap tokens via AMM-native matching on this multi-chain DeFi liquidity hub.",
        image: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/landing-new-assets-202511/new_media_banner.jpeg`,
          width: 1200,
          height: 630,
        },
        totalTime: "PT5M",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: "0",
          description: "Free to use - only pay blockchain gas fees",
        },
        supply: [
          {
            "@type": "HowToSupply",
            name: "Cryptocurrency tokens",
            description: "Tokens on a supported blockchain network for trading",
          },
        ],
        tool: [
          {
            "@type": "HowToTool",
            name: "Web3 Wallet",
            description: "MetaMask, Rabby, Coinbase Wallet, or any WalletConnect-compatible wallet",
          },
          {
            "@type": "HowToTool",
            name: "Web Browser",
            description: "Chrome, Firefox, Brave, or any modern browser",
          },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Connect Your Wallet",
            text: "Visit dex.honeypotfinance.xyz and click the 'Connect Wallet' button in the top right corner. Select your preferred Web3 wallet (MetaMask, Rabby, etc.) from the list and approve the connection request in your wallet.",
            url: "https://dex.honeypotfinance.xyz",
            image: `${baseUrl}/images/landing-new-assets-202511/infinite.svg`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Select Your Network",
            text: "Ensure you're connected to a supported network. You can switch networks using the network selector or directly in your wallet.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Choose Trading Pair",
            text: "Select the input token (what you're selling) and output token (what you're buying). Use the token search to find specific tokens by name or contract address.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Enter Trade Amount",
            text: "Enter the amount you want to trade. The interface will automatically calculate and display the estimated output amount, price impact, and minimum received after slippage.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Review and Execute",
            text: "Review the trade details including exchange rate, price impact, and fees. Adjust slippage tolerance if needed. Click 'Swap' and confirm the transaction in your wallet. Wait for blockchain confirmation.",
          },
        ],
      },

      // 2. How to Trade Perpetual Futures - Multi-Chain Perp DEX
      {
        "@type": "HowTo",
        "@id": `${baseUrl}/#howto-trade-perp`,
        name: "How to Trade Perpetual Futures on Honeypot Perp DEX",
        description:
          "Learn how to trade perpetual futures on Honeypot, a leading multi-chain perpetual futures DEX. Open leveraged positions using the innovative vault-based risk engine with AMM-native matching perpetual trading.",
        image: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/landing-new-assets-202511/rocket.svg`,
          width: 512,
          height: 512,
        },
        totalTime: "PT10M",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: "0",
          description: "No platform fee - pay only trading fees and gas",
        },
        supply: [
          {
            "@type": "HowToSupply",
            name: "Collateral tokens",
            description: "USDC or other supported tokens for margin",
          },
        ],
        tool: [
          {
            "@type": "HowToTool",
            name: "Web3 Wallet",
            description: "MetaMask, Rabby, or compatible wallet with funds",
          },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Access Perp DEX",
            text: "Navigate to perp.honeypotfinance.xyz and connect your Web3 wallet. Ensure you have USDC or supported collateral tokens in your wallet.",
            url: "https://perp.honeypotfinance.xyz",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Deposit Collateral",
            text: "Click 'Deposit' and transfer collateral tokens to your trading account. This margin will be used to open and maintain your perpetual positions.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Select Trading Pair",
            text: "Choose your desired perpetual market from the available pairs (e.g., BTC-PERP, ETH-PERP). Review the current price, 24h change, and funding rate.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Configure Position",
            text: "Choose your position direction: Long (profit when price rises) or Short (profit when price falls). Set your leverage level (1x to 100x) and enter your position size.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Set Risk Parameters",
            text: "Optionally set a take-profit price to automatically close at a target, and a stop-loss price to limit potential losses. Review your liquidation price carefully.",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Open Position",
            text: "Review all position details including entry price, fees, and margin requirements. Click 'Open Position' and confirm the transaction in your wallet.",
          },
        ],
      },

      // 3. How to Stake Honey Genesis NFT - Staking Benefits
      {
        "@type": "HowTo",
        "@id": `${baseUrl}/#howto-stake-nft`,
        name: "Honey Genesis NFT Staking Benefits - How to Earn Rewards",
        description:
          "Step-by-step guide to Honey Genesis NFT staking benefits. Learn how to earn rewards on Honeypot Finance by staking your NFTs for exclusive airdrops and ongoing rewards.",
        totalTime: "PT3M",
        supply: [
          {
            "@type": "HowToSupply",
            name: "Honey Genesis NFT",
            description: "One or more Honey Genesis NFTs in your wallet",
          },
        ],
        tool: [
          {
            "@type": "HowToTool",
            name: "Web3 Wallet on Berachain",
            description: "Wallet connected to Berachain network with your NFT",
          },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Acquire a Honey Genesis NFT",
            text: "If you don't own one, purchase a Honey Genesis NFT from Magic Eden secondary marketplace. The original mint is sold out. You can also bridge NFTs from other chains.",
            url: "https://magiceden.io/collections/berachain/honeygenesis-44",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Visit NFT Staking Portal",
            text: "Go to nft.honeypotfinance.xyz/staking and connect your wallet that holds your Honey Genesis NFT(s).",
            url: "https://nft.honeypotfinance.xyz/staking",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Select NFTs to Stake",
            text: "View all your Honey Genesis NFTs displayed on the staking page. Select one or multiple NFTs you want to stake by clicking on them.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Approve and Stake",
            text: "If this is your first time staking, approve the staking contract to access your NFTs. Then click 'Stake' and confirm the transaction in your wallet.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Earn and Claim Rewards",
            text: "Your staked NFTs immediately begin earning rewards. Return to the staking page anytime to view accumulated rewards and claim them to your wallet.",
          },
        ],
      },

      // 4. How to Earn Rewards by Providing Liquidity
      {
        "@type": "HowTo",
        "@id": `${baseUrl}/#howto-provide-liquidity`,
        name: "How to Earn Rewards on Honeypot Finance - Liquidity Provider Guide",
        description:
          "Complete guide on how to earn rewards on Honeypot Finance by providing liquidity. Learn about this multi-chain DeFi liquidity hub and earn trading fee rewards from AMM pools across multiple blockchains.",
        image: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/landing-new-assets-202511/charge-honey.svg`,
          width: 512,
          height: 512,
        },
        totalTime: "PT10M",
        supply: [
          {
            "@type": "HowToSupply",
            name: "Token pair",
            description: "Both tokens required for the liquidity pool you want to join",
          },
        ],
        tool: [
          {
            "@type": "HowToTool",
            name: "Web3 Wallet",
            description: "Wallet with tokens on Berachain or BSC",
          },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Navigate to Pools",
            text: "Visit dex.honeypotfinance.xyz/pools and connect your Web3 wallet. Browse the list of available liquidity pools.",
            url: "https://dex.honeypotfinance.xyz/pools",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Choose a Pool",
            text: "Select a liquidity pool based on the token pair, current APR (Annual Percentage Rate), Total Value Locked (TVL), and trading volume. Higher volume pools typically generate more fees.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Review Pool Details",
            text: "Click on your chosen pool to view detailed statistics including fee tier, your potential share, and historical performance data.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Add Liquidity",
            text: "Click 'Add Liquidity' and enter the amount of tokens to deposit. For standard pools, you'll need to provide both tokens in the pair at the current price ratio.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Confirm Transaction",
            text: "Approve token spending if prompted, review the transaction details, then confirm. You'll receive LP (Liquidity Provider) tokens representing your share of the pool.",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Earn Trading Fees",
            text: "Your LP tokens automatically accrue value as the pool earns trading fees. You can track your position and withdraw anytime by returning to the pools page.",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(howToSchema),
      }}
    />
  );
}
