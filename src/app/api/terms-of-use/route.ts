import { NextResponse } from "next/server";
import mammoth from "mammoth";
import path from "path";
import fs from "fs";

export const dynamic = "force-static";

export async function GET() {
  try {
    const docxPath = path.join(
      process.cwd(),
      "public/docs/Honeypot Finance - Terms of Use (Nov, 2025).docx"
    );

    if (!fs.existsSync(docxPath)) {
      return NextResponse.json(
        { error: "Terms of use document not found" },
        { status: 404 }
      );
    }

    const result = await mammoth.convertToHtml({ path: docxPath });
    const html = result.value;

    return NextResponse.json(
      {
        title: "Terms of Use",
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
    console.error("Error converting terms of use:", error);
    return NextResponse.json(
      { error: "Failed to load terms of use" },
      { status: 500 }
    );
  }
}
