import Brand from "@/components/editorial/Brand";
import Link from "next/link";

interface SimpleHeaderProps {
  className?: string;
}

export default function SimpleHeader({ className = "" }: SimpleHeaderProps) {
  return (
    <header className={`w-full bg-[#f7f5ee] py-6 px-4 border-b border-[#deded3] ${className}`}>
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Brand />
        <Link
          href="/"
          className="text-[#394537] hover:underline transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </header>
  );
}
