const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { resolve } = require("node:path");
const { test } = require("node:test");
const vm = require("node:vm");
const ts = require("typescript");
const { NextRequest } = require("next/server");

// Compile the actual route sources with isolated environment/network dependencies.
// No request in this suite can contact the upstream service.
function loadSource(file, dependencies = {}, globals = {}) {
  const output = ts.transpileModule(readFileSync(resolve(file), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(output, {
    module, exports: module.exports, URLSearchParams, URL, AbortSignal,
    require(name) {
      if (Object.hasOwn(dependencies, name)) return dependencies[name];
      throw new Error(`Unexpected dependency: ${name}`);
    },
    ...globals,
  }, { filename: file });
  return module.exports;
}

const currencies = loadSource("src/lib/snag/currencies.ts");
const queryModule = loadSource("src/lib/snag/query.ts", { "./currencies": currencies });
const validQuery = `loyaltyCurrencyId=${currencies.CURRENCY_IDS.LP_POINTS}`;
const request = (query = validQuery) => new NextRequest(`https://honeypotfinance.xyz/api/loyalty/accounts?${query}`);

function route(fetch, apiKey) {
  return loadSource("src/app/api/loyalty/accounts/route.ts", {
    "next/server": require("next/server"),
    "@/lib/snag/query": queryModule,
  }, { fetch, process: { env: { SNAG_API_KEY: apiKey } } });
}

for (const suffix of [
  "&organizationId=other-project", "&limit=0", "&limit=101", "&limit=-1",
  "&limit=1.5", "&limit=10&limit=100", "&sortDir=invalid", "&walletAddress=bad",
  "&startingAfter=", `&startingAfter=${"x".repeat(257)}`,
]) {
  test(`rejects unsafe loyalty query ${suffix.slice(0, 48)}`, () => {
    assert.equal(queryModule.validateLoyaltyQuery(new URLSearchParams(validQuery + suffix)), null);
  });
}

test("accepts documented pagination and wallet filters", () => {
  const input = `${validQuery}&limit=100&sortDir=asc&walletAddress=0x${"a".repeat(40)}&startingAfter=account-123`;
  const output = queryModule.validateLoyaltyQuery(new URLSearchParams(input));
  assert.equal(output.get("limit"), "100");
  assert.equal(output.get("startingAfter"), "account-123");
});

test("rejects missing and unknown currencies", () => {
  for (const input of ["", "loyaltyCurrencyId=unknown"]) {
    assert.equal(queryModule.validateLoyaltyQuery(new URLSearchParams(input)), null);
  }
});

test("missing credential returns 503 without contacting upstream", async () => {
  const response = await route(() => assert.fail("unexpected network request")).GET(request());
  assert.equal(response.status, 503);
});

test("invalid query returns 400 before contacting upstream", async () => {
  const response = await route(() => assert.fail("unexpected network request"), "test-only").GET(request("organizationId=other"));
  assert.equal(response.status, 400);
});

test("limits upstream query, disables redirects/cache, and exposes only public account fields", async () => {
  const response = await route(async (url, options) => {
    assert.equal(new URL(url).origin, "https://points.honeypotfinance.xyz");
    assert.equal(options.redirect, "error");
    assert.equal(options.cache, "no-store");
    assert.equal(options.headers["x-api-key"], "test-only");
    return Response.json({ data: [{ id: "account", amount: 10, loyaltyCurrencyId: "currency", userId: "user", privateField: "hidden", user: { id: "user", walletAddress: "0x123", username: "name", email: "hidden" } }], hasNextPage: true });
  }, "test-only").GET(request());
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.equal(result.data[0].privateField, undefined);
  assert.equal(result.data[0].user.email, undefined);
  assert.equal(result.data[0].user.username, "name");
  assert.equal(response.headers.get("Cache-Control"), "private, no-store");
});

test("redacts upstream authentication errors", async () => {
  const response = await route(async () => Response.json({ message: "private diagnostic" }, { status: 401 }), "test-only").GET(request());
  assert.equal(response.status, 502);
  assert.doesNotMatch(await response.text(), /private diagnostic/);
});

test("network failures return a generic 502", async () => {
  const response = await route(async () => { throw new Error("private diagnostic"); }, "test-only").GET(request());
  assert.equal(response.status, 502);
  assert.doesNotMatch(await response.text(), /private diagnostic/);
});

test("shared navigation uses absolute landing and legacy URLs", async () => {
  const navigation = loadSource("src/config/allAppPath.tsx");
  const navbar = loadSource("src/app/api/navbar/route.ts", {
    "next/server": require("next/server"), "@/config/allAppPath": navigation,
  });
  const response = await navbar.GET();
  const data = await response.json();
  assert.equal(data.logo.src, "https://honeypotfinance.xyz/images/editorial/honeypot-logo.png");
  for (const item of data.menu) {
    if (typeof item.path === "string") assert.match(item.path, /^https:\/\//);
    else for (const child of item.path) {
      assert.match(child.path, /^https:\/\//);
      assert.match(child.routePath, /^https:\/\//);
    }
  }
  assert.deepEqual(
    data.menu.slice(0, 3).map(({ path }) => path),
    ["ai", "web3", "technical-education"].map((section) => `https://honeypotfinance.xyz/#${section}`)
  );
});
