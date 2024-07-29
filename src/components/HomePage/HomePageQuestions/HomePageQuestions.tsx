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
            <span>"What is Honeypot?"</span>
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
        orem ipsum dolor sit amet consectetur. Quam congue consectetur Lorem
        ipsum dolor sit amet consectetur. Quam congue consecte
      </AccordionItem>
      <AccordionItem
        header={
          <div className=" w-full flex justify-between items-center">
            <span>"What is q2?"</span>
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
        test2
      </AccordionItem>
      <AccordionItem
        header={
          <div className=" w-full flex justify-between items-center">
            <span>"What is q3?"</span>
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
        test3
      </AccordionItem>
    </Accordion>
  );
}
