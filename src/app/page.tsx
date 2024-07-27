import styles from "./page.module.scss";
import styleVar from "@/styles/variables";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

//images
import bannerImage from "@/assets/banner.png";
import beraLabTester from "@/assets/beraLabTester.png";
import HomePageBanner from "@/components/layout/HomePageBanner/HomePageBanner";
import SectionContainer from "@/components/atoms/SectionContainer/SectionContainer";
import IntroCard from "@/components/atoms/IntroCard/IntroCard";

export default function Home() {
  return (
    <main className={styles["main"]}>
      <HomePageBanner />
      <SectionContainer title="Explore our Apps">
        <IntroCard
          title="About"
          description="This is a description about the company"
          image={beraLabTester}
          linkTo={{ href: "/", display: "Learn More" }}
        />
        <IntroCard
          title="About"
          description="This is a description about the company"
          image={beraLabTester}
          linkTo={{ href: "/", display: "Learn More" }}
        />
        <IntroCard
          title="About"
          description="This is a description about the company"
          image={beraLabTester}
          linkTo={{ href: "/", display: "Learn More" }}
        />
      </SectionContainer>
    </main>
  );
}
