# Full system test & RPC connection guide

> Auto-generated 2026-07-23 from `scripts/spark_pay/full_system_test.mjs`, `e2e_sdk_test.mjs`, and `var/launch/url_canonical.json`.  
> Regenerate: `node scripts/gitbook/generate_system_test_guide.mjs`  
> **Last verified run:** 31 passed · 2 warnings · 0 failed (local API on `:8546`)

This document breaks **every CLRTY system** into runnable commands — RPC endpoints, REST APIs, Spark Pay URL generator, payment E2E, builds, live HTTP probes, monitors, PRISM, and node CLI.

**Related:** [CLRTY command index](clrty-command-index.md) · [Spark Pay usage](../payments/spark-usage-commands.md) · [CLI reference](../cli/master-command-reference.md)

---

## Table of contents

1. [Master orchestration](#1-master-orchestration)
2. [Local API setup](#2-local-api-setup)
3. [RPC connection matrix](#3-rpc-connection-matrix)
4. [Mainnet REST surfaces](#4-mainnet-rest-surfaces)
5. [Testnet REST surfaces](#5-testnet-rest-surfaces)
6. [Spark Pay — manual cURL pay flow](#6-spark-pay--manual-curl-pay-flow)
7. [Spark Pay E2E (17 steps)](#7-spark-pay-e2e-17-steps)
8. [Full system test (31 checks)](#8-full-system-test-31-checks)
9. [URL generator tests](#9-url-generator-tests)
10. [Build & visual regression](#10-build--visual-regression)
11. [Live HTTP probes](#11-live-http-probes)
12. [Makefile smoke targets](#12-makefile-smoke-targets)
13. [Monitors & edge verify](#13-monitors--edge-verify)
14. [PRISM terminal](#14-prism-terminal)
15. [Node creation & wallet CLI](#15-node-creation--wallet-cli)
16. [Production deploy (clear warnings)](#16-production-deploy-clear-warnings)
17. [Expected warnings](#17-expected-warnings)
18. [Troubleshooting matrix](#18-troubleshooting-matrix)
19. [JSON-RPC method tests](#19-json-rpc-method-tests)
20. [Link flow registry — per-URL commands](#20-link-flow-registry--per-url-commands)
21. [Environment variable reference](#21-environment-variable-reference)

---

## 1. Master orchestration

Run **everything** in one command after starting the local API:

```bash
# Terminal 1
CLRTY_RPC_PORT=8546 ./target/debug/clrty-api

# Terminal 2 — full system test (URL gen + registry + builds + SDK + E2E + live probes + make smoke)
SPARK_API_BASE=http://127.0.0.1:8546 make spark-pay-full-test
```

| Command | Scope | Checks |
|---------|-------|--------|
| `make spark-pay-full-test` | All Spark Pay + surfaces | ~31 (2 warnings OK locally) |
| `make spark-pay-e2e` | Payment SDK + API only | 17 |
| `make sync-monitors` | RPC + REST + DNS + tunnels | monitors_sync.json |
| `make mainnet-24x7-status` | Origin + tunnel + edge | mainnet health |
| `node scripts/spark_pay/full_system_test.mjs` | Same as full-test | direct harness |

**Harness source:** `scripts/spark_pay/full_system_test.mjs` · `scripts/spark_pay/e2e_sdk_test.mjs`


---

## 2. Local API setup

```bash
# Terminal 1 — local origin (Spark Pay uses testnet port 8546 in E2E harness)
CLRTY_RPC_PORT=8546 cargo run -p clrty-api
# or prebuilt:
CLRTY_RPC_PORT=8546 ./target/debug/clrty-api

# Terminal 2 — verify Spark module
export SPARK_API_BASE=http://127.0.0.1:8546
curl -sf "$SPARK_API_BASE/v1/spark/health" | jq .
curl -sf "$SPARK_API_BASE/health" | jq .

# Full payment stack (31 checks)
SPARK_API_BASE=http://127.0.0.1:8546 make spark-pay-full-test

# Payment E2E only (17 checks)
SPARK_API_BASE=http://127.0.0.1:8546 make spark-pay-e2e
```




---

## 3. RPC connection matrix

Connect to each network layer independently before running payment tests.

| Layer | Bind / URL | Port | Verify command |
|-------|------------|------|----------------|
| Mainnet origin | `127.0.0.1:8545` | 8545 | `curl -s http://127.0.0.1:8545/v1/security/quantum/status` |
| Testnet origin | `127.0.0.1:8546` | 8546 | `curl -s http://127.0.0.1:8546/health` |
| Public mainnet RPC | [https://rpc.clarity-fintech.com](https://rpc.clarity-fintech.com) | 443 | JSON-RPC `getBetaMainnetStatus` |
| Public mainnet REST | [https://api.clarity-fintech.com](https://api.clarity-fintech.com) | 443 | `GET /v1/status` |
| Public testnet REST | [https://testnet-api.clarity-fintech.com](https://testnet-api.clarity-fintech.com) | 443 | `GET /health` |
| Internal tunnel | [https://api-internal.clarity-fintech.com](https://api-internal.clarity-fintech.com) | 443 | `make repair-edge ORIGIN=https://api-internal.clarity-fintech.com` |
| WebSocket | `wss://rpc.clarity-fintech.com/ws` | 443 | wss upgrade probe |
| Cherry VDS origin | `84.32.109.227:8545` | 8545 | SSH + local curl on VPS |

```bash
# ── Local origins (laptop / VPS) ──
curl -s http://127.0.0.1:8545/v1/security/quantum/status
curl -s http://127.0.0.1:8546/health

# ── Public mainnet JSON-RPC ──
curl -s https://rpc.clarity-fintech.com -X POST -H 'content-type: application/json' -d '{"jsonrpc":"2.0","id":1,"method":"getBetaMainnetStatus","params":[]}'

# ── Public testnet REST health ──
curl -s https://testnet-api.clarity-fintech.com/health

# ── clrtynet CLI (set endpoint per network) ──
export CLRTY_L1_RPC="https://rpc.clarity-fintech.com"
clrtynet rpc call getHealth '[]' --plain
clrtynet rpc call getBetaMainnetStatus '[]' --plain

export CLRTY_L1_RPC="https://testnet-api.clarity-fintech.com"
clrtynet rpc call getHealth '[]' --plain

export CLRTY_L1_RPC="http://127.0.0.1:8545"
clrtynet rpc call getHealth '[]' --plain

export CLRTY_L1_RPC="http://127.0.0.1:8546"
clrtynet rpc call getHealth '[]' --plain

# ── WebSocket (HELIX / streaming) ──
# wscat -c wss://rpc.clarity-fintech.com/ws
```




---

## 4. Mainnet REST surfaces

Probe each public mainnet endpoint:

```bash
curl -sf https://api.clarity-fintech.com/v1/status | jq .
curl -sf https://api.clarity-fintech.com/v1/security/quantum/status | jq .
curl -sf https://status.clarity-fintech.com/ | head -20
curl -sf https://explorer.clarity-fintech.com/v1/explorer/status | jq .
curl -sfI https://spark.clarity-fintech.com/ | head -3
curl -sfI https://exchange.clarity-fintech.com/ | head -3
curl -sf https://rpc.clarity-fintech.com -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getBetaMainnetStatus","params":[]}' | jq .
```

**Make targets:**

```bash
make mainnet-24x7-status
make mainnet-24x7-watchdog
make mainnet-24x7-push VPS=root@84.32.109.227
```




---

## 5. Testnet REST surfaces

```bash
curl -s https://testnet-api.clarity-fintech.com/health
curl -sf https://testnet-api.clarity-fintech.com/v1/status 2>/dev/null || curl -sf https://testnet-api.clarity-fintech.com/health
curl -sf https://faucet.clarity-fintech.com/ 2>/dev/null | head -5

# Deploy / watchdog
make testnet-24x7-push VPS=root@84.32.109.227
bash scripts/launch/testnet_vps_watchdog.sh
```




---

## 6. Spark Pay — manual cURL pay flow

Step-by-step REST equivalent of `make spark-pay-e2e` (test Visa `4111111111111111`):

```bash
export SPARK_API="${SPARK_API_BASE:-http://127.0.0.1:8546}"

# 1. Health
curl -sf "$SPARK_API/v1/spark/health" | jq .

# 2. Create link
LINK=$(curl -sf -X POST "$SPARK_API/v1/spark/links" \
  -H 'Content-Type: application/json' \
  -d '{"title":"Manual test","amount_cents":2500,"currency":"USD","rails":{"card":true,"crypto":true}}')
echo "$LINK" | jq .
LINK_ID=$(echo "$LINK" | jq -r '.link.id')
SIG=$(echo "$LINK" | jq -r '.link.signature')

# 3. Fetch by id + signature
curl -sf "$SPARK_API/v1/spark/links/$LINK_ID" | jq .
curl -sf "$SPARK_API/v1/spark/links/$SIG" | jq .

# 4. Verify signature
curl -sf -X POST "$SPARK_API/v1/spark/links/$LINK_ID/verify" \
  -H 'Content-Type: application/json' \
  -d "{\"signature\":\"$SIG\"}" | jq .

# 5. Start checkout session
SESS=$(curl -sf -X POST "$SPARK_API/v1/spark/sessions" \
  -H 'Content-Type: application/json' \
  -d "{\"link_id\":\"$LINK_ID\"}")
SID=$(echo "$SESS" | jq -r '.session_id')

# 6. Authorize test Visa PAN (4111…)
curl -sf -X POST "$SPARK_API/v1/spark/sessions/$SID/card/authorize" \
  -H 'Content-Type: application/json' \
  -d '{"pan":"4111111111111111","exp_month":12,"exp_year":28,"cvc":"123","amount_cents":2500,"currency":"USD","billing_postal":"94107"}' | jq .

# 7. Analytics + impression
curl -sf -X POST "$SPARK_API/v1/spark/links/$LINK_ID/impression" | jq .
curl -sf "$SPARK_API/v1/spark/links/$LINK_ID/analytics" | jq .
```




---

## 7. Spark Pay E2E (17 steps)

Run: `SPARK_API_BASE=http://127.0.0.1:8546 make spark-pay-e2e`

| # | Step | Type | Verified by |
|---|------|------|-------------|
| 1 | URI build/parse | SDK | `make spark-pay-e2e` |
| 2 | Card validation (Luhn + brand) | SDK | `make spark-pay-e2e` |
| 3 | Merchant modal step 1 | SDK | `make spark-pay-e2e` |
| 4 | Webhook signature helper | SDK | `make spark-pay-e2e` |
| 5 | Command + mechanism registries | SDK | `make spark-pay-e2e` |
| 6 | createPaymentLink | POST /v1/spark/links | `make spark-pay-e2e` |
| 7 | fetchLink by id | GET /v1/spark/links/:id | `make spark-pay-e2e` |
| 8 | fetchLink by deep-link signature | GET /v1/spark/links/:signature | `make spark-pay-e2e` |
| 9 | verifyLinkSignature | POST /v1/spark/links/:id/verify | `make spark-pay-e2e` |
| 10 | Deep link issued | link.deep_link claritypay://pay?link=… | `make spark-pay-e2e` |
| 11 | Merchant step 100 (link issue path) | runMerchantStep(100, ctx) | `make spark-pay-e2e` |
| 12 | initCheckout (steps 101–120) | POST /v1/spark/sessions | `make spark-pay-e2e` |
| 13 | Card authorize + settle (121–140) | POST /v1/spark/sessions/:sid/card/authorize | `make spark-pay-e2e` |
| 14 | Checkout lifecycle (141–200) | runCheckoutStep 141..200 → SETTLED | `make spark-pay-e2e` |
| 15 | recordImpression | POST /v1/spark/links/:id/impression | `make spark-pay-e2e` |
| 16 | fetchLinkAnalytics | GET /v1/spark/links/:id/analytics | `make spark-pay-e2e` |
| 17 | API reachable | GET /v1/spark/health | `make spark-pay-e2e` |

**SDK entry points:**

```javascript
import { createPaymentLink, initCheckout, runCheckoutFlow } from '@clarity/spark-pay';

const { link } = await createPaymentLink({ title: 'Test', amount_cents: 2500, currency: 'USD' });
const ctx = await initCheckout(link.deep_link);
ctx.card = { pan: '4111111111111111', expMonth: 12, expYear: 28, cvc: '123', postal: '94107' };
await runCheckoutFlow(ctx); // steps 121–200 → SETTLED
```




---

## 8. Full system test (31 checks)

Run: `SPARK_API_BASE=http://127.0.0.1:8546 make spark-pay-full-test`

### URL generator + canonical URLs

**Run suite:** `make spark-pay-full-test (suite 1)`

| Test | Expected | Individual command |
|------|----------|-------------------|
| generateSparkPayCheckout | claritypay:// + https://pay.clarity-fintech.com/spark?… | `node scripts/spark_pay/full_system_test.mjs (suite 1)` |
| generateTransactionRequest | claritypay://request?… | `make spark-pay-verify-deeplink` |
| URI round-trip (pay, request, checkout) | parse ≡ build | `make spark-pay-verify-deeplink` |
| buildSparkPayUrl web fallback paths | pay.clarity-fintech.com base | `make spark-pay-full-test` |
| url_canonical.json Spark merchant/checkout URLs | SSOT match | `jq .mainnet.spark_merchant var/launch/url_canonical.json` |

### Link flow registry + design SSOT

**Run suite:** `make spark-pay-full-test (suite 2)`

| Test | Expected | Individual command |
|------|----------|-------------------|
| LINK_FLOW_REGISTRY canonical bases | 11 flows | `node -e "import('./packages/clarity_spark/src/link-flow-registry.js').then(m=>console.log(m.LINK_FLOW_REGISTRY.length))"` |
| LINK_FLOW_REGISTRY required flows | merchant_dashboard, checkout, api_create… | `grep merchant_dashboard packages/clarity_spark/src/link-flow-registry.js` |
| design/screens.json SSOT | 20 mockup screens | `jq ".screens | length" packages/clarity_spark/design/screens.json` |
| Design tokens + shared spark.css | tokens.css + spark.css exist | `test -f packages/clarity_spark/design/tokens.css` |

### Build artifacts

**Run suite:** `make spark-pay-1501-1600 (build) then spark-pay-full-test`

| Test | Expected | Individual command |
|------|----------|-------------------|
| Merchant SPA dist | cloudflare/spark-pay/merchant/dist/index.html | `cd cloudflare/spark-pay/merchant && npm run build` |
| Checkout SPA dist | cloudflare/spark-pay/checkout/dist/index.html | `cd cloudflare/spark-pay/checkout && npm run build` |
| Embed bundle | embed/dist/spark-embed.js | `cd cloudflare/spark-pay/embed && npm run build` |
| Visual regression SSOT | 20-screen pixel diff | `node cloudflare/spark-pay/scripts/visual-regression.mjs` |

### Payments SDK + E2E pay flow

**Run suite:** `SPARK_API_BASE=http://127.0.0.1:8546 make spark-pay-e2e`

| Test | Expected | Individual command |
|------|----------|-------------------|
| URI build/parse | SDK unit | `node -e "import('./packages/clarity_spark/src/uri.js').then(m=>console.log(m.buildSparkPayUri('pay',{link:'testsig',amount:'25' })))"` |
| Card validation (Luhn + brand) | SDK unit | `make spark-pay-verify-checkout` |
| Merchant modal step 1 | SDK unit | `make spark-pay-verify-modal` |
| Webhook signature helper | SDK unit | `make spark-pay-verify-webhook` |
| Command + mechanism registries | SDK unit | `node -e "import('./packages/clarity_spark/src/commands.js').then(m=>console.log(m.listCommands().length,'commands'))"` |
| createPaymentLink | POST /v1/spark/links | `make spark-pay-e2e` |
| fetchLink by id | GET /v1/spark/links/:id | `make spark-pay-e2e` |
| fetchLink by deep-link signature | GET /v1/spark/links/:signature | `make spark-pay-e2e` |
| verifyLinkSignature | POST /v1/spark/links/:id/verify | `make spark-pay-e2e` |
| Deep link issued | link.deep_link claritypay://pay?link=… | `make spark-pay-e2e` |
| Merchant step 100 (link issue path) | runMerchantStep(100, ctx) | `make spark-pay-e2e` |
| initCheckout (steps 101–120) | POST /v1/spark/sessions | `make spark-pay-e2e` |
| Card authorize + settle (121–140) | POST /v1/spark/sessions/:sid/card/authorize | `make spark-pay-e2e` |
| Checkout lifecycle (141–200) | runCheckoutStep 141..200 → SETTLED | `make spark-pay-e2e` |
| recordImpression | POST /v1/spark/links/:id/impression | `make spark-pay-e2e` |
| fetchLinkAnalytics | GET /v1/spark/links/:id/analytics | `make spark-pay-e2e` |
| API reachable | GET /v1/spark/health | `make spark-pay-e2e` |

### Origin API (Rust)

**Run suite:** `cargo check -p clrty-api`

| Test | Expected | Individual command |
|------|----------|-------------------|
| clrty-api cargo check (spark_pay module) | compiles | `cargo check --manifest-path clrty-api/Cargo.toml` |

### Deployed surfaces

**Run suite:** `make spark-pay-full-test (suite 6)`

| Test | Expected | Individual command |
|------|----------|-------------------|
| Merchant dashboard | HTTP 200 | `curl -sI https://spark.clarity-fintech.com/ | head -1` |
| Merchant /create route | HTTP 200 | `curl -sI https://spark.clarity-fintech.com/create | head -1` |
| Checkout worker (workers.dev) | HTTP 200 | `curl -sI $(jq -r .checkout_workers_dev var/launch/spark_pay_1501_1600.json)` |
| Merchant worker (workers.dev) | HTTP 200 | `curl -sI $(jq -r .merchant_workers_dev var/launch/spark_pay_1501_1600.json)` |
| Mainnet API /v1/status | HTTP 200 | `curl -sf https://api.clarity-fintech.com/v1/status | jq .` |
| pay.clarity-fintech.com | 301 until route fix (warn) | `curl -sI https://pay.clarity-fintech.com/ | head -1` |
| Spark API /v1/spark/health | 404 until VPS push (warn) | `curl -sf https://api.clarity-fintech.com/v1/spark/health` |

### Makefile smoke

**Run suite:** `individual make spark-pay-verify-*`

| Test | Expected | Individual command |
|------|----------|-------------------|
| spark-pay-verify-deeplink | OK deeplink | `make spark-pay-verify-deeplink` |
| spark-pay-verify-webhook | OK webhook HMAC | `make spark-pay-verify-webhook` |
| spark-pay-verify-merchant | OK merchant modal | `make spark-pay-verify-merchant` |
| spark-pay-verify-checkout | OK checkout engine | `make spark-pay-verify-checkout` |
| spark-pay-verify-modal | OK modal steps | `make spark-pay-verify-modal` |


**Result line:** `31 passed, 2 warnings, 0 failed` (warnings = production Spark route not yet on VPS)




---

## 9. URL generator tests

```bash
make spark-pay-verify-deeplink
make spark-pay-full-test   # suites 1–2 only (grep "URL generator")
```

| Function | Output | Test |
|----------|--------|------|
| `generateSparkPayCheckout()` | `claritypay://pay?…` + `https://pay.clarity-fintech.com/spark?…` | Pass |
| `generateTransactionRequest()` | `claritypay://request?callback=…` | Pass |
| `buildSparkPayUri(action, params)` | Round-trip with `parseSparkPayUri` | Pass |
| `buildSparkPayUrl(opts, base)` | HTTPS fallback paths | Pass |
| `url_canonical.json` | `spark_merchant` + `spark_checkout` | Pass |

```javascript
import { generateSparkPayCheckout, generateTransactionRequest } from '@clarity/spark-pay';

const checkout = generateSparkPayCheckout({
  recipient: 'clrty1merchant', amount: '49.99', token: 'CLRTY', label: 'Premium',
});
console.log(checkout.deepLink, checkout.httpsUrl, checkout.qr.payload);
```




---

## 10. Build & visual regression

```bash
make spark-pay-1501-1600          # build merchant + checkout + embed + visual regression
node cloudflare/spark-pay/scripts/visual-regression.mjs

# Individual builds
cd cloudflare/spark-pay/merchant && npm ci && npm run build
cd cloudflare/spark-pay/checkout && npm ci && npm run build
cd cloudflare/spark-pay/embed && npm ci && npm run build

# Rust origin
cargo check --manifest-path clrty-api/Cargo.toml
```

| Artifact | Path |
|----------|------|
| Merchant SPA | `cloudflare/spark-pay/merchant/dist/index.html` |
| Checkout SPA | `cloudflare/spark-pay/checkout/dist/index.html` |
| Embed bundle | `cloudflare/spark-pay/embed/dist/spark-embed.js` |
| Design SSOT | `packages/clarity_spark/design/screens.json` (20 screens) |




---

## 11. Live HTTP probes

```bash
curl -sI https://spark.clarity-fintech.com/ | head -1          # expect 200
curl -sI https://spark.clarity-fintech.com/create | head -1    # expect 200
curl -sI https://pay.clarity-fintech.com/ | head -1          # may 301 until route fix
curl -sf https://api.clarity-fintech.com/v1/status | jq .               # expect 200
curl -sf https://api.clarity-fintech.com/v1/spark/health                # 404 until spark-pay-node-push
```

| Surface | URL | Expected |
|---------|-----|----------|
| Spark merchant | https://spark.clarity-fintech.com | HTTP 200 |
| Merchant /create | https://spark.clarity-fintech.com/create | HTTP 200 |
| Checkout worker | workers.dev (see spark_pay_1501_1600.json) | HTTP 200 |
| pay.clarity-fintech.com | https://pay.clarity-fintech.com | 301 (warn) until custom route |
| Spark API health | https://api.clarity-fintech.com/v1/spark/health | 404 (warn) until VPS deploy |




---

## 12. Makefile smoke targets

```bash
make spark-pay-verify-deeplink
make spark-pay-verify-webhook
make spark-pay-verify-merchant
make spark-pay-verify-checkout
make spark-pay-verify-modal
make spark-pay-verify              # full matrix 1601–2600 bands
```

Each target prints `OK` on success.




---

## 13. Monitors & edge verify

```bash
make sync-monitors                 # → var/launch/monitors_sync.json
make sync-command-flows            # launch SSOT + GitBook command pages
make keep-24x7-live
bash scripts/launch/cf_edge_cross_sync_verify.sh 2>/dev/null || true

# Watchdog (once)
make mainnet-24x7-watchdog
bash scripts/launch/testnet_vps_watchdog.sh
```

**VPS cron (production):**

| Cron | Command |
|------|---------|
| Mainnet | `*/5 * * * * root /opt/clrty/scripts/launch/mainnet_24x7_watchdog.sh` |
| Testnet | `*/5 * * * * root /opt/clrty/scripts/launch/testnet_vps_watchdog.sh` |
| Spark Pay | `*/5 * * * * … spark_pay_watchdog.sh` (`make spark-pay-watchdog-install VPS=…`) |

**Monitored URLs:** rpc, api, testnet-api, explorer, faucet, labs-manifest, bridge, api-internal — see `monitors_sync.json`.




---

## 14. PRISM terminal

```bash
make launch-prism              # native terminal shell
make launch-prism-web          # browser UI http://127.0.0.1:5174
make launch-prism-live         # build + API + native PRISM
make launch-prism-local        # offline stubs

# After launch-prism-web
curl -sf http://127.0.0.1:5174/ | head -5
```




---

## 15. Node creation & wallet CLI

```bash
make clrtynet-install
make build-all

clrtynet node status --plain
clrtynet node register --dry-run
clrtynet wallet register --dry-run
clrtynet rpc call getHealth '[]' --plain

# Point at public mainnet RPC
export CLRTY_L1_RPC=https://rpc.clarity-fintech.com
clrtynet rpc call getBetaMainnetStatus '[]' --plain
```

Deploy node to Cherry VDS:

```bash
make mainnet-24x7-push VPS=root@84.32.109.227
make connect-full-server VPS=root@84.32.109.227
```

See [Master CLI reference](../cli/master-command-reference.md).




---

## 16. Production deploy (clear warnings)

Resolve the two standard local warnings:

```bash
# 1. Spark API on production (fixes GET /v1/spark/health 404)
make spark-pay-node-push VPS=root@clarity-vds

# 2. Checkout custom domain (fixes pay.clarity-fintech.com 301)
make spark-pay-1501-1600
# then reconcile Cloudflare route for pay.clarity-fintech.com → checkout worker

# Full stack
make deploy-all-live VPS=root@84.32.109.227
make sync-monitors
make gitbook-publish
```




---

## 17. Expected warnings

| Item | Status | Fix |
|------|--------|-----|
| Production `GET /v1/spark/health` | 404 until VPS push | `make spark-pay-node-push VPS=root@clarity-vds` from network with SSH |
| `pay.clarity-fintech.com` | 301 redirect — route conflict | Checkout live on workers.dev; fix CF custom route |
| `runCommand('spark.health')` | Uses production API URL | Set `SPARK_API_BASE=http://127.0.0.1:8546` for local |
| VPS SSH | Blocked without password | `export CLRTY_VPS_PASSWORD=…` or Cherry console bootstrap |




---

## 18. Troubleshooting matrix

| Symptom | Likely cause | Command |
|---------|--------------|---------|
| E2E fails immediately | API not running | `CLRTY_RPC_PORT=8546 ./target/debug/clrty-api` |
| `createPaymentLink` 404 | Wrong `SPARK_API_BASE` | `export SPARK_API_BASE=http://127.0.0.1:8546` |
| RPC public fails | Edge/tunnel down | `make repair-edge-and-verify VPS=root@clarity-vds` |
| Testnet health fails | testnet service stopped | `make testnet-24x7-push VPS=root@84.32.109.227` |
| Merchant dist missing | No build | `make spark-pay-1501-1600` |
| Visual regression fail | Mockup drift | `node cloudflare/spark-pay/scripts/visual-regression.mjs` |
| Monitors FAIL public_rest | Transient edge | `make sync-monitors` (re-run) |
| Link hash panic | Old binary | Rebuild clrty-api (32-char hash fix) |




---

## 19. JSON-RPC method tests

Each method below is runnable against **public RPC**, **local :8545**, and **clrtynet**.

### `getHealth`

Liveness / cluster info

```bash
# Public mainnet RPC
curl -sf https://rpc.clarity-fintech.com -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getHealth","params":[]}' | jq .

# Local mainnet origin
curl -sf http://127.0.0.1:8545 -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getHealth","params":[]}' | jq .

# clrtynet
export CLRTY_L1_RPC=https://rpc.clarity-fintech.com
clrtynet rpc call getHealth '[]' --plain
```

### `getBetaMainnetStatus`

Mainnet beta rollout status

```bash
# Public mainnet RPC
curl -sf https://rpc.clarity-fintech.com -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getBetaMainnetStatus","params":[]}' | jq .

# Local mainnet origin
curl -sf http://127.0.0.1:8545 -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getBetaMainnetStatus","params":[]}' | jq .

# clrtynet
export CLRTY_L1_RPC=https://rpc.clarity-fintech.com
clrtynet rpc call getBetaMainnetStatus '[]' --plain
```

### `getSlot`

Current chain slot

```bash
# Public mainnet RPC
curl -sf https://rpc.clarity-fintech.com -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getSlot","params":[]}' | jq .

# Local mainnet origin
curl -sf http://127.0.0.1:8545 -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getSlot","params":[]}' | jq .

# clrtynet
export CLRTY_L1_RPC=https://rpc.clarity-fintech.com
clrtynet rpc call getSlot '[]' --plain
```

### `getVersion`

Node software version

```bash
# Public mainnet RPC
curl -sf https://rpc.clarity-fintech.com -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getVersion","params":[]}' | jq .

# Local mainnet origin
curl -sf http://127.0.0.1:8545 -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getVersion","params":[]}' | jq .

# clrtynet
export CLRTY_L1_RPC=https://rpc.clarity-fintech.com
clrtynet rpc call getVersion '[]' --plain
```

### `getBalance`

Account balance (example address)

```bash
# Public mainnet RPC
curl -sf https://rpc.clarity-fintech.com -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getBalance","params":["clrty1example"]}' | jq .

# Local mainnet origin
curl -sf http://127.0.0.1:8545 -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"getBalance","params":["clrty1example"]}' | jq .

# clrtynet
export CLRTY_L1_RPC=https://rpc.clarity-fintech.com
clrtynet rpc call getBalance '["clrty1example"]' --plain
```


**List all registered methods (local origin):**

```bash
curl -sf http://127.0.0.1:8545/v1/rpc/methods | jq .
curl -sf http://127.0.0.1:8545/v1/rpc/methods/getHealth | jq .
```




---

## 20. Link flow registry — per-URL commands

Every Spark Pay surface from `link-flow-registry.js` (11 flows):

| ID | Label | URL | SDK | Make verify | Test command |
|----|-------|-----|-----|-------------|--------------|
| `merchant_dashboard` | Merchant dashboard | `https://spark.clarity-fintech.com/` | `SparkPay.openDashboard` | `make spark-pay-verify-merchant` | `make spark-pay-verify-merchant # or curl probe URL` |
| `create_link` | Create payment link | `https://spark.clarity-fintech.com/create` | `SparkPayMerchantModal.open` | `make spark-pay-verify-modal` | `make spark-pay-verify-modal # or curl probe URL` |
| `checkout` | Customer checkout | `https://pay.clarity-fintech.com/l/:id` | `SparkPayCheckoutEngine.init` | `make spark-pay-verify-checkout` | `make spark-pay-verify-checkout # or curl probe URL` |
| `deeplink` | claritypay:// deep link | `claritypay://pay?link=…` | `parseSparkPayUri` | `make spark-pay-verify-deeplink` | `make spark-pay-verify-deeplink # or curl probe URL` |
| `web_fallback` | Web fallback URL | `https://pay.clarity-fintech.com/spark/:hash` | `fetchLink` | `make spark-pay-verify-web-url` | `make spark-pay-verify-web-url # or curl probe URL` |
| `api_create` | API create link | `https://api.clarity-fintech.com/v1/spark/links` | `createPaymentLink` | `curl -s https://api.clarity-fintech.com/v1/spark/health` | `curl -s https://api.clarity-fintech.com/v1/spark/health` |
| `webhook` | Merchant webhook | `{merchant_webhook_url}` | `verifyWebhookSignature` | `make spark-pay-verify-webhook` | `make spark-pay-verify-webhook # or curl probe URL` |
| `analytics` | Link analytics | `https://spark.clarity-fintech.com/links/:id/analytics` | `fetchLinkAnalytics` | `make spark-pay-verify-analytics` | `make spark-pay-verify-analytics # or curl probe URL` |
| `node_origin` | CLRTY node origin | `https://api-internal.clarity-fintech.com/v1/spark/health` | `runCommand("node.mainnetStatus")` | `make spark-pay-node-push` | `make spark-pay-node-push # or curl probe URL` |
| `rpc` | RPC (crypto rail) | `https://rpc.clarity-fintech.com` | `onchain.broadcast` | `make mainnet-24x7-status` | `make mainnet-24x7-status # or curl probe URL` |
| `clrty_mechanisms` | CLRTY mechanism registry (200) | `https://spark.clarity-fintech.com/create` | `runMechanism("CLRTY-M001")` | `make spark-clrty-mechanisms-verify` | `make spark-clrty-mechanisms-verify # or curl probe URL` |

```bash
# Run all flow verify targets
for t in deeplink webhook merchant checkout modal analytics; do
  make spark-pay-verify-$t
done
make spark-pay-e2e
```




---

## 21. Environment variable reference

| Variable | Purpose | Local test | Production |
|----------|---------|------------|------------|
| `SPARK_API_BASE` | SDK + harness API root | `http://127.0.0.1:8546` | `https://api.clarity-fintech.com` |
| `CLRTY_RPC_PORT` | clrty-api bind port | `8546` (Spark E2E) / `8545` (mainnet) | set on VPS systemd |
| `CLRTY_L1_RPC` | clrtynet JSON-RPC endpoint | `http://127.0.0.1:8545` | `https://rpc.clarity-fintech.com` |
| `CLRTY_VPS_PASSWORD` | Cherry SSH deploy | — | required for `make deploy-all-live VPS=root@84.32.109.227` |
| `CLRTY_CHERRY_TOKEN` | Cherry API JWT | — | required for deploy scripts |
| `SPARK_WEBHOOK_SECRET` | HMAC for merchant webhooks | any test secret | set on VPS origin |
| `VPS` | SSH target for Make deploy | `root@84.32.109.227` | `root@clarity-vds` |
| `CLRTY_API_BIN` | Override clrty-api binary path | `./target/debug/clrty-api` | `/opt/clrty/bin/clrty-api` |



---

## Regenerate & publish

```bash
node scripts/gitbook/generate_system_test_guide.mjs
node scripts/spark_pay/generate_gitbook_usage.mjs
make sync-command-flows
make gitbook-publish
```

## Related

- [Operations hub](README.md)
- [CLRTY command index](clrty-command-index.md)
- [Spark Pay usage](../payments/spark-usage-commands.md)
- [Launch COMMAND_FLOWS.md](../../../launch/COMMAND_FLOWS.md)
