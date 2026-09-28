import { NextResponse } from "next/server";
import { appPathsList } from "@/config/allAppPath";

export const dynamic = "force-static";

const SITE_ORIGIN = "https://honeypotfinance.xyz";
const absoluteUrl = (url: string) => new URL(url, SITE_ORIGIN).href;

export async function GET() {
  try {
    const navbarData = {
      logo: {
        src: `${SITE_ORIGIN}/images/editorial/honeypot-logo.png`,
        alt: "Honeypot Finance Logo",
        width: 100,
        height: 100,
      },
      menu: appPathsList.map((menu) => ({
        ...menu,
        ...(menu.routePath ? { routePath: absoluteUrl(menu.routePath) } : {}),
        path: typeof menu.path === "string"
          ? absoluteUrl(menu.path)
          : menu.path.map((item) => ({
              ...item,
              path: absoluteUrl(item.path),
              routePath: absoluteUrl(item.routePath),
            })),
      })),
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
