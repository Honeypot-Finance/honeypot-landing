export type ArticleSection = "AI" | "Web3" | "Technical Education";

export type Article = {
  slug: string;
  section: ArticleSection;
  eyebrow: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  author?: { name: string; role?: string };
  publicationNote?: string;
  hook: string;
  introParagraphs?: string[];
  leadImage?: { src: string; alt: string; width: number; height: number; caption: string; sourceUrl: string };
  takeaway: string;
  visual: "manifesto" | "jev" | "muse" | "contracts" | "credits" | "pons";
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    diagram?: "attention" | "decisions" | "permissions" | "trust" | "assembly" | "launch";
    sourceIds?: string[];
  }[];
  sources: { id: string; label: string; url: string; note?: string }[];
  relatedSlugs: string[];
};

// Original English editorial editions. Sources support the relevant sections;
// conceptual diagrams explain mechanisms rather than measured results.
export const articles: Article[] = [
  {
    "slug": "attention-network-for-the-agi-era",
    "section": "AI",
    "eyebrow": "THE HONEYPOT MANIFESTO",
    "title": "Honeypot’s next chapter: make innovation travel",
    "description": "Why we are bringing technology licensing, AI-native discovery, and our community into one business—and what we want that business to make possible.",
    "readTime": "8 min read",
    "date": "2026-09-27",
    "hook": "The bear market gave us a question worth taking into the next decade: what should become of everything Honeypot has already built? Our answer joins two missions—licensing selected innovations and building an attention network for the AGI era. Both begin with the same conviction: useful work should have a life beyond the team that first created it.",
    "takeaway": "Licensing gives accumulated work another builder. Discovery gives it another audience. Together, they can shorten the distance between an invention and a useful place in someone’s life.",
    "visual": "manifesto",
    "sections": [
      {
        "id": "the-next-chapter",
        "title": "Start with what the years have taught us",
        "paragraphs": [
          "Honeypot began by building and operating blockchain products. That meant working through the details that disappear inside a product announcement: the mechanism, the integration, the incentives, the frontend, and the community that has to live with the result. Some decisions worked. Others left us with research, unfinished possibilities, and a clearer understanding of what a particular design could bear.",
          "During the bear market, we examined that whole body of work. Waiting for another cycle would have been one way forward. We wanted to decide which parts of our experience could remain useful even when the market’s attention moved elsewhere. A mechanism can outlast the original product. An operational lesson can save another founder from an expensive mistake. A community can recognize an opportunity that its core team has missed.",
          "The direction we announced on August 19, 2026 follows from that assessment. We intend to license selected technologies we have built or acquired, while developing an AI-native discovery and distribution network. We are changing how our work reaches the world. The question guiding that change is how much further it could go in the right hands."
        ],
        "sourceIds": [
          "manifesto"
        ]
      },
      {
        "id": "license-the-head-start",
        "title": "Let the next founder start further ahead",
        "paragraphs": [
          "Our portfolio spans Fair Token Offering mechanisms, Pot2Pump, the HoneyGenesis step-function NFT sale, concentrated-liquidity integrations, perpetual trading infrastructure and AMM-perpetual research, points and referral systems, and airdrop infrastructure. Those names describe different kinds of assets. Some are deployed contracts; some depend on third-party integrations; others are architectures, economic designs, or research that need further development.",
          "Making that distinction legible is part of the licensing work. A prospective operator needs to know what exists, what it depends on, what has been tested, and what still needs to be built. Documentation and honest boundaries make a technical head start usable. A collection of impressive names cannot do that on its own.",
          "Our acquisition of Play402 belongs in the same picture. Its onchain lottery mechanics add another programmable mechanism that a capable partner might integrate or adapt. Acquiring that work does not commit Honeypot to operate every future product made from it. It gives us another opportunity to find the team, market, and application where it can be useful.",
          "That is the practical promise of licensing. A founder with a strong understanding of a market should be able to begin with relevant work that already exists, then spend more of their effort on the parts only they can supply. Honeypot’s role is to organize the assets, protect their integrity, explain their maturity, and agree appropriate rights with responsible partners. Operators remain responsible for further development, execution, security, compliance, and their users. A shorter path to market should create more room for a better product."
        ],
        "sourceIds": [
          "manifesto"
        ]
      },
      {
        "id": "attention-with-accountability",
        "title": "Attention determines which ideas get a chance",
        "paragraphs": [
          "The other constraint appears after something has been built. A founder can solve a difficult problem and still struggle to explain it to the people who would care. A technical paper can be available to everyone while remaining understandable to very few. Availability is only the beginning of discovery.",
          "Our original announcement used Netflix as an analogy for the business we want to build. The useful part of that analogy is the organization of attention: helping a person find something relevant within an overwhelming field of possibilities. Applied to technology, the challenge is larger than choosing the next item in a library. The same discovery may need a different explanation for a developer, a founder, and a reader encountering the subject for the first time.",
          "A developer may need the implementation and its failure cases. A founder may need to understand which part of an operation the tool could change. A newcomer may first need the idea behind the announcement. Each explanation should remain attached to the same evidence. Personalization can change the route into a subject without changing the facts that support it.",
          "That is our thesis for an attention network: discover promising work, verify what exists, explain why it matters, and bring that explanation to the people who could use it. Distribution becomes part of the path by which a discovery finds users, collaborators, criticism, and a chance to improve. The network earns its place when those encounters become more likely."
        ],
        "sourceIds": [
          "manifesto"
        ],
        "diagram": "attention"
      },
      {
        "id": "three-ways-in",
        "title": "Intelligence needs a world it can act in",
        "paragraphs": [
          "We see AI and blockchain as different parts of the environment in which increasingly capable agents will operate. AI can interpret language, reason over incomplete information, and adapt a plan. Smart contracts can apply defined rules, record ownership, coordinate permissions, and make execution inspectable. Their different properties create useful questions at the boundary.",
          "An agent might understand a request to buy something useful. It still needs authority to spend, a way to identify a supplier, and a record of what happened. A contract can enforce an allowance, but it cannot establish that the agent chose wisely. A recorded claim can have reliable provenance and still be false. These are design problems to investigate, rather than reasons to assume either technology supplies the missing judgment automatically.",
          "We believe an economy of increasingly capable agents will need a workable relationship between intelligence and accountability. AI and blockchain give us different tools for building that relationship. We will test the connection through actual products: where it helps, where it adds friction, and where another design serves people better. AGI remains our horizon; the technologies people can use today are where we begin.",
          "The publication gives readers three ways into this territory. AI follows capabilities, agents, and the people developing them. Web3 examines ownership, verification, settlement, and coordination. Technical Education explains the mechanisms closely enough that a reader can question them. The subjects meet in the same human concern: understanding a system well enough to decide what place it should have in our lives."
        ],
        "sourceIds": [
          "manifesto"
        ]
      },
      {
        "id": "florus-and-launchvibes",
        "title": "Let one discovery become many useful explanations",
        "paragraphs": [
          "Florus provides the intended technology foundation for this network, with Launchvibes at the center of our planned content-intelligence and distribution workflow. The ambition is to connect research, audience understanding, format selection, translation, and distribution, so an important development can reach beyond the community that already knows how to discuss it.",
          "The sequence matters. Verification comes before an idea is multiplied across formats. A compelling narrative has to remain answerable to its sources. People must own the decisions about accuracy, context, ethics, and publication, including the decision to correct a story. Automating distribution increases the importance of that editorial responsibility because a mistake can travel along the same paths as an insight.",
          "Our August announcement proposed dedicated channels across YouTube, TikTok, and OnlyFans, with formats suited to each audience. Those were plans, not proof of completed launches. The larger ambition is a personalized network across languages, regions, and levels of technical knowledge. Reaching billions is the scale we want to work toward; it is not a claim about our current audience.",
          "A useful test of that ambition is smaller and more demanding than a view count: did the explanation help someone understand a capability, make a better decision, or find a builder whose work they can use? Repeated often enough, those encounters could give good ideas a much wider life."
        ],
        "sourceIds": [
          "manifesto",
          "launchvibes"
        ]
      },
      {
        "id": "the-hive-continues",
        "title": "The community has a role in the work itself",
        "paragraphs": [
          "Pottards and HoneyGenesis holders helped make Honeypot possible. Our next chapter asks for more than their attention as an audience. Introductions to founders, scrutiny of potential partners, thoughtful criticism, and relationships across research and media are all part of building this network. The core team cannot see every promising project or understand every community it hopes to reach.",
          "The original phrase “making Pottards rich” expresses a commitment to keep creating opportunities, access, recognition, and shared value for those who have supported us. It does not guarantee investment returns. If licensing and distribution generate revenue, we intend to explore lawful and transparent ways for that success to benefit the community. The mechanisms are unfinished, and designing them with holders and long-term contributors is part of the work ahead.",
          "That same participation informed the proposal to ask the community to name the network. The announced reward was subject to eligibility and selection rules to be published separately. More broadly, the invitation remains to help determine what Honeypot becomes: which builders we find, which partnerships deserve pursuit, and how credible work receives a hearing.",
          "For existing users, the leaderboard, documentation, all-in-one vault, and NFT staking remain accessible through Legacy apps. They are part of the history we are carrying forward as the business changes around them."
        ],
        "sourceIds": [
          "manifesto"
        ]
      },
      {
        "id": "the-next-decade",
        "title": "Make the work travel",
        "paragraphs": [
          "Licensing and media can look like separate businesses until you follow an idea through them. First, someone needs a foundation on which to build. Later, someone else needs a reason and a way to understand what has been built. At either point, useful work can stop moving. Rights can be unclear, knowledge can remain with one team, or the explanation can fail to reach the person who needs it.",
          "We want Honeypot to make those passages easier. A mechanism we developed may find its best application with another founder. A story we publish may bring that founder a user who exposes a flaw, suggests a new use, or helps the product improve. Those are ways accumulated effort becomes a starting point for more effort, instead of ending with its first operator.",
          "That brings us back to the question the bear market gave us. Defining the next decade means deciding what our past work should make possible for other people. We want the contracts, research, relationships, and lessons behind Honeypot to reach their next builder—and the next useful discovery to reach a person who can act on it. That is the attention network we intend to build."
        ],
        "sourceIds": [
          "manifesto"
        ]
      }
    ],
    "sources": [
      {
        "id": "manifesto",
        "label": "Honeypot Finance — the original English manifesto",
        "url": "https://x.com/honeypotfinance/status/2090244292015190460",
        "note": "Published August 19, 2026. This native edition adapts our announcement for the new publication."
      },
      {
        "id": "launchvibes",
        "label": "Launchvibes — creator and distribution workflow",
        "url": "https://www.launchvibes.tech/for-creators",
        "note": "Background on the content and distribution tooling referenced in our vision."
      }
    ],
    "relatedSlugs": [
      "muse-ai-from-chat-to-action",
      "erc-8004-agent-trust"
    ]
  },
  {
    "slug": "muse-ai-from-chat-to-action",
    "section": "AI",
    "eyebrow": "PERSONAL AGENTS / FIELD NOTES",
    "title": "Muse has to earn the interruption",
    "description": "Meta’s personal agent puts a difficult product question into view: how much work can an assistant take over without handing the burden back through unclear approvals?",
    "readTime": "6 min read",
    "date": "2026-09-27",
    "hook": "When a personal agent takes on a task, it also has to decide when to give the task back. Meta’s Muse makes that division of responsibility a product feature: routine work can proceed, while consequential actions meet a permission boundary. Whether that saves attention will matter as much as what the model can do.",
    "takeaway": "Useful delegation depends on a workable division of responsibility. The agent needs room to do ordinary work; the person needs enough context and control to direct the decisions that matter.",
    "visual": "muse",
    "sections": [
      {
        "id": "from-request-to-result",
        "title": "The work continues after the conversation",
        "paragraphs": [
          "Meta introduced Muse on September 8, 2026 as a personal agent for tasks and longer-running goals, beginning a US rollout across mobile and web. Its published design includes a dedicated virtual computer with a browser, connections to everyday services, and interaction through the Muse app or WhatsApp. This article examines that design and its implications; it is not a hands-on assessment of the product’s reliability.",
          "Consider a delegated travel task. Researching a weekend away involves dates, transport, opening hours, preferences, and prices that may change while the work is in progress. A useful assistant has to carry those constraints across several services, recognize when an option no longer fits, and distinguish a tentative plan from a commitment. Finishing one good answer in a chat window is only one part of the assignment.",
          "The attraction is obvious: the user could stop managing every intermediate step. The complication arrives at the point where the system needs a decision. If the request is vague, the user must reconstruct the research before approving it. The agent has then returned part of the job in a less familiar form. Personal AI has to manage this exchange of responsibility as carefully as it manages the task."
        ],
        "sourceIds": [
          "muse-launch"
        ]
      },
      {
        "id": "the-permission-boundary",
        "title": "Sentinel separates a proposal from permission",
        "paragraphs": [
          "Meta’s technical explanation places a component called Sentinel between the working agent and the actions it wants to take. Sentinel checks connector actions and network traffic against policy. The agent operates with substitute credentials; real secrets are supplied at the network boundary. In the described architecture, knowing what to request and possessing unrestricted authority to execute it are separate concerns.",
          "That separation matters because an agent can encounter material it should read without obeying. A webpage or message can contain language that conflicts with the owner’s intention. A permission layer gives the system another place to examine an attempted action before it reaches a connected service. Its effectiveness still depends on the implementation and policies; Meta’s published design does not establish that every attack will be recognized.",
          "The policy outcomes are allow, deny, or ask. Routine read-only work and low-risk actions within existing permissions can proceed without repeatedly interrupting the user. Sensitive actions can require approval, and prohibited actions can be stopped. Continuous human confirmation would defeat much of the purpose of delegation, so deciding when to interrupt is itself an important product judgment.",
          "An activity record then helps the user understand what the system actually did. The value of those components lies in the relationship between them: a plan, the authority used to carry it out, and evidence of the result."
        ],
        "sourceIds": [
          "muse-safety",
          "muse-design"
        ],
        "diagram": "permissions"
      },
      {
        "id": "a-practical-test",
        "title": "An approval should contain the decision",
        "paragraphs": [
          "Return to the trip. “Can I book this?” is a poor handoff if the user has to open several tabs to discover the dates, total price, cancellation terms, and payment account. A useful approval presents the commitment in a form the person can evaluate. The assistant should have resolved the routine research around that decision rather than merely moving it behind an attractive button.",
          "The same principle applies to sending a message, sharing a file, or changing a calendar. Scope alone is insufficient if the consequence remains unclear. Which recipient, which version of the file, which attendees, and which change? The person should be able to understand the proposed action without having to become the agent’s debugger.",
          "There is also a cost to asking too often. When every small action receives the same ceremonial approval screen, the interface gives users little help in distinguishing a meaningful commitment from background work. Our reading of the Muse architecture is that selective interruption is central to its promise. It creates room for autonomous work while preserving a recognizable moment for human direction.",
          "A grounded evaluation would therefore include ordinary friction: a missing date, conflicting information, an inaccessible website, or a preference that changes halfway through. The question is how much of that friction the assistant resolves, what it explains, and how clearly it returns a decision when the person is needed. A polished completion demo cannot answer all three."
        ],
        "sourceIds": [
          "muse-safety",
          "muse-design"
        ]
      },
      {
        "id": "what-the-announcement-does-not-settle",
        "title": "A personal assistant also carries a personal record",
        "paragraphs": [
          "Longer-running goals make memory useful. They also give remembered information a longer reach. An outdated preference can affect several later choices, and a user may not realize which remembered detail caused the result. Meta’s design includes controls over connected services, activity, and memory; those controls become part of the practical relationship between an agent and its owner.",
          "At launch, Muse used a Secure VM. Meta says this does not cryptographically prevent Meta from accessing data when necessary to operate the service, and limited data leaves the VM for purposes including inference and telemetry. The proposed Confidential VM was described as coming later in 2026. Isolation and a cryptographic restriction on the provider’s own access are different properties.",
          "The September 24 Connect announcements added further connectors and payment integrations to the picture, while glasses support was still described as arriving in the coming months. Availability for a particular account depends on rollout. These distinctions matter because a person delegates to the system they can use today, with its present data flows and controls.",
          "For someone considering a personal agent, the practical question is what the relationship accumulates over time: permissions, remembered facts, connected services, and a history of action. Reviewing or ending that relationship should be intelligible too. The effort saved during a task has to be considered alongside the effort of managing this continuing access."
        ],
        "sourceIds": [
          "muse-safety",
          "muse-connect",
          "muse-design"
        ]
      },
      {
        "id": "why-this-matters",
        "title": "Delegation should return attention to its owner",
        "paragraphs": [
          "Every interruption spends some of the attention the agent was meant to return. That makes the handoff part of the work: the system has to identify what needs the owner’s judgment, resolve what it can, and carry the relevant context into the request. A booking approval is valuable when the traveler can understand the dates, price, and tradeoff without reconstructing the search. A polished interface around an unresolved task still leaves the task with the person.",
          "The longer relationship belongs in the same accounting. Standing permissions and remembered preferences can reduce repeated instructions, but they can also create maintenance work as circumstances change. Muse’s promise will depend on whether people can keep that arrangement understandable without supervising it continuously.",
          "That is the threshold for useful delegation: the owner can stop mentally carrying the task. The next interruption arrives because a choice deserves their judgment, with enough work already done to let them make it. For the traveler, the weekend becomes theirs to choose while the work of organizing it can finally stay elsewhere."
        ]
      }
    ],
    "sources": [
      {
        "id": "muse-launch",
        "label": "Meta — Introducing Muse",
        "url": "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
        "note": "September 8, 2026. Product capabilities and rollout described by Meta."
      },
      {
        "id": "muse-safety",
        "label": "Meta AI Research — security and safety for Muse",
        "url": "https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse",
        "note": "Published architecture, credential handling, limitations, and the distinction between Secure and Confidential VM."
      },
      {
        "id": "muse-design",
        "label": "Muse — product design and controls",
        "url": "https://introducing.muse.ai/",
        "note": "The product team’s explanation of goals, approvals, activity, and memory."
      },
      {
        "id": "muse-connect",
        "label": "Meta — the biggest news from Connect 2026",
        "url": "https://about.fb.com/news/2026/09/the-biggest-news-from-connect-2026/",
        "note": "September 24, 2026. Announcements include features still being rolled out or planned."
      }
    ],
    "relatedSlugs": [
      "jev-decision-models",
      "erc-8004-agent-trust"
    ]
  },
  {
    "slug": "pons-why-i-backed-ozzy",
    "section": "Web3",
    "eyebrow": "A FOUNDER’S INVESTOR LETTER",
    "title": "Pons: “The Fastest Company Ever to Reach $100M Annualized Revenue”—in Just Two Months",
    "description": "Why I backed Ozzy before I knew where he would win",
    "readTime": "8 min read",
    "date": "2026-09-11",
    "author": {
      "name": "Wilson",
      "role": "Honeypot Finance founder · early RootsFi investor"
    },
    "publicationNote": "First published September 11, 2026. Republished on Honeypot Finance September 30, 2026, preserving the author’s original account.",
    "hook": "First place! Approximately two months to a $100 million annualized revenue run-rate. That is where the comparison chart accompanying this piece places Pons.",
    "introParagraphs": [
      "When I look at that chart, I think about the Ozzy I knew on Berachain, long before Pons had a place on it. I had already decided to back him. I just did not know where his breakthrough would happen.",
      "I’m Wilson, founder of Honeypot Finance and an early investor in RootsFi. I can only write from Honeypot Finance's official account because my personal X account, @0xwilsonwu, remains suspended. I still don’t understand the specific reason, and repeated appeals haven’t restored it."
    ],
    "leadImage": {
      "src": "/images/editorial/pons-revenue-chart.jpg",
      "alt": "The original comparison chart ranks Pons first at approximately two months to a reported $100 million annualized revenue run-rate. Footnotes indicate different measurement starting points for some companies.",
      "width": 900,
      "height": 560,
      "caption": "Comparison chart from the original essay. Annualized revenue is a run-rate, not revenue already earned. Some companies use different starting points, as the footnotes show; the ranking and underlying calculations have not been independently verified.",
      "sourceUrl": "https://www.chaincatcher.com/en/article/2289068"
    },
    "takeaway": "I believed in Ozzy before I knew where he would win. Watching him find that place has been deeply satisfying. And I’m still betting on what comes next.",
    "visual": "pons",
    "sections": [
      {
        "id": "the-builder-i-met-on-berachain",
        "title": "The builder I met on Berachain",
        "paragraphs": [
          "I met Ozzy, @MEADGod, through Berachain. His sincerity first got my attention. Over time, I came to appreciate his technical ability, his confidence, and a stubbornness that made him very difficult to knock down.",
          "I also watched him go through treatment I considered needlessly harsh. There was a side of the Berachain community that, in my experience, felt like an inner circle. Recognition could seem to depend too much on proximity. A team could keep shipping and still struggle to feel its work was getting a fair hearing.",
          "I won’t name individuals. People who built there may recognize that experience. Others may remember it differently. This is how it felt from where I stood.",
          "At Honeypot Finance, our community repeatedly asked whether we were being supported. We were building Pot2Pump and exploring a different approach to meme launches, yet we often felt overlooked. Those questions were painful because we were asking some of them ourselves.",
          "So when I saw what Ozzy was going through, I understood something of it. His ability and determination convinced me to invest in RootsFi. I also introduced Ozzy to a friend of mine in Toronto, who goes by @GeekedDao on X. He invested in RootsFi as well (I told him that I bet this young man would be successful!). We saw talent, urgency, and someone willing to keep working through disappointment.",
          "I believed he would find his opportunity. I wasn’t convinced it had to happen on Berachain."
        ],
        "sourceIds": [
          "original"
        ]
      },
      {
        "id": "he-kept-trying",
        "title": "He kept trying to make it work",
        "paragraphs": [
          "What impressed me further was how much energy he continued to give the ecosystem. Even after feeling dismissed, he kept thinking about how Berachain could work better.",
          "His May 2025 PoL V1.3 proposal examined liquidity, incentives, and value extraction, responding to V1.1 and the then-developing V1.2. Looking back, I think several of those concerns deserved much more serious consideration. I still wonder how things might have developed if they had received it.",
          "Eventually, he carried that energy elsewhere. RootsFi found new ground on Canton and expanded to Tempo. To me, that showed an important kind of founder judgment: knowing when to give your work a different environment in which to grow."
        ],
        "sourceIds": [
          "pol-proposal",
          "roots-canton",
          "roots-tempo"
        ]
      },
      {
        "id": "a-meal-a-coffee-and-carl",
        "title": "A meal, a coffee, and Carl",
        "paragraphs": [
          "Carl helped me understand the other half of that team. Earlier this year, I met him in the US. We had a meal and coffee, and talked about meme trading, Canton, Tempo, and the payments business he and Ozzy wanted to build through RootsFi.",
          "We spent more than an hour on RootsFi. I remember how animated he became when he talked about where it could go. There was so much he wanted to build, and he could walk me through why it mattered.",
          "Carl has a talent for building relationships early, and he seems comfortable giving first. Even his insistence on picking up the bill stayed with me. It fit how he approached the conversation: generous with his time, interested in people, and thinking beyond the immediate transaction. I believe that instinct helped RootsFi recognize and pursue its opportunity on Canton.",
          "Although Carl leans toward the commercial side, he also gets involved in technical work alongside Ozzy. Between them, I saw the ability to build, explain, sell, and keep learning across the boundaries of their roles. That breadth matters to me as an investor.",
          "Before we parted, I encouraged him to help Ozzy explore a visa and spend time in the US. I wanted Ozzy to have access to more conversations, more relationships, and more chances to be understood. When I look at Pons now, I think back to that conversation."
        ],
        "sourceIds": [
          "original"
        ]
      },
      {
        "id": "why-this-environment-mattered",
        "title": "Why this environment mattered",
        "paragraphs": [
          "Then we saw the breakthrough happen on Robinhood Chain with Pons. I think there is an important reason why Robinhood and Pons fit together.",
          "Robinhood Chain puts stock-linked assets into the same programmable environment as crypto. Its Stock Tokens are ERC-20s providing economic exposure to underlying securities, without ownership rights in the underlying companies. Developers can compose those assets into onchain applications.",
          "@ponsdotfamily gives that environment a launch and trading product. Its V2 design starts tokens on a bonding curve and graduates them into permanently locked Uniswap v4 liquidity positions. The selected quote asset carries through both stages.",
          "The detail that caught my attention was the quote asset: native ETH or an ERC-20 explicitly approved by Pons. That asset is used from the first trades through graduation, and fees are denominated in it too.",
          "For a launch using an approved stock token, that asset participates in the market itself: what traders buy with, what the new token is priced against, and what the pool holds. The meme token does not become a share of the underlying company, and its price is not guaranteed to track that stock.",
          "My interpretation is that this creates a compelling meeting point between meme culture and companies people already follow. Earnings, products, and familiar tickers give communities something to discuss. Pons gives them tools to create and trade around those interests. The assets, the audience’s interests, and the launch mechanism can reinforce one another."
        ],
        "sourceIds": [
          "robinhood-tokens",
          "pons-v2"
        ],
        "diagram": "launch"
      },
      {
        "id": "back-to-pot2pump",
        "title": "The part that brought me back to Pot2Pump",
        "paragraphs": [
          "At Honeypot Finance, we had explored flexibility in the assets used to fund launches and form liquidity. Pons V2 touches a question familiar to us, although the launch mechanics differ.",
          "At the time, we weren’t building around tokenized stocks, and we didn’t have this combination of assets and market attention. Seeing Ozzy carry a related direction into a setting where it resonates makes me happy. I know how much persistence it can take for an idea to find its moment."
        ],
        "sourceIds": [
          "original"
        ]
      },
      {
        "id": "what-comes-after-the-chart",
        "title": "What comes after the chart",
        "paragraphs": [
          "The chart measures approximately two months from launch to a $100M annualized revenue pace. It cannot show all the work that came before launch: the ideas, the disappointments, the relationships, and the decision to keep going somewhere new.",
          "If Pons could move this quickly when those pieces came together, what could the next chapter look like? I’m interested in what the team can make durable: repeat participation, useful markets, and the trust required to keep operating after the initial excitement. There is still a great deal to build.",
          "Perhaps this is the part of the American dream I connect with most: talented people finding enough room to try again, meeting people willing to help, and creating something larger than their original circumstances seemed to allow.",
          "I will keep supporting Ozzy and betting on what he builds next. I’m excited to see how much potential this young man still has to reveal. Watching Pons grow even makes me wonder: could he be the next @elonmusk? I want to be there to see how far his ambition and ability can take him."
        ],
        "sourceIds": [
          "original"
        ]
      },
      {
        "id": "to-the-other-founders",
        "title": "To the other founders I’ve backed",
        "paragraphs": [
          "Ozzy is one of several founders I’ve backed on Berachain. To the others: I know you have faced some of the same frustrations that Ozzy and I have experienced. I also see your talent and your grit. Those qualities still matter, even when the recognition hasn’t arrived.",
          "If you’ve received a check from me, it means I saw in you many of the qualities I believe extraordinary success requires. I put my own money behind that judgment. I hope you remember that when the work feels lonely or your progress goes unnoticed.",
          "Stay focused. Keep building, keep learning, and give yourself time to find the right opening (and never tell anyone Wilson invested in you!). Sometimes one opportunity can change the trajectory of everything you have been working toward. I hope I’ll get to write about your breakthrough one day, too.",
          "I believed in Ozzy before I knew where he would win. Watching him find that place has been deeply satisfying. And I’m still betting on what comes next."
        ],
        "sourceIds": [
          "original"
        ]
      }
    ],
    "sources": [
      {
        "id": "original",
        "label": "Wilson / Honeypot Finance — original Pons founder-investor essay",
        "url": "https://www.chaincatcher.com/en/article/2289068",
        "note": "Published September 11, 2026. Source of the first-person account and comparison chart; the chart’s ranking is not independently verified."
      },
      {
        "id": "pol-proposal",
        "label": "Ozzy — PoL V1.3: The End of the Great Extraction",
        "url": "https://forum.berachain.com/t/pol-v1-3-the-end-of-the-great-extraction/1573",
        "note": "Forum repost of the proposal dated May 31, 2025."
      },
      {
        "id": "roots-canton",
        "label": "Roots — Bringing our SDK and payment solution to Canton Network",
        "url": "https://cantonnews.org/insights/bringing-our-sdk-and-payment-solution-to-canton-network",
        "note": "Roots-authored announcement, April 28, 2026."
      },
      {
        "id": "roots-tempo",
        "label": "RootsFi — stcUSD integration on Tempo",
        "url": "https://rss.globenewswire.com/news-release/2026/06/16/3312821/0/en/rootsfi-integrates-cap-s-stcusd-on-tempo-as-a-primary-yield-source.html",
        "note": "Company-issued announcement, June 16, 2026."
      },
      {
        "id": "robinhood-tokens",
        "label": "Robinhood Chain — Stock Tokens",
        "url": "https://docs.robinhood.com/chain/stock-tokens/",
        "note": "ERC-20 stock-token design and economic exposure; underlying company ownership rights do not transfer."
      },
      {
        "id": "pons-v2",
        "label": "Pons V2 — launch lifecycle, custom pairs, and payouts",
        "url": "https://docs.ponsfamily.com/v2",
        "note": "Primary documentation for the quote asset, bonding curve, graduation, and Uniswap v4 liquidity. The added illustration explains this mechanism conceptually."
      }
    ],
    "relatedSlugs": [
      "erc-8004-agent-trust",
      "attention-network-for-the-agi-era"
    ]
  },
  {
    "slug": "erc-8004-agent-trust",
    "section": "Web3",
    "eyebrow": "SMART CONTRACTS / AGENT ECONOMY",
    "title": "ERC-8004 and the missing memory of the agent economy",
    "description": "Shared identity and reputation records could help useful work carry a history between applications. The hard part is deciding what that history actually demonstrates.",
    "readTime": "6 min read",
    "date": "2026-09-27",
    "hook": "Finding a supplier, judging its work, and authorizing a payment are three different decisions. ERC-8004 addresses the records an agent can consult when it encounters an unfamiliar service. Its opportunity is to make relevant evidence easier to carry between applications, while leaving each application responsible for the judgment it makes.",
    "takeaway": "Portable records can help a market remember useful work. They remain evidence to interpret: an identifier is not a guarantee of continuity, feedback is not proof of quality, and reputation supplies no authority to spend.",
    "visual": "contracts",
    "sections": [
      {
        "id": "a-marketplace-needs-memory",
        "title": "The stranger on the other side of the task",
        "paragraphs": [
          "A research assistant needs a specialized dataset and discovers an agent offering to supply it. The offer is clear; the surrounding relationship is thin. Who operates this service? Has it delivered useful work before? Does the available evidence apply to this particular dataset? The assistant also needs to know whether its owner has authorized a purchase. These questions become unavoidable once work moves beyond a familiar set of services.",
          "Within a single product, an operator can maintain its own account records, feedback history, and rules for admitting suppliers. Across independently operated applications, those records may be difficult to discover or compare. ERC-8004 proposes common onchain registries that applications can use for agent discovery and trust signals. That gives an unfamiliar service something more inspectable than its own description.",
          "The specification remained Draft when checked on September 27, 2026. The reference implementation repository lists deployed Identity and Reputation registries, while the Validation Registry design remains under active discussion. A live implementation demonstrates that specific contracts exist; it does not make every proposed part of the standard final. Builders need to know which version and deployment they are reading before treating its records as an input to a decision."
        ],
        "sourceIds": [
          "erc-spec",
          "erc-implementation"
        ]
      },
      {
        "id": "three-different-signals",
        "title": "A record is useful when its question is clear",
        "paragraphs": [
          "The Identity Registry associates an ERC-721 identifier with an agent registration file. This gives an application a handle through which it can discover the agent and its advertised services. It is a point of reference for further investigation. Because the identity token is transferable, continuity of the identifier does not establish that the same human operator, model, or capabilities remain behind it.",
          "The Reputation Registry adds feedback about interactions. Feedback can help an evaluator find evidence worth examining, but its meaning depends on context: who supplied it, what task it concerns, and whether it is credible. A history of easy successful jobs may say little about a difficult new assignment. The specification also recognizes manipulation risks. Publishing a record onchain makes the record inspectable; it does not remove the need to assess the source.",
          "The evolving Validation Registry design adds a place for requests and assessments from validators. The important question becomes what a particular validator checked, using which method, and with what limits. A check of a dataset’s format has a different meaning from a check of its provenance. An application that treats both as an undifferentiated seal of approval loses the distinction that makes the evidence useful.",
          "These layers therefore offer different forms of memory: a reference for an agent, a history of feedback, and a record of a particular assessment. Their usefulness grows when an evaluator can explain which of those records supports the decision at hand."
        ],
        "sourceIds": [
          "erc-spec",
          "erc-implementation"
        ],
        "diagram": "trust"
      },
      {
        "id": "give-evidence-a-job",
        "title": "Trust has to fit the transaction",
        "paragraphs": [
          "For the hypothetical dataset purchase, a reasonable first question is whether the supplier can deliver a sample that satisfies the agreed requirements. Identity helps locate the service and its records. Feedback can point to prior work. A task-specific evaluation might examine the sample’s schema, provenance, coverage, or agreement with known observations. None of those checks should silently stand in for all the others.",
          "This is why an application still needs its own risk rules. A small exploratory purchase may justify a different level of investigation from a dataset that will guide a consequential business decision. Sparse history can lead to a limited trial. Conflicting evidence can trigger review. Missing provenance can be enough to decline. These are choices about the task and the consequences of being wrong, not answers supplied automatically by the registry.",
          "An application also needs to recognize changes in what it is evaluating. A service may update its model or change ownership. The identifier can remain a useful way to find past records while the relevance of those records changes. A thoughtful evaluator asks what carries forward and what needs to be demonstrated again.",
          "Our interpretation is that this separation can make open coordination more credible. Different applications can consult common evidence while applying standards appropriate to their users. The decision remains local, but its supporting materials become easier to inspect and contest."
        ],
        "sourceIds": [
          "erc-spec"
        ]
      },
      {
        "id": "permission-and-payment",
        "title": "A good reputation cannot spend your money",
        "paragraphs": [
          "Once the research assistant has evaluated a supplier, it still needs authority to act. ERC-8004 places payments outside its scope. Its agentWallet binding concerns an address controlled by the agent; it does not give that agent permission to spend assets belonging to someone else. A favorable evaluation cannot create that permission either.",
          "Coinbase’s Spend Permissions contracts illustrate one independent approach to constrained authority: an owner grants an allowance with defined conditions and can revoke it. A payment protocol such as x402 deals with another part of the exchange, allowing a service to request payment over HTTP and having that payment verified and settled. Neither is a feature supplied by ERC-8004.",
          "Following the dataset purchase through these layers makes their different jobs visible. Evidence supports a decision to use the supplier. A permission determines whether the assistant may spend. Payment settlement records that the exchange of value occurred. The delivered data then has to meet the requirement. A successful payment proves nothing about the accuracy of the research it bought.",
          "Keeping those boundaries separate helps a product explain failure. It can distinguish an unconvincing supplier from an unauthorized purchase, a failed payment, or an unacceptable result. That explanation is more useful to a user than a single claim that an agent is “trusted.”"
        ],
        "sourceIds": [
          "erc-spec",
          "spend-permissions",
          "x402"
        ]
      },
      {
        "id": "the-builder-checklist",
        "title": "Let useful work leave a history",
        "paragraphs": [
          "The coordination opportunity in ERC-8004 is a market where a piece of work can leave evidence beyond the application that commissioned it. A new evaluator could examine that history, understand its limits, and choose an appropriately bounded next engagement. For a capable new entrant, the possibility matters: useful performance could gradually become something other applications are able to discover.",
          "That outcome depends on the quality and interpretability of the records. Portable feedback can carry manipulation just as readily as insight. A persistent identifier can conceal a meaningful change if the evaluator never asks what changed. The most useful applications will make those questions part of their decision process and retain a clear path for rejecting, limiting, or reviewing an unfamiliar service.",
          "The broader ambition is a form of institutional memory for work between agents. A transaction should be able to leave more behind than a payment receipt: enough context for the next participant to learn something from it. If shared registries help that happen, strangers can begin with evidence accumulated by others while remaining accountable for their own decisions. The market’s memory becomes richer without requiring every participant to share the same judgment."
        ],
        "sourceIds": [
          "erc-spec",
          "erc-implementation"
        ]
      }
    ],
    "sources": [
      {
        "id": "erc-spec",
        "label": "ERC-8004 — official draft specification",
        "url": "https://eips.ethereum.org/EIPS/eip-8004",
        "note": "Identity, reputation, validation, security considerations, and payment scope. Status checked September 27, 2026."
      },
      {
        "id": "erc-implementation",
        "label": "ERC-8004 — reference contract repository",
        "url": "https://github.com/erc-8004/erc-8004-contracts",
        "note": "Deployment information and the notice that the Validation Registry design is under active discussion."
      },
      {
        "id": "spend-permissions",
        "label": "Coinbase — Spend Permissions contracts",
        "url": "https://github.com/coinbase/spend-permissions",
        "note": "An independent example of constrained, revocable spending authority."
      },
      {
        "id": "x402",
        "label": "x402 — payment protocol introduction",
        "url": "https://docs.x402.org/introduction",
        "note": "The HTTP payment flow is a separate concern from agent reputation and output quality."
      }
    ],
    "relatedSlugs": [
      "muse-ai-from-chat-to-action",
      "jev-decision-models"
    ]
  },
  {
    "slug": "jev-decision-models",
    "section": "Technical Education",
    "eyebrow": "BUILDERS’ NOTEBOOK / DECISION MODELS",
    "title": "Jev: build the decision before choosing the model",
    "description": "TypeSafe’s headline benchmark draws attention to a quieter architectural choice: how much work a model should do when the application needs one bounded decision.",
    "readTime": "5 min read",
    "date": "2026-09-27",
    "hook": "TypeSafe reports 193.6× faster and 444.6× cheaper decisions in its Jev workflow evaluations—vendor comparisons it describes as toward the upper end of expected real-world gains. The architectural question behind those numbers deserves a closer look: when software needs a small, defined answer, how much model work should it ask for?",
    "takeaway": "A bounded question can make a model’s role easier to test. The economic value appears only when that decision improves the complete workflow, including errors, fallbacks, and human review.",
    "visual": "jev",
    "sections": [
      {
        "id": "read-the-benchmark",
        "title": "First, identify the work inside the benchmark",
        "paragraphs": [
          "TypeSafe introduced Jev on September 15, 2026 as a decision model. The large speed and cost multiples in its launch post are comparisons between particular workflows, not a universal property of every application that calls the model. TypeSafe designed those evaluation workflows, used model-generated reference judgments, and asked the comparison LLM wrapper to produce probabilities. That setup determines what work is being compared.",
          "The findings raise a useful possibility: a generative interface may be doing more work than a bounded decision requires. But the comparison has to survive contact with the application’s actual inputs and quality requirements. Faster output loses its advantage if it sends more tasks into retries or human review. A workflow benchmark is the beginning of that inquiry.",
          "LangChain’s separate evaluator experiment provides another kind of evidence. It used five fixed weather-agent traces, repeating each 100 times. Jev’s repeated binary judgments agreed with the human oracle in that sample, and its quality scores varied less than those of the comparison models. The 500 judgments cover five distinct traces. Repetition helps examine consistency; it cannot establish performance across 500 different situations."
        ],
        "sourceIds": [
          "jev-launch",
          "langchain-evals",
          "jev-reading"
        ]
      },
      {
        "id": "a-smaller-interface",
        "title": "Give the ticket a destination",
        "paragraphs": [
          "Take a support inbox with three queues: billing, technical support, and account access. The input is a person’s message, possibly incomplete or ambiguous. At this stage, the application needs a destination. A lengthy explanation may be useful later, but it is not the output that the routing code has to consume.",
          "Jev’s interface expresses that kind of task through typed questions. Choice selects among defined options. Score evaluates an ordered rubric. Noul addresses a yes/no proposition. The results include probabilities; Choice and Score also expose confidence, while Noul does not return a separate confidence field. Multiple questions can share the same input context.",
          "This interface encourages the builder to name the decision before invoking the model. Which labels are allowed? Is a message about being charged after losing access primarily a billing issue, an access issue, or a case for escalation? The answer depends partly on how the support operation works. A schema can express the permitted outputs, but the team still has to define the meaning and consequences of those outputs.",
          "The useful division of labor is specific. The model interprets the message. Ordinary code sends the task to a queue, applies exact rules, or records the decision. A generative model can draft a response at a later step that needs language. Each part has a job that can be examined separately."
        ],
        "sourceIds": [
          "jev-intro",
          "jev-confidence"
        ]
      },
      {
        "id": "draw-the-boundaries",
        "title": "A probability needs somewhere to go",
        "paragraphs": [
          "Returning a probability makes uncertainty available to the application; it does not decide what the application should do with it. A high value can accompany a wrong answer. A threshold chosen because it looks reassuring can produce an unreliable branch if it has never been evaluated on the cases the system will see.",
          "For the support inbox, uncertainty may lead to a richer model, a clarifying question, or a human review queue. Those options have different costs. The choice should reflect the mistake the business is trying to avoid. A delayed low-priority request and a mishandled account-access incident should not necessarily be treated as interchangeable errors.",
          "A stateful workflow framework such as LangGraph can make these transitions explicit through nodes and edges, with persistence and interruptions for human review. One node can call Jev, another can run deterministic code, and another can request a generative response. The orchestration framework carries the process; the decision model supplies one judgment within it.",
          "Drawing the branches before optimizing them changes the evaluation. The model’s answer becomes a visible event in a larger chain of consequences. A fallback is then a designed route with a cost and purpose, rather than a failure discovered after the application has already acted."
        ],
        "sourceIds": [
          "jev-confidence",
          "langgraph"
        ],
        "diagram": "decisions"
      },
      {
        "id": "test-your-own-branch",
        "title": "Measure the ticket that reaches the right team",
        "paragraphs": [
          "A practical experiment begins with one existing classification step and cases that resemble real traffic. Expected outcomes should be agreed before comparing implementations. The collection needs to include routine requests, ambiguous messages, out-of-scope inputs, and examples where a wrong decision is unusually expensive. Repeating familiar cases can test stability; new cases test whether the result travels.",
          "Then measure the complete route. For the inbox, cost per acceptable result includes the model call, retries, escalations, review time, and any downstream correction. The useful outcome is a ticket reaching the right team without an unnecessary detour. Reducing the price of the first decision is valuable when the rest of that route remains acceptable.",
          "TypeSafe’s Jev 1.13 notes identify limitations involving arithmetic, dates, indirect questions, irrelevant context, and adversarial inputs. Those are useful boundaries for experiment design. Exact calculations belong in code, and a neatly typed answer still needs its meaning checked. The format establishes that the application can consume the result, not that the result deserves to control a consequential action.",
          "A successful trial can therefore produce a modest but valuable conclusion: this particular judgment works well enough, on these kinds of inputs, with these fallback rules. That is a stronger foundation for a deployment decision than projecting a headline multiple across an entire system."
        ],
        "sourceIds": [
          "jev-limitations",
          "jev-launch"
        ]
      },
      {
        "id": "the-useful-limit",
        "title": "Give computation a job it can answer for",
        "paragraphs": [
          "Once the ticket-routing decision has a defined input, allowed destinations, and tested fallback, the team has built something that survives its first model choice. It can try Jev, a different classifier, or a larger model against the same cases. The costs and errors become comparable because the job has stayed still.",
          "That gives engineering work a way to accumulate. Each trial improves the team’s understanding of the decision. The routing rules and quality standard do not disappear when a new model arrives. A narrower interface creates a place to improve one judgment while retaining what the team has learned about the surrounding process.",
          "Jev’s advertised speedup is a reason to run that comparison. A lasting improvement would be a support system that can change the machinery behind a small question while preserving a clear account of what the answer must accomplish."
        ]
      }
    ],
    "sources": [
      {
        "id": "jev-reading",
        "label": "LearnBlockchain — the Jev article that started this explainer",
        "url": "https://learnblockchain.cn/article/28737",
        "note": "September 27, 2026. This is an original English explainer informed by the linked article and the primary sources below."
      },
      {
        "id": "jev-launch",
        "label": "TypeSafe — introducing System One models and Jev",
        "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev",
        "note": "September 15, 2026. Vendor-reported benchmark methodology and qualifications."
      },
      {
        "id": "jev-intro",
        "label": "TypeSafe — decision-model introduction",
        "url": "https://docs.typesafe.ai/introduction",
        "note": "Typed questions, shared context, and model outputs."
      },
      {
        "id": "jev-confidence",
        "label": "TypeSafe — probabilities and confidence",
        "url": "https://docs.typesafe.ai/confidence",
        "note": "Choice and Score expose confidence; Noul returns a probability without a separate confidence field."
      },
      {
        "id": "langgraph",
        "label": "LangChain — LangGraph overview",
        "url": "https://docs.langchain.com/oss/python/langgraph/overview",
        "note": "Stateful orchestration, persistence, and human review."
      },
      {
        "id": "langchain-evals",
        "label": "LangChain — Jev for agent evaluations",
        "url": "https://www.langchain.com/blog/jev-agent-evals-langsmith",
        "note": "September 20, 2026. Five fixed traces repeated 100 times; the limited sample matters."
      },
      {
        "id": "jev-limitations",
        "label": "TypeSafe — Jev 1.13 model limitations",
        "url": "https://docs.typesafe.ai/model-jaggedness/jev-1.13",
        "note": "Documented weaknesses and cautions when applying the model."
      }
    ],
    "relatedSlugs": [
      "muse-ai-from-chat-to-action",
      "erc-8004-agent-trust"
    ]
  },
  {
    "slug": "credits-nft-burn-vs-lock",
    "section": "Technical Education",
    "eyebrow": "BUILDERS’ NOTEBOOK / NFT MECHANICS",
    "title": "Credits: what survives when 80 NFTs become one?",
    "description": "Jack Butcher’s art project opens a precise engineering question: when a collection becomes a new work, what happens to the objects—and ownership—that came before it?",
    "readTime": "7 min read",
    "date": "2026-09-27",
    "hook": "Eighty NFTs becoming one sounds like a subtraction. The ownership records can tell a different story. In the educational assembly contract examined here, the source tokens move into custody and continue to exist. Jack Butcher’s Credits gives that distinction a memorable setting: the artistic transformation and the token lifecycle each need their own explanation.",
    "takeaway": "An artwork can invite many interpretations. The mechanism beneath it should make the participant’s rights, the fate of the source tokens, and the boundary of the transaction inspectable.",
    "visual": "credits",
    "sections": [
      {
        "id": "a-receipt-becomes-art",
        "title": "An ordinary payment becomes a source material",
        "paragraphs": [
          "Credits begins with a small transaction. The project’s official description associates an eligible $8 X Money payment with a Credit. Its transaction ID is hashed with SHA-256, and bits from the result define four 8 × 8 grids for cyan, magenta, yellow, and black. The payment timestamp determines which layers appear. A record produced for one purpose becomes material for a visual composition.",
          "The project also describes assembling 80 Credits into a Statement. That changes the unit through which a participant encounters the work: separate pieces are brought into a larger composition. It also gives a technical reader a concrete question. After assembly, what does the participant own, and what has happened to the inputs?",
          "The original allocation page lists 122,154 Credits, enough for at most 1,526 complete groups of 80, with 74 remaining. This is an arithmetic ceiling based on that allocation, not a current supply figure, an estimate of participation, or a statement of market value. As checked on September 27, 2026, the official project page scheduled Statement assembly for October 1 at 8 p.m. ET.",
          "A technical walkthrough on LearnBlockchain uses this concept to explain NFT assembly. The example lets us follow an ownership transition step by step. Its sample Solidity contract is educational material, not evidence that the artist’s production contracts implement the same process. Keeping that boundary clear makes it possible to learn from the example without attributing its choices to the artwork."
        ],
        "sourceIds": [
          "credits-project",
          "credits-allocation",
          "credits-reading"
        ]
      },
      {
        "id": "two-different-boundaries",
        "title": "Reproducible art still needs a delivery process",
        "paragraphs": [
          "The image recipe and the delivery of a token answer different questions. Given the specified inputs, a deterministic process can recreate the visual result. It cannot decide on its own whether a payment was eligible, which wallet should receive the token, or whether delivery succeeded. Those responsibilities exist around the recipe.",
          "For a builder designing a similar system, the boundaries are worth drawing explicitly. A payment service supplies a receipt. An application checks eligibility and associates a wallet. A contract records token ownership. A duplicate receipt, an incorrect wallet association, and a failed mint are different kinds of failure, even if a user encounters all of them through the same screen.",
          "This distinction also locates the limit of rollback. A reverted onchain transaction can undo changes within that transaction. It cannot reverse an earlier payment completed through another system. A participant needs a coherent experience across those steps, so the product must explain or recover from the places where one part succeeds and another does not."
        ],
        "sourceIds": [
          "credits-project",
          "solidity-revert"
        ]
      },
      {
        "id": "follow-the-eighty-tokens",
        "title": "Custody leaves the original objects in existence",
        "paragraphs": [
          "In the walkthrough’s assembly loop, the contract checks each input’s owner and calls transferFrom to move the NFT into the assembler contract. The result is custody: the source tokens still exist, with the assembler recorded as their owner. Whether they can leave later depends on the methods and upgrade powers available in that contract. Describing the transfer as a burn would hide that continuing ownership.",
          "A true burn follows a different path in the source NFT contract. In OpenZeppelin 5.4.0, transferFrom rejects the zero address as a recipient. The internal _update function supports minting, transfers, and burns, and _burn uses that burning path. An external assembler cannot simply invoke another contract’s internal _burn. The source contract needs to expose an authorized mechanism for destroying the token, such as a suitable burn function.",
          "The distinction is useful well beyond vocabulary. An indexer can still find a token held in custody. A later integration may need to know whether it exists and which contract controls it. Participants may want to understand whether assembly is reversible, whether an operator has a recovery power, or whether the originals are permanently beyond their control. The ownership transition establishes the beginning of those answers.",
          "The diagram shows the educational custody route. It separates the contribution of the inputs from the minting of the output, then contrasts custody with a real burn. The visible artistic result may be one new work; the complete token history can contain more than that single result."
        ],
        "sourceIds": [
          "credits-reading",
          "oz-erc721",
          "oz-burnable"
        ],
        "diagram": "assembly"
      },
      {
        "id": "one-transaction-many-calls",
        "title": "The last handoff is still part of the transaction",
        "paragraphs": [
          "The example performs its checks, input transfers, counter update, and output mint within one transaction. If a transfer or receiver check fails and that failure propagates out of the transaction, the earlier state changes in that transaction revert as well. The input collection should not remain partly transferred while the output fails to arrive. Code that catches an error can change this behavior, which is why the full call path matters.",
          "Minting safely introduces a further handoff. OpenZeppelin’s _safeMint can call onERC721Received when the recipient is a contract. That gives external code an opportunity to execute before the original transaction finishes. The receiver may reject the NFT or attempt another call into the assembler. The word “safe” describes a receiver-compatibility check; it does not establish that every possible interaction with the receiver is harmless.",
          "Relevant accounting should therefore be settled before control is handed outward, and every reachable entry point needs review. ReentrancyGuard can protect guarded functions, but the surrounding design still determines which states an external callback can observe and which other paths it can reach. This is where the apparently simple gesture of many objects becoming one becomes a transaction with several participants."
        ],
        "sourceIds": [
          "credits-reading",
          "oz-erc721",
          "oz-receiver",
          "solidity-revert"
        ]
      },
      {
        "id": "test-the-unhappy-path",
        "title": "Test the promise a participant thinks they accepted",
        "paragraphs": [
          "The most valuable tests describe what must remain true when assembly fails. A batch of 79 or 81 inputs should not behave like a valid group. A repeated ID, an NFT belonging to someone else, a missing approval, or a reached supply cap should leave a result consistent with the intended rules. Successful minting is only one path through the mechanism.",
          "Contract recipients make the test more revealing. One receiver can reject the output; another can attempt to reenter during its callback. When the failure propagates, the test should verify that neither collection has been left in a partial state. A counter that looks correct is insufficient if some inputs moved, or if an external path was able to act on accounting that had not yet been finalized.",
          "The final assertions must match the promised lifecycle. For custody, the assembler should own the contributed tokens. For a genuine burn, those source tokens should no longer exist. Compiler, library, and EVM versions should be pinned to the deployment being tested, so the implementation under examination is the one a participant will actually use.",
          "These checks turn a phrase such as “assemble 80 into one” into an inspectable agreement. They identify what the participant contributes, what they receive, and what should happen if the exchange cannot finish. That agreement is part of the work’s experience, even when it is expressed in code rather than on the canvas."
        ],
        "sourceIds": [
          "oz-erc721",
          "oz-receiver",
          "solidity-revert"
        ]
      },
      {
        "id": "read-the-mechanism",
        "title": "Leave the interpretation open and the ownership legible",
        "paragraphs": [
          "Credits makes an ordinary record available for an artistic transformation. Following its assembly idea into a contract reveals another kind of composition: eligibility, ownership, custody, minting, and rollback must fit together for the participant to receive what the mechanism appears to promise. Each boundary carries a piece of that meaning.",
          "The artist can leave room for many readings of the finished work. The system should still allow a participant to discover what happened to the objects they contributed. Custody can be a deliberate design choice. Destruction can be a deliberate design choice. Their consequences become part of the artwork’s provenance when they are explicit, and a source of confusion when a dramatic label stands in for them.",
          "So the question of what survives the 80-to-one transformation reaches beyond the token count. The original objects may survive in a contract; their ownership may instead be destroyed. In either case, the participant should be able to follow the decision through the record. A new work can change how we see its ingredients while keeping the promise made to their owner clear."
        ]
      }
    ],
    "sources": [
      {
        "id": "credits-reading",
        "label": "LearnBlockchain — the Credits assembly walkthrough",
        "url": "https://learnblockchain.cn/article/28746",
        "note": "September 27, 2026. Inspiration for this original English lesson. We distinguish the educational custody example from a true burn and from the artist’s production implementation."
      },
      {
        "id": "credits-project",
        "label": "Jack Butcher — Credits project and assembly schedule",
        "url": "https://jack.art/credits",
        "note": "Official art recipe and 80-to-1 concept. Schedule checked September 27, 2026; this is not a claim that assembly is already live."
      },
      {
        "id": "credits-allocation",
        "label": "Jack Butcher — original Credits allocation",
        "url": "https://jack.art/credits/rating",
        "note": "122,154 originally allocated Credits. This page is not a live circulating-supply or ownership check."
      },
      {
        "id": "oz-erc721",
        "label": "OpenZeppelin 5.4.0 — ERC721 implementation",
        "url": "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.4.0/contracts/token/ERC721/ERC721.sol",
        "note": "Version-pinned source for transferFrom, _update, _burn, and _safeMint."
      },
      {
        "id": "oz-burnable",
        "label": "OpenZeppelin 5.4.0 — ERC721Burnable",
        "url": "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.4.0/contracts/token/ERC721/extensions/ERC721Burnable.sol",
        "note": "An extension exposing burning to token owners and approved operators."
      },
      {
        "id": "oz-receiver",
        "label": "OpenZeppelin — ERC721 receiver checks",
        "url": "https://docs.openzeppelin.com/contracts/5.x/api/token/erc721",
        "note": "Safe transfers and safe minting interact with recipient contracts through onERC721Received."
      },
      {
        "id": "solidity-revert",
        "label": "Solidity — exceptions and state rollback",
        "url": "https://docs.soliditylang.org/en/latest/control-structures.html#error-handling-assert-require-revert-and-exceptions",
        "note": "Exception propagation, revert behavior, and the implications of catching errors."
      }
    ],
    "relatedSlugs": [
      "jev-decision-models",
      "erc-8004-agent-trust"
    ]
  }
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
