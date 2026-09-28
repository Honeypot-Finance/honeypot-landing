# Honeypot Finance

The Honeypot website introduces the business as an AI / Web3 discovery network, a technical education hub, and a smart-contract licensing partner. Its direction follows the [Honeypot announcement](https://h.chaincatcher.com/article/2284041).

## Development

Use the Node and pnpm versions declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3100. Before release, run `pnpm lint`, `pnpm typecheck`, `pnpm test:security`, and `pnpm build`. See `SECURITY_REVIEW.md` for audit findings and release requirements. Never add real credentials to this repository; `.env.example` describes server configuration.

## Website structure

- `src/app/page.tsx` and `src/app/page.module.scss`: the editorial homepage, with three distinct sections—AI, Web3, and Technical Education—plus licensing and community sections.
- `src/content/articles.ts`: original English articles, source references, related stories, and diagram selections.
- `src/app/articles/[slug]/page.tsx`: native article pages, static route generation, source notes, and article metadata.
- `src/components/editorial/`: brand, article visuals, responsive HTML/CSS diagrams, and shared editorial styles.
- `src/config/allAppPath.tsx`: navigation and the four retained legacy destinations.
- `src/app/layout.tsx` and `src/components/StructuredData/OrganizationSchema.tsx`: business metadata and structured data.
- `src/components/SiteProviders.tsx`: keeps wallet initialization off the public homepage, article pages, and legal pages, while retaining it for legacy routes.
- `public/images/editorial/`: the supplied logo, website illustration, and five original anime article covers.
- `public/images/experiment-bear.png`: the original Professor Pot character, retained in Technical Education.
- `src/config/partners.ts`: the original investor names, links, and logos used by the investor section; the separate partners list is not presented as investors.

All homepage editorial cards open native English articles. Readers can follow section source notes to a bibliography of primary references; related stories stay within the publication. This is a static editorial library, not a live news feed or connected CMS. To publish an article, add it to `src/content/articles.ts` with a unique slug, one of the three section names, publication date, primary sources, and related slugs. Static pages and sitemap entries are generated from that collection.

Articles follow a hook → concrete scene → mechanism → practical takeaway structure, informed by Launchvibes’ public [creator guidance](https://www.launchvibes.tech/for-creators) and [proof-scene editorial guide](https://www.launchvibes.tech/articles/short-form-video-scripts-proof-scenes). No Launchvibes engine or signed-in account was run to produce the site. Diagrams are original accessible HTML/CSS explanations; they are not measured results or guarantees of a product’s behavior.

Licensing inquiries go to [Telegram](https://t.me/wilsoncaroline1210) or `contact@honeypotfinance.xyz`. The licensing section names the FTO launchpad, All-in-One Vault, Pot2Pump, and NFT staking contract families reviewed by Hashlock and Shieldify, with links to the [security audit index](https://docs.honeypotfinance.xyz/more-info/security-audit) and NFT staking report. Each report should be read for its contract/version scope; the manifesto article distinguishes deployed contracts, integrations, and research. Binding rights, integration requirements, and terms remain matters for an agreement. The footer retains the original “GTM powered by florus.ai” attribution.

## Retained legacy services

| Service | Destination |
| --- | --- |
| Leaderboard | https://leaderboard.honeypotfinance.xyz/leaderboard |
| Documentation | https://docs.honeypotfinance.xyz/ |
| All-in-one vault | https://leaderboard.honeypotfinance.xyz/ |
| NFT staking | https://nft.honeypotfinance.xyz/staking |

These are existing external services. Their deployments and contracts are outside this repository. A frontend audit does not establish the safety of the deployed smart contracts or transactions.

## Visual assets

`honeypot-logo.png` is an unchanged copy of the logo supplied by the owner. `honeypot-world.png` and the five `*-anime.png` article covers were generated with the built-in image-generation tool. The article covers use the supplied logo and original Professor Pot artwork as mascot references. Prompts and provenance are recorded in `public/images/editorial/ASSETS.md`. Covers appear on homepage cards, article headers, related stories, and social previews. Entrance effects finish within 4.5 seconds; reduced-motion preferences disable the effects and hover transforms.

The Credits lesson (`credits-nft-burn-vs-lock`) belongs to Technical Education. It uses an original assembly diagram to explain custody, burning, callbacks, and transaction rollback; its educational example is not presented as the artist’s production contract.
