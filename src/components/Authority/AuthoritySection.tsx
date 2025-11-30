import Image from "next/image";
import Link from "next/link";

/**
 * Authority Section Component
 *
 * Displays detailed team profiles with credentials, experience, and contributions
 * to establish E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
 */

const teamMembers = [
  {
    name: "Wilson",
    role: "CEO & Co-Founder",
    twitter: "https://twitter.com/0xWilsonWu",
    twitterHandle: "@0xWilsonWu",
    credentials: "Former CTO",
    experience:
      "10+ years in software engineering. Led development teams at major tech companies before transitioning to blockchain.",
    contributions: [
      "Founded Honeypot Finance vision",
      "Strategic partnerships",
      "Product direction",
    ],
  },
  {
    name: "Taki",
    role: "CTO & Co-Founder",
    twitter: "https://twitter.com/0xTaki_eth",
    twitterHandle: "@0xTaki_eth",
    credentials: "Ph.D. in Blockchain",
    experience:
      "Blockchain researcher and architect. Contributed to multiple well-known DeFi protocols.",
    contributions: [
      "Core protocol architecture",
      "Smart contract design",
      "Security infrastructure",
    ],
  },
  {
    name: "Pot the Bera",
    role: "Operations Manager",
    twitter: "https://twitter.com/PotTheBera",
    twitterHandle: "@PotTheBera",
    credentials: "Operations Expert",
    experience:
      "Extensive experience in DeFi operations and community management across multiple protocols.",
    contributions: [
      "Day-to-day operations",
      "Community relations",
      "Process optimization",
    ],
  },
  {
    name: "Ian",
    role: "Marketing & Partnerships",
    twitter: "https://twitter.com/naibother_",
    twitterHandle: "@naibother_",
    credentials: "BD Specialist",
    experience:
      "Years of experience in Web3 marketing and building strategic partnerships.",
    contributions: [
      "Brand development",
      "Partner integrations",
      "Growth strategy",
    ],
  },
  {
    name: "Yogi",
    role: "Design Manager",
    twitter: null,
    twitterHandle: null,
    credentials: "Senior Designer",
    experience:
      "Expert in UI/UX design with focus on DeFi and Web3 user experiences.",
    contributions: ["UI/UX design", "Brand identity", "Product design"],
  },
  {
    name: "Punk",
    role: "Smart Contract Developer",
    twitter: "https://x.com/punk2sang",
    twitterHandle: "@punk2sang",
    credentials: "Top 500 Developer",
    experience:
      "Senior blockchain developer ranked in top 500. Extensive Solidity and DeFi protocol experience.",
    contributions: [
      "Smart contract development",
      "Protocol integrations",
      "Code audits",
    ],
  },
];

const notablePartners = [
  { name: "Chainlink", type: "Infrastructure", description: "Oracle network" },
  { name: "Axelar", type: "Cross-chain", description: "Bridge protocol" },
  { name: "OKX", type: "Exchange", description: "Global exchange" },
  { name: "Bitget Wallet", type: "Wallet", description: "Web3 wallet" },
  {
    name: "Particle Network",
    type: "Infrastructure",
    description: "Chain abstraction",
  },
  { name: "Algebra", type: "AMM Technology", description: "DEX engine" },
  { name: "Fjord Foundry", type: "Token Launch", description: "LBP platform" },
  { name: "ICHI", type: "Vault Technology", description: "Liquidity vaults" },
];

const notableInvestors = [
  {
    name: "Mask Network",
    type: "Web3 Social",
    description: "Leading Web3 social layer",
  },
  {
    name: "AC Capital",
    type: "Venture Capital",
    description: "Crypto-focused VC",
  },
  {
    name: "TKX Capital",
    type: "Venture Capital",
    description: "Blockchain VC",
  },
  {
    name: "Sanyuan Capital",
    type: "Venture Capital",
    description: "DeFi investor",
  },
  {
    name: "Aquanow",
    type: "Institutional",
    description: "Digital asset infrastructure",
  },
  { name: "CSP DAO", type: "DAO", description: "Decentralized fund" },
];

