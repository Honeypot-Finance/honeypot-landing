import { NextResponse } from "next/server";
import mammoth from "mammoth";
import path from "path";
import fs from "fs";

export const dynamic = "force-static";

export async function GET() {
  try {
    const docxPath = path.join(
      process.cwd(),
      "public/docs/Honeypot Finance - Privacy Policy (Nov, 2025).docx"
    );

    if (!fs.existsSync(docxPath)) {
      return NextResponse.json(
        { error: "Privacy policy document not found" },
        { status: 404 }
      );
    }

    const result = await mammoth.convertToHtml({ path: docxPath });
    const html = result.value;

    return NextResponse.json(
      {
        title: "Privacy Policy",
        lastUpdated: "November 2025",
        html,
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("Error converting privacy policy:", error);
    return NextResponse.json(
      { error: "Failed to load privacy policy" },
      { status: 500 }
    );
  }
}
