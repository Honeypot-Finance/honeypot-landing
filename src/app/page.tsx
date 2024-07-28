import styles from "./page.module.scss";
import HomePageBanner from "@/components/layout/HomePageBanner/HomePageBanner";
import SectionContainer from "@/components/atoms/SectionContainer/SectionContainer";
import IntroCard from "@/components/atoms/IntroCard/IntroCard";
import HorizontalScroll from "@/components/molecules/HorizontalScroll/HorizontalScroll";
import PartnerScrollItem from "@/components/atoms/PartnerScrollItem/PartnerScrollItem";
import FTOIntro from "@/components/HomePage/FTOIntro/FTOIntro";
import Image from "next/image";

//images
import bannerImage from "@/assets/banner.png";
import beraLabTester from "@/assets/beraLabTester.png";
import ctaPlaceholder from "@/assets/ctaPlaceholder.svg";
import discord from "@/assets/medias/discord.svg";
import twitter from "@/assets/medias/twitter.svg";
import medium from "@/assets/medias/medium.svg";
import yellowFarmer from "@/assets/beraIcon/yellowFarmer.svg";
import blueAstro from "@/assets/beraIcon/blueAstro.svg";
import redGangster from "@/assets/beraIcon/redGangster.svg";
import googlePay from "@/assets/partners/GooglePay.svg";
import Klarna from "@/assets/partners/Klarna.png";
import Maestro from "@/assets/partners/Maestro.svg";
import SamsungPay from "@/assets/partners/SamsungPay.svg";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import HomePageQuestions from "@/components/HomePage/HomePageQuestions/HomePageQuestions";

export default function Home() {
  return (
    <main className={styles["main"]}>
      <HomePageBanner />
      <SectionContainer title="Explore our Apps">
        <IntroCard
          title="Henlo Dex"
          description="Swap tokens with low fees. "
          image={yellowFarmer}
          linkTo={{ href: "/", display: "Launch App ->" }}
        />
        <IntroCard
          title="Dreampad"
          description="Launch your token"
          image={blueAstro}
          linkTo={{ href: "/", display: "Launch App ->" }}
          buttonColor="#80BFE5"
        />
        <IntroCard
          title="Incubate"
          description="Launch your project "
          image={redGangster}
          linkTo={{ href: "/", display: "Apply" }}
          buttonColor="#FF9FA8"
        />
      </SectionContainer>

      <h2 className="text-center text-4xl font-bold m-5">Tursted By</h2>
      <HorizontalScroll
        stopOnHover
        items={[
          {
            content: (
              <PartnerScrollItem
                partnerLink="/"
                partnerImage={googlePay}
              ></PartnerScrollItem>
            ),
          },
          {
            content: (
              <PartnerScrollItem
                partnerLink="/"
                partnerImage={Klarna}
              ></PartnerScrollItem>
            ),
          },
          {
            content: (
              <PartnerScrollItem
                partnerLink="/"
                partnerImage={Maestro}
              ></PartnerScrollItem>
            ),
          },
          {
            content: (
              <PartnerScrollItem
                partnerLink="/"
                partnerImage={SamsungPay}
              ></PartnerScrollItem>
            ),
          },
        ]}
      ></HorizontalScroll>

      <SectionContainer title="FTO">
        <FTOIntro />
      </SectionContainer>

      <SectionContainer bgColor="transparent">
        <Image
          src={ctaPlaceholder}
          alt="cta"
          width={500}
          height={500}
          className="w-full m-auto"
        />
      </SectionContainer>

      <h2 className="text-4xl font-bold ml-[10%]">Stay up to date</h2>
      <SectionContainer bgColor="transparent">
        <IntroCard
          IconSize="small"
          title="Be apart of our community "
          image={discord}
          linkTo={{ href: "/", display: "Join Discord" }}
        />
        <IntroCard
          IconSize="small"
          title="Stay up to date with us "
          image={twitter}
          linkTo={{ href: "/", display: "Follow Twitter" }}
        />
        <IntroCard
          IconSize="small"
          title="Read about Honeypot"
          image={medium}
          linkTo={{ href: "/", display: "Read Medium" }}
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