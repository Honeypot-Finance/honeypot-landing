import PartnerScrollItem from "@/components/atoms/PartnerScrollItem/PartnerScrollItem";
import HorizontalScroll from "@/components/molecules/HorizontalScroll/HorizontalScroll";

import dexTools from "@/assets/partners/dexTools.jpg";
import pudgyAlpha from "@/assets/partners/pudgyAlpha.jpg";
import SanyuanCapital from "@/assets/partners/SanyuanCapital.jpg";
import CandaqCom from "@/assets/partners/CandaqCom.jpg";
//import _0xsky404 from "@/assets/partners/0xsky404.jpg";
import TKXCAPITAL from "@/assets/partners/TKXCAPITAL.jpg";
import csp_dao from "@/assets/partners/csp_dao.png";
import aquanow from "@/assets/partners/aquanow.png";
import Web3PortFund from "@/assets/partners/Web3PortFund.jpg";
import EnigmaValidator from "@/assets/partners/EnigmaValidator.png";
import ACCapital1 from "@/assets/partners/ACCapital1.jpg";

const partners = [
  {
    partnerLink: "https://www.dextools.io/app/en/hot-pairs",
    partnerImage: dexTools,
  },
  {
    partnerLink: "https://media.pudgypenguins.com/clubs",
    partnerImage: pudgyAlpha,
  },
  {
    partnerLink: "https://www.sanyuanlab.com/",
    partnerImage: SanyuanCapital,
  },
  {
    partnerLink: "https://candaq.com/",
    partnerImage: CandaqCom,
  },
  {
    partnerLink: "https://link3.to/tkx",
    partnerImage: TKXCAPITAL,
  },
  {
    partnerLink: "https://www.cspdao.network/",
    partnerImage: csp_dao,
  },
  {
    partnerLink: "https://www.aquanow.com/",
    partnerImage: aquanow,
  },
  {
    partnerLink: "https://www.web3port.foundation/",
    partnerImage: Web3PortFund,
  },
  {
    partnerLink: "https://enigma-validator.com/",
    partnerImage: EnigmaValidator,
  },
  {
    partnerLink: "https://accapital.io/",
    partnerImage: ACCapital1,
  },
];

export default function PartnersScroll() {
  const scrollItems = partners.map((partner, index) => ({
    content: (
      <PartnerScrollItem
        key={index}
        partnerLink={partner.partnerLink}
        partnerImage={partner.partnerImage}
      />
    ),
  }));

  return <HorizontalScroll stopOnHover items={scrollItems}></HorizontalScroll>;
}
