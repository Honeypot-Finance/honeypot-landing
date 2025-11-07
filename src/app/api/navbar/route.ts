import { NextResponse } from "next/server";
import { appPathsList } from "@/config/allAppPath";

export const dynamic = "force-static";

export async function GET() {
  try {
    const navbarData = {
      logo: {
        src: "/logo.svg",
        alt: "Honeypot Finance Logo",
        width: 100,
        height: 100,
      },
      menu: appPathsList,
    };

    return NextResponse.json(navbarData, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching navbar config:", error);
    return NextResponse.json(
      { error: "Failed to load navbar configuration" },
      { status: 500 }
    );
  }
}
