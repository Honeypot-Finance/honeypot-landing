# Repository security review — 2026-09-27

Scope: the Next.js landing application, dependency graph, public API handlers, database configuration, tracked-secret patterns, and legacy frontend compatibility. This is a code/dependency review, not a smart-contract audit, penetration test, or guarantee that the deployment and connected services are secure.

## Dependency findings

The original project pinned Next.js 14.2.5, an unsupported release with multiple published security issues. It is now on **Next.js 15.5.26** (Maintenance LTS), with matching Next ESLint configuration and **React / React DOM 19.3.0**. Versions were checked against the npm registry and official guidance. The upgrade retains the Webpack build and existing Tailwind 3/Wagmi 2 architecture to limit unrelated migration risk.

Live npm audit results for the complete pnpm lockfile:

| Severity | Before | After |
| --- | ---: | ---: |
| Critical | 4 | 0 |
| High | 87 | 0 |
| Moderate | 90 | 2 |
| Low | 12 | 0 |
| Total advisory entries | 193 | 2 |

Audit entries are dependency findings, not 193 independently exploitable application vulnerabilities. Results reflect the registry at review time and can change when new advisories are published.

Compatible patches were refreshed across the dependency graph, including wallet clients, document conversion, CSS processing, and build tooling. Scoped overrides in `pnpm-workspace.yaml` patch vulnerable PostCSS, WebSocket, YAML, Babel, and browser-target metadata versions inherited by upstream packages. HeroUI is pinned to 2.7.11 because newer HeroUI 2 releases require Tailwind 4; Framer Motion remains on the React 19-compatible 11.18.2 line because the legacy SVG components use its animation types. Missing direct `clsx` and `tailwind-merge` imports are now declared. Explicit peer dependencies provide Coinbase CDP SDK 1.57.0’s optional x402 packages, which the SDK imports statically and otherwise caused the retained wallet bundle to fail compilation. Unused Locator/Babel syntax tooling was removed. ESLint 9 is the latest major accepted by the Next 15 config; migrating to ESLint 10 belongs with the subsequent framework migration.

There is now one authoritative lockfile, `pnpm-lock.yaml`; stale `yarn.lock`, `yarn-error.log`, and generated TypeScript build metadata were removed. Package lifecycle scripts were disabled during installation. The machine's provided pnpm 11.19.0 performed installation; `packageManager` pins pnpm 10.34.5 for the repository and the lockfile retains the shared v9 format. An isolated frozen-lockfile install with actual pnpm 10.34.5 also passed without modifying the lockfile.

### Remaining moderate advisories

