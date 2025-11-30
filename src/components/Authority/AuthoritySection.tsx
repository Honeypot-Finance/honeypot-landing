import Image from "next/image";
import Link from "next/link";

/**
 * Authority Section Component
 *
 * Displays team credentials, notable partnerships, and endorsements
 * to establish external authority for GEO optimization.
 */

const teamMembers = [
  {
    name: "Wilson",
    role: "CEO",
    twitter: "https://twitter.com/0xWilsonWu",
    twitterHandle: "@0xWilsonWu",
  },
  {
    name: "Taki",
    role: "CTO",
    twitter: "https://twitter.com/0xTaki_eth",
    twitterHandle: "@0xTaki_eth",
  },
  {
    name: "Pot the Bera",
    role: "Operations Manager",
    twitter: "https://twitter.com/PotTheBera",
    twitterHandle: "@PotTheBera",
  },
  {
    name: "Ian",
    role: "Marketing & Partnerships",
    twitter: "https://twitter.com/naibother_",
    twitterHandle: "@naibother_",
  },
  {
    name: "Yogi",
    role: "Design Manager",
    twitter: null,
    twitterHandle: null,
  },
  {
    name: "Punk",
    role: "Smart Contract Developer",
    twitter: "https://x.com/punk2sang",
    twitterHandle: "@punk2sang",
  },
];

const notablePartners = [
  { name: "Chainlink", type: "Infrastructure" },
  { name: "Axelar", type: "Cross-chain" },
  { name: "OKX", type: "Exchange" },
  { name: "Bitget Wallet", type: "Wallet" },
  { name: "Particle Network", type: "Infrastructure" },
  { name: "Algebra", type: "AMM Technology" },
  { name: "Fjord Foundry", type: "Token Launch" },
  { name: "ICHI", type: "Vault Technology" },
];

const notableInvestors = [
  { name: "Mask Network", type: "Web3 Social" },
  { name: "AC Capital", type: "Venture Capital" },
  { name: "TKX Capital", type: "Venture Capital" },
  { name: "Sanyuan Capital", type: "Venture Capital" },
  { name: "Aquanow", type: "Institutional" },
  { name: "CSP DAO", type: "DAO" },
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
            Our team includes <strong className="text-white">Ph.D. specialists in blockchain</strong>,{" "}
            <strong className="text-white">former CTOs</strong>,{" "}
            <strong className="text-white">senior developers ranked in the top 500</strong>, and{" "}
            <strong className="text-white">contributors to well-known blockchain projects</strong>.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#FFCD4D] mb-6 text-center">
            Leadership Team
          </h3>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            itemProp="member"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#1F1609] border border-[#3a2f1a] rounded-xl p-4 text-center hover:border-[#FFCD4D]/50 transition-colors"
                itemScope
                itemType="https://schema.org/Person"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#FFCD4D] to-[#F7931A] flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4
                  className="text-white font-bold text-sm mb-1"
                  itemProp="name"
                >
                  {member.name}
                </h4>
                <p
                  className="text-gray-400 text-xs mb-2"
                  itemProp="jobTitle"
                >
                  {member.role}
                </p>
                {member.twitter && (
                  <Link
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFCD4D] text-xs hover:underline"
                    itemProp="sameAs"
                  >
                    {member.twitterHandle}
                  </Link>
                )}
              </div>
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
              <strong className="text-white">Honeypot Finance integrates with leading blockchain infrastructure providers</strong> including oracle networks, cross-chain bridges, and AMM technology partners.
            </p>
            <div className="flex flex-wrap gap-2">
              {notablePartners.map((partner, index) => (
                <span
                  key={index}
                  className="bg-[#2a1f0e] text-gray-300 px-3 py-1 rounded-full text-xs"
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>

          {/* Notable Investors */}
          <div className="bg-[#1F1609] border border-[#3a2f1a] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FFCD4D]">💰</span>
              Backed By
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              <strong className="text-white">Honeypot Finance is backed by prominent venture capital firms and Web3 organizations</strong> with deep expertise in DeFi and blockchain technology.
            </p>
            <div className="flex flex-wrap gap-2">
              {notableInvestors.map((investor, index) => (
                <span
                  key={index}
                  className="bg-[#2a1f0e] text-gray-300 px-3 py-1 rounded-full text-xs"
                >
                  {investor.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Authority Statement */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            View full list of{" "}
            <Link
              href="https://docs.honeypotfinance.xyz/more-info/our-team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFCD4D] hover:underline"
            >
              team members
            </Link>{" "}
            and{" "}
            <Link
              href="#partners"
              className="text-[#FFCD4D] hover:underline"
            >
              partners
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