export function AuthoritySection() {
  return (
    <section
      className="w-full py-16 px-4 relative z-10"
      aria-labelledby="authority-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="authority-heading"
            className="text-3xl sm:text-4xl md:text-5xl text-white font-poppins font-bold mb-4"
          >
            Built by Industry Experts
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Our team includes{" "}
            <strong className="text-white">
              Ph.D. specialists in blockchain
            </strong>
            , <strong className="text-white">former CTOs</strong>,{" "}
            <strong className="text-white">
              senior developers ranked in the top 500
            </strong>
            , and{" "}
            <strong className="text-white">
              contributors to well-known blockchain projects
            </strong>
            .
          </p>
        </div>

        {/* Team Grid - Expanded Profiles */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#FFCD4D] mb-6 text-center">
            Leadership Team
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            itemProp="member"
          >
            {teamMembers.map((member, index) => (
              <article
                key={index}
                className="bg-[#1F1609] border border-[#3a2f1a] rounded-xl p-5 hover:border-[#FFCD4D]/50 transition-colors"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-[#FFCD4D] to-[#F7931A] flex items-center justify-center">
                    <span className="text-xl font-bold text-black">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Name and Role */}
                    <h4
                      className="text-white font-bold text-base mb-0.5"
                      itemProp="name"
                    >
                      {member.name}
                    </h4>
                    <p
                      className="text-[#FFCD4D] text-sm font-medium mb-1"
                      itemProp="jobTitle"
                    >
                      {member.role}
                    </p>

                    {/* Credentials Badge */}
                    <span className="inline-block bg-[#2a1f0e] text-gray-300 px-2 py-0.5 rounded text-xs mb-2">
                      {member.credentials}
                    </span>

                    {/* Twitter */}
                    {member.twitter && (
                      <Link
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-400 text-xs hover:text-[#FFCD4D] transition-colors"
                        itemProp="sameAs"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        {member.twitterHandle}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Experience */}
                <p
                  className="text-gray-400 text-xs mt-3 leading-relaxed"
                  itemProp="description"
                >
                  {member.experience}
                </p>

                {/* Contributions */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {member.contributions.map((contribution, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-[#3a2f1a] text-gray-300 px-2 py-0.5 rounded-full"
                    >
                      {contribution}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Partners & Investors Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Notable Technology Partners */}
          <div className="bg-[#1F1609] border border-[#3a2f1a] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FFCD4D]">⚡</span>
              Technology Partners
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              <strong className="text-white">
                Honeypot Finance integrates with leading blockchain
                infrastructure providers
              </strong>{" "}
              including oracle networks, cross-chain bridges, and AMM technology
              partners.
            </p>
            <div className="space-y-2">
              {notablePartners.slice(0, 4).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-white font-medium">{partner.name}</span>
                  <span className="text-gray-500 text-xs">
                    {partner.description}
                  </span>
                </div>
              ))}
              <p className="text-gray-500 text-xs pt-2">
                + {notablePartners.length - 4} more partners
              </p>
            </div>
          </div>

          {/* Notable Investors */}
          <div className="bg-[#1F1609] border border-[#3a2f1a] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FFCD4D]">💰</span>
              Backed By
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              <strong className="text-white">
                Honeypot Finance is backed by prominent venture capital firms
                and Web3 organizations
              </strong>{" "}
              with deep expertise in DeFi and blockchain technology.
            </p>
            <div className="space-y-2">
              {notableInvestors.slice(0, 4).map((investor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-white font-medium">{investor.name}</span>
                  <span className="text-gray-500 text-xs">
                    {investor.description}
                  </span>
                </div>
              ))}
              <p className="text-gray-500 text-xs pt-2">
                + {notableInvestors.length - 4} more investors
              </p>
            </div>
          </div>
        </div>

        {/* Team Page Link */}
        <div className="mt-10 text-center">
          <Link
            href="https://docs.honeypotfinance.xyz/more-info/our-team"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2a1f0e] hover:bg-[#3a2f1a] text-[#FFCD4D] font-medium py-3 px-6 rounded-full transition-colors text-sm"
          >
            View Full Team Profiles
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <p className="text-gray-500 text-xs mt-3">
            Full bios, backgrounds, and contributions available in our
            documentation
          </p>
        </div>
      </div>
    </section>
  );
}
