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

        <ul className="pl-[2rem] *:m-5">
          <li>
            <strong>Fair Access:</strong> Uniform pricing across all users
            ensures no single user gains an unfair advantage, promoting
            equitable token distribution.
          </li>

          <li>
            <strong>Immediate Liquidity:</strong> A 100% deep liquidity pool is
            established immediately, enabling instant user trading and improving
            market efficiency and confidence.
          </li>

          <li>
            <strong>No Pre-minted Tokens:</strong> Tokens exist only within the
            liquidity pool, preventing market manipulation by early investors.
          </li>

          <li>
            <strong>Transparency:</strong> Users who missed the initial sale can
            only purchase tokens through the AMM pool, ensuring transparent and
            fair token distribution.
          </li>

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
            <span>
              As a user wanting to participate in the token launch campaign on
              Honeypot Finance, what measures have you implemented to prevent
              rug pulls?
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
        <p className="text-2xl font-bold max-w-[70%]">
          At Honeypot Finance, we prioritize the security and trust of our
          community. To mitigate the risk of rug pulls, we've implemented
          several robust mechanisms:
        </p>

        <ol className="pl-[1rem] *:m-5">
          <li className="list-decimal">
            <strong>Democratic Voting and Pause Mechanism:</strong>
          </li>

          <ul>
            <li>
              We believe in the collective wisdom of our community. Our platform
              incorporates a robust democratic voting and pause mechanism,
              allowing users to halt suspicious activities promptly. This helps
              prevent potential rug pulls effectively.
            </li>
          </ul>

          <li className="list-decimal">
            <strong>Launch Model:</strong>
          </li>

          <ul className="*:m-5">
            <li>
              Our launch model is designed to make rug pulls economically
              non-viable. Here's how it works:
            </li>

            <li>
              <strong>Liquidity Pool (LP) Token Launch:</strong>
            </li>

            <ul className="*:m-5">
              <li>
                We launch LP tokens and immediately add them to our HenloDex.
                This approach ensures projects earn transaction fees as LP
                providers, creating a long-term revenue stream.
              </li>

              <li>
                By doing this, projects are not incentivized to dump tokens for
                short-term gains. Instead, they benefit from sustained earnings.
              </li>
            </ul>

            <li>
              <strong>Liquidity Removal and Token Burn Mechanism:</strong>
            </li>

            <ul className="*:m-5">
              <li>
                When a project removes liquidity from the pool, the token’s
                value remains stable due to the constant K formula used in our
                Automated Market Maker (AMM) model.
              </li>

              <li>
                Additionally, projects can choose to burn their tokens while
                removing liquidity. This burning mechanism reduces the token
                supply, thereby supporting the token's price.
              </li>
            </ul>
          </ul>
        </ol>

        <p>
          Our approach ensures that the long-term benefits of maintaining
          liquidity and earning transaction fees outweigh the short-term gains
          from a potential rug pull. This economic incentive structure makes rug
          pulls highly unlikely and aligns the interests of projects with those
          of the community.
        </p>
      </AccordionItem>

      <AccordionItem
        header={
          <div className=" w-full flex justify-between items-center">
            <span>
              I am a user who wants to participate in the token launch campaign
              on Honeypot Finance. How likely is it that I will see the
              promotion of token launch success and sustainability?
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
        <p className="text-2xl font-bold max-w-[70%]">
          The likelihood of experiencing successful and sustainable token
          launches on Honeypot Finance is very high. Our Fair Token Offering
          (FTO) model incorporates several built-in advantages to ensure the
          success of token launches.
        </p>
        <br />
        <p>
          {" "}
          You can explore all the benefits of our FTO model on our{" "}
          <a
            href="https://docs.honeypotfinance.xyz/overview/dreampad/advantages-of-fto-model"
            className=" underline text-blue-500"
          >
            GitHub page
          </a>
        </p>
        <br />
        <p>
          Here are some key points that contribute to the success and
          sustainability of token launches on our platform:
        </p>

        <ol className="pl-[1rem] *:m-5">
          <li className="list-decimal">
            <strong>High-Quality Projects:</strong>
          </li>

          <ul>
            <li>
              We carefully curate and bring top-quality projects to our
              platform, ensuring that only the most promising and credible
              projects are launched.
            </li>
          </ul>

          <li className="list-decimal">
            <strong>Excellent Support Mechanisms:</strong>
          </li>

          <ul>
            <li>
              Our platform has robust mechanisms in place to support the success
              of token launches. These include democratic voting, pause
              mechanisms, and liquidity management strategies.
            </li>
          </ul>

          <li className="list-decimal">
            <strong>Economic Incentives:</strong>
          </li>

          <ul>
            <li>
              The FTO model creates long-term economic incentives for projects
              by enabling them to earn transaction fees as liquidity providers.
              This discourages short-term, opportunistic behaviors like rug
              pulls.
            </li>
          </ul>
        </ol>
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
          team on Discord or Telegram.
        </p>
        <ul className="pl-[1rem] *:m-5">
          <li>
            <a href="" className=" underline text-blue-500">
              Discord
            </a>
          </li>
          <li>
            <a href="" className=" underline text-blue-500">
              Telegram
            </a>
          </li>
        </ul>

        <p className="">
          We also offer incubation services: join us and take your project to
          the next level. Honeypot Finance is your gateway to the Berachain
          Ecosystem!
        </p>
        <ul className="pl-[1rem] *:m-5">
          <li>
            <a
              href="https://forms.gle/76Fij8uRWxZ91sbt6"
              className=" underline text-blue-500"
            >
              fill this form to contact us for incubation services
            </a>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
