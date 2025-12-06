import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DocxViewer from "@/components/DocxViewer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Honeypot Finance Terms of Use - Read our terms and conditions for using our services.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#140E06] font-inter">
      {/* Header */}
      <header className="w-full py-6 px-4 border-b border-gray-800">
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

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <DocxViewer
          docxUrl="/docs/Honeypot Finance - Terms of Use (Nov, 2025).docx"
        />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          &copy; Copyright 2025, All Rights Reserved by Honeypot
        </div>
      </footer>
    </div>
  );
}
