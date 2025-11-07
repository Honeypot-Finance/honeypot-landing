"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu } from "@/config/allAppPath";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@heroui/react";

// Helper function to check if URL is external
const isExternalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url, window.location.origin);
    return urlObj.hostname !== window.location.hostname;
  } catch {
    return false; // Relative URLs are internal
  }
};

import { Navbar, NavbarMenu, NavbarMenuToggle } from "@heroui/react";
import { useState } from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import WalletBar from "@/components/WalletBar/WalletBarLazy";

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
          className={isSub ? "ml-4 border-l-2 border-[#FFCD4D] pl-3" : ""}
        >
          <div
            className={cn(
              "p-3 text-white text-lg font-poppins font-bold rounded-lg transition hover:bg-[#2a2a2a] cursor-pointer flex items-center gap-1",
              isSub ? "bg-[#1a1a1a] text-base font-medium" : "bg-[#2a2a2a]"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            {m.beforeElement}
            {m.title}
            {m.afterElement}
          </div>
          {listToNavbarItem(m.path as Menu[], true)}
        </div>
      ) : (
        <Link
          key={m.title}
          href={m.path as string}
          className={cn(
            "flex items-center gap-1 p-3 text-white text-lg font-poppins font-bold rounded-lg transition hover:bg-[#2a2a2a]",
            isSub
              ? "ml-4 bg-[#1a1a1a] text-base font-medium border-l-2 border-[#FFCD4D] pl-3"
              : "bg-[#2a2a2a]"
          )}
          target={isExternalUrl(m.path as string) ? "_blank" : undefined}
          rel={isExternalUrl(m.path as string) ? "noopener noreferrer" : undefined}
          onClick={() => setIsMenuOpen(false)}
        >
          {m.beforeElement}
          {m.title}
          {m.afterElement}
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
              "py-2 font-poppins font-bold bg-transparent text-sm lg:text-base text-gray-300 hover:bg-[#2a2a2a] hover:text-white rounded-md text-nowrap",
              menu.title === "Launch App" && "hidden",
              activeDropdown === menu.title ? "bg-[#2a2a2a] text-white" : ""
            )}
          >
            {menu.beforeElement}
            {menu.title}
            {menu.afterElement}
          </Button>
          {activeDropdown === menu.title && (
            <div className="absolute top-[calc(100%-1px)] left-0 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg p-2 min-w-[200px] z-50">
              {menu.path.map((submenu) => (
                <button
                  key={submenu.title}
                  className="w-full text-left text-gray-300 hover:bg-[#2a2a2a] hover:text-white rounded-md p-2 flex items-center gap-1"
                  onClick={() => {
                    if (submenu.routePath) {
                      if (isExternalUrl(submenu.routePath)) {
                        window.open(
                          submenu.routePath,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      } else {
                        router.push(submenu.routePath);
                      }
                    }
                  }}
                >
                  {submenu.beforeElement}
                  {submenu.title}
                  {submenu.afterElement}
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
          "py-2 font-poppins font-bold bg-transparent text-sm lg:text-base text-gray-300 hover:bg-[#2a2a2a] hover:text-white rounded-md text-nowrap",
          menu.title === "Launch App" && "hidden",
          menu.routePath === pathname ? "bg-[#2a2a2a] text-white" : ""
        )}
        onPress={() => {
          if (typeof menu.path === "string") {
            if (isExternalUrl(menu.path)) {
              window.open(menu.path, "_blank", "noopener,noreferrer");
            } else {
              router.push(menu.path);
            }
          }
        }}
      >
        {menu.beforeElement}
        {menu.title}
        {menu.afterElement}
      </Button>
    );
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar
        height="6.75rem"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          wrapper: "px-0 max-w-none grow max-w-[1500px]",
          toggle: "border-none focus:outline-none",
        }}
        className="grow w-full bg-[#1B1308]/95 backdrop-blur-md flex flex-col py-2 px-4 lg:py-4 lg:px-6 max-w-none"
      >
        <div className="w-full md:flex grow hidden items-center justify-between lg:py-1 relative">
          {/* Left: Logo + Brand Name */}
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
          >
            <Image
              src="/images/honeypot-logo.svg"
              alt="honeypot-logo"
              width={35}
              height={35}
              style={{ height: "auto" }}
            />
            <span className="text-white font-bebas-neue text-xl tracking-wider whitespace-nowrap">
              HONEYPOT FINANCE
            </span>
          </button>

          {/* Center: Nav Links */}
          <div className="flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2 bg-[#2a2520]/50 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-700/30">
            {menuList.map(renderMenuItem)}
          </div>

          {/* Right: Wallet Bar */}
          <div className="flex-shrink-0">
            <WalletBar />
          </div>
        </div>

        <div className="w-full flex items-center justify-between md:hidden">
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
                  className="text-white"
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
                  width={36}
                  height={36}
                  style={{ height: "auto" }}
                  className="shrink-0"
                />
              )
            }
            className={cn(
              "will-change-transform transform-gpu transition-all duration-200 ease-out  w-9 h-9 p-0 min-w-9"
            )}
          />
          <div className="block w-full text-white text-2xl font-bebas-neue text-center grow">
            HONEYPOT FINANCE
          </div>
          {/* Mobile Wallet Bar */}
          <div className="block">
            <WalletBar />
          </div>
        </div>

        <NavbarMenu
          className={cn(
            "lg:hidden w-full pt-6 pb-6 bg-[#1a1a1a]/95 backdrop-blur-md border-2 border-gray-700 rounded-2xl shadow-xl z-[100]",
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
            <Link
              href="/"
              className="block p-3 text-white text-lg font-poppins font-bold rounded-lg transition hover:bg-[#2a2a2a] bg-[#2a2a2a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {listToNavbarItem(menuList)}
          </div>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default HoneyNavbar;
