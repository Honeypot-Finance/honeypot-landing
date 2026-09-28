# Shared navigation API

`GET https://honeypotfinance.xyz/api/navbar` returns the editorial navigation and four retained legacy destinations. It is public, read-only, statically generated, and cached for one hour with stale-while-revalidate.

All `path`, `routePath`, and logo `src` values in the response are absolute URLs. Consumers on other domains can use them directly without resolving landing-page anchors against their own origin. UI components inside this repository continue to use local links from `src/config/allAppPath.tsx`.

```json
{
  "logo": {
    "src": "https://honeypotfinance.xyz/images/editorial/honeypot-logo.png",
    "alt": "Honeypot Finance Logo",
    "width": 100,
    "height": 100
  },
  "menu": [
    { "title": "AI", "path": "https://honeypotfinance.xyz/#ai" },
    { "title": "Web3", "path": "https://honeypotfinance.xyz/#web3" },
    { "title": "Technical Education", "path": "https://honeypotfinance.xyz/#technical-education" },
    { "title": "Licensing", "path": "https://honeypotfinance.xyz/#licensing" },
    {
      "title": "Legacy apps",
      "path": [
        {
          "title": "Leaderboard",
          "path": "https://leaderboard.honeypotfinance.xyz/leaderboard",
          "routePath": "https://leaderboard.honeypotfinance.xyz/leaderboard"
        },
        {
          "title": "Docs",
          "path": "https://docs.honeypotfinance.xyz/",
          "routePath": "https://docs.honeypotfinance.xyz/"
        },
        {
          "title": "All-in-one vault",
          "path": "https://leaderboard.honeypotfinance.xyz/",
          "routePath": "https://leaderboard.honeypotfinance.xyz/"
        },
        {
          "title": "NFT staking",
          "path": "https://nft.honeypotfinance.xyz/staking",
          "routePath": "https://nft.honeypotfinance.xyz/staking"
        }
      ]
    }
  ]
}
```

Consumers should handle a non-2xx response and retain a local fallback menu. A menu `path` is either a destination string or an array of submenu objects. Optional icon/display metadata may be present; do not assume an `external` field.
