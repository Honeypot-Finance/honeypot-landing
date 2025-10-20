"use client";

import { useState } from "react";
import Image from "next/image";

const FloatingPreTGE = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const imageUrl = "/airdrop-icon.png";

  return (
    <>
      {/* Desktop version - Right side */}
      <div className="hidden lg:flex fixed right-0 top-1/2 transform -translate-y-1/2 z-50 items-center">
        {/* Collapse/Expand Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-[#FFCD4D] border-4 border-white border-r-0 rounded-l-2xl px-3 py-4 shadow-[8px_8px_0px_0px_#000] hover:bg-opacity-90 transition-all"
          aria-label={isCollapsed ? "Expand" : "Collapse"}
        >
          {isCollapsed ? (
            <div className="relative w-8 h-8">
              <Image
                src={imageUrl}
                alt="Airdrop"
                fill
                className="object-contain scale-[200%]"
              />
            </div>
          ) : (
            <span className="text-2xl font-bold text-[#202020]">→</span>
          )}
        </button>

        {/* Main Content */}
        <div
          className={`bg-[#FFCD4D] rounded-l-2xl border-4 border-r-0 border-white shadow-[8px_8px_0px_0px_#000] transition-all duration-300 ${
            isCollapsed ? "w-0 p-0 border-l-0 opacity-0" : "w-[240px] p-6"
          } overflow-hidden`}
        >
          <div className="flex flex-col gap-4">
            {/* Airdrop Icon */}
            <div className="w-full flex justify-center">
              <div className="relative w-24 h-24">
                <Image
                  src={imageUrl}
                  alt="Airdrop"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#202020] text-center whitespace-nowrap">
              🔥Pre-TGE Heat Up🔥
            </h3>

            <p className="text-base text-[#202020] text-center font-semibold">
              Earn points for airdrops
            </p>

            <button
              onClick={() => {
                window.open(
                  "https://points.honeypotfinance.xyz/loyalty",
                  "_blank"
                );
              }}
              className="w-full px-4 py-3 bg-black text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile version - Bottom */}
      <div className={`lg:hidden fixed left-0 right-0 z-50 flex flex-col items-center transition-all duration-300 ${
        isCollapsed ? "bottom-0" : "bottom-0"
      }`}>
        {/* Collapse/Expand Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`bg-[#FFCD4D] border-4 border-white rounded-t-2xl hover:bg-opacity-90 transition-all ${
            isCollapsed
              ? "border-b-0 px-6 py-3 shadow-[0px_-8px_0px_0px_#000]"
              : "border-b-0 px-6 py-3 shadow-[0px_-8px_0px_0px_#000]"
          }`}
          aria-label={isCollapsed ? "Expand" : "Collapse"}
        >
          {isCollapsed ? (
            <div className="relative w-8 h-8">
              <Image
                src={imageUrl}
                alt="Airdrop"
                fill
                className="object-contain scale-[200%]"
              />
            </div>
          ) : (
            <span className="text-2xl font-bold text-[#202020]">↓</span>
          )}
        </button>

        {/* Main Content */}
        <div
          className={`bg-[#FFCD4D] w-full border-4 border-b-0 border-white shadow-[0px_-8px_0px_0px_#000] transition-all duration-300 ${
            isCollapsed ? "h-0 p-0 border-t-0 opacity-0" : "h-auto p-4"
          } overflow-hidden`}
        >
          <div className="flex items-center gap-4 justify-between max-w-[600px] mx-auto">
            {/* Airdrop Icon */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={imageUrl}
                alt="Airdrop"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-[#202020]">
                🔥Pre-TGE Heat Up🔥
              </h3>
              <p className="text-xs sm:text-sm text-[#202020] font-semibold">
                Earn points for airdrops
              </p>
            </div>

            <button
              onClick={() => {
                window.open(
                  "https://points.honeypotfinance.xyz/loyalty",
                  "_blank"
                );
              }}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-xs sm:text-sm border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] whitespace-nowrap flex-shrink-0"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingPreTGE;
