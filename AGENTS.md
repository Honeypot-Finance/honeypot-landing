# Honeypot working agreements

Keep changes scoped, preserve existing user work, and follow the user's Git authorization. Never commit secrets or commit directly to `main` or `dev`.

## Editorial work

Before creating, rewriting, translating, reviewing, or redesigning the presentation of articles, read [the editorial harness](docs/editorial-harness.md). It is the maintained source of truth for Honeypot's voice, Launchvibes hook patterns, structure, evidence, conclusions, and visuals. Apply only the relevant parts for a small correction or layout-only change.

- For a new article or substantial rewrite, record the reader, angle, hook choice, one-sentence thesis, argument, primary evidence, and intended closing insight before drafting. Use the harness's pattern selection guidance; do not force every article into the same template.
- The ending must resolve the opening and develop a specific consequence earned by the body. A summary, generic future prediction, sales CTA, or interchangeable inspirational paragraph does not pass.
- Keep factual verification separate from the voice/structure review. Do not invent reporting, personal experience, product usage, benchmarks, or completed launches. Recheck time-sensitive claims when revising them.
- Follow the harness's article-specific anime cover, in-article explanatory motion, accessibility, and Florus attribution requirements. For layout work, retain useful labels, expressive headings, introductions, and card summaries at readable sizes.
- For each new article or substantial rewrite, complete [an editorial review record](docs/editorial-review-template.md), stored at `docs/editorial-reviews/<slug>.md`. Record actual evidence, fixes, and unresolved issues; do not mark unperformed reviews as passed. Fix failed editorial criteria before presenting the article as ready. This is a review requirement, not an automated quality guarantee.
- Capture durable user feedback in the harness, with a concrete example when useful. Do not rely on chat history as the only record. Keep planning notes and review records out of public article copy.

## Code Review Rules

For editorial changes, check the applicable harness criteria and review record. Flag unsupported hooks, conclusions that introduce an unearned thesis, missing visual explanations or attribution, and removal of useful editorial context. A successful build does not establish writing quality.

For application changes, run focused checks and report what ran or was skipped. Use the versions and commands in `package.json` and the README; documentation-only changes do not require an application build.
