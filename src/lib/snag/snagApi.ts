/**
 * Snag Solutions API Client
 *
 * API for fetching loyalty points and user accounts
 */
export const CURRENCY_IDS = {
  LP_POINTS: "0d7ea8bf-ed6e-4bc2-a9c2-3169217025f3",
  DEX_POINTS: "02f058c3-c44c-4369-b827-64ddc3edb4cc",
  SOCIAL_POINTS: "532243ed-358a-45ae-87cd-46dc766cfddc",
} as const;

export interface LoyaltyAccount {
  id: string;
  amount: number;
  loyaltyCurrencyId: string;
  userId: string;
  user?: {
    id: string;
    walletAddress?: string;
    username?: string;
  };
}

export interface LoyaltyAccountsResponse {
  data: LoyaltyAccount[];
  hasNextPage: boolean;
  message: string;
}

export interface FetchLoyaltyAccountsParams {
  loyaltyCurrencyId: string;
  limit?: number;
  startingAfter?: string;
  sortDir?: "asc" | "desc";
  walletAddress?: string;
}

/**
 * Fetch loyalty accounts from Snag API
 */
export async function fetchLoyaltyAccounts(
  params: FetchLoyaltyAccountsParams
): Promise<LoyaltyAccountsResponse> {
  const queryParams = new URLSearchParams({
    loyaltyCurrencyId: params.loyaltyCurrencyId,
    limit: (params.limit || 10).toString(),
    sortDir: params.sortDir || "desc",
  });

  if (params.startingAfter) {
    queryParams.append("startingAfter", params.startingAfter);
  }

  if (params.walletAddress) {
    queryParams.append("walletAddress", params.walletAddress);
  }

  const response = await fetch(
    `/api/loyalty/accounts?${queryParams.toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message ||
        `Failed to fetch loyalty accounts: ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Get display name for currency ID
 */
export function getCurrencyName(currencyId: string): string {
  switch (currencyId) {
    case CURRENCY_IDS.LP_POINTS:
      return "LP Points";
    case CURRENCY_IDS.DEX_POINTS:
      return "DEX Points";
    case CURRENCY_IDS.SOCIAL_POINTS:
      return "Social Points";
    default:
      return "Unknown";
  }
}

/**
 * Format points number with commas
 */
export function formatPoints(amount: number): string {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
