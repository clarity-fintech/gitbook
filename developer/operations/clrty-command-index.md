# CLRTY command index (all surfaces)

> Auto-generated 2026-07-23 from `Makefile`, `var/launch/url_canonical.json`, and launch SSOT.  
> Regenerate: `node scripts/gitbook/generate_all_commands.mjs`  
> Sync launch docs + monitors: `make sync-command-flows`  
> Publish GitBook: `make gitbook-publish`

**382 Make targets** · **Cherry VDS** #939850 · `84.32.109.227`

---

## Quick start (production)

```bash
export CLRTY_VPS_PASSWORD='your-root-password'
export CLRTY_CHERRY_TOKEN='your-cherry-jwt'

# One-shot: mainnet + testnet + infra + edge
make deploy-all-live VPS=root@84.32.109.227

# Or step-by-step 24/7 stack
make full-vps-deploy VPS=root@84.32.109.227
make mainnet-24x7-push VPS=root@84.32.109.227
make testnet-24x7-push VPS=root@84.32.109.227
make sync-command-flows
make sync-monitors
```

Cherry console (SSH blocked):

```bash
bash /opt/clrty/infra/bare-metal/scripts/cherry-console-bootstrap.sh
tail -f /var/log/clrty/bootstrap-live.log
```

---

## URL ↔ command map (every live link)

