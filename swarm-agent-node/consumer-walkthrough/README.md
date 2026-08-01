# Consumer walkthrough

Step-by-step guide to host your own **SWARM Agent Node** on Cherry bare-metal with Spark pay settlement on **clrty-1 / chain 1202**. **NO Docker** — PM2 or systemd only.

## Live preview

[GitBook preview — SWARM Agent Node](https://app.gitbook.com/o/6MCNfiz1cpjlR5LX4kWw/sites/site_vzd1R/preview)

## The funnel

```
Pay → Activate session → JWT + Wallet → GitBook unlock → Cherry install → Register & run agents
```

| Step | Page |
|------|------|
| 1 | [Prerequisites](./01-prerequisites.md) |
| 2 | [Pay Gate Checkout](./02-pay-gate-checkout.md) |
| 3 | [Activate Pay Gate Session](./03-activate-session.md) |
| 4 | [Private JWT + Wallet Login](./04-private-jwt-wallet.md) |
| 5 | [GitBook Authenticated Access](./05-gitbook-gate.md) |
| 6 | [Install on Cherry (NO Docker)](./06-install-cherry.md) |
| 7 | [Register Agents & Execute](./07-register-execute.md) |

## After unlock — upload your agents

Once your tier is active and docs are unlocked:

| Phase | Page |
|-------|------|
| 1 | [Auth + JWT Issue](./upload-phase1-auth.md) |
| 2 | [Prepare .mis + .py Agents](./upload-phase2-prep.md) |
| 3 | [Upload to Cherry Bare-Metal](./upload-phase3-upload.md) |

## Quick links

- [SWARM Host checkout](https://monitor.clarity-fintech.com/uiquio/swarms/host)
- [Clarity Wallet login](https://exchange.clarity-fintech.com/login)
- [Monitor docs mirror](https://monitor.clarity-fintech.com/docs/swarm-agent-node/)

## Settlement invariants

- **Network:** clrty-1
- **Chain ID:** 1202
- **Treasury:** treasury:clrty-1
- **Install path:** `/opt/clrty/swarm-node`
- **Cherry reference host:** `84.32.109.227` (operator SSH)
