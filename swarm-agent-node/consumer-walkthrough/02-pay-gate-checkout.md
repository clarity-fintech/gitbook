# 2. Pay Gate Checkout

Complete Spark checkout to unlock the SWARM instruction book and tier-gated GitBook sections.

## Start here

Open the **SWARM Host** funnel:

[https://monitor.clarity-fintech.com/uiquio/swarms/host](https://monitor.clarity-fintech.com/uiquio/swarms/host)

Or browse tiers at [UIQUO Swarms MVP](https://monitor.clarity-fintech.com/uiquio/swarms#mvp-monetization).

## Checkout URLs

| Tier | Offer | Price | Direct checkout |
|------|-------|-------|-----------------|
| Dev Portal Execution Billing | `dev_portal_execution_billing` | $29/mo | [spark-pay.pages.dev/buy/plink_dev_portal_execution_billing](https://spark-pay.pages.dev/buy/plink_dev_portal_execution_billing) |
| WEBB Starter / Launch Agent | `webb_starter_agents` | $5.99/mo | [spark-pay.pages.dev/buy/plink_webb_starter_agents](https://spark-pay.pages.dev/buy/plink_webb_starter_agents) |
| Fund CLRTY PAY Wallet | `clrty_pay_wallet_fund` | $29 min | [spark-pay.pages.dev/buy/plink_clrty_pay_wallet_fund](https://spark-pay.pages.dev/buy/plink_clrty_pay_wallet_fund) |

## Monitor tier paths

| Tier | Path |
|------|------|
| Starter | [monitor.clarity-fintech.com/uiquio/starter](https://monitor.clarity-fintech.com/uiquio/starter) |
| Dev Portal | [monitor.clarity-fintech.com/uiquio/dev-portal](https://monitor.clarity-fintech.com/uiquio/dev-portal) |
| Wallet Fund | [monitor.clarity-fintech.com/uiquio/wallet-fund](https://monitor.clarity-fintech.com/uiquio/wallet-fund) |

## What Spark settles

- **Treasury:** treasury:clrty-1
- **Chain:** 1202 (clrty-1)
- **Idempotency:** UUID v4 on every charge
- **FX TTL:** 3000ms

## After payment

You receive a Spark **CONFIRMED** status (email + webhook). Save your **payment ID** — you need it to [activate your pay gate session](./03-activate-session.md).

Success redirect (instruction book unlocked):

[https://monitor.clarity-fintech.com/uiquio/swarms/host?swarm_unlock=1](https://monitor.clarity-fintech.com/uiquio/swarms/host?swarm_unlock=1)

## Next step

→ [3. Activate Pay Gate Session](./03-activate-session.md)
