import Link from "next/link";
import Image from "next/image";

interface SimpleHeaderProps {
  className?: string;
}

export default function SimpleHeader({ className = "" }: SimpleHeaderProps) {
  return (
    <header className={`w-full py-6 px-4 border-b border-gray-800 ${className}`}>
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/honeypot-logo.svg"
            width={32}
            height={32}
            alt="Honeypot Finance logo"
          />
          <span className="font-bebas-neue text-lg text-[#FFCD4D]">
            HONEYPOT FINANCE
          </span>
        </Link>
        <a
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Back to Home
        </a>
      </div>
    </header>
  );
}
