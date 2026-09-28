import { CURRENCY_IDS } from "./currencies";

const ALLOWED_PARAMS = new Set([
  "loyaltyCurrencyId",
  "limit",
  "startingAfter",
  "sortDir",
  "walletAddress",
]);
const ALLOWED_CURRENCIES = new Set<string>(Object.values(CURRENCY_IDS));

/** Keep the public leaderboard proxy scoped to its documented, read-only query. */
export function validateLoyaltyQuery(input: URLSearchParams): URLSearchParams | null {
  for (const key of Array.from(input.keys())) {
    if (!ALLOWED_PARAMS.has(key) || input.getAll(key).length !== 1) return null;
  }

  const currency = input.get("loyaltyCurrencyId");
  const limit = input.get("limit") ?? "10";
  const sortDir = input.get("sortDir") ?? "desc";
  const wallet = input.get("walletAddress");
  const cursor = input.get("startingAfter");

  if (!currency || !ALLOWED_CURRENCIES.has(currency)) return null;
  if (!/^\d{1,3}$/.test(limit) || Number(limit) < 1 || Number(limit) > 100) return null;
  if (sortDir !== "asc" && sortDir !== "desc") return null;
  if (wallet !== null && !/^0x[0-9a-fA-F]{40}$/.test(wallet)) return null;
  if (cursor !== null && (!cursor || cursor.length > 256 || /[\x00-\x1f\x7f]/.test(cursor))) return null;

  const query = new URLSearchParams({
    loyaltyCurrencyId: currency,
    limit: String(Number(limit)),
    sortDir,
  });
  if (wallet) query.set("walletAddress", wallet);
  if (cursor) query.set("startingAfter", cursor);
  return query;
}
