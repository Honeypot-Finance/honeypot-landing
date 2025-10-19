"use client";

import { useState } from "react";
import Image from "next/image";

const FloatingPreTGE = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const imageUrl = "/airdrop-icon.png";

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex items-center">
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
        className={`bg-[#FFCD4D] rounded-l-2xl p-4 sm:p-6 border-4 border-r-0 border-white shadow-[8px_8px_0px_0px_#000] transition-all duration-300 ${
          isCollapsed ? "w-0 p-0 border-0 opacity-0" : "w-[200px] sm:w-[240px]"
        } overflow-hidden`}
      >
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Airdrop Icon */}
          <div className="w-full flex justify-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <Image
                src={imageUrl}
                alt="Airdrop"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#202020] text-center whitespace-nowrap">
            🔥Pre-TGE Heat Up🔥
          </h3>

          <p className="text-sm sm:text-base text-[#202020] text-center font-semibold">
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
  );
};

export default FloatingPreTGE;
