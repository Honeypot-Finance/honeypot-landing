"use client";

export function DiscordButton() {
  return (
    <button
      onClick={() => {
        window.open("https://discord.gg/NfnK78KJxH", "_blank");
      }}
      className="bg-[#3D2A1A] hover:bg-[#5a3e1d] text-white font-bold py-5 px-16 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-xl sm:text-2xl flex items-center gap-4"
    >
      <span>Join Discord</span>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
