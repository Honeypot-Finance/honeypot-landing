"use client";

export function HeroButtons() {
  return (
    <button
      onClick={() => {
        window.open("https://perp.honeypotfinance.xyz/", "_blank");
      }}
      className="mt-8 text-black rounded-full hover:opacity-90 transition-all font-bold text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl hover:scale-105 pl-8 pr-3 py-3 flex items-center gap-4"
      style={{
        background: "linear-gradient(180deg, #FCD729 0%, #F7931A 100%)",
        border: "5px solid #C87304",
      }}
    >
      <span>Trading Perp</span>
      <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="#F7931A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
