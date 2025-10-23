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
          className="bg-[#1a1a1a] border-4 border-gray-700 border-r-0 rounded-l-2xl px-3 py-4 shadow-[8px_8px_0px_0px_rgba(255,205,77,0.3)] hover:bg-[#2a2a2a] transition-all"
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
            <span className="text-2xl font-bold text-white">→</span>
          )}
        </button>

        {/* Main Content */}
        <div
          className={`bg-[#1a1a1a] rounded-l-2xl border-4 border-r-0 border-gray-700 shadow-[8px_8px_0px_0px_rgba(255,205,77,0.3)] transition-all duration-300 ${
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

            <h3 className="text-xl font-bold text-white text-center whitespace-nowrap">
              🔥Pre-TGE Heat Up🔥
            </h3>

            <p className="text-base text-gray-300 text-center font-semibold">
              Earn points for airdrops
            </p>

            <button
              onClick={() => {
                window.location.href = "/missions";
              }}
              className="w-full px-4 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all font-bold text-sm border-2 border-gray-700 shadow-[4px_4px_0px_0px_rgba(255,205,77,0.3)]"
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
          className={`bg-[#1a1a1a] border-4 border-gray-700 rounded-t-2xl hover:bg-[#2a2a2a] transition-all ${
            isCollapsed
              ? "border-b-0 px-6 py-3 shadow-[0px_-8px_0px_0px_rgba(255,205,77,0.3)]"
              : "border-b-0 px-6 py-3 shadow-[0px_-8px_0px_0px_rgba(255,205,77,0.3)]"
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
            <span className="text-2xl font-bold text-white">↓</span>
          )}
        </button>

        {/* Main Content */}
        <div
          className={`bg-[#1a1a1a] w-full border-4 border-b-0 border-gray-700 shadow-[0px_-8px_0px_0px_rgba(255,205,77,0.3)] transition-all duration-300 ${
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
              <h3 className="text-base sm:text-lg font-bold text-white">
                🔥Pre-TGE Heat Up🔥
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-semibold">
                Earn points for airdrops
              </p>
            </div>

            <button
              onClick={() => {
                window.location.href = "/missions";
              }}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all font-bold text-xs sm:text-sm border-2 border-gray-700 shadow-[4px_4px_0px_0px_rgba(255,205,77,0.3)] whitespace-nowrap flex-shrink-0"
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
