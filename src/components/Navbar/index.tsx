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
          className={isSub ? "ml-4 border-l-2 border-[#FFD966] pl-3" : ""}
        >
          <div
            className={cn(
              "p-3 text-black text-lg font-bold rounded-lg transition hover:bg-[#FFE28A] cursor-pointer",
              isSub ? "bg-[#FFF7D6] text-base font-medium" : "bg-white"
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
            "block p-3 text-black text-lg font-bold rounded-lg transition hover:bg-[#FFE28A]",
            isSub
              ? "ml-4 bg-[#FFF7D6] text-base font-medium border-l-2 border-[#FFD966] pl-3"
              : "bg-white"
          )}
          target="_blank"
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
                      window.open(submenu.routePath, "_blank");
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
      <Navbar
        height="6.75rem"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          wrapper: "px-0 max-w-none grow",
          toggle: "border-none focus:outline-none",
        }}
        className="grow w-full bg-[#FFCD4D] rounded-xl flex flex-col py-2 px-4 lg:py-4 lg:px-3 shadow-[2px_4px_0px_0px_#FFF] max-w-none"
      >
        <div className="w-full sm:flex grow hidden gap-1 lg:gap-2 lg:py-1 ">
          <Image
            src="/images/honeypot-logo.svg"
            alt="honeypot-logo"
            width={35}
            height={36}
          />
          {menuList.map(renderMenuItem)}
        </div>

        <div className="w-full flex items-center justify-between sm:hidden">
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
          <div className="block sm:hidden w-full text-black text-sm font-bold text-center grow">
            Honeypot Finance
          </div>
        </div>

        <NavbarMenu
          className={cn(
            "lg:hidden w-full pt-6 pb-6 bg-[#FFCD4D]/95 border-2 border-white rounded-2xl shadow-xl",
            "will-change-transform transform-gpu transition-all duration-200 ease-out",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-3 overflow-y-auto px-4 ",
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
