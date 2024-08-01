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
import kingdomly from "@/assets/partners/kingdomly.png";
import beraroot from "@/assets/partners/beraroot.png";
import oogabooga from "@/assets/partners/oogabooga.jpg";
import infrared from "@/assets/partners/infrared.png";
import honeycast from "@/assets/partners/honeycast.jpg";
import d2finance from "@/assets/partners/d2finance.svg";
import beraboyz from "@/assets/partners/beraboyz.jpg";
import arebmeme from "@/assets/partners/arebmeme.jpg";

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
  {
    partnerLink: "https://www.kingdomly.info/",
    partnerImage: kingdomly,
  },
  {
    partnerLink: "https://beraroot.com/",
    partnerImage: beraroot,
  },
  {
    partnerLink: "https://x.com/0xoogabooga",
    partnerImage: oogabooga,
  },
  {
    partnerLink: "https://infrared.finance/",
    partnerImage: infrared,
  },
  {
    partnerLink: "https://linktr.ee/TheHoneyCast",
    partnerImage: honeycast,
  },
  {
    partnerLink: "https://d2.finance/strategies",
    partnerImage: d2finance,
  },
  {
    partnerLink: "https://x.com/BeraBoyzGG",
    partnerImage: beraboyz,
  },
  {
    partnerLink: "https://x.com/arebmeme",
    partnerImage: arebmeme,
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
