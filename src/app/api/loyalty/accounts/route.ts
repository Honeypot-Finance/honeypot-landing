import { NextRequest, NextResponse } from "next/server";
import { validateLoyaltyQuery } from "@/lib/snag/query";
import type { LoyaltyAccount } from "@/lib/snag/snagApi";

const SNAG_API_BASE_URL = "https://points.honeypotfinance.xyz";

export async function GET(request: NextRequest) {
  const query = validateLoyaltyQuery(request.nextUrl.searchParams);
  if (!query) {
    return NextResponse.json({ message: "Invalid loyalty query" }, { status: 400 });
  }

  // Never put this credential in a NEXT_PUBLIC_ variable or fall back to a tracked key.
  const apiKey = process.env.SNAG_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { message: "Loyalty service is temporarily unavailable" },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(
      `${SNAG_API_BASE_URL}/api/loyalty/accounts?${query.toString()}`,
      {
        headers: { "x-api-key": apiKey },
        cache: "no-store",
        redirect: "error",
        signal: AbortSignal.timeout(10_000),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Unable to load loyalty accounts" },
        { status: response.status === 429 ? 429 : 502 }
      );
    }

    const result = await response.json();
    if (!Array.isArray(result.data)) throw new Error("Invalid loyalty response");

    // Only expose the public fields used by the leaderboard, not the upstream user object.
    const data = result.data.slice(0, Number(query.get("limit"))).map((account: LoyaltyAccount) => ({
      id: account.id,
      amount: account.amount,
      loyaltyCurrencyId: account.loyaltyCurrencyId,
      userId: account.userId,
      user: account.user ? {
        id: account.user.id,
        walletAddress: account.user.walletAddress,
        username: account.user.username,
      } : undefined,
    }));

    return NextResponse.json(
      { data, hasNextPage: Boolean(result.hasNextPage), message: "Success" },
      { headers: { "Cache-Control": "private, no-store" } }
    );
  } catch {
    return NextResponse.json(
      { message: "Unable to load loyalty accounts" },
      { status: 502 }
    );
  }
}
