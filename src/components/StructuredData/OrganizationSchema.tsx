export function OrganizationSchema() {
  const baseUrl = "https://honeypotfinance.xyz";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Honeypot Finance",
        alternateName: "Honeypot",
        url: baseUrl,
        logo: `${baseUrl}/images/editorial/honeypot-logo.png`,
        description: "An AI and Web3 discovery network sharing technology, education, and smart contract licensing opportunities.",
        knowsAbout: ["Artificial intelligence", "Web3", "Technical education", "Smart contract licensing"],
        sameAs: [
          "https://x.com/honeypotfinance",
          "https://discord.gg/NfnK78KJxH",
          "https://medium.com/@HoneypotFinance1",
          "https://github.com/Honeypot-Finance",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        name: "Honeypot Finance",
        url: baseUrl,
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: "en",
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
