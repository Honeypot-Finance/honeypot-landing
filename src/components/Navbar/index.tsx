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

export const Navbar: React.FC<NavbarProps> = ({ menuList }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center">
      <Image
        width={139}
        height={66}
        alt="hanging rope"
        className="mb-[-20px]"
        src="/images/hanging-rope.svg"
      />
      <div className="bg-[#FFCD4D] rounded-xl flex flex-col py-2 px-1.5 lg:py-4 lg:px-3 border-[1.5px] border-[#010101] shadow-[2px_4px_0px_0px_#FFF]">
        <div className="flex gap-1 lg:gap-2 lg:py-1 flex-wrap max-w-[280px] lg:max-w-none lg:flex-nowrap">
          {menuList.map((menu) =>
            Array.isArray(menu.path) ? (
              <Dropdown
                key={menu.title}
                placement="bottom-start"
                classNames={{
                  content: "bg-transparent p-0",
                }}
              >
                <DropdownTrigger>
                  <Button
                    className={cn(
                      "min-h-[32px] h-8 py-0 font-bold bg-transparent text-black hover:bg-[#202020] hover:text-white hover:rounded-lg",
                      (menu.path as SubMenu[]).some(
                        (item) => item.routePath === pathname
                      )
                        ? "bg-[#202020] text-white"
                        : ""
                    )}
                  >
                    {menu.title}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label={menu.title}
                  className="bg-[#FFCD4D] rounded-lg p-2"
                  onAction={(key: Key) => {
                    const subMenu = (menu.path as SubMenu[]).find(
                      (item: SubMenu) => item.routePath === key
                    );
                    if (subMenu) {
                      router.push(subMenu.path);
                    }
                  }}
                >
                  {(menu.path as SubMenu[]).map((subMenu: SubMenu) => (
                    <DropdownItem
                      key={subMenu.routePath}
                      className={cn(
                        "font-bold data-[hover=true]:bg-[#202020] data-[hover=true]:text-white p-2",
                        pathname === subMenu.routePath
                          ? "bg-[#202020] text-white"
                          : "text-[#202020]"
                      )}
                      startContent={
                        subMenu.icon && (
                          <Image
                            src={subMenu.icon.src}
                            alt={subMenu.title}
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                        )
                      }
                    >
                      {subMenu.title}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button
                key={menu.title}
                className={cn(
                  "h-8 py-0 font-bold bg-transparent text-sm lg:text-base text-black hover:bg-[#202020]/80 hover:text-white",
                  menu.title === "Launch App" && "hidden",
                  menu.routePath === pathname
                    ? "bg-[#202020] text-white"
                    : ""
                )}
                onPress={() => {
                  if (typeof menu.path === "string") {
                    router.push(menu.path);
                  }
                }}
              >
                {menu.title}
              </Button>
            )
          )}
          <Button
            className={cn(
              "h-8 py-0 font-bold bg-transparent text-sm lg:text-base text-white hover:bg-[#202020]"
            )}
            onPress={() => {
              router.push("https://pot2pump.honeypotfinance.xyz/");
            }}
          >
            Launch App
          </Button>
        </div>
      </div>
    </div>
  );
};
