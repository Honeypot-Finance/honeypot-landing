import styles from "./page.module.scss";
import HomePageBanner from "@/components/HomePage/HomePageBanner/HomePageBanner";
import SectionContainer from "@/components/atoms/SectionContainer/SectionContainer";
import IntroCard from "@/components/atoms/IntroCard/IntroCard";
import HorizontalScroll from "@/components/molecules/HorizontalScroll/HorizontalScroll";
import PartnerScrollItem from "@/components/atoms/PartnerScrollItem/PartnerScrollItem";
import FTOIntro from "@/components/HomePage/FTO/FTOIntro";
import Image from "next/image";

//images
import ctaPlaceholder from "@/assets/ctaPlaceholder.svg";
import discord from "@/assets/medias/discord.svg";
import twitter from "@/assets/medias/twitter.svg";
import medium from "@/assets/medias/medium.svg";
import x_social from "@/assets/medias/x-social-media-round-icon.svg";
import yellowFarmer from "@/assets/beraIcon/yellowFarmer.svg";
import blueAstro from "@/assets/beraIcon/blueAstro.svg";
import redGangster from "@/assets/beraIcon/redGangster.svg";
import wasabee_pot from "@/assets/beraIcon/wasabee_pot.png";
import HomePageQuestions from "@/components/HomePage/HomePageQuestions/HomePageQuestions";
import {
  PartnersScroll,
  InvestorsScroll,
} from "@/components/layout/PartnersScroll/PartnersScroll";
import FTOFairAccess from "@/components/HomePage/FTO/FTOFairAccess/FTOFairAccess";
import FTOImmediateLiquidity from "@/components/HomePage/FTO/FTOImmediateLiquidity/FTOImmediateLiquidity";
import FTOPriceStability from "@/components/HomePage/FTO/FTOPriceStability/FTOPriceStability";
import FTOInstantEarning from "@/components/HomePage/FTO/FTOInstantEarning/FTOInstantEarning";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";
import HoneypotAcademiaIntro from "@/components/molecules/HoneypotAcademiaIntro/HoneypotAcademiaIntro";
import BerachainIntro from "@/components/molecules/BerachainIntro/BerachainIntro";
import { DOMAIN_MAP } from "@/data/pathData";

export default function Home() {
  return (
    <main>
      <HomePageBanner />
      <SectionContainer title="Explore our dApps">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center gap-5 p-5">
          <IntroCard
            title="Pot2Pump"
            description=""
            image={blueAstro}
            linkTo={{
              href: "https://beta4.honeypotfinance.xyz/pot2pump/overview",
              display: "Meme Launch",
            }}
            buttonColor="#80BFE5"
            style={{
              margin: "0 auto",
            }}
          ></IntroCard>{" "}
          <IntroCard
            title="Pot-Wasabee DEX"
            description=""
            image={wasabee_pot}
            linkTo={{
              href: `${DOMAIN_MAP.WASABEE}/swap`,
              display: "Swap",
            }}
            style={{
              margin: "0 auto",
            }}
          >
            <br />
            <Button linkTo={`${DOMAIN_MAP.WASABEE}/pools`} color="#ffcd4d">
              Pools
            </Button>
          </IntroCard>
          <IntroCard
            title="NFT"
            description="HoneyGenesis NFT"
            image={redGangster}
            linkTo={{
              href: "https://www.okx.com/web3/marketplace/nft/collection/arbi/honeygenesis-1",
              display: "Buy on OKX",
            }}
            buttonColor="#FF9FA8"
            style={{
              margin: "0 auto",
            }}
          ></IntroCard>
        </div>
      </SectionContainer>

      <SectionContainer bgColor="transparent">
        <Link href={"https://forms.gle/E59zJqViUvSZbF2E6"} target="_blank">
          <Image
            src={ctaPlaceholder}
            alt="cta"
            width={500}
            height={500}
            className="w-full m-auto"
          />
        </Link>
      </SectionContainer>

      <Link href={"/partners"}>
        <h2 className="text-center text-4xl font-bold m-5">Backed By -&gt;</h2>
      </Link>
      <InvestorsScroll />
      <Link href={"/partners"}>
        <h2 className="text-center text-4xl font-bold m-5">Partners -&gt;</h2>
      </Link>
      <PartnersScroll />

      <h2 className="text-center text-4xl font-bold m-5">
        Fair Token Offering (FTO)
      </h2>
      <SectionContainer
        style={{
          maxWidth: "800px",
        }}
        bgColor="transparent"
      >
        <FTOFairAccess />
        <FTOImmediateLiquidity />
        <FTOPriceStability />
        <FTOInstantEarning />
      </SectionContainer>

      {/* <h2 className="text-4xl font-bold ml-[10%]">Stay up to date</h2>
      <SectionContainer bgColor="transparent">
        <IntroCard
          IconSize="small"
          title="Be part of our community "
          image={discord}
          linkTo={{
            href: "https://discord.gg/honeypotfi",
            display: "Join Discord",
          }}
        />
        <IntroCard
          IconSize="small"
          title="Stay up to date with us"
          image={x_social}
          linkTo={{
            href: "https://x.com/honeypotfinance",
            display: "Follow X",
          }}
        />
        <IntroCard
          IconSize="small"
          title="Read about Honeypot"
          image={medium}
          linkTo={{
            href: "https://medium.com/@honeypotfinance1",
            display: "Read Medium",
          }}
        />
      </SectionContainer> */}

      {/* <h2 className="text-4xl font-bold ml-[10%]">
        Frequently asked questions
      </h2>
      <SectionContainer bgColor="transparent">
        <HomePageQuestions />
      </SectionContainer> */}
      {/* <HoneypotAcademiaIntro /> */}
      {/* <BerachainIntro /> */}
    </main>
  );
}
