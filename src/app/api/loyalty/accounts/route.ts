import { NextRequest, NextResponse } from "next/server";

const SNAG_API_BASE_URL = "https://points.honeypotfinance.xyz";
const SNAG_API_KEY = "81208dcfa7d5455183a3d6b2a72d8ca5";
const ORGANIZATION_ID = "dc42201d-d1cb-47c2-a3ac-94367cdf40ea";
const WEBSITE_ID = "4a2be9fc-12fb-4b39-bd2c-c721deafce39";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Build query string from search params
  const queryParams = new URLSearchParams();
  searchParams.forEach((value, key) => {
    queryParams.append(key, value);
  });

  try {
    const response = await fetch(
      `${SNAG_API_BASE_URL}/api/loyalty/accounts?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": SNAG_API_KEY,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { message: errorData.message || "Failed to fetch loyalty accounts" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Snag API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
