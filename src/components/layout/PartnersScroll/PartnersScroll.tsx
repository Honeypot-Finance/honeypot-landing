import PartnerScrollItem from "@/components/atoms/PartnerScrollItem/PartnerScrollItem";
import HorizontalScroll from "@/components/molecules/HorizontalScroll/HorizontalScroll";
import { partners, investors } from "@/data/partners";

export function InvestorsScroll() {
  const scrollItems = investors.map((investors, index) => ({
    content: (
      <PartnerScrollItem
        key={index}
        partnerLink={investors.partnerLink}
        partnerImage={investors.partnerImage}
      />
    ),
  }));

  return <HorizontalScroll stopOnHover items={scrollItems}></HorizontalScroll>;
}

export function PartnersScroll() {
  const scrollItems = partners.map((partners, index) => ({
    content: (
      <PartnerScrollItem
        key={index}
        partnerLink={partners.partnerLink}
        partnerImage={partners.partnerImage}
      />
    ),
  }));

  return <HorizontalScroll stopOnHover items={scrollItems}></HorizontalScroll>;
}
