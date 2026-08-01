# Overview

The **SWARM Agent Node** runs consumer-uploaded agents (`.mis`, `.py`) on **Cherry bare-metal** with per-run Spark billing on **clrty-1 / chain 1202**.

## What you get

- Isolated agent execution on Cherry (`84.32.109.227` reference host)
- Pay-gated GitBook documentation unlocked by JWT after checkout
- Per-run agent SKUs debited from CLRTY PAY wallet
- **NO Docker** on consumer nodes — PM2 or systemd only

## Architecture at a glance

| Layer groups | Theme |
|--------------|-------|
| 1–10 | Pricing tiers, treasury invariants |
| 11–20 | Checkout plinks, Spark URLs |
| 21–30 | Execution billing, idempotency |
| 31–40 | Per-run agent SKUs |
| 41–50 | Pay gate session, bare-metal flag |
| 51–60 | Wallet & credits |
| 61–70 | API gateway routes |
| 71–80 | Cherry bare-metal install |
| 81–90 | Playwright E2E |
| 91–100 | MIS registry & verify harness |

Full layer index: [100-layer overview](../architecture/100-layer-overview.md)

## Settlement invariants

- **Network:** `clrty-1`
- **Chain ID:** `1202`
- **Treasury:** `treasury:clrty-1`
- **FX TTL:** 3000ms
- **Idempotency:** UUID v4

## Next steps

1. [Pay-gated access](./pay-gated-access.md) — choose a tier and unlock docs
2. [Quick start](./quick-start.md) — checkout → JWT → deploy
3. [Consumer deployment guide](../deployment/consumer-deployment-guide.md)
