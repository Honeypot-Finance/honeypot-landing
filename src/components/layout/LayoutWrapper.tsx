'use client'

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNewHomepage = pathname === '/new-homepage';

  return (
    <>
      {!isNewHomepage && <Header />}
      {children}
      {!isNewHomepage && <Footer />}
    </>
  );
} 