"use client";

import React from "react";
import { Key } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu } from "./allAppPath";
import { useRouter, usePathname } from "next/navigation";
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@heroui/react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/react";
import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  menuList: Menu[];
}

interface SubMenu {
  path: string;
  title: string;
  routePath: string;
  icon?: {
    src: string;
  };
}

const HoneyNavbar: React.FC<NavbarProps> = ({ menuList }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const listToNavbarItem = (list: Menu[], isSub?: boolean): React.ReactNode => {
    return list.map((m) =>
      m.path instanceof Array ? (
        <div key={m.title} className="w-full">
          <div
            className={cn(
              "p-3 text-white text-lg font-medium w-full",
              m.path.some((p) => pathname.includes(p.path))
                ? "bg-[rgba(225,138,32,0.40)] border-2 border-solid border-[rgba(225,138,32,0.60)] rounded-lg"
                : "",
              isSub ? "pl-8" : ""
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            {m.title}
          </div>
          {listToNavbarItem(m.path as Menu[], true)}
        </div>
      ) : (
        <Link
          key={m.title}
          href={m.path as string}
          className={cn(
            "block p-3 text-white text-lg font-medium w-full",
            pathname === m.path
              ? "bg-[rgba(225,74,32,0.40)] border-2 border-solid border-[rgba(225,74,32,0.6)] rounded-lg"
              : "",
            isSub ? "pl-8" : ""
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          {m.title}
        </Link>
      )
    );
  };

  return (
    <div className="flex flex-col items-center w-full sm:w-fit">
      <Image
        width={139}
        height={66}
        alt="hanging rope"
        className="mb-[-20px]"
        src="/images/hanging-rope.svg"
      />
      <Navbar
        height="6.75rem"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{ 
          wrapper: "px-0",
          toggle: "border-none focus:outline-none"
        }}
        className="bg-[#FFCD4D] rounded-xl flex flex-col py-2 px-4 lg:py-4 lg:px-3 border-[1.5px] border-[#010101] shadow-[2px_4px_0px_0px_#FFF]"
      >
        <div className="sm:flex hidden gap-1 lg:gap-2 lg:py-1 flex-wrap max-w-[280px] lg:max-w-none lg:flex-nowrap">
          <Image
            src="/images/honeypot-logo.svg"
            alt="honeypot-logo"
            width={35}
            height={36}
          />
          {menuList.map((menu) => (
            <Button
              key={menu.title}
              className={cn(
                "py-2 font-bold bg-transparent text-sm lg:text-base text-black hover:bg-[#202020]/80 hover:text-white",
                menu.title === "Launch App" && "hidden",
                menu.routePath === pathname ? "bg-[#202020] text-white" : ""
              )}
              onPress={() => {
                if (typeof menu.path === "string") {
                  router.push(menu.path);
                }
              }}
            >
              {menu.title}
            </Button>
          ))}
        </div>

        <NavbarMenuToggle
          sr-only=""
          icon={
            isMenuOpen ? (
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                className="text-black"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <Image
                src="/images/honeypot-logo.svg"
                alt="honeypot-logo"
                width={50}
                height={50}
              />
            )
          }
          className={cn(
            "will-change-transform transform-gpu transition-all duration-200 ease-out sm:hidden size-9"
          )}
        />

        <NavbarMenu
          className={cn(
            "lg:hidden bg-black/95 backdrop-blur-md",
            "will-change-transform transform-gpu transition-all duration-200 ease-out",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          )}
        >
          {listToNavbarItem(menuList)}
        </NavbarMenu>

        <Button
          className={cn(
            "font-bold text-sm lg:text-base text-white",
            "rounded-[7.785px] border border-white bg-[#010101]",
            "shadow-[2px_2px_8px_0px_rgba(22,18,8,0.50)]",
            "hover:bg-[#202020]",
            "px-10 py-2"
          )}
          onPress={() => {
            router.push("https://pot2pump.honeypotfinance.xyz/");
          }}
        >
          Launch App
        </Button>
      </Navbar>
    </div>
  );
};

export default HoneyNavbar;
