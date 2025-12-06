import type { Metadata } from "next";
import SimpleHeader from "@/components/SimpleHeader";
import Footer from "@/components/Footer";
import DocxViewer from "@/components/DocxViewer";

export const metadata: Metadata = {
  title: "Privacy Policy | Honeypot Finance",
  description:
    "Honeypot Finance Privacy Policy - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#140E06] font-inter flex flex-col">
      <SimpleHeader />

      <main className="max-w-4xl mx-auto px-4 py-12 flex-1">
        <DocxViewer docxUrl="/docs/Honeypot Finance - Privacy Policy (Nov, 2025).docx" />
      </main>

      <Footer />
    </div>
  );
}
