import type { Metadata } from "next";
import SimpleHeader from "@/components/SimpleHeader";
import Footer from "@/components/Footer";
import DocxViewer from "@/components/DocxViewer";

export const metadata: Metadata = {
  title: "Terms of Use | Honeypot Finance",
  description:
    "Honeypot Finance Terms of Use - Read our terms and conditions for using our services.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#140E06] font-inter flex flex-col">
      <SimpleHeader />

      <main className="max-w-4xl mx-auto px-4 py-12 flex-1">
        <DocxViewer docxUrl="/docs/Honeypot Finance - Terms of Use (Nov, 2025).docx" />
      </main>

      <Footer />
    </div>
  );
}
