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

export default function Home() {
  return (
    <main>
      <HomePageBanner />
      <SectionContainer title="Explore our dApps">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center gap-5">
          <IntroCard
            title="Pot2Pump"
            description="Meme Launch"
            image={blueAstro}
            linkTo={{
              href: "https://beta4.honeypotfinance.xyz/pot2pump/potting",
              display: "Potting ->",
            }}
            buttonColor="#80BFE5"
            style={{
              margin: "0 auto",
            }}
          >
            <br />
            <Button
              linkTo="https://beta4.honeypotfinance.xyz/pot2pump/pumping"
              color="#80BFE5"
            >
              {`Pumping ->`}
            </Button>
          </IntroCard>{" "}
          <IntroCard
            title="Henlo DEX"
            description="Swap tokens with low fees. "
            image={yellowFarmer}
            linkTo={{
              href: "https://beta4.honeypotfinance.xyz/swap",
              display: "Swap ->",
            }}
            style={{
              margin: "0 auto",
            }}
          >
            <br />
            <Button
              linkTo="https://beta4.honeypotfinance.xyz/pools"
              color="#ffcd4d"
            >
              Pools -&gt;
            </Button>
            <br />
            <Button
              linkTo="https://beta3.honeypotfinance.xyz/swap"
              color="#ffcd4d"
            >
              Beta 3 -&gt;
            </Button>
            <br />
            {/* <Button
              linkTo="https://beta2.honeypotfinance.xyz/swap"
              color="#ffcd4d"
            >
              Beta 2 -&gt;
            </Button> */}
          </IntroCard>
          <IntroCard
            title="NFT"
            description="HoneyGenesis NFT"
            image={redGangster}
            linkTo={{
              href: "https://nft.honeypotfinance.xyz/reveal",
              display: "Display ->",
            }}
            buttonColor="#FF9FA8"
            style={{
              margin: "0 auto",
            }}
          >
            <br />
            <Button
              linkTo="https://www.okx.com/web3/marketplace/nft/collection/arbi/honeygenesis-1"
              color="#FF9FA8"
            >
              OKX -&gt;
            </Button>
          </IntroCard>
        </div>
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
        Fairer Token Offering (FTO)
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

      <SectionContainer bgColor="transparent">
        <Link href={"https://forms.gle/E59zJqViUvSZbF2E6"}>
          <Image
            src={ctaPlaceholder}
            alt="cta"
            width={500}
            height={500}
            className="w-full m-auto"
          />
        </Link>
      </SectionContainer>

      <h2 className="text-4xl font-bold ml-[10%]">Stay up to date</h2>
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
      </SectionContainer>

      <h2 className="text-4xl font-bold ml-[10%]">
        Frequently asked questions
      </h2>
      <SectionContainer bgColor="transparent">
        <HomePageQuestions />
      </SectionContainer>
    </main>
  );
}
