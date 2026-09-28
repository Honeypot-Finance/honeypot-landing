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
- `src/components/editorial/`: brand, article covers, interactive SVG illustrations, detailed HTML/CSS diagrams, and shared editorial styles.
- `src/config/allAppPath.tsx`: navigation and the four retained legacy destinations.
- `src/app/layout.tsx` and `src/components/StructuredData/OrganizationSchema.tsx`: business metadata and structured data.
- `src/components/SiteProviders.tsx`: keeps wallet initialization off the public homepage, article pages, and legal pages, while retaining it for legacy routes.
- `public/images/editorial/`: the supplied logo, website illustration, and five original anime article covers.
- `public/images/experiment-bear.png`: the original Professor Pot character, retained in Technical Education.
- `src/config/partners.ts`: the original investor names, links, and logos used by the investor section; the separate partners list is not presented as investors.

All homepage editorial cards open native English articles. Readers can follow section source notes to a bibliography of primary references; related stories stay within the publication. This is a static editorial library, not a live news feed or connected CMS. To publish an article, add it to `src/content/articles.ts` with a unique slug, one of the three section names, publication date, primary sources, and related slugs. Static pages and sitemap entries are generated from that collection.

Alpha is a separate homepage section for planned investment insights in crypto, AI, and semiconductors. It is explicitly marked “Coming soon”; no research feed, market data, or subscription service is connected. Every article displays a linked “Content writing supported by florus.ai” credit.

Articles use the Launchvibes repository’s creator-writing skill, article hook registry, voice-packet guidance, and draft/review process, applied through Codex. Each piece has its own argument and an ending that develops the implications of its evidence. The [editorial harness](docs/editorial-harness.md) records the actual references, per-article hook choices, voice boundaries, and review criteria. This does not call Launchvibes’s hosted generation service or use a signed-in product account. Diagrams are original accessible HTML/CSS explanations; they are not measured results or guarantees of a product’s behavior.

For future editorial work, [AGENTS.md](AGENTS.md) points agents to that standard. Before drafting, record the brief and hook choice; after a new article or substantial rewrite, complete the [review template](docs/editorial-review-template.md) at `docs/editorial-reviews/<slug>.md` and link it in the PR. Review the specific argument, sources, earned ending, inline animation, and attribution. This is a documented editorial workflow, not an automated guarantee of writing quality. Layout-only work should preserve useful labels, headings, introductions, and article summaries alongside the illustrations.

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

Each article’s mechanism now includes an original four-scene SVG illustration in `ArticleMotion.tsx`. These use the reusable scene/timeline approach described in the Social Factories video pipeline as a reference, implemented locally in React and CSS without a video service or new dependency. They are conceptual illustrations, not product recordings. Each offers Play/Pause/Replay and numbered step buttons, plays through once when visible, pauses offscreen or in a hidden tab, and disables automatic playback for reduced-motion users. The detailed static mechanism remains available in an expandable section. New article diagram kinds require corresponding entries in both `ArticleMotion.tsx` and `ArticleDiagram.tsx`.
