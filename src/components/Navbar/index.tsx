"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu } from "./allAppPath";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@heroui/react";

import { Navbar, NavbarMenu, NavbarMenuToggle } from "@heroui/react";
import { useState } from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const listToNavbarItem = (list: Menu[], isSub?: boolean): React.ReactNode => {
    return list.map((m) =>
      m.path instanceof Array ? (
        <div
          key={m.title}
          className="w-full"
        >
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

  const renderMenuItem = (menu: Menu) => {
    if (Array.isArray(menu.path)) {
      return (
        <div
          key={menu.title}
          className="relative group"
          onMouseEnter={() => setActiveDropdown(menu.title)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Button
            className={cn(
              "py-2 font-bold bg-transparent text-sm lg:text-base text-black hover:bg-[#202020] hover:text-white rounded-md text-nowrap",
              menu.title === "Launch App" && "hidden",
              activeDropdown === menu.title ? "bg-[#202020] text-white" : ""
            )}
          >
            {menu.title}
          </Button>
          {activeDropdown === menu.title && (
            <div className="absolute top-[calc(100%-1px)] left-0 bg-white rounded-lg shadow-lg p-2 min-w-[200px] z-50">
              {menu.path.map((submenu) => (
                <button
                  key={submenu.title}
                  className="w-full text-left text-black hover:bg-[#202020] hover:text-white rounded-md p-2"
                  onClick={() => {
                    if (submenu.routePath) {
                      router.push(submenu.routePath);
                    }
                  }}
                >
                  {submenu.title}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Button
        key={menu.title}
        className={cn(
          "py-2 font-bold bg-transparent text-sm lg:text-base text-black hover:bg-[#202020] hover:text-white rounded-md text-nowrap",
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
          wrapper: "px-0 max-w-none",
          toggle: "border-none focus:outline-none",
        }}
        className="bg-[#FFCD4D] rounded-xl flex flex-col py-2 px-4 lg:py-4 lg:px-3 shadow-[2px_4px_0px_0px_#FFF]"
      >
        <div className="sm:flex hidden gap-1 lg:gap-2 lg:py-1 lg:max-w-none flex-nowrap">
          <Image
            src="/images/honeypot-logo.svg"
            alt="honeypot-logo"
            width={35}
            height={36}
          />
          {menuList.map(renderMenuItem)}
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
            "lg:hidden pt-24 bg-black/95 backdrop-blur-md",
            "will-change-transform transform-gpu transition-all duration-200 ease-out",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-2",
              "will-change-transform transform-gpu transition-all duration-150 ease-out",
              isMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-2"
            )}
          >
            {listToNavbarItem(menuList)}
          </div>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default HoneyNavbar;
