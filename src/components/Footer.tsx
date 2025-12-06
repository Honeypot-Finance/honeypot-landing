import Link from "next/link";
import Image from "next/image";
import { BsTelegram } from "react-icons/bs";
import { FaXTwitter, FaDiscord, FaMedium } from "react-icons/fa6";

const navLinks = [
  { href: "https://docs.honeypotfinance.xyz/", label: "Docs", external: true },
  { href: "https://github.com/Honeypot-Finance", label: "GitHub", external: true },
  { href: "https://medium.com/@HoneypotFinance1", label: "Medium", external: true },
  { href: "https://magiceden.io/collections/berachain/honeygenesis-44", label: "HoneyGenesis NFT", external: true },
  { href: "https://pot2pump.honeypotfinance.xyz/", label: "Meme", external: true },
  { href: "https://dex.honeypotfinance.xyz/", label: "Honeypot DEX", external: true },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
];

const socialLinks = [
  { href: "https://t.me/+tE1KgsD-GxJhOTg0", icon: BsTelegram, label: "Join our Telegram" },
  { href: "https://x.com/honeypotfinance", icon: FaXTwitter, label: "Follow us on X (Twitter)" },
  { href: "https://discord.gg/NfnK78KJxH", icon: FaDiscord, label: "Join our Discord" },
  { href: "https://medium.com/@HoneypotFinance1", icon: FaMedium, label: "Read our Medium blog" },
];

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`w-full bg-[#140E06] border-t border-gray-800 flex flex-col items-center pt-12 pb-8 ${className}`}>
      <div className="flex flex-col items-center gap-6">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/honeypot-logo.svg"
            width={40}
            height={40}
            alt="Honeypot Finance logo"
          />
          <span className="font-bebas-neue text-xl text-[#FFCD4D]">
            HONEYPOT FINANCE
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300 font-medium text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Legal Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          {socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2F1F0E] rounded-xl p-3 flex items-center justify-center hover:bg-[#3a2612] hover:scale-110 transition"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-[#FFCD4D]" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm mt-2 mb-4 text-center">
          &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by Honeypot
        </div>
      </div>
    </footer>
  );
}
