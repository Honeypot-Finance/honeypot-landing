# Honeypot editorial writing harness

## Purpose and provenance

This revision applies the actual Launchvibes repository writing instructions through Codex, rather than using its public marketing pages as a loose style reference. It does not call Launchvibes’s hosted generation service or claim a scored experiment.

Reference package read: `launchvibes-creator-writing/SKILL.md`, its article brief, hook adaptation, title patterns, and creator article checklist; `platforms/seoBlogRegistry.ts`, `platforms/hookRegistry.ts`, and the Medium/LinkedIn writing guidance. Andy’s research → differentiated angle → evidence → draft → review sequence informs the editorial pass. The Launchvibes repository is a read-only reference; Honeypot retains its own routes, content model, artwork, and Git workflow.

Voice reference: the owner’s [original Honeypot manifesto](https://x.com/honeypotfinance/status/2090244292015190460). User feedback applies to **every article**, especially missing structure, authorial taste, and an ending that develops the argument into a larger insight.

## Voice packet

- **Position:** a team that has built Web3 products, is opening that accumulated work to other founders, and wants useful AI and Web3 ideas to reach people who can use them.
- **Audience:** curious founders, builders, and readers who want a reasoned view of what changes, not a glossary of product features.
- **Judgment:** identify the scarce resource or design choice behind the announcement; connect the mechanism to a consequence for people and institutions.
- **Cadence:** connected explanatory paragraphs, varied sentence lengths, occasional short sentences at a genuine turn in the argument. Avoid a sequence of isolated slogans or repeatedly asking the reader to “imagine” a generic task.
- **Owned voice:** the manifesto can use “we” for the intentions and history in the original. Other pieces can state Honeypot’s interpretation without inventing product testing, customers, investment outcomes, or personal experiences.
- **Evidence:** preserve source scope, dates, methodological limits, and distinctions between released behavior, proposals, and roadmap items. Put a qualification beside the claim it qualifies, then continue the argument. Do not turn each paragraph into a disclaimer.
- **Boundaries:** no borrowed personal stories, inflated metrics, unsupported inevitability, clickbait, canned opposition formulas, or a final list posing as a conclusion. Do not manufacture a second thesis merely to sound profound.
- **Visuals:** keep the five anime covers and existing concept diagrams. The diagram should arrive where the reader needs the mechanism; it is not a substitute for explaining why that mechanism matters.

## Per-article briefs

### Honeypot manifesto

- Audience/query: founders and the existing community asking what the new Honeypot is building.
- Type: founder POV essay. Mention intensity: Direct.
- SEO hook: **Timely Impact Lead**. Canonical: **Timely Shift**; supporting modifier: **Transparent Evolution**.
- Title candidates: “Honeypot’s next chapter: make innovation travel”; “Building the attention network for the AGI era”; “The next era of Honeypot starts with what we already built.”
- Opening move: the bear market creates a choice about the next decade; state the two missions and their shared bottleneck.
- Argument: operator experience → technology trapped with one operator or unseen → licensing makes work reusable → discovery makes work understandable → AI and blockchain solve different parts → community participation → the same mission at two scales.
- Preserve: licensing scope/maturity, Play402, Florus and Launchvibes, the Netflix discovery analogy as a thesis, Pottards/HoneyGenesis participation, AGI as ambition, and no promised financial result. Historical announcements must not be promoted to completed launches.
- Closing payoff: show why licensing and media belong in the same business. Progress depends on accumulated work reaching its next builder and next user; the community can help that happen. Return to the original decision about the next decade.
- Visual: `manifesto-anime.png` + attention network diagram.

### Muse

- Audience/query: founders and users evaluating personal AI delegation.
- Type: timely analysis. Mention intensity: Ambient.
- SEO hook: **Timely Impact Lead**. Canonical: **Timely Shift**.
- Title candidates: “Muse and the real cost of delegating to AI”; “Muse puts permission at the center of personal AI”; “What a personal agent must know before it acts.”
- Opening move: an agent promises to return time to its owner, but every unclear approval can return the work too. Ground the question immediately in Meta’s published Muse design.
- Argument: a concrete delegated task → proposed architecture → meaningful approval → memory/privacy and current limits → evaluate recovered attention and decision quality → larger consequence for delegation.
- Preserve: official launch/date, dedicated browser/VM, Sentinel and substitute credentials, Secure VM versus planned Confidential VM, rollout limits, no invented hands-on test.
- Closing payoff: intelligence alone cannot establish a useful division of responsibility. Personal agents earn adoption by taking over effort while preserving the human’s ability to direct consequential decisions. Resolve the opening tension about whose attention the product consumes.
- Visual: `muse-anime.png` + permission flow.

### ERC-8004

- Audience/query: builders asking what agent identity and reputation contracts make possible.
- Type: mechanism analysis. Mention intensity: Ambient.
- SEO hook: **Framework Comparison Lead**. Canonical: **Reader Categorization** and **Authority Through Specificity**, adapted to distinguish the application’s questions rather than rank readers.
- Title candidates: “ERC-8004 and the missing memory of the agent economy”; “What an agent needs to know about a stranger”; “The records an open agent market needs.”
- Opening move: discovery, evidence, and authority are separate questions in one transaction; use the unknown supplier to make the distinction tangible.
- Argument: coordination across unfamiliar agents → persistent identity → reputation and evolving validation → application judgment → permission/payment separation → a market that can carry history beyond one platform.
- Preserve: Draft status as checked September 27; deployed Identity/Reputation versus evolving Validation; manipulated feedback risk; payment out of scope; spend permissions and x402 are independent examples.
- Closing payoff: portable evidence can let useful work build a history across applications, including for new entrants, while keeping the evaluator responsible for its judgment. Explain the coordination opportunity without claiming a trust guarantee.
- Visual: `contracts-anime.png` + trust signals diagram.

### Jev

- Audience/query: builders deciding where a decision model belongs in an AI workflow.
- Type: evidence-led technical analysis. Mention intensity: Ambient.
- SEO hook: **Research Findings Lead**. Canonical: **Proof-Led Claim** and **Authority Through Specificity**.
- Title candidates: “Jev and the cost of asking a small question”; “What Jev’s benchmark says about AI workflow design”; “The case for giving a model a smaller job.”
- Opening move: the vendor’s large speed/cost multiples draw attention; the architectural question is how much work the application asks a model to perform for a bounded decision. Qualify the benchmark at first use.
- Argument: evidence and evaluation limits → ticket example/output shape → typed judgment versus exact code → probability/fallback and orchestration → meaningful experiment → computation allocated to the decision it serves.
- Preserve: 193.6× / 444.6× are vendor-reported upper-end workflow comparisons; LangChain’s 500 judgments cover only five distinct traces; probability does not prove correctness; Noul versus Choice/Score differences; documented model limitations.
- Closing payoff: defining a bounded decision gives the team a stable interface and evaluation criteria that can survive a model change. The accumulated understanding of the job, its errors, and its acceptable outcomes becomes part of the engineering asset. Return to the ticket example without repeating a checklist.
- Visual: `jev-anime.png` + branching workflow.

### Credits

- Audience/query: builders and technically curious readers understanding NFT assembly and token lifecycle.
- Type: technical/art mechanism essay. Mention intensity: Ambient.
- SEO hook: **Misconception Correction Lead**. Canonical: **Contrarian Data Correction** and **Authority Through Specificity**.
- Title candidates: “Credits: what survives when 80 NFTs become one?”; “The ownership hidden inside an NFT assembly”; “Jack Butcher’s Credits and the meaning of a burn.”
- Opening move: the 80-to-1 artistic gesture appears to reduce many objects to one; follow the source tokens to determine what the implementation actually changes.
- Argument: original art recipe → offchain eligibility/onchain ownership → tutorial custody versus actual burn → atomic transaction and callback limits → tests that preserve the intended promise → artistic interpretation built on legible ownership rules.
- Preserve: official original allocation, arithmetic as ceiling, October 1 schedule as checked September 27, tutorial not production code, OpenZeppelin mechanics, callback/revert details. No market-value prediction.
- Closing payoff: an artwork can invite many interpretations; the mechanism should leave the participant’s rights and the original objects’ fate inspectable. Connect creative composition to provenance and a credible ownership promise, rather than finishing with “test carefully.”
- Visual: `credits-anime.png` + custody/burn assembly diagram.

## Draft and review loop

1. Read the brief, original/reference material, and available primary evidence.
2. Choose the opening and write a one-sentence thesis before drafting. Preserve existing factual sourcing; verify any new factual claim.
3. Draft 4–7 sections that move the argument forward. Let length follow the argument; do not inflate a paragraph to meet a word count.
4. Write the ending from the article’s demonstrated mechanism: return to the opening → name what the evidence changes → develop a specific larger consequence → finish on the reader’s new understanding.
5. Review separately for evidence and editorial quality. Reject an ending if it could be pasted into another article, simply restates a checklist, or introduces unsupported predictions.
6. Review the opening and ending together. The ending must answer the tension the opening created, and every intervening section must earn a step in that answer.
7. Check all five as a portfolio: distinct lead, concrete example, thesis, and closing insight. Avoid five variations of the same “human control” sermon.
8. Verify routes, source IDs, references, read times, diagrams, existing category assignments, desktop/mobile reading, and build. Keep planning labels out of public article copy.

## Review record

The actual Launchvibes registry resolver was executed for all five briefs; every selected article hook resolved to the canonical mapping above. The Codex writing agent drafted the full portfolio, a separate reviewer examined prose and conclusions, and an evidence reviewer checked factual scope. The source review found no blocking factual defects.

The editorial pass specifically rewrote the Muse and Jev endings a second time. Muse now resolves the cost of interruption into the ability to stop mentally carrying the task. Jev develops the bounded decision into an evaluation boundary that can survive a model change. Repeated setup paragraphs were cut, and the manifesto’s founder conviction was restored without presenting a future thesis as an established fact.

| Final title | Closing consequence |
| --- | --- |
| Honeypot’s next chapter: make innovation travel | Licensing and discovery give accumulated work a next builder and a next user. |
| Muse has to earn the interruption | Delegation works when the owner can put down the task and return for a meaningful choice. |
| ERC-8004 and the missing memory of the agent economy | Portable evidence can accumulate commercial history without requiring one universal verdict. |
| Jev: build the decision before choosing the model | A stable definition of the job preserves engineering knowledge as models change. |
| Credits: what survives when 80 NFTs become one? | Creative interpretation can stay open while ownership and provenance remain inspectable. |

Independent editorial review passed the opening/ending and cross-article swap checks. Stable slugs, categories, dates, illustrations, source URLs, prior section anchors, and related-story links were retained.

The production build passed, including lint and type checking; existing legacy warnings remain. All five production article pages were checked at 1440px and 390px: correct titles and categories, no horizontal overflow, and all illustrations loaded. The Jev reference link reached its matching bibliography entry, the manifesto's first Launchvibes mention linked to the product, and the repeated upfront takeaway was absent. Screenshots of the manifesto introduction, Jev desktop ending, and Muse mobile ending were visually reviewed. The follow-up PR records these checks.
