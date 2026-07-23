# Spark Pay — usage & commands (tested)

> Auto-generated 2026-07-23 from `packages/clarity_spark/src/commands.js`, `Makefile`, and `link-flow-registry.js`.  
> Regenerate: `node scripts/spark_pay/generate_gitbook_usage.mjs`  
> Full system test: `make spark-pay-full-test` · E2E pay flow: `make spark-pay-e2e`

## Canonical URLs

| Surface | URL |
|---------|-----|
| Merchant dashboard | [https://spark.clarity-fintech.com](https://spark.clarity-fintech.com) |
| Customer checkout | [https://pay.clarity-fintech.com](https://pay.clarity-fintech.com) |
| Spark REST API | [https://api.clarity-fintech.com/v1/spark/health](https://api.clarity-fintech.com/v1/spark/health) |
| SDK GitHub | [clarity-fintech/clarity_spark](https://github.com/clarity-fintech/clarity_spark) |

---

## Quick start (SDK)

```bash
npm install @clarity/spark-pay
```

```javascript
import {
  generateSparkPayCheckout,
  buildSparkPayUri,
  createPaymentLink,
  initCheckout,
  runCheckoutFlow,
  runCommand,
  openMerchantModal,
} from '@clarity/spark-pay';

// URL generator — QR + embed bundle
const { deepLink, httpsUrl, qr, embed } = generateSparkPayCheckout({
  recipient: 'clrty1merchant',
  amount: '49.99',
  token: 'CLRTY',
  label: 'Premium Access',
});

// Payment link via origin API
const { link } = await createPaymentLink({
  title: 'Consulting invoice',
  amount_cents: 2500,
  currency: 'USD',
  rails: { card: true, crypto: true, bank: false },
});

// Customer checkout from deep link (steps 101–200)
const ctx = await initCheckout(link.deep_link);
ctx.card = { pan: '4111111111111111', expMonth: 12, expYear: 28, cvc: '123', postal: '94107' };
await runCheckoutFlow(ctx);

// Operational commands
await runCommand('spark.parseUri', { uri: deepLink });
await runCommand('spark.health');
```

---

## URL generator

| Function | Purpose | Test |
|----------|---------|------|
| `generateSparkPayCheckout(opts)` | Deep link + HTTPS spark URL + QR metadata | `make spark-pay-full-test` |
| `generateTransactionRequest(opts)` | `claritypay://request?callback=…` | `make spark-pay-full-test` |
| `buildSparkPayUri(action, params)` | Custom scheme builder | `make spark-pay-verify-deeplink` |
| `buildSparkPayUrl(opts, base)` | HTTPS fallback / QR-safe URL | `make spark-pay-full-test` |
| `parseSparkPayUri(input)` | Parse `claritypay://` or HTTPS | `make spark-pay-verify-deeplink` |

### Example — signed payment link URLs

```javascript
import { buildSparkPayUri } from '@clarity/spark-pay';

const deep = buildSparkPayUri('pay', { link: 'SIGNATURE_FROM_API' });
// claritypay://pay?link=SIGNATURE_FROM_API

const web = `https://pay.clarity-fintech.com/spark/9f7a3b2c`;
```

See [claritypay:// URI reference](claritypay-uri.md).

---

## SDK `runCommand()` registry

| Command | Description | Example |
|---------|-------------|---------|
| `spark.health` | GET /v1/spark/health | `await runCommand('spark.health')` |
| `spark.createLink` | POST /v1/spark/links | `await runCommand('spark.createLink', { title: 'Invoice', amount_cents: 2500, currency: 'USD' })` |
| `spark.parseUri` | Parse claritypay:// URI (step 101) | `await runCommand('spark.parseUri', { uri: 'claritypay://pay?link=test' })` |
| `spark.verifyLink` | POST /v1/spark/links/:id/verify (step 103) | `await runCommand('spark.verifyLink', { link_id, signature })` |
| `spark.startSession` | POST /v1/spark/sessions (steps 101–120) | `await runCommand('spark.startSession', { link_id })` |
| `node.mainnetStatus` | Verify CLRTY node — prerequisite for Spark Pay | `await runCommand('node.mainnetStatus')` |

```javascript
import { runCommand, listCommands } from '@clarity/spark-pay';
console.log(listCommands());
```

**Local API:** export `SPARK_API_BASE=http://127.0.0.1:8546` before running SDK tests.

---

## Link API client (`/v1/spark/*`)

| SDK function | HTTP | Verified by |
|--------------|------|-------------|
| `fetchSparkHealth()` | `GET /v1/spark/health` | `make spark-pay-e2e` |
| `createPaymentLink(body)` | `POST /v1/spark/links` | `make spark-pay-e2e` |
| `fetchLink(idOrHash)` | `GET /v1/spark/links/:id` | `make spark-pay-e2e` |
| `verifyLinkSignature(id, sig)` | `POST /v1/spark/links/:id/verify` | `make spark-pay-e2e` |
| `recordImpression(id)` | `POST /v1/spark/links/:id/impression` | `make spark-pay-e2e` |
| `startCheckoutSession(body)` | `POST /v1/spark/sessions` | `make spark-pay-e2e` |
| `authorizeCard(sessionId, card)` | `POST /v1/spark/sessions/:sid/card/authorize` | `make spark-pay-e2e` |
| `fetchLinkAnalytics(id)` | `GET /v1/spark/links/:id/analytics` | `make spark-pay-e2e` |
| `verifyWebhookSignature(secret, body, header)` | HMAC helper | `make spark-pay-verify-webhook` |

### cURL — create link + pay (test card)

```bash
export SPARK_API="${SPARK_API_BASE:-https://api.clarity-fintech.com}"

curl -sf "$SPARK_API/v1/spark/health" | jq .

LINK=$(curl -sf -X POST "$SPARK_API/v1/spark/links" \
  -H 'Content-Type: application/json' \
  -d '{"title":"GitBook test","amount_cents":2500,"currency":"USD"}')
LINK_ID=$(echo "$LINK" | jq -r '.link.id')

SESS=$(curl -sf -X POST "$SPARK_API/v1/spark/sessions" \
  -H 'Content-Type: application/json' \
  -d "{\"link_id\":\"$LINK_ID\"}")
SID=$(echo "$SESS" | jq -r '.session_id')

curl -sf -X POST "$SPARK_API/v1/spark/sessions/$SID/card/authorize" \
  -H 'Content-Type: application/json' \
  -d '{"pan":"4111111111111111","exp_month":12,"exp_year":28,"cvc":"123","amount_cents":2500,"currency":"USD","billing_postal":"94107"}' | jq .
```

---

## Merchant modal & checkout engines

| Engine | Steps | SDK entry | Make verify |
|--------|-------|-----------|-------------|
| Merchant micro-modal | 1–100 | `openMerchantModal(host, opts)` | `make spark-pay-verify-modal` |
| Checkout engine | 101–200 | `initCheckout(uri)` · `runCheckoutFlow(ctx)` | `make spark-pay-verify-checkout` |

```javascript
import { openMerchantModal, initCheckout, runMerchantFlow } from '@clarity/spark-pay';

openMerchantModal(document.getElementById('spark-host'), { title: 'Invoice', amount: 250 });
await runMerchantFlow({ title: 'Annual plan', amount: 499, currency: 'USD' });
```

Live UI routes — see [Merchant UI](spark-merchant-ui.md):

| Screen | Route |
|--------|-------|
| Dashboard | `https://spark.clarity-fintech.com/` |
| Create link wizard | `https://spark.clarity-fintech.com/create` |
| Link success (screen 8) | `https://spark.clarity-fintech.com/create/success` |
| Link analytics (screen 20) | `https://spark.clarity-fintech.com/links/:id/analytics` |

---

## Link flow registry (URL ↔ SDK ↔ Make)

| ID | Label | URL pattern | SDK | Make verify |
|----|-------|-------------|-----|-------------|
| `merchant_dashboard` | Merchant dashboard | `https://spark.clarity-fintech.com/` | `SparkPay.openDashboard` | `make spark-pay-verify-merchant` |
| `create_link` | Create payment link | `https://spark.clarity-fintech.com/create` | `SparkPayMerchantModal.open` | `make spark-pay-verify-modal` |
| `checkout` | Customer checkout | `https://pay.clarity-fintech.com/l/:id` | `SparkPayCheckoutEngine.init` | `make spark-pay-verify-checkout` |
| `deeplink` | claritypay:// deep link | `claritypay://pay?link=…` | `parseSparkPayUri` | `make spark-pay-verify-deeplink` |
| `web_fallback` | Web fallback URL | `https://pay.clarity-fintech.com/spark/:hash` | `fetchLink` | `make spark-pay-verify-web-url` |
| `api_create` | API create link | `https://api.clarity-fintech.com/v1/spark/links` | `createPaymentLink` | `curl -s https://api.clarity-fintech.com/v1/spark/health` |
| `webhook` | Merchant webhook | `{merchant_webhook_url}` | `verifyWebhookSignature` | `make spark-pay-verify-webhook` |
| `analytics` | Link analytics | `https://spark.clarity-fintech.com/links/:id/analytics` | `fetchLinkAnalytics` | `make spark-pay-verify-analytics` |
| `node_origin` | CLRTY node origin | `https://api-internal.clarity-fintech.com/v1/spark/health` | `runCommand("node.mainnetStatus")` | `make spark-pay-node-push` |
| `rpc` | RPC (crypto rail) | `https://rpc.clarity-fintech.com` | `onchain.broadcast` | `make mainnet-24x7-status` |
| `clrty_mechanisms` | CLRTY mechanism registry (200) | `https://spark.clarity-fintech.com/create` | `runMechanism("CLRTY-M001")` | `make spark-clrty-mechanisms-verify` |

---

## Make targets — test & verify

| Command | Purpose |
|---------|---------|
| `make spark-pay-301-900-verify` | Architecture 301–900: NO AWS policy + launch manifest |
| `make spark-pay-901-1000-verify` | Architecture capstone 901–1000: agent/PQC/liquidity/governance (NO AWS) |
| `make spark-pay-verify` | Aggregate Spark Pay smoke (API + dist + watchdog) |
| `make spark-pay-e2e` | SDK E2E — link generation + checkout pay flow (set SPARK_API_BASE for local API) |
| `make spark-pay-full-test` | Full system test — URL generator, payments SDK, builds, live surfaces |
| `make spark-pay-verify-merchant` | Verify merchant dashboard dist |
| `make spark-pay-verify-modal` | Verify merchant create flow + embed bundle |
| `make spark-pay-verify-checkout` | Verify checkout SPA dist |
| `make spark-pay-verify-deeplink` | Verify claritypay:// URI parser (step 101) |
| `make spark-pay-verify-webhook` | Verify webhook signature helper |
| `make spark-pay-verify-analytics` | Verify analytics API route registered |
| `make spark-pay-merchant-modal-verify` | Tasks 1601–1700 aggregate |
| `make spark-pay-checkout-init-verify` | Tasks 1901–2000 aggregate |
| `make spark-pay-card-verify` | Tasks 2201–2300 card rail smoke |
| `make spark-pay-notify-verify` | Tasks 2401–2500 notify + webhook smoke |
| `make spark-pay-lifecycle-verify` | Tasks 2501–2600 lifecycle lock |
| `make spark-pay-watchdog` | Run Spark Pay health watchdog once |
| `make spark-pay-watchdog-install` | Install Spark Pay cron on VPS |

```bash
CLRTY_RPC_PORT=8546 ./target/debug/clrty-api &
SPARK_API_BASE=http://127.0.0.1:8546 make spark-pay-full-test
SPARK_API_BASE=http://127.0.0.1:8546 make spark-pay-e2e
```

---

## Make targets — deploy & publish

| Command | Purpose |
|---------|---------|
| `make clarity-spark-sync` | Mirror SDK → clarity-fintech/clarity_spark |
| `make gitbook-publish` | Push docs/gitbook → clarity-fintech/gitbook |
| `make sync-command-flows` | Sync URL + command flows across launch docs |
| `make spark-pay-1501-1600` | Tasks 1501–1600: build + deploy Spark Pay merchant + checkout SPAs |
| `make spark-pay-1601-2600` | Tasks 1601–2600: 10 bands × 100 tasks each |
| `make spark-pay-tools-install` | Install self-hosted Spark stack on VPS — usage: make spark-pay-tools-install VPS=root@clarity-vds |
| `make spark-pay-node-push` | Extend clrty-api spark_pay on VPS — usage: make spark-pay-node-push VPS=root@clarity-vds |
| `make spark-pay-watchdog-install` | Install Spark Pay cron on VPS |
| `make spark-pay-package-update` | Post-ship: sync SDK, GitBook, command flows, verify matrix |

---

## Verify matrix bands (1601–2600)

| Command | Purpose |
|---------|---------|
| `make spark-pay-1601-1700` | Band 1601–1700 (100 tasks) |
| `make spark-pay-1701-1800` | Band 1701–1800 (100 tasks) |
| `make spark-pay-1801-1900` | Band 1801–1900 (100 tasks) |
| `make spark-pay-1901-2000` | Band 1901–2000 (100 tasks) |
| `make spark-pay-2001-2100` | Band 2001–2100 (100 tasks) |
| `make spark-pay-2101-2200` | Band 2101–2200 (100 tasks) |
| `make spark-pay-2201-2300` | Band 2201–2300 (100 tasks) |
| `make spark-pay-2301-2400` | Band 2301–2400 (100 tasks) |
| `make spark-pay-2401-2500` | Band 2401–2500 (100 tasks) |
| `make spark-pay-2501-2600` | Band 2501–2600 (100 tasks) |
| `make spark-pay-301-900-verify` | Architecture 301–900: NO AWS policy + launch manifest |
| `make spark-pay-901-1000-verify` | Architecture capstone 901–1000: agent/PQC/liquidity/governance (NO AWS) |

---

## Environment variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `SPARK_API_BASE` | Override SDK + test API root | `http://127.0.0.1:8546` |
| `SPARK_API` | cURL scripts in this doc | `https://api.clarity-fintech.com` |
| `CLRTY_RPC_PORT` | Local clrty-api bind port | `8546` |
| `SPARK_WEBHOOK_SECRET` | Origin webhook HMAC | set on VPS |
| `VPS` | Deploy targets | `root@clarity-vds` |

---

## GitBook publish workflow

```bash
node scripts/spark_pay/generate_gitbook_usage.mjs
make gitbook-publish
make spark-pay-package-update   # SDK + GitBook + full matrix
```

## Related

- [Overview](spark-pay-overview.md)
- [Command matrix (1601–2600)](spark-command-matrix.md)
- [API reference](api-reference.md)
- [claritypay:// URI](claritypay-uri.md)
- [Merchant UI](spark-merchant-ui.md)
- [CLRTY mechanisms embed](spark-clrty-mechanisms-embed.md)
