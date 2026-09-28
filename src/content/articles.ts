export type ArticleSection = "AI" | "Web3" | "Technical Education";

export type Article = {
  slug: string;
  section: ArticleSection;
  eyebrow: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  hook: string;
  takeaway: string;
  visual: "manifesto" | "jev" | "muse" | "contracts" | "credits";
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    diagram?: "attention" | "decisions" | "permissions" | "trust" | "assembly";
    sourceIds?: string[];
  }[];
  sources: { id: string; label: string; url: string; note?: string }[];
  relatedSlugs: string[];
};

// Original English editorial editions. Sources are linked beside the relevant
// sections; diagrams explain concepts rather than presenting measured results.
export const articles: Article[] = [
  {
    slug: "attention-network-for-the-agi-era",
    section: "AI",
    eyebrow: "THE HONEYPOT MANIFESTO",
    title: "The next breakthrough needs an audience.",
    description: "Honeypot’s next chapter: AI and Web3 media, practical education, and technology that more founders can build on.",
    readTime: "4 min read",
    date: "2026-09-27",
    hook: "Somewhere, a founder has built something that could change your working day. You will probably never hear about it. We want to fix that.",
    takeaway: "Our job is to shorten the distance between a useful invention and the people who can do something with it.",
    visual: "manifesto",
    sections: [
      {
        id: "the-next-chapter",
        title: "A new chapter for Honeypot",
        paragraphs: [
          "Honeypot began by building and operating Web3 products. Those years left us with working technology, research, hard lessons, and a community that helped shape all three. They also left us with a question: how could that experience become useful to more people?",
          "Our answer has two parts. We are building an AI-native media and discovery network, and we are opening selected technologies we have built or acquired to licensing partners. One helps people understand what is being built. The other gives capable teams a stronger place to start building.",
          "This is the English editorial edition of the direction we shared in our August 19 manifesto. The ambition is long term; individual products, partnerships, and licensing arrangements will develop at their own pace.",
        ],
        sourceIds: ["manifesto"],
      },
      {
        id: "attention-with-accountability",
        title: "Discovery deserves better infrastructure",
        paragraphs: [
          "Imagine encountering the same research as a developer, a founder, and someone exploring AI for the first time. Each person needs a different explanation. The developer wants the mechanism. The founder wants the practical consequence. The newcomer needs a clear first step.",
          "A useful discovery network can connect those experiences to the same underlying evidence. Our intended editorial loop is simple: find promising work, check what actually exists, explain why it matters, and bring that explanation to the people who need it. Readers should be able to follow the evidence back to its source.",
          "Florus and Launchvibes form part of the technology behind that ambition. AI can help us research, adapt, and distribute stories across formats and languages. People remain responsible for the claims, context, and decision to publish. More output only matters when it creates more understanding.",
        ],
        diagram: "attention",
        sourceIds: ["manifesto", "launchvibes"],
      },
      {
        id: "three-ways-in",
        title: "Three doors into the same future",
        paragraphs: [
          "Our publication has three distinct sections. AI follows models, agents, tools, and the people building them. Web3 examines the systems for ownership, coordination, verification, and settlement. Technical Education slows things down and explains the mechanics, with diagrams and practical ways to evaluate a new idea.",
          "The connections between those subjects are worth investigating. An agent can interpret an ambiguous request; a contract can enforce a specific rule. The difficult questions live at their boundary: who authorized an action, which evidence supports it, and what happens when the reasoning is wrong? We want coverage that makes those questions easier to ask.",
          "AGI is the horizon in our original vision, rather than a claim that today’s products already possess general intelligence. Our immediate work is concrete: help readers distinguish a useful capability from a compelling demo.",
        ],
      },
      {
        id: "license-the-head-start",
        title: "Give the next founder a head start",
        paragraphs: [
          "Our technology portfolio spans token-launch mechanisms, liquidity integrations, NFT sale designs, community incentives, and research into trading infrastructure. Play402 adds another programmable onchain mechanism to that history. These assets have different levels of maturity: deployed contracts, third-party integrations, and research should be assessed on their own terms.",
          "Licensing starts with a conversation about the problem a team is solving. We can then discuss what exists, what further work it needs, and which rights and responsibilities belong in an agreement. Operators remain responsible for their implementation, security, compliance, and user experience.",
          "The aim is practical: give founders more time for the parts of a product only they can build, while making the eventual experience simpler for their users.",
        ],
        sourceIds: ["manifesto"],
      },
      {
        id: "the-hive-continues",
        title: "The community is part of the work",
        paragraphs: [
          "Pottards, HoneyGenesis holders, and our early community have a place in this chapter. Introductions to thoughtful builders, feedback on coverage, and ideas for responsible participation all help shape the network. Specific mechanisms for sharing future value are still to be designed; there is no promised financial outcome.",
          "The existing leaderboard, documentation, all-in-one vault, and NFT staking remain easy to find through Legacy apps. Alongside them, a new home is taking shape for people who want to understand what comes next—and help useful ideas reach further.",
        ],
        sourceIds: ["manifesto"],
      },
    ],
    sources: [
      { id: "manifesto", label: "Honeypot Finance — the original English manifesto", url: "https://x.com/honeypotfinance/status/2090244292015190460", note: "Published August 19, 2026. This native edition adapts our announcement for the new publication." },
      { id: "launchvibes", label: "Launchvibes — creator and distribution workflow", url: "https://www.launchvibes.tech/for-creators", note: "Background on the content and distribution tooling referenced in our vision." },
    ],
    relatedSlugs: ["muse-ai-from-chat-to-action", "erc-8004-agent-trust"],
  },
  {
    slug: "muse-ai-from-chat-to-action",
    section: "AI",
    eyebrow: "PERSONAL AGENTS / FIELD NOTES",
    title: "Muse wants to do the work. Who holds the controls?",
    description: "Meta’s personal agent brings AI into everyday tasks. Its most revealing feature may be the permission boundary.",
    readTime: "4 min read",
    date: "2026-09-27",
    hook: "An assistant that drafts a message saves you a minute. An assistant that sends it has crossed a boundary. Muse puts that boundary at the center of everyday AI.",
    takeaway: "Judge a personal agent by the work it completes—and by how clearly you can authorize, inspect, and stop that work.",
    visual: "muse",
    sections: [
      {
        id: "from-request-to-result",
        title: "The task continues after the chat",
        paragraphs: [
          "Imagine asking an assistant to prepare a weekend trip. The useful result is a workable plan, a shortlist that fits your constraints, and help completing the steps you approve. Each step requires the system to carry context forward and interact with something outside the conversation.",
          "Meta introduced Muse on September 8 as a personal agent for tasks and longer-running goals, with a US rollout across mobile and web. The company describes a dedicated virtual computer with its own browser, connections to everyday services, and conversations through the Muse app or WhatsApp. These are Meta’s product claims; this article is a reading of the published design, rather than a hands-on performance review.",
          "The interesting shift is how responsibility changes when a product can keep working. A helpful suggestion can be ignored. An action needs a clear owner, a defined scope, and a record that someone can check.",
        ],
        sourceIds: ["muse-launch"],
      },
      {
        id: "the-permission-boundary",
        title: "Permission becomes part of the interface",
        paragraphs: [
          "Meta’s technical explanation describes a separate component called Sentinel. It checks connector actions and network traffic against policy. The working agent receives substitute credentials; real secrets are supplied at the network boundary. The design separates proposing an action from having the authority to execute it.",
          "Meta also describes approval for sensitive actions, controls over connected services, and an activity history. That creates a useful lens for evaluating the product: can a person understand the proposed action before approving it, and reconstruct what happened afterward?",
          "The diagram below summarizes Meta’s published architecture. It is a conceptual map of the checks, not a claim that every action always follows one rigid sequence or that the system cannot make mistakes.",
        ],
        diagram: "permissions",
        sourceIds: ["muse-safety", "muse-design"],
      },
      {
        id: "a-practical-test",
        title: "A better test than a spectacular demo",
        paragraphs: [
          "For a trip-planning example, start with a reversible research task. Ask for options and inspect how the agent handles a missing date, a conflicting price, or a website it cannot access. Those ordinary failures reveal more about a workflow than a perfectly staged booking.",
          "Then examine the moment of commitment. The person approving a purchase needs the destination, total price, relevant conditions, and payment scope in one understandable view. A vague request for permission pushes the reasoning burden back onto the user.",
          "Our evaluation checklist is deliberately practical:",
        ],
        bullets: [
          "Scope: can you see which services the agent can read or change?",
          "Approval: does the request explain the concrete action and its consequence?",
          "Evidence: can you inspect the sources and the activity record?",
          "Control: can you stop ongoing work, disconnect a service, and edit remembered information?",
        ],
      },
      {
        id: "what-the-announcement-does-not-settle",
        title: "Keep the privacy promises precise",
        paragraphs: [
          "A dedicated VM is useful isolation, but the current Secure VM should not be confused with the planned Confidential VM. Meta’s safety explanation says the current service does not cryptographically prevent Meta from accessing data when necessary to operate it. Confidential VM was described as coming later in 2026. The same explanation acknowledges that errors and attacks remain possible.",
          "The September Connect announcements also broadened the roadmap, including additional connectors and payment integrations. Glasses support was still described as arriving in the coming months. A launch announcement, a limited rollout, and a feature available to a particular account are different things; availability should be checked in the product.",
        ],
        sourceIds: ["muse-safety", "muse-connect"],
      },
      {
        id: "why-this-matters",
        title: "The controls are part of the capability",
        paragraphs: [
          "Our reading of Muse is that the interface for personal AI is expanding: goals, permissions, memory, and activity history now matter alongside the conversation. The ability to keep working creates value only when the person delegating the work can understand the arrangement.",
          "That is a useful standard for every agent builder. Make progress visible. Make authority specific. Make the next irreversible step easy to recognize. An assistant earns a larger role one understandable action at a time.",
        ],
      },
    ],
    sources: [
      { id: "muse-launch", label: "Meta — Introducing Muse", url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/", note: "September 8, 2026. Product capabilities and rollout described by Meta." },
      { id: "muse-safety", label: "Meta AI Research — security and safety for Muse", url: "https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse", note: "Published architecture, credential handling, limitations, and the distinction between Secure and Confidential VM." },
      { id: "muse-design", label: "Muse — product design and controls", url: "https://introducing.muse.ai/", note: "The product team’s explanation of goals, approvals, activity, and memory." },
      { id: "muse-connect", label: "Meta — the biggest news from Connect 2026", url: "https://about.fb.com/news/2026/09/the-biggest-news-from-connect-2026/", note: "September 24, 2026. Announcements include features still being rolled out or planned." },
    ],
    relatedSlugs: ["jev-decision-models", "erc-8004-agent-trust"],
  },
  {
    slug: "erc-8004-agent-trust",
    section: "Web3",
    eyebrow: "SMART CONTRACTS / AGENT ECONOMY",
    title: "Your agent found a stranger. Should it trust them?",
    description: "ERC-8004 gives agents discoverable identities and shared trust signals. Here is what the contracts can—and cannot—tell you.",
    readTime: "4 min read",
    date: "2026-09-27",
    hook: "Your research agent finds another agent selling the answer it needs. Before it pays, what does it actually know about the stranger?",
    takeaway: "Agent identity, evidence of useful work, permission to spend, and payment settlement are separate checks. A reliable product makes each one explicit.",
    visual: "contracts",
    sections: [
      {
        id: "a-marketplace-needs-memory",
        title: "A marketplace needs a way to remember",
        paragraphs: [
          "Picture a research assistant buying a specialized dataset from a service it has never used. A friendly description tells it very little. It needs a stable identity to inspect, evidence from previous interactions, and a way to judge the current result. It also needs a separate answer to a much more personal question: who gave it permission to spend?",
          "ERC-8004 proposes shared onchain infrastructure for the discovery and trust part of that encounter. The specification is still marked Draft as of September 27, 2026. The team’s implementation repository lists deployed Identity and Reputation registries, while the Validation Registry design remains under active discussion. A deployed implementation and a finalized standard are different milestones.",
        ],
        sourceIds: ["erc-spec", "erc-implementation"],
      },
      {
        id: "three-different-signals",
        title: "Three signals, three different questions",
        paragraphs: [
          "The identity registry uses an ERC-721 identifier associated with an agent registration file. It gives applications a handle for discovering an agent and its advertised services. A reputation registry records feedback. The validation design provides a way to request and record assessments from validators.",
          "These signals answer different questions: which agent is this, what feedback exists, and what did a particular checker say about a task? An identity record cannot establish that every advertised capability works. Feedback can be manipulated, and a validator’s verdict depends on the validator and its method.",
          "The diagram is an illustrative application design. The app decides which evidence it needs and when to reject a request or ask a person to review it. The validation layer is shown as evolving because its implementation design is still being updated.",
        ],
        diagram: "trust",
        sourceIds: ["erc-spec", "erc-implementation"],
      },
      {
        id: "give-evidence-a-job",
        title: "Give every signal a specific job",
        paragraphs: [
          "For our hypothetical dataset purchase, identity helps the assistant find the same supplier again. Feedback gives it leads to investigate. A task-specific check might compare a sample against known data or test whether the delivered file meets an agreed format. None of those checks establishes that every row is true.",
          "The application can make that uncertainty manageable. It might permit a small trial, require review for a larger purchase, or reject results whose provenance is unclear. Those are product policies chosen for the task. They are not conclusions automatically produced by writing a record to a blockchain.",
          "This is where the smart-contract design becomes interesting: a common record format allows different applications to apply their own standards to the same evidence. The hard work of deciding which evidence matters remains visible.",
        ],
      },
      {
        id: "permission-and-payment",
        title: "A reputation score cannot authorize a payment",
        paragraphs: [
          "Payments sit outside ERC-8004’s scope. Its agentWallet binding concerns an address controlled by the agent; that does not authorize it to spend someone else’s assets. Spending authority needs its own mechanism and rules.",
          "Coinbase’s Spend Permissions contracts illustrate a separate authorization design: an owner can grant a token allowance with defined conditions, and revoke that permission. That is one implementation example, not a component supplied by ERC-8004.",
          "A payment protocol such as x402 addresses another boundary: how a service requests payment over HTTP and how that payment is verified and settled. Successful settlement tells you something about payment, not whether the purchased research is accurate. An application must connect these layers deliberately.",
        ],
        sourceIds: ["erc-spec", "spend-permissions", "x402"],
      },
      {
        id: "the-builder-checklist",
        title: "Build around the failure case",
        paragraphs: [
          "An open agent marketplace will contain incomplete profiles, thin feedback histories, conflicting assessments, and failed tasks. A useful integration begins by deciding what the app does in each of those cases.",
          "For builders, the opportunity is a product that can explain its decision: the identity it found, the evidence it considered, the permission it used, and the result it received. Shared registries can make that explanation portable. Careful application design makes it meaningful.",
        ],
        bullets: [
          "Check the exact registry deployment and specification version your app uses.",
          "Choose evidence appropriate to the task and the value at risk.",
          "Keep spending scope and revocation separate from reputation.",
          "Provide a reject or review path when the evidence is insufficient.",
        ],
      },
    ],
    sources: [
      { id: "erc-spec", label: "ERC-8004 — official draft specification", url: "https://eips.ethereum.org/EIPS/eip-8004", note: "Identity, reputation, validation, security considerations, and payment scope. Status checked September 27, 2026." },
      { id: "erc-implementation", label: "ERC-8004 — reference contract repository", url: "https://github.com/erc-8004/erc-8004-contracts", note: "Deployment information and the notice that the Validation Registry design is under active discussion." },
      { id: "spend-permissions", label: "Coinbase — Spend Permissions contracts", url: "https://github.com/coinbase/spend-permissions", note: "An independent example of constrained, revocable spending authority." },
      { id: "x402", label: "x402 — payment protocol introduction", url: "https://docs.x402.org/introduction", note: "The HTTP payment flow is a separate concern from agent reputation and output quality." },
    ],
    relatedSlugs: ["muse-ai-from-chat-to-action", "jev-decision-models"],
  },
  {
    slug: "jev-decision-models",
    section: "Technical Education",
    eyebrow: "BUILDERS’ NOTEBOOK / DECISION MODELS",
    title: "Jev: the small decision inside the big AI workflow.",
    description: "A typed answer, a probability, and a branch in your code. A practical look at TypeSafe’s decision model and the benchmarks behind the headlines.",
    readTime: "4 min read",
    date: "2026-09-27",
    hook: "A support ticket arrives. Your workflow needs to choose a queue. How much intelligence should that one decision cost?",
    takeaway: "Use bounded model judgments where they help, keep the workflow inspectable, and measure the complete system on your own cases.",
    visual: "jev",
    sections: [
      {
        id: "a-smaller-interface",
        title: "Start with the shape of the answer",
        paragraphs: [
          "Consider an inbox with three destinations: billing, technical support, and account access. The input is messy human language. The output is a small choice that ordinary software can act on. This is the kind of boundary TypeSafe’s Jev is designed to handle.",
          "TypeSafe introduced Jev on September 15 as a decision model. Its interface includes Choice for defined options, Score for an ordered rubric, and Noul for a yes/no proposition. Results carry probabilities; Choice and Score also expose confidence. Multiple questions can share the same input context.",
          "That gives a builder a concrete division of labor. The model judges meaning. Code handles routing, arithmetic, thresholds, and permitted actions. A generative model can still write a response when the workflow reaches a step that needs one.",
        ],
        sourceIds: ["jev-launch", "jev-intro", "jev-confidence"],
      },
      {
        id: "draw-the-boundaries",
        title: "Make the decision a visible step",
        paragraphs: [
          "The useful unit is a question with a defined consequence. For an incoming ticket, first establish what evidence the classifier can see. Then decide which outcomes your code accepts and what happens when the result is uncertain. Keep that fallback visible in the graph.",
          "LangGraph provides state, nodes, and edges for organizing these steps, with persistence and interruptions for human review. A node can call Jev, run ordinary code, or invoke another model. The graph’s structure makes it possible to inspect where a decision sent the task.",
          "The workflow below is illustrative. Its thresholds must be evaluated on representative inputs; a high probability is not a guarantee that the selected answer is correct. The human-review branch is a deliberate part of the design.",
        ],
        diagram: "decisions",
        sourceIds: ["langgraph", "jev-confidence"],
      },
      {
        id: "read-the-benchmark",
        title: "Read the small print behind the big numbers",
        paragraphs: [
          "The Chinese article that prompted this explainer leads with roughly 200× faster and 400× cheaper decisions. TypeSafe’s launch post reports 193.6× and 444.6× in its own workflow evaluations. The company describes those results as toward the upper end of expected real-world gains. They are vendor-reported comparisons under particular conditions, not a speed guarantee for your application.",
          "The setup matters. TypeSafe designed the evaluation workflows, used model-generated reference judgments, and asked the comparison LLM wrapper for probability outputs. Those choices affect both the work being measured and its cost.",
          "LangChain ran a separate evaluator experiment: five fixed weather-agent traces, each repeated 100 times. Jev’s repeated binary judgments agreed with its human oracle in that sample, and its quality scores varied less than the comparison models. Five hundred repeated judgments still cover only five distinct traces. Consistency and correctness need separate tests.",
        ],
        sourceIds: ["jev-launch", "langchain-evals", "jev-reading"],
      },
      {
        id: "test-your-own-branch",
        title: "Try a small, measurable experiment",
        paragraphs: [
          "Choose one existing classification step and collect cases that resemble real traffic, including ambiguous and difficult examples. Agree on expected outcomes before comparing models. Measure the whole route: model call, fallback, retries, and review time.",
          "A faster first decision can still create more work downstream. For the support inbox, a useful measure is how often a ticket reaches the correct team without a costly detour. The economic question is cost per acceptable result, with the same quality threshold applied to both implementations.",
        ],
        bullets: [
          "Define the allowed outputs and their consequences before choosing the model.",
          "Test ordinary, ambiguous, adversarial, and out-of-scope inputs.",
          "Tune escalation rules against labeled examples; inspect costly mistakes separately.",
          "Track latency, total cost, accuracy, and fallback rate together.",
        ],
      },
      {
        id: "the-useful-limit",
        title: "Structured output still needs judgment",
        paragraphs: [
          "TypeSafe’s Jev 1.13 notes list limitations involving arithmetic, dates, indirect questions, irrelevant context, and adversarial inputs. Returning a valid shape does not establish that its contents are right. Exact calculations should remain in code; decisions with serious consequences need appropriate checks.",
          "The broader lesson is an architectural one. A workflow becomes easier to reason about when each model call has a small, testable job and every escalation is explicit. Jev is an interesting way to explore that design. Your own data determines whether it earns a place in the system.",
        ],
        sourceIds: ["jev-limitations"],
      },
    ],
    sources: [
      { id: "jev-reading", label: "LearnBlockchain — the Jev article that started this explainer", url: "https://learnblockchain.cn/article/28737", note: "September 27, 2026. This is an original English explainer informed by the linked article and the primary sources below." },
      { id: "jev-launch", label: "TypeSafe — introducing System One models and Jev", url: "https://typesafe.ai/blog/introducing-system-one-models-and-jev", note: "September 15, 2026. Vendor-reported benchmark methodology and qualifications." },
      { id: "jev-intro", label: "TypeSafe — decision-model introduction", url: "https://docs.typesafe.ai/introduction", note: "Typed questions, shared context, and model outputs." },
      { id: "jev-confidence", label: "TypeSafe — probabilities and confidence", url: "https://docs.typesafe.ai/confidence", note: "Choice and Score expose confidence; Noul returns a probability without a separate confidence field." },
      { id: "langgraph", label: "LangChain — LangGraph overview", url: "https://docs.langchain.com/oss/python/langgraph/overview", note: "Stateful orchestration, persistence, and human review." },
      { id: "langchain-evals", label: "LangChain — Jev for agent evaluations", url: "https://www.langchain.com/blog/jev-agent-evals-langsmith", note: "September 20, 2026. Five fixed traces repeated 100 times; the limited sample matters." },
      { id: "jev-limitations", label: "TypeSafe — Jev 1.13 model limitations", url: "https://docs.typesafe.ai/model-jaggedness/jev-1.13", note: "Documented weaknesses and cautions when applying the model." },
    ],
    relatedSlugs: ["muse-ai-from-chat-to-action", "erc-8004-agent-trust"],
  },
  {
    slug: "credits-nft-burn-vs-lock",
    section: "Technical Education",
    eyebrow: "BUILDERS’ NOTEBOOK / NFT MECHANICS",
    title: "80 NFTs in. One out. What did the contract really do?",
    description: "Jack Butcher’s Credits opens a useful engineering lesson: follow the ownership, distinguish a lock from a burn, and test the entire transaction.",
    readTime: "5 min read",
    date: "2026-09-27",
    hook: "Eighty collectibles go in. One artwork comes out. Before calling that a burn, ask a smaller question: who owns the eighty tokens now?",
    takeaway: "Read the ownership changes, external calls, and failure paths. A mechanism’s name cannot tell you what its contract actually guarantees.",
    visual: "credits",
    sections: [
      {
        id: "a-receipt-becomes-art",
        title: "A payment receipt becomes a creative seed",
        paragraphs: [
          "Jack Butcher’s Credits connects an ordinary payment to generative art. The project’s official description associates each eligible $8 X Money payment with a Credit. Its transaction ID is hashed with SHA-256; the resulting bits define four 8 × 8 grids for cyan, magenta, yellow, and black. The payment timestamp determines which layers appear.",
          "The project also describes combining 80 Credits into one Statement. Its original allocation lists 122,154 Credits: enough for at most 1,526 complete groups, with 74 left over. That arithmetic describes a ceiling, not participation or value. As of September 27, the official page schedules Statement assembly for October 1 at 8 p.m. ET.",
          "A Chinese technical walkthrough uses this idea to teach NFT assembly. We will examine the mechanics of that educational example. Its sample Solidity contract is not evidence of how the artist’s deployed contracts work.",
        ],
        sourceIds: ["credits-project", "credits-allocation", "credits-reading"],
      },
      {
        id: "two-different-boundaries",
        title: "Deterministic art does not remove the delivery step",
        paragraphs: [
          "A reproducible image recipe answers one question: what artwork follows from these inputs? It does not establish whether a payment qualifies, which wallet should receive the NFT, or whether delivery happened. Those remain separate operational responsibilities.",
          "For a builder, draw that boundary before writing the minting function. A payment service can supply a receipt; an application can verify eligibility and associate a wallet; a contract can record ownership. Duplicate receipts, incorrect wallet associations, and failed deliveries each need their own handling. An onchain revert cannot undo an earlier payment through a different system.",
        ],
        sourceIds: ["credits-project", "solidity-revert"],
      },
      {
        id: "follow-the-eighty-tokens",
        title: "A locked token still has an owner",
        paragraphs: [
          "The walkthrough’s assembly loop checks each input’s owner and calls transferFrom to move it into the assembler contract. Those tokens remain ERC-721 tokens, now owned by the assembler. Whether they can ever leave depends on that contract’s available methods and upgrade powers. A transfer into custody is not a burn.",
          "OpenZeppelin 5’s transferFrom rejects a zero-address recipient. Its internal _update function supports minting, transfer, and burning; _burn uses the burning path. A separate assembler cannot simply call another contract’s internal _burn. The original NFT contract must expose an authorized mechanism, such as an appropriate burn function, if destruction is the intended behavior.",
          "This distinction matters for supply reporting and future integrations. A marketplace, indexer, or lending protocol may treat an existing token differently from one whose ownership has been destroyed. Explain the actual lifecycle before describing the mechanism as deflationary.",
        ],
        diagram: "assembly",
        sourceIds: ["credits-reading", "oz-erc721", "oz-burnable"],
      },
      {
        id: "one-transaction-many-calls",
        title: "Make the whole operation succeed—or roll back",
        paragraphs: [
          "In the sample, one transaction checks the required quantity and supply cap, transfers the inputs, updates the counter, and mints the result. If a transfer or receiver check fails and that failure propagates out of the transaction, earlier state changes in that transaction revert too. Error-catching code can change that behavior, so inspect the complete call path.",
          "The last step still deserves attention. _safeMint can call onERC721Received on a contract recipient, giving external code control before the transaction finishes. Update the relevant accounting before that handoff and review every reachable entry point. ReentrancyGuard helps protect guarded functions; the word ‘safe’ in _safeMint does not make arbitrary callback interactions harmless.",
        ],
        sourceIds: ["credits-reading", "oz-erc721", "oz-receiver", "solidity-revert"],
      },
      {
        id: "test-the-unhappy-path",
        title: "The useful tests are the inconvenient ones",
        paragraphs: [
          "A successful 80-to-1 example proves very little about failure behavior. Build a test matrix around ownership and accounting invariants, then verify that rejected operations leave both collections unchanged. Include contract recipients rather than testing only ordinary wallets.",
        ],
        bullets: [
          "Try 79 and 81 inputs, repeated token IDs, and a batch containing someone else’s token.",
          "Remove an approval or reach the supply cap; verify no partial transfer survives a revert.",
          "Use a receiver that rejects the NFT and one that attempts to reenter during its callback.",
          "For custody, assert the assembler owns every input. For a true burn, assert the input tokens no longer exist.",
        ],
        sourceIds: ["oz-erc721", "oz-receiver", "solidity-revert"],
      },
      {
        id: "read-the-mechanism",
        title: "Let the implementation finish the story",
        paragraphs: [
          "The art makes the mechanism memorable. The engineering work is to turn its promise into explicit rules: who can contribute, what happens to each input, how the output is counted, and where control can escape. Pin the compiler and library versions you test, and choose an EVM target supported by your deployment chain.",
          "When the next project promises to turn many things into one, start with ownership. Then trace the callbacks and the rollback boundary. Those three observations reveal more than a dramatic name ever will.",
        ],
      },
    ],
    sources: [
      { id: "credits-reading", label: "LearnBlockchain — the Credits assembly walkthrough", url: "https://learnblockchain.cn/article/28746", note: "September 27, 2026. Inspiration for this original English lesson. We distinguish the educational custody example from a true burn and from the artist’s production implementation." },
      { id: "credits-project", label: "Jack Butcher — Credits project and assembly schedule", url: "https://jack.art/credits", note: "Official art recipe and 80-to-1 concept. Schedule checked September 27, 2026; this is not a claim that assembly is already live." },
      { id: "credits-allocation", label: "Jack Butcher — original Credits allocation", url: "https://jack.art/credits/rating", note: "122,154 originally allocated Credits. This page is not a live circulating-supply or ownership check." },
      { id: "oz-erc721", label: "OpenZeppelin 5.4.0 — ERC721 implementation", url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.4.0/contracts/token/ERC721/ERC721.sol", note: "Version-pinned source for transferFrom, _update, _burn, and _safeMint." },
      { id: "oz-burnable", label: "OpenZeppelin 5.4.0 — ERC721Burnable", url: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.4.0/contracts/token/ERC721/extensions/ERC721Burnable.sol", note: "An extension exposing burning to token owners and approved operators." },
      { id: "oz-receiver", label: "OpenZeppelin — ERC721 receiver checks", url: "https://docs.openzeppelin.com/contracts/5.x/api/token/erc721", note: "Safe transfers and safe minting interact with recipient contracts through onERC721Received." },
      { id: "solidity-revert", label: "Solidity — exceptions and state rollback", url: "https://docs.soliditylang.org/en/latest/control-structures.html#error-handling-assert-require-revert-and-exceptions", note: "Exception propagation, revert behavior, and the implications of catching errors." },
    ],
    relatedSlugs: ["jev-decision-models", "erc-8004-agent-trust"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
