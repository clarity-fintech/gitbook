# 1. Prerequisites

Before checkout, confirm your environment and billing choice.

## What you need

- **Linux server** — Ubuntu 22.04+ or RHEL-compatible bare-metal (Cherry VPS or your own host)
- **Runtime stack** — Node.js 20+, PM2, nginx, certbot
- **Email** — used for Spark checkout and JWT issuance
- **Clarity Wallet** — optional until per-run agent debits; required for wallet handoff when balance is low

## Recommended tiers

| Tier | Price | Best for |
|------|-------|----------|
| WEBB Starter | $5.99/mo | Launch a starter agent, read gated docs |
| Dev Portal | $29/mo | Full agent upload, Cherry deploy, instruction book |
| Wallet Fund | $29 min | Top up CLRTY PAY for per-run agent SKUs |

## Cherry reference

Production docs reference Cherry host **`84.32.109.227`**. SSH access is an **operator action** — you run install scripts on the machine you control.

## Install path

All consumer nodes target:

```
/opt/clrty/swarm-node
```

**NO Docker** — agents run under PM2 or systemd only.

## Before you pay

1. Pick a tier in [Pay Gate Checkout](./02-pay-gate-checkout.md)
2. Have your checkout email ready (matches JWT `customer_email`)
3. Plan SSH access to your bare-metal host for [Install on Cherry](./06-install-cherry.md)

## Next step

→ [2. Pay Gate Checkout](./02-pay-gate-checkout.md)
