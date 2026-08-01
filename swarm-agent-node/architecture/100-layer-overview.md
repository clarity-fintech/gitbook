# 100-layer architecture overview

The SWARM Agent Node stack is documented as **100 architecture layers** grouped into **10 phases**, mirroring `swarmNodeNanoTasks100.json`.

## Phase map

| Phase | Layers | Theme |
|-------|--------|-------|
| 1 | 1–10 | Pricing tiers SSOT · dev portal · WEBB · wallet fund |
| 2 | 11–20 | Checkout plinks · Relay · Spark URLs |
| 3 | 21–30 | Execution billing · UUID idempotency · FX TTL |
| 4 | 31–40 | Per-run agent SKUs |
| 5 | 41–50 | Pay gate session · webhook · bare-metal flag |
| 6 | 51–60 | Wallet & credits · CLRTY PAY rails |
| 7 | 61–70 | API gateway · nano-steps · RPC 1202 |
| 8 | 71–80 | Cherry bare-metal · PM2 · nginx · **NO Docker** |
| 9 | 81–90 | Playwright E2E · tier smoke tests |
| 10 | 91–100 | MIS registry · verify harness |

## Layer commands

Every layer supports:

```bash
clrty layer:NNN:health
clrty layer:NNN:start
clrty layer:NNN:stop
```

## Pay gating

Layer pages include `data-required-tier` markers. Higher tiers inherit lower-tier layer visibility via `gitbook-gating.js`.

## Generate / refresh layers

```bash
node scripts/gitbook/generate_swarm_100_layers.mjs
bash scripts/verify_swarm_gitbook_content.sh
```

## Layer index

See [SUMMARY.md](../SUMMARY.md) for full navigation, or start at [Layer 001](./layers/layer-001.md).

## SSOT

- JSON: `cloudflare/spark-pay/shared/swarmNodeNanoTasks100.json`
- MIS: `moniversive/nanotasks/CLRTY-1_SWARM_AGENT_GITBOOK_100.mis`
