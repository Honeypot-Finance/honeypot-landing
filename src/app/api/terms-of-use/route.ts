import { NextResponse } from "next/server";
import mammoth from "mammoth";
import path from "path";
import fs from "fs";

export const dynamic = "force-static";

// CSS styles matching the DocxViewer component styling with transparent background
const css = `
.policy-content {
  color: #d1d5db;
  line-height: 1.7;
  background: transparent;
}
.policy-content * {
  background: transparent !important;
  background-color: transparent !important;
}
.policy-content h1,
.policy-content h2,
.policy-content h3,
.policy-content h4,
.policy-content h5,
.policy-content h6 {
  color: #ffffff;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}
.policy-content h1 { font-size: 1.875rem; }
.policy-content h2 { font-size: 1.5rem; }
.policy-content h3 { font-size: 1.25rem; }
.policy-content p {
  margin-bottom: 0.75rem;
  color: #d1d5db;
}
.policy-content a {
  color: #FFCD4D;
}
.policy-content a:hover {
  text-decoration: underline;
}
.policy-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}
.policy-content td,
.policy-content th {
  border: 1px solid #374151;
  padding: 0.5rem;
  color: #d1d5db;
}
.policy-content ul,
.policy-content ol {
  padding-left: 2rem;
  margin-bottom: 0.75rem;
}
.policy-content li {
  margin-bottom: 0.25rem;
  color: #d1d5db;
}
.policy-content strong,
.policy-content b {
  color: #ffffff;
  font-weight: bold;
}
`;

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
        css,
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
