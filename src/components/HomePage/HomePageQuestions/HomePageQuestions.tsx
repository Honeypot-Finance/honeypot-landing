"use client";
// @ts-ignore
import "./HomePageQuestions.scss";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import chevronDown from "@/assets/functionIcons/chevron-down.svg";
import Image from "next/image";

export default function HomePageQuestions() {
  return (
    <Accordion transition transitionTimeout={250}>
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <AccordionItem
        header={
          <div className=" w-full flex justify-between items-center">
            <span>
              How does the selection process for DreamPad candidates work?
            </span>
            <span>
              <Image
                className="chevron-down"
                src={chevronDown}
                alt=""
                width={25}
                height={25}
              />
            </span>
          </div>
        }
        initialEntered
      >
        <p className="text-2xl font-bold max-w-[70%]">
          Our selection process for DreamPad candidates is entirely
          community-driven:
        </p>
        <br />
        <ul className="pl-[2rem]">
          <li>
            <strong>Proposal creation:</strong> Community members propose
            potential projects.
          </li>
          <br />
          <li>
            <strong>Voting:</strong> NFT holders vote on these proposals with
            equal rights.
          </li>
          <li>
            <br />
            <strong>Evaluation:</strong> We have a robust team of developers and
            advisors who thoroughly evaluate the queued projects that want to
            launch through the Honeypot. Then we provide Honeypot Finance’s
            community with fair and objective information based on our
            assessments.
          </li>
          <br />
          <li>
            <strong>Community decision:</strong> The community makes the final
            decision through voting, ensuring an unbiased and representative
            outcome.
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem
        header={
          <div className=" w-full flex justify-between items-center">
            <span>
              If I come across a risky project engaging in suspicious activities
              that could potentially turn out to be a scam, is there a way to
              stop it once it has been launched on Dreampad?
            </span>
            <span>
              <Image
                className="chevron-down"
                src={chevronDown}
                alt=""
                width={25}
                height={25}
              />
            </span>
          </div>
        }
      >
        <p>
          HoneyGenesis NFT holders can stop launches on DreamPad through
          community voting. Even during an active launch, proposals can be
          created.{" "}
          <strong>
            If the vote surpasses a certain threshold, our smart contract, which
            incorporates OpenZeppelin's pause mechanism, can halt the launch.
          </strong>{" "}
          Participants will receive refunds as funds are kept in the AMM pool,
          which is fully decentralized.
        </p>
      </AccordionItem>
      <AccordionItem
        header={
          <div className=" w-full flex justify-between items-center">
            <span>How does DreamPad ensure fair pricing for participants?</span>
            <span>
              <Image
                className="chevron-down"
                src={chevronDown}
                alt=""
                width={25}
                height={25}
              />
            </span>
          </div>
        }
      >
        <p className="text-2xl font-bold max-w-[70%]">
          DreamPad ensures fair pricing through our innovative Fair Token
          Offering (FTO) model, which includes several key features:
        </p>
        <br />
        <ul className="pl-[2rem]">
          <li>
            <strong>Fair Access:</strong> Uniform pricing across all users
            ensures no single user gains an unfair advantage, promoting
            equitable token distribution.
          </li>
          <br />
          <li>
            <strong>Immediate Liquidity:</strong> A 100% deep liquidity pool is
            established immediately, enabling instant user trading and improving
            market efficiency and confidence.
          </li>
          <br />
          <li>
            <strong>No Pre-minted Tokens:</strong> Tokens exist only within the
            liquidity pool, preventing market manipulation by early investors.
          </li>
          <br />
          <li>
            <strong>Transparency:</strong> Users who missed the initial sale can
            only purchase tokens through the AMM pool, ensuring transparent and
            fair token distribution.
          </li>
          <br />
          <li>
            <strong>Anti-Dumping Measures:</strong> The optional token burn
            after liquidity removal demonstrates the project owner's commitment
            to market stability and investor confidence.
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem
        header={
          <div className=" w-full flex justify-between items-center">
            <span>How can I apply for DreamPad as a project?</span>
            <span>
              <Image
                className="chevron-down"
                src={chevronDown}
                alt=""
                width={25}
                height={25}
              />
            </span>
          </div>
        }
      >
        <p className="">
          If you are interested in applying for DreamPad, please contact our
          team on Discord or Telegram. We also offer incubation services: join
          us and take your project to the next level. Honeypot Finance is your
          gateway to the Berachain Ecosystem!{" "}
          <a
            href="https://forms.gle/76Fij8uRWxZ91sbt6"
            className=" underline text-blue-500"
          >
            fill this form to contact us
          </a>
        </p>
      </AccordionItem>
    </Accordion>
  );
}