1. **uuid 8.3.2 / 9.0.1** — [GHSA-w5hq-g745-h8pq](https://github.com/advisories/GHSA-w5hq-g745-h8pq). The issue concerns supplied output buffers to the v3/v5/v6 APIs. It enters through the legacy MetaMask stack, including `wagmi → @wagmi/connectors → @metamask/sdk → @metamask/sdk-communication-layer → uuid` and `wagmi → @wagmi/connectors → @gemini-wallet/core → @metamask/rpc-errors → @metamask/utils → uuid`. This app does not directly call these UUID APIs. Removing the finding requires an upstream wallet update or an independently tested UUID major-version override; it was not silently forced across the wallet dependency tree.
2. **decode-uri-component 0.2.2** — [GHSA-vcc3-ghjq-m6fr](https://github.com/advisories/GHSA-vcc3-ghjq-m6fr). Malformed percent-encoded input can consume excessive CPU. The dependency path is `wagmi → @wagmi/connectors → @walletconnect/ethereum-provider → @reown/appkit → @reown/appkit-controllers → @walletconnect/universal-provider → @walletconnect/sign-client → @walletconnect/core → @walletconnect/utils → query-string → decode-uri-component` (also shorter WalletConnect paths). The maintainer's patched 0.5.0 is ESM, whereas this legacy query-string consumer uses CommonJS, so a blind override would risk breaking wallet connection. Upgrade the WalletConnect/Wagmi integration after its compatible upstream fix, or separately test a migration. The marketing homepage no longer initializes the wallet stack; retained legacy pages still use it.

### Near-term framework follow-up

Next.js [official support policy](https://nextjs.org/support-policy) lists Next 15 as Maintenance LTS and Next 16 as Active LTS. [The September 22 release](https://nextjs.org/blog/nextjs-security-update-september-22-2026) recommends 15.5.26 / 16.3.6; its particular ImageResponse RCE affects Next 16.2–16.3.5, not Next 15. Version 15.5.26 includes related hardening.

A further **15.5.27 / 16.3.7 security release is scheduled for September 30, 2026**, according to the [official advance notice](https://nextjs.org/blog/upcoming-nextjs-security-release-september-2026). Those patches were not yet available during this review. Review the published advisories and update once released. Next 15's two-year maintenance window also approaches its end in October 2026; plan the Next 16 migration promptly.

## Application fixes

- **Tracked SNAG credential:** the loyalty handler contained a literal API key. Removed it from source and require server-only `SNAG_API_KEY` from the deployment environment. Missing configuration returns a controlled 503. **The operator must rotate/revoke the old key and configure its replacement before restoring loyalty data.** Removing a source literal does not remove it from Git history or revoke it. No credential value is reproduced here.
- **Overbroad credentialed proxy:** the loyalty handler no longer forwards arbitrary parameters. It accepts only known public loyalty currencies, a 1–100 result limit, valid sort direction, a bounded cursor, and a valid EVM wallet address; duplicate and unknown parameters fail with 400. Requests have a ten-second timeout, reject redirects, disable caching, expose only the public account fields used by the UI, and return generic upstream errors.
- **Database defaults/logging:** without `DB`, the statistics endpoint now returns 503 rather than accidentally initializing a default local database connection. Queries remain parameterized; SQL-parameter interpolation and raw database/upstream result logging were removed. Subgraph calls have an explicit timeout and status check.
- **Browser hardening:** added `frame-ancestors 'self'`, `object-src 'none'`, `base-uri 'self'`, and `X-Frame-Options: SAMEORIGIN`; retained content-type, referrer, and permissions headers. This is a focused CSP, not a complete script policy; a nonce-based script CSP requires testing all legacy wallet integrations.
- **Environment hygiene:** `.gitignore` now covers `.env.*` while preserving `.env.example`, build metadata, and package-manager error logs. `.env.example` documents the new server-only variable without a real credential.
- **Navigation compatibility:** the shared navbar API emits absolute URLs and the new logo so other apps do not resolve the landing page's section anchors on their own domains. Retired `/homepage1`–`/homepage4` route requests redirect to `/`; discontinued `/swap` and `/cross-chain-swap` routes redirect to `/#legacy`.

## Verification

- `pnpm test:security`: **18 passed**. Tests compile the actual handlers with isolated environment/network dependencies and cover query rejection, allowed pagination, missing configuration, upstream failures, redirect/cache configuration, response-field filtering, and absolute navbar URLs. No production API credential or network access is used by the tests.
- `pnpm typecheck`: **passed** after upgrading dependencies.
- `pnpm lint`: **passed**, with 18 existing warnings in legacy copy, image use, and effect dependencies. The copy-only rule is a warning only for retired homepage3/homepage4 and the old FAQ component; security and runtime lint rules remain enabled.
- `pnpm audit --json`: **2 moderate; 0 critical, high, or low**.
- `pnpm peers check`: **no peer dependency issues** after aligning external-store versions.
- `pnpm@10.34.5 install --lockfile-only --frozen-lockfile --ignore-scripts` in an isolated copy: **passed**, lockfile unchanged.
- `pnpm build`: **passed** on the final source, including all five static article routes and framework type/lint checks. Homepage first-load JavaScript is approximately 125 kB; article pages are approximately 119 kB.
- Production browser checks: **passed** at 1440px desktop, 768px tablet, and 390px/320px mobile widths. Verified the three distinct topic sections (AI: two stories, Web3: one, Technical Education: two), all five native article routes, source anchors, loaded anime covers, matching social-preview metadata, and no horizontal overflow. The Credits card opens the native Technical Education lesson and its responsive assembly diagram. Reduced-motion emulation disables cover animations, transforms, and transitions. The mobile menu, Escape/focus restoration, section navigation, and four legacy destinations also passed the earlier redesign checks. The public homepage made no wallet/RPC requests. No application-origin runtime errors were observed; the test browser's installed wallet extensions emitted a separate provider-injection conflict.
- Legacy checks: both legal documents render successfully and the disconnected dashboard loads at desktop/tablet and mobile sizes. The original DOCX filenames returned 404 under the upgraded static server; they were renamed to stable filenames with identical contents and fixed page/API references. Initial read-only pages of the four external legacy services were reachable; no transactions were submitted.
- HTTP smoke checks: homepage and navbar API return 200; retired prototype/swap paths return the expected 307 redirects; invalid loyalty input returns 400; missing database configuration returns controlled 503; normal responses include the new security headers.

## Deployment boundaries

Production SNAG access, database credentials, wallet signatures, staking/vault transactions, RPC availability, and external app deployments were not exercised. The public loyalty proxy still needs deployment-level abuse/rate limiting suited to the hosting platform; an in-memory limiter would be unreliable across serverless instances. Restrict SNAG credential scope and use a read-only database role. Legal document conversion only reads fixed, repository-controlled DOCX paths; it must not be repurposed for arbitrary uploaded documents without sanitization and resource limits.