| Surface | URL | Primary commands |
|---------|-----|------------------|
| Mainnet RPC | [https://rpc.clarity-fintech.com](https://rpc.clarity-fintech.com) | `curl` JSON-RPC · `make mainnet-24x7-status` |
| Mainnet API | [https://api.clarity-fintech.com](https://api.clarity-fintech.com) | `curl` |
| Mainnet internal tunnel | [https://api-internal.clarity-fintech.com](https://api-internal.clarity-fintech.com) | `make repair-edge ORIGIN=https://api-internal.clarity-fintech.com` |
| Mainnet WebSocket | [wss://rpc.clarity-fintech.com/ws](#) | wss client · HELIX streams |
| Testnet API | [https://testnet-api.clarity-fintech.com](https://testnet-api.clarity-fintech.com) | `curl -s https://testnet-api.clarity-fintech.com/health` |
| Exchange | [https://exchange.clarity-fintech.com](https://exchange.clarity-fintech.com) | `make cf-go-live` · off-ramp UI |
| Portal / docs | [https://clarity-fintech.com](https://clarity-fintech.com) | `make website-801-900` · `make gitbook-publish` |
| Status dashboard | [https://status.clarity-fintech.com](https://status.clarity-fintech.com) | `make cf-status-deploy` · `make sync-monitors` |
| Spark merchant | [https://spark.clarity-fintech.com](https://spark.clarity-fintech.com) | `make spark-pay-1501-1600` · [Spark usage](../payments/spark-usage-commands.md) |
| Spark checkout | [https://pay.clarity-fintech.com](https://pay.clarity-fintech.com) | `make spark-pay-1501-1600` |
| Spark API | [https://api.clarity-fintech.com/v1/spark/health](https://api.clarity-fintech.com/v1/spark/health) | `make spark-pay-node-push` · `make spark-pay-e2e` |
| Explorer | [https://explorer.clarity-fintech.com](https://explorer.clarity-fintech.com) | chain explorer (public) |
| Faucet | [https://faucet.clarity-fintech.com](https://faucet.clarity-fintech.com) | testnet faucet worker |
| PRISM web terminal | [http://127.0.0.1:5174](http://127.0.0.1:5174) | `make launch-prism-web` |
| Cherry VDS origin | [84.32.109.227:8545](#) | `make mainnet-24x7-push VPS=root@84.32.109.227` |

Monorepo SSOT: `var/launch/url_canonical.json` · Launch hub: [COMMAND_FLOWS.md](../../../launch/COMMAND_FLOWS.md)

---

## Canonical command flows (`command_flows`)

| Key | Command |
|-----|---------|
| `deploy_all` | `CLRTY_VPS_PASSWORD='***' CLRTY_CHERRY_TOKEN='***' bash scripts/launch/deploy_all_live.sh` |
| `make_deploy` | `make deploy-all-live VPS=root@84.32.109.227` |
| `full_vps_deploy` | `make full-vps-deploy VPS=root@84.32.109.227` |
| `mainnet_24x7_push` | `make mainnet-24x7-push VPS=root@84.32.109.227` |
| `testnet_24x7_push` | `make testnet-24x7-push VPS=root@84.32.109.227` |
| `infra_provision` | `make infra-provision VPS=root@84.32.109.227` |
| `cherry_console` | `bash /opt/clrty/infra/bare-metal/scripts/cherry-console-bootstrap.sh` |
| `sync_tunnel_config` | `bash scripts/launch/sync_tunnel_config.sh` |
| `repair_edge` | `make repair-edge ORIGIN=https://api-internal.clarity-fintech.com` |
| `sync_monitors` | `make sync-monitors` |
| `sync_flows` | `make sync-command-flows` |
| `keep_24x7_live` | `make keep-24x7-live` |
| `connect_full_server` | `make connect-full-server VPS=root@84.32.109.227` |
| `connect_full_server_vds` | `make connect-full-server VPS=root@clarity-vds` |
| `cherry_whitelist_ip` | `make cherry-whitelist-ip` |
| `cherry_ops_deploy` | `make cherry-ops-deploy VPS=root@clarity-vds` |
| `repair_edge_verify` | `make repair-edge-and-verify VPS=root@clarity-vds` |
| `cf_ssh_config` | `make cf-ssh-config` |
| `cf_zero_trust_vps` | `make cf-zero-trust-vps VPS=root@clarity-vds` |
| `edge_701_800` | `make edge-701-800` |
| `website_801_900` | `make website-801-900` |
| `edge_901_1000` | `make edge-901-1000` |
| `edge_1201_1300` | `make edge-1201-1300` |
| `quantum_1301_1400` | `make quantum-1301-1400` |
| `ai_1401_1500` | `make ai-1401-1500` |
| `spark_pay_1501_1600` | `make spark-pay-1501-1600` |
| `spark_pay_1601_2600` | `make spark-pay-1601-2600` |
| `spark_pay_301_900` | `make spark-pay-301-900-verify` |
| `spark_pay_901_1000` | `make spark-pay-901-1000-verify` |
| `spark_pay_tools_install` | `make spark-pay-tools-install VPS=root@clarity-vds` |
| `spark_pay_node_push` | `make spark-pay-node-push VPS=root@clarity-vds` |
| `spark_pay_verify` | `make spark-pay-verify` |
| `spark_clrty_mechanisms_200` | `make spark-clrty-mechanisms-verify` |
| `full_prepare_live` | `make full-prepare-live` |
| `mainnet_watchdog_cron` | `*/5 * * * * root /opt/clrty/scripts/launch/mainnet_24x7_watchdog.sh` |
| `testnet_watchdog_cron` | `*/5 * * * * root /opt/clrty/scripts/launch/testnet_vps_watchdog.sh` |
| `verify_mainnet` | `curl -s http://127.0.0.1:8545/v1/security/quantum/status` |
| `verify_testnet` | `curl -s http://127.0.0.1:8546/health` |
| `verify_public_rpc` | `curl -s https://rpc.clarity-fintech.com -X POST -H 'content-type: application/json' -d '{"jsonrpc":"2.0","id":1,"method":"getBetaMainnetStatus","params":[]}'` |
| `verify_public_testnet` | `curl -s https://testnet-api.clarity-fintech.com/health` |
| `exchange_invest_redirect` | `https://exchange.clarity-fintech.com/exchange/invest.html → /pre-genesis` |

---

## Task bands (701–2600)

| Band | Make target | Launch doc |
|------|-------------|------------|
| 701–800 Infrastructure | `make edge-701-800` | `docs/launch/INFRASTRUCTURE_701_800.md` |
| 801–900 Website | `make website-801-900` | `docs/launch/WEBSITE_801_900.md` |
| 901–1000 Edge | `make edge-901-1000` | `docs/launch/EDGE_901_1000.md` |
| 1201–1300 Bridge | `make edge-1201-1300` | `docs/launch/EDGE_1201_1300.md` |
| 1301–1400 Quantum | `make quantum-1301-1400` | `docs/launch/EDGE_1301_1400.md` |
| 1401–1500 AI | `make ai-1401-1500` | `—` |
| Spark 1501–1600 UI | `make spark-pay-1501-1600` | `docs/launch/SPARK_PAY_1501_1600.md` |
| Spark 1601–2600 matrix | `make spark-pay-1601-2600` | `docs/launch/SPARK_PAY_1601_2600.md` |
| Spark 301–900 arch | `make spark-pay-301-900-verify` | `docs/launch/SPARK_PAY_301_900.md` |
| Spark 901–1000 capstone | `make spark-pay-901-1000-verify` | `docs/launch/SPARK_PAY_901_1000.md` |

---

## PRISM terminal

| Command | Purpose |
|---------|---------|
| `make launch-prism` | Native PRISM terminal shell |
| `make launch-prism-web` | PRISM browser UI (:5174) |
| `make launch-prism-live` | Build + API + native PRISM |
| `make launch-prism-local` | Offline PRISM stubs |

```bash
make launch-prism-live
make launch-prism-web   # http://127.0.0.1:5174
```

---

## Mainnet & testnet verify

```bash
# Local origin
curl -s http://127.0.0.1:8545/v1/security/quantum/status
curl -s http://127.0.0.1:8546/health

# Public edge
curl -s https://rpc.clarity-fintech.com -X POST -H 'content-type: application/json' -d '{"jsonrpc":"2.0","id":1,"method":"getBetaMainnetStatus","params":[]}'
curl -s https://testnet-api.clarity-fintech.com/health

make mainnet-24x7-status
make mainnet-24x7-watchdog
bash scripts/launch/testnet_vps_watchdog.sh
```

---

## Monitors & 24/7 cron

| Command | Purpose |
|---------|---------|
| `make sync-monitors` | Sync all monitors → `monitors_sync.json` + deploy matrix |
| `make keep-24x7-live` | Link watchdog commands across all launch docs |
| `make mainnet-24x7-watchdog` | Run mainnet health watchdog once |
| `make mainnet-24x7-status` | Origin + tunnel + edge health |
| `make spark-pay-watchdog` | Spark Pay health probe |
| `make deploy-monitor` | Deploy monitor workers |

**VPS cron:** `*/5 * * * * root /opt/clrty/scripts/launch/mainnet_24x7_watchdog.sh`  
**Testnet cron:** `*/5 * * * * root /opt/clrty/scripts/launch/testnet_vps_watchdog.sh`

---

## Node creation & wallet CLI

See [Master CLI reference](../cli/master-command-reference.md) for `clrtynet` commands.

```bash
make clrtynet-install
clrtynet node status --plain
clrtynet node register --dry-run
clrtynet wallet register --dry-run
clrtynet rpc call getHealth '[]' --plain
```

Origin API (Rust): `make start-origin` · deploy: `make mainnet-24x7-push VPS=root@84.32.109.227`

---

## Spark Pay (payments)

Full tested usage: **[Spark Pay usage & commands](../payments/spark-usage-commands.md)**

```bash
make spark-pay-full-test
SPARK_API_BASE=http://127.0.0.1:8546 make spark-pay-e2e
make spark-pay-node-push VPS=root@clarity-vds
make spark-pay-1501-1600
make clarity-spark-sync
```

---

## GitBook & doc publish

```bash
make sync-command-flows          # launch SSOT + monitors + this index
node scripts/gitbook/generate_all_commands.mjs
node scripts/spark_pay/generate_gitbook_usage.mjs
make gitbook-publish             # → clarity-fintech/gitbook
make spark-pay-package-update    # SDK + GitBook + verify matrix
```

---

## All Make targets by category

### Deploy & Cherry VDS

| Command | Purpose |
|---------|---------|
| `make deploy-all-live` | Full security + infra + mainnet + testnet + edge |
| `make cherry-console-bootstrap` | Print Cherry KVM console bootstrap (when /opt/clrty missing) |
| `make infra-provision` | Bare-metal infra Tasks 701-800 on Cherry VDS |
| `make full-vps-deploy` | Full CLRTY-1 deploy — mainnet + testnet + watchers + edge |
| `make full-launch` | Full beta mainnet launch — origin + Cloudflare edge + verify |
| `make beta-mainnet-activate` | Activate beta mainnet Epoch 1 — pathology handover + snapshots |
| `make beta-mainnet-status` | Print beta mainnet + staking market-ready JSON |
| `make cherry-rebuild-watch` | Poll Cherry rebuild until SSH + bootstrap live |
| `make cherry-ssh-retest` | Test SSH key/password + Cherry API key attachment |
| `make cherry-whitelist-ip` | Whitelist your current public IP on Cherry VDS ufw + fail2ban |
| `make cherry-ops-deploy` | Whitelist IP + connect full server + repair edge + sync monitors |
| `make connect-full-server` | Full server + testnet + wallets + ports + Cloudflare edge |
| `make full-prepare-live` | 320+ links + all CLRTY launch/config SSOT + monitors |

### Mainnet 24/7

| Command | Purpose |
|---------|---------|
| `make mainnet-24x7-push` | Deploy 24/7 mainnet to VPS — usage: make mainnet-24x7-push VPS=root@84.32.109.227 |
| `make mainnet-24x7-install` | Blocked — public mainnet must run on VPS (see mainnet-24x7-push) |
| `make mainnet-24x7-vps` | Print VPS bootstrap help (run push from laptop instead) |
| `make mainnet-24x7-status` | 24/7 origin + tunnel + edge health |
| `make mainnet-24x7-watchdog` | Run health watchdog once (install via cron on VPS) |
| `make start-origin` | Start clrty-api on :8545 with beta env (disk-aware build) |
| `make l1-production-ready` | §13 aggregate production gate |

### Testnet 24/7

| Command | Purpose |
|---------|---------|
| `make testnet-24x7-push` | Deploy 24/7 testnet to VPS (:8546) — usage: make testnet-24x7-push VPS=root@84.32.109.227 |
| `make testnet-24x7-vps` | Print testnet VPS bootstrap help |
| `make testnet-tunnel-install` | macOS LaunchAgent — keep testnet tunnel live across reboots |
| `make testnet-tunnel-status` | Tunnel + origin status |
| `make deploy-testnet` | Start testnet origin + watchdog (+ tunnel when CLRTY_DEPLOY_TUNNEL=1) |

### Monitors & watchdogs

| Command | Purpose |
|---------|---------|
| `make labs-status` | HTTP/DNS status report (local + Cloudflare) |
| `make deploy-monitor` | Health check public RPC + REST + tunnel origin |
| `make sync-monitors` | Sync all monitors → monitors_sync.json + deploy matrix live_status |
| `make keep-24x7-live` | Link 24/7 watchdog commands across all launch docs |
| `make spark-pay-watchdog` | Run Spark Pay health watchdog once |
| `make spark-pay-watchdog-install` | Install Spark Pay cron on VPS |

### Cloudflare edge (901–1500)

| Command | Purpose |
|---------|---------|
| `make alchemy-bridge-bootstrap` | Alchemy app + .env.l1 + wrangler ALCHEMY_BRIDGE_RPC secret |
| `make cf-deploy` | Deploy all Cloudflare Workers (rpc, api, faucet, labs, bridge, cex, deposit, sitemap, status) |
| `make edge-701-800` | Full infra band (701-800): phases 51-57 on Cherry VDS |
| `make cf-status-deploy` | Deploy status dashboard + status-probe workers only |
| `make cf-sitemap-deploy` | Deploy clrty-sitemap Worker (sitemap.xml + robots.txt routes) |
| `make cf-r2-upload` | Upload labs manifests to R2 bucket |
| `make cf-dns` | Wildcard DNS *.clarity-fintech.com (manual fallback in script) |
| `make cf-tunnel-setup` | One-time tunnel login + DNS api-internal.clarity-fintech.com |
| `make cf-tunnel` | Start cloudflared tunnel (HTTP2 fallback when UDP 7844 blocked) |
| `make cf-tunnel-http2` | Alias — force HTTP2 when QUIC/7844 is blocked |
| `make cf-tunnel-testnet-setup` | Bootstrap named tunnel api.testnet.clarity-fintech.com → :8545 |
| `make cf-tunnel-testnet` | Run testnet named tunnel keepalive (requires cf-tunnel-testnet-setup) |
| `make volume-indexer-sync` | Deploy D1 indexer cron worker + migrate schema |
| `make repair-edge` | Re-point worker CLRTY_L1_ORIGIN secrets (usage: make repair-edge ORIGIN=https://...) |
| `make cf-go-live` | Full Cloudflare push — bootstrap, deploy, smoke rpc.clarity-fintech.com |
| `make waf-apply` | Apply WAF rules via API (Tasks 946-960) |
| `make cf-waf-apply` | Alias |
| `make cf-sync` | DNS cross-sync + audit log (Tasks 901-915) |
| `make cf-edge-router-deploy` | Deploy clrty-edge-router Worker (Tasks 916-930) |
| `make cf-origin-ssl` | Origin CA + AOP install guide (Tasks 931-945) |
| `make cf-zero-trust` | Zero Trust tunnel bootstrap guide (Tasks 976-990) |
| `make cf-edge-verify` | Cross-sync verification + Task 1000 lock (991-1000) |
| `make edge-901-1000` | Full edge band (901-1000) |
| `make cf-r2-static-deploy` | Upload portal static assets to R2 (924-925) |
| `make cf-cache-purge` | Purge Cloudflare cache after deploy (972) |
| `make cf-signoff-1000` | Cryptographic sign-off manifest (999) |
| `make cf-fail2ban-sync` | Push origin fail2ban bans to Cloudflare (1242) |
| `make cf-bridge-verify` | Cherry↔CF bridge verify + Task 1300 lock (1297-1300) |
| `make cf-signoff-1300` | Cryptographic sign-off manifest Tasks 1-1300 (1298) |
| `make edge-1201-1300` | Full operational bridge (1201-1300) |
| `make cf-pqc-hybrid-tls` | PQC hybrid TLS + AOP guide (1301-1315) |
| `make cf-quantum-kv-push` | Push quantum posture to KV (1331) |
| `make cf-quantum-verify` | Quantum-grade verify + Task 1400 lock (1376-1400) |
| `make cf-signoff-1400` | Cryptographic sign-off manifest Tasks 1-1400 (1397) |
| `make quantum-1301-1400` | Full quantum band (1301-1400) |
| `make cf-ai-kv-push` | Push autonomous agent telemetry to KV (1449) |
| `make cf-ai-verify` | Autonomous AI verify + Task 1500 lock (1492-1500) |
| `make cf-signoff-1500` | Cryptographic sign-off manifest Tasks 1-1500 (1494) |
| `make ai-1401-1500` | Full autonomous AI band (1401-1500) |
| `make cf-page-rules` | Print Page Rules spec for dashboard (961-965) |
| `make cf-ssh-config` | Install ~/.ssh/config Cloudflare Access proxy for Cherry VDS |
| `make repair-edge-and-verify` | Restart cloudflared, validate ingress, repair edge, sync monitors |
| `make cf-zero-trust-vps` | Install clrty-admin Zero Trust tunnel on Cherry VDS (SSH via Access) |
| `make cf-provision` | Create KV/D1/R2 and patch wrangler.jsonc |
| `make cf-d1-migrate` | Apply explorer D1 schema |
| `make cf-www-seo-deploy` | Deploy www.clarity-fintech.com SEO edge worker (SEMrush fixes) |
| `make cf-ai-gateway-deploy` | Deploy ai.clarity-fintech.com AI Gateway (circulatory SEO) |
| `make cf-models-sync` | Sync Cloudflare Workers AI model catalog (192 models) |

### Website & portal (801–900)

| Command | Purpose |
|---------|---------|
| `make portal-www-dev` | Tasks 801-815: local Next.js portal dev server |
| `make portal-www-build` | Tasks 801-900: static export build + update website_801_900.json |
| `make portal-www-deploy` | Tasks 891-900: deploy portal to Cloudflare Pages |
| `make website-801-900` | Full website band (801-900) |

### Spark Pay

| Command | Purpose |
|---------|---------|
| `make clarity-spark-sync` | Push packages/clarity_spark → clarity-fintech/clarity_spark (gh auth / SSH) |
| `make spark-pay-1501-1600` | Tasks 1501–1600: build + deploy Spark Pay merchant + checkout SPAs |
| `make spark-pay-1601-2600` | Tasks 1601–2600: 10 bands × 100 tasks each |
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
| `make spark-clrty-mechanisms-verify` | CLRTY token mechanisms 200 — registry + docs SSOT |
| `make spark-pay-tools-install` | Install self-hosted Spark stack on VPS — usage: make spark-pay-tools-install VPS=root@clarity-vds |
| `make spark-pay-node-push` | Extend clrty-api spark_pay on VPS — usage: make spark-pay-node-push VPS=root@clarity-vds |
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
| `make spark-pay-gitbook-usage` | Regenerate GitBook usage & commands page (tested SSOT) |
| `make spark-pay-package-update` | Post-ship: sync SDK, GitBook, command flows, verify matrix |

### PRISM terminal

| Command | Purpose |
|---------|---------|
| `make launch-prism` | Native PRISM terminal shell (full clrt in this terminal) |
| `make launch-prism-web` | PRISM browser terminal UI (:5174) |
| `make launch-prism-live` | Build + API + native PRISM terminal |
| `make launch-prism-local` | Offline PRISM stubs (no API port) |

### HELIX & MIRRA

| Command | Purpose |
|---------|---------|
| `make helix-verify` | HELIX engine audit + ATU 2601–2610 spot checks |
| `make helix-throughput-stress` | HELIX-10 kernel throughput gate (step 59) |
| `make mirra-seed-orders` | Set and place all MIRRA TGE orders on HELIX grid |
| `make live-spot-keep-alive` | Replenish resting spot orders (INTERVAL=30 MAX_ROUNDS=0) |

### Wallet & integration

| Command | Purpose |
|---------|---------|
| `make clarity-wallet-build` | Build clarity-wallet TS SDK + regenerate dev manifest |
| `make clarity-wallet-nodes-verify` | Verify 25/25 wallet integration leverage nodes |
| `make wallet-directory-stress` | N21 stress probe for wallet directory + API |
| `make integration-package-build` | Build zero-friction wallet partner ZIP kit |
| `make integration-package-verify` | Verify integration package artifacts |
| `make clarity-wallet-intelligence-sync` | Refresh network-intelligence snapshots |
| `make clarity-wallet-labs-sync` | Regenerate labs manifests (sections, boot, wallet) |
| `make wallet-labs-sync-verify` | Verify labs manifest sync artifacts |
| `make wallet-repos-sync` | Push labs manifests to CLRTY-WALLET-INTEGRATION repos |
| `make wallet-notion-sync` | Pull live CLRTY-1 + wallet metrics → Notion CLRTY WALLET page |
| `make wallet-live-pull` | Write var/metrics/clrty_wallet_live.json (live sources only) |
| `make wallet-otp-smoke` | Smoke wallet email OTP (optional EMAIL=you@domain.com) |
| `make integration-package` | ZIP wallet + labs manifests for release |

### Labs & L1 launch

| Command | Purpose |
|---------|---------|
| `make l1-launch` | Full L1 launch — bootstrap, genesis, cf-go-live, alchemy logs |
| `make labs-smoke` | Verify labs static + API scaffold |
| `make labs-plan-report` | Plan compliance report (labs + products phase 0, no Framer) |
| `make labs-full-build` | Full compile + verify + bundle (labs portal) |
| `make labs-install-deps` | Install Node/pnpm/wrangler/cloudflared/alchemy deps |
| `make labs-pages` | Deploy frontend/labs to Cloudflare Pages |
| `make labs-go-live` | Tunnel + workers + pages + smoke (full live) |
| `make liquidity-bootstrap` | Seed native AMM + MIRRA pools (4M bucket) |
| `make pool-ingress` | Batch pool ingress from liquidity_pools_manifest.json |
| `make cex-ingress-deploy` | Deploy cex-ingress Worker only |
| `make deposit-watcher-deploy` | Deploy deposit-watcher Worker only |

### Verify & gates

| Command | Purpose |
|---------|---------|
| `make verify-stage-gate` | All stages — gates/STAGE_GATES.json + var/launch/readiness.json |
| `make verify-stage-0` | Nexus scaffold + manifest locks (step 20 / stage 0) |
| `make verify-stage-1` | Phase 1 Integrity Core — steps 1–20 |
| `make verify-stage-2` | Phase 2 Intelligence — steps 21–40 |
| `make verify-stage-3` | Phase 3 Execution & Routing — steps 41–60 |
| `make verify-stage-4` | Phase 4 compliance band — steps 61–80 |
| `make verify-stage-5` | Phase 4 launch band — steps 81–100 |
| `make audit-verify` | Cryptographic / compliance audit battery (MSA, sovereign, helix, listing) |
| `make test-system` | Full systemic battery (pretest + validation + stress hooks) |
| `make gate-check` | Mainnet contract gates + launch readiness summary |
| `make verify-all-140-steps` | 140-step Systemic Integrity Battery (full ecosystem debug) |
| `make codecheck` | Full-repo codecheck (fmt, clippy, build, test, audit, pretest) |
| `make verify-command-docs` | Verify launch docs contain COMMAND_FLOWS markers |

### GitBook & docs publish

| Command | Purpose |
|---------|---------|
| `make gitbook-all-commands` | Regenerate full Make + URL command index (Prism → mainnet → monitors → Spark Pay) |
| `make sync-command-flows` | Sync URLs + command flows across all launch artifacts + GitBook command pages |
| `make gitbook-extract` | Extract CLRTY PDFs/HTML from ~/Downloads → var/gitbook/extracts |
| `make gitbook-build-only` | Rebuild GitBook markdown from existing extracts (no PDF scrape) |
| `make gitbook-build` | Build tiered GitBook markdown spaces (4 access levels) |
| `make gitbook-upload` | Upload spaces to GitBook via CLI API (token or gitbook login) |
| `make gitbook-login` | Authenticate GitBook CLI via browser OAuth |
| `make gitbook-site-publish` | Build + enrich blocks + upload + publish site |
| `make gitbook-blocks` | Enrich markdown with GitBook native + custom blocks |
| `make gitbook-integration-publish` | Publish clrty-whitepaper-blocks integration |
| `make gitbook-full-blocks` | Build, publish integration, upload all |
| `make gitbook-ai-overview` | Build Google AI Overview HTML sections from all extracts |
| `make gitbook-sync` | Build + push to gitbook.git + optional GitBook API |
| `make gitbook-publish` | Mirror docs/gitbook → clarity-fintech/gitbook.git |
| `make gitbook-complete` | Full GitBook: extract, build, publish git repo, optional API |
| `make gitbook-hook-install` | Install git post-push hook → auto sync docs/gitbook on push to main |
| `make gitbook-auth` | Authenticate GitBook CLI (requires GITBOOK_API_TOKEN) |
| `make gitbook-full` | Extract, build, and upload all GitBook tiers |
| `make gitbook-sync-push` | alias |

### Day cycle & capital

| Command | Purpose |
|---------|---------|
| `make operational-nano-loop` | 12-step token operational nano loop |
| `make day-cycle-morning` | Morning stress tier (STRESS_TIER=fast|standard|deep) |
| `make day-cycle-afternoon` | Afternoon hardening + infrastructure lock |
| `make day-cycle` | Full day cycle (morning then afternoon) |
| `make capital-execution-cycle` | Capital Execution Stack CE-01..15 (CAPITAL_TIER=core|full) |

### Platform registry & SDK

| Command | Purpose |
|---------|---------|
| `make platform-registry` | Validate 100-platform manifest |
| `make platform-codegen` | Regenerate adapter stubs from manifest |
| `make platform-probe` | Probe all platform adapters (Deferred without keys) |
| `make platform-sync` | Sync platform data to frontend/investor/data |
| `make sections-registry` | Regenerate section handler stubs from manifests |
| `make sections-build` | Build section registry artifacts + verify manifests |
| `make sdk-generate` | Generate OpenAPI spec + SDK stubs |
| `make intelligence-refresh` | Refresh var/intelligence/network_snapshot.json |
| `make content-database-verify` | Verify all SEC-01..12 sections are built |
| `make ecosystem-verify` | Full clarity-wallet ecosystem gate |

### Framer & Gemini

| Command | Purpose |
|---------|---------|
| `make framer-setup` | Install Framer skills + Gemini CLI; auth when FRAMER_* in .env |
| `make framer-connect` | Authorize CLARITY Framer project and open agent session |
| `make framer-clarity` | Same-project Framer ops — CMD=list|sessions|connect|session|pages|exec |
| `make framer-push-website` | Push all CLRTY page content to Framer CLARITY (build+strip+hub) |
| `make framer-publish` | Publish Framer CLARITY site to production |
| `make gemini-pool-reset` | Reset key pool to slot 1 (TESTING) |
| `make gemini-test-keys` | Test all GEMINI_API_KEYS against the API (shows which are limited) |
| `make gemini-framer` | Start Gemini + auto key swap on limit (same CLARITY project) |
| `make gemini-pool` | alias |
| `make gemini-pool-status` | Show active key slot + whether swap is available |
| `make gemini-swap` | Advance to next key in GEMINI_API_KEYS (shows if swap failed) |
| `make gemini-next` | After "Usage limit reached" — swap key + restart Gemini CLI |
| `make gemini-mark-limit` | Flag current key as limited (keys did not auto-swap) |
| `make gemini-key` | Use key slot N=1|2|3 — e.g. make gemini-key N=3 ARGS='-p "OK"' |
| `make gemini-ask` | Headless prompt — walks all keys on limit — PROMPT="..." |
| `make gemini-rotate` | Smoke-test key pool rotation (headless) |

### Stage gates (0–5)

| Command | Purpose |
|---------|---------|
| `make deploy-stage` | Gate-check before TGE tag (no deploy) |

### Build & CLI

| Command | Purpose |
|---------|---------|
| `make clrtynet-install` | Build clrty/clarity/clrtynet CLI binaries |
| `make init-nexus` | Initialize workspace (submodules when federated; sync manifests index) |
| `make build-all` | Build substrate, skills, helix, CLI (full workspace) |
| `make products-regen` | Regenerate product suite HTML (integration preview — not public nav) |
| `make skills-regen` | Regenerate clarity skills catalog JSON |
| `make diagram-portfolio` | Render all 28 Clarity diagrams (HTML + SVG + manifest) |
| `make nexus-reclaim` | Purge var artifacts, cargo clean, re-init nexus |

### Other targets

| Command | Purpose |
|---------|---------|
| `make help` | Show targets |
| `make model-hash-verify` | Step 40 — ML model-hash CI gate (scaffold) |
| `make portal-sync` | Sync investor dashboard JSON + nano details |
| `make live-market-pull` | Pull full model + live spot orders into repo + frontend |
| `make timelock-verify` | Confirm 48h timelock + master init manifest |
| `make mev-deep-dive` | Math proofs + topology + node validation + toxic MEV mitigation (16 suites) |
| `make first-access-sync` | Sync Volkov First Access Pack investor JSON |
| `make first-access-verify` | Full First Access Pack gate battery |
| `make first-access-export` | Offline mastermind kit ZIP |
| `make first-access-mastermind` | Sync + verify + export + Folder 02 demos (one command) |
| `make test-interface` | CLI + portal + product interface verification |
| `make mlx-verify` | Probe MLX deterministic fallback (no mlx pip required) |
| `make access-packs-build` | Build access pack manifest checksums |
| `make git-branches-scaffold` | Document clarity-labs branch scaffold |
| `make connect-origin-edge` | Start origin + tunnel + repair edge (requires open egress 7844) |
| `make diagnose-tunnel` | Probe origin, 7844 egress, tunnel hostname, edge RPC |
| `make d1-sync-test` | Integration test: origin export + D1 validation |
| `make d1-sync-validate` | Compare origin export tip vs local snapshot |
| `make defillama-adapter-verify` | Local TVL adapter sanity (CLRTY-1 only) |
| `make sentry-cluster-provision` | Scaffold sentry cluster manifest + report |
| `make go-live-trading` | §16 public trading gates |
| `make rosetta-smoke` | Rosetta health via cex-ingress or local |
| `make subgraph-build` | Validate subgraph manifest (EVM mirror path) |
| `make red-blue-verify` | MDA/FMA red-blue smoke |
| `make repos-sync-all` | Commit + push monorepo, wallet, and prism CLI repos |
| `make data-center-sheets` | Pull Google Sheets → var/metrics/sheets_inputs.json |
| `make data-center-aggregate` | Merge live API + sheets → data_center_snapshot.json |
| `make data-center-notion` | Push snapshot → Notion CLRTY DATA CENTER |
| `make data-center-security-notion` | Push exchange readiness/security page → Notion DATA CENTER |
| `make clarity-docs-generate` | Generate CLRTY-1 Clarity docs tree → docs/clarity/ |
| `make cif-install` | Editable install CIF + site Python packages (PyCharm) |
| `make cif-integrate` | Inject CIF + social/legal into all docs sections |
| `make cif-run` | Run entire CIF program E2E via python/clrty-cif |
| `make nis-install` | Editable install NIS Python package (PyCharm) |
| `make nis-integrate` | Export NIS manifest + index docs cross-links |
| `make nis-run` | Validate NIS-100 registry + audit verify script |
| `make gss-install` | Editable install GSS Python package (PyCharm) |
| `make gss-integrate` | Export GSS + Depth-500 manifests + index docs cross-links |
| `make gss-run` | Validate GSS-100 + Depth-500 + audit verify scripts |
| `make ohp-install` | Editable install OHP Python package (PyCharm) |
| `make ohp-run` | Validate OHP-500 gap-closure registry + audit verify script |
| `make sets-install` | Editable install SETS Python package (PyCharm) |
| `make sets-run` | Validate SETS-100 99–1 Set Mechanics registry + audit verify script |
| `make auth-install` | Editable install Exchange Auth Engine SSOT (PyCharm) |
| `make auth-integrate` | Export auth_engine_manifest.json to CLRTY_SUBSTRATE/boot |
| `make auth-run` | Validate auth 301–400 registry + export + pytest |
| `make fees-install` | Editable install Protocol Fee Engine (private cybersecurity repo) |
| `make fees-integrate` | Export fee_engine_manifest.json (redacted, private repo boot/) |
| `make fees-notion` | Export Notion doc + sync fee engine to private workspace |
| `make fees-run` | Validate fee 401–500 registry + export + pytest (private repo) |
| `make desktop-projects` | Symlink every unique CLRTY project onto ~/Desktop/CLRTY_Projects |
| `make pycharm-sync` | Link ALL CLRTY + Clarity coding trees into PyCharm + ~/python + python/workspace |
| `make week-one-notion-sync` | Week One CLRTY-1 progress tracker → Notion (metrics + screenshots) |
| `make site-links-sync` | Sync social/legal YAML → website manifests |
| `make clarity-docs-notion` | Sync Clarity docs → Notion Clarity Documentation page |
| `make data-center-sync` | Full Data Center pipeline + verify |
| `make launch-tasks-build` | Parse ledgers → var/launch/launch_tasks_snapshot.json |
| `make launch-tasks-notion` | Push launch tasks + completed work → Notion |
| `make launch-sync-all` | Metrics + launch tracker + security Notion sync |
| `make sync-all-live` | Export → D1 schema hint → metrics → Notion (origin must be up) |
| `make push-node-data` | Push full origin export → D1 + pathology sync (keep node consistent) |
| `make activate-testnet` | Full activation: origin + tunnel + D1 + metrics + indexer |
| `make dune-catalog-bootstrap` | Bootstrap Dune catalog tables (raw/decoded/intelligence/artemis + legacy) |
| `make dune-catalog-sync` | Full catalog sync → Dune (layer-aware, privacy gates) |
| `make dune-catalog-validate` | Validate catalog schemas, privacy, error contract |
| `make dune-catalog-docs` | Lint catalog markdown link structure |
| `make dune-bootstrap` | Create Dune clrty_* tables from ClrtyxDune schemas |
| `make dune-sync` | Run ClrtyxDune indexer → Dune uploads (requires DUNE_API_KEY in ClrtyxDune/.env) |
| `make dune-validate` | Validate analytics export privacy (no MIRRA leak) |
| `make dune-seed-prompts` | Seed historical prompt telemetry into var/analytics/prompts.jsonl |
| `make dune-publish-queries` | Publish dashboard SQL queries to Dune workspace |
| `make dune-create-dashboard` | Update the single canonical Dune dashboard |
| `make dune-cleanup-dashboards` | Archive duplicate CLRTY dashboards on Dune (keep one) |
| `make dune-publish-overview-tab` | Alias — refresh main dashboard overview section |
| `make dune-test` | Run ClrtyxDune static + stress + API smoke tests |
| `make dune-test-all` | Full validate + catalog validate + repo tests |
| `make dune-dashboard` | Full ClrtyxDune build: seed, validate, bootstrap, sync, publish, dashboard |
| `make artemis-timescale-up` | Start local TimescaleDB for Artemis metrics |
| `make artemis-migrate` | Apply Artemis Timescale migrations (requires timescale-up) |
| `make artemis-rollup-daily` | Roll up previous UTC day → Artemis store |
| `make artemis-rollup-hourly` | Roll up current hour + append outbound.jsonl |
| `make artemis-backfill` | Backfill daily metrics (START= END= env) |
| `make artemis-dune-sync` | Upload backfilled Artemis metrics → Dune artemis_* tables |
| `make artemis-upload-all` | Backfill + rollups + Dune artemis sync (requires DUNE_API_KEY) |
| `make artemis-webhook-dispatch` | Dispatch hourly events (log-only or ARTEMIS_WEBHOOK_URL) |
| `make artemis-smoke` | Smoke test partner API (requires clrty-api + ARTEMIS_INGESTION_KEY) |
| `make artemis-test` | Unit + integration tests for Artemis partner stack |
| `make artemis-submission-bundle` | Print Artemis profile + Terminal submission file paths |
| `make artemis-submission-zip` | Build zip + email template for Artemis ops handoff |
| `make artemis-research-sync` | Sync Artemis articles → frontend research hub |
| `make artemis-sitemap` | Regenerate Artemis research sitemap + patch SSOT worker |
| `make dune-sitemap` | Regenerate Dune catalog backlink sitemap + patch SSOT worker |
| `make dune-backlink-sync` | Alias — site ↔ Dune backlinks + sitemaps |
| `make openletter-sitemap` | Regenerate SV Angel open letter backlink sitemap + patch SSOT worker |
| `make monetization-test` | Run clrty-monetization-calculus unit tests |
| `make monetization-build` | Build clrty-api with monetization routes |
| `make monetization-stripe-dry-run` | Dry-run Stripe product provisioning |
| `make monetization-stripe-apply` | Provision Stripe products (--apply) |
| `make monetization-stripe-links` | Create Stripe Payment Links (--apply) |
| `make monetization-portal-sync` | Copy stripe_portal.json → frontend/labs/data/ |
| `make monetization-verify` | Full monetization verification battery |
| `make seo-kit-second-install` | Install seo-kit-second npm deps |
| `make seo-kit-second-deploy` | Deploy clrty-seo-kit-second Cloudflare worker |
| `make seo-stack-deploy` | Deploy sitemap + seo-engine + seo-kit-second + www-seo + ai-gateway (unified funnel) |
| `make seo-stack-sitemaps-regen` | Regenerate all clrty.network supplemental sitemaps (Artemis/Dune/OpenLetter) |
| `make seo-stack-activate` | Deploy SSOT + ping Google/Bing/Yandex + pull index report |
| `make seo-stack-pull-report` | Pull latest GSC/Bing report from seo-engine KV (no ping) |
| `make network-pages-deploy` | Deploy clrty.network frontend (robots + sitemaps + IndexNow key) to Cloudflare Pages |
| `make seo-semrush-patch` | Patch clrty.network + exchange HTML for hreflang/H1/link fixes |
| `make seo-resolve-env` | Merge API keys from all env sources → .env.seo-stack |
| `make nano-training-build` | Build 100 nano training programs (1 per model, full SEO embed) |
| `make clarity-data-build` | Build unified Clarity URL/Notion corpus (320+ links) |
| `make nano-harvest-build` | Build 192-model harvest matrix (DeFi/DePIN/waitlist) |
| `make model-harvest-clarity-complete` | Complete all 192 harvests using full Clarity data corpus (no OpenAI) |
| `make model-harvest-prompt-chain` | 192 models × 10 variational prompts → chain results log (no OpenAI) |
| `make model-harvest-prompt-chain-live` | 192 models × 10 prompts via CF Gateway / OpenAI (live inference) |
| `make model-harvest-prompt-chain-sync` | Run prompt chain + sync Rolling Results (copy-paste I/O) |
| `make harvest-backfill-full` | Backfill jsonl with full prompt + output_full (no API) |
| `make model-harvest-retry` | Re-run only failed harvest rows (OpenAI fallback, rate-limit aware) |
| `make model-harvest-run` | Live full 192-model harvest via CF AI Gateway (resume-safe) |
| `make notion-harvest-patch` | Patch existing Notion harvest DB schema (extended columns) |
| `make notion-harvest-setup` | Create Notion CLRTY Model Harvest database (once) |
| `make notion-harvest-sync` | Push harvest results → Notion (properties + page-body sub-tabs) |
| `make notion-harvest-autoprompt-patch` | Add Activation / Assigned Goal / Auto Prompt columns |
| `make seo-env-repair` | Fix corrupted NOTION_HARVEST_DATABASE_ID line in .env.seo-stack |
| `make model-harvest-autoprompt` | Run harvest for Notion rows with Activation=Active |
| `make model-harvest-autoprompt-local` | Offline autoprompt from var/seo/autoprompt-queue.json (no Notion) |
| `make harvest-autoprompt-rig` | Patch schema + rebuild matrix + run Active autoprompt queue |
| `make harvest-seo-full-launch` | Full launch: env, 192 harvest, Notion sync, worker secrets, deploy, activate |
| `make notion-harvest-sync-bodies` | Re-upload Prompt Form + Generated Result toggles only |
| `make notion-rolling-results-setup` | Create Rolling Results DB + dashboard page in Notion |
| `make notion-rolling-results-patch` | Add Chain Step + Variation columns to Rolling Results DB |
| `make notion-rolling-results-sync` | Append harvest I/O → Rolling Results database |
| `make model-harvest-all` | Build 192 matrix + harvest + Notion sync |
| `make seo-kit-upload-rotate` | Upload secrets to worker + reset OpenAI key rotation |
| `make seo-full-build-rig` | Full SEO build rig: install, typecheck, models, circulatory loop |
| `make seo-verify-www` | Verify www SEO edge path (Framer vs worker) |
| `make seo-circulatory-run` | Full circulatory SEO loop (models, sitemaps, pipeline, audit) |
| `make seo-kit-workflows` | Run full SEO kit stack with continue-on-error orchestration |
| `make seo-cluster-deploy` | Deploy seo-engine Phase-2 queue cluster (Workers Paid) |
| `make seo-immediate-fixes` | Regen SEO assets, deploy network + workers, re-auth hint, immediate indexing |
| `make seo-reauth-reload` | Deploy workers, regen sitemaps, relaunch Google OAuth + full indexing reload |
| `make seo-expansion-tasks` | Generate 100-task SEO expansion board + markdown checklist |
| `make seo-expansion-tasks-platforms` | Generate 100 platform/method/data-diversion SEO tasks |
| `make seo-expansion-tasks-all` | Both 100-task boards (200 total) |
| `make website-labeling-export` | Export Framer handoff for titles, H1s, meta, sections |
| `make seo-stack-bridge` | Ping Google/Bing/Yandex with SSOT + funnel sitemaps |
| `make seo-kit-second-run` | Run local pipeline (loads .env.seo-stack; prints account checklist) |
| `make seo-kit-second-check-accounts` | Show SEO stack login/API checklist |
| `make seo-kit-second-push-remote` | Subtree push seo-kit-second/ → SEO_kit_second.git |
| `make video-kit-install` | Install video-kit npm deps |
| `make video-kit-typecheck` | Typecheck Remotion video-kit |
| `make video-kit-render` | Render demo video (ARGS='--name clrty_demo --prompt video-kit/templates/prompt_node_launch.txt') |
| `make video-kit-circulatory-run` | Video kit typecheck + validate + sample render |
| `make video-kit-full-build-rig` | Install + typecheck + circulatory run |
| `make video-kit-push-remote` | Subtree push video-kit/ → VIDEO_kit.git |
| `make video-corpus-download` | Sequential download of 320+ Clarity URLs into video-kit/data/clarity-corpus/ |
| `make video-demo-topics-build` | Build demo-topics-100 + video-quality registries + MD trackers |
| `make video-demo-specs-build` | Emit 100 D-*.json + D-*.txt demo specs |
| `make video-demo-render-one` | Render one demo (ARGS='--spec video-kit/templates/demos/D-001-....json') |
| `make video-demo-render-all` | Sequential batch render D-001..D-100 (VIDEO_DEMO_FROM/TO, VIDEO_KIT_DRY_RUN) |
| `make genesis-prefund-verify` | Genesis + pre-fund checklist (§13) |


---

## Related

- [Operations hub](README.md)
- [Launch COMMAND_FLOWS](../../../launch/COMMAND_FLOWS.md)
- [Mainnet 24/7](../../../launch/MAINNET_24X7.md)
- [Cherry VDS deploy](../../../launch/CHERRY_VDS_DEPLOY.md)
- [CLI master reference](../cli/master-command-reference.md)
- [Spark Pay usage](../payments/spark-usage-commands.md)
- [Spark segment map](../payments/segment-map.md)
