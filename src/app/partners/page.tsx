import SectionContainer from "@/components/atoms/SectionContainer/SectionContainer";
import IntroCard from "@/components/atoms/IntroCard/IntroCard";
import { partners, investors } from "@/config/partners";

export default function PartnersPage() {
  return (
    <main>
      <h2 className="text-center text-4xl font-bold m-5">Partners List</h2>
      <SectionContainer title="Investors">
        {investors.map((investor, index) => (
          <IntroCard
            key={index}
            title={investor.name ?? "Investor"}
            description="Investor"
            image={investor.partnerImage}
            linkTo={{
              href: investor.partnerLink,
              display: "Visit ->",
            }}
          />
        ))}
      </SectionContainer>

      <SectionContainer title="Partners">
        {partners.map((partner, index) => (
          <IntroCard
            key={index}
            title={partner.name ?? "Partner"}
            description="Partner"
            image={partner.partnerImage}
            linkTo={{
              href: partner.partnerLink,
              display: "Visit ->",
            }}
          />
        ))}
      </SectionContainer>
    </main>
  );
}
