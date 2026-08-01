# SWARM Agent Node on CLRTY-1

Consumer walkthrough for hosting autonomous agent nodes on **Cherry bare-metal** with **Spark** settlement on **clrty-1 / chain 1202**. **NO Docker.**

## Live preview

- **GitBook:** [app.gitbook.com preview](https://app.gitbook.com/o/6MCNfiz1cpjlR5LX4kWw/sites/site_vzd1R/preview)
- **Monitor mirror:** [monitor.clarity-fintech.com/docs/swarm-agent-node/](https://monitor.clarity-fintech.com/docs/swarm-agent-node/)
- **SWARM host funnel:** [uiquio/swarms/host](https://monitor.clarity-fintech.com/uiquio/swarms/host)

## The funnel

```
Spark checkout → JWT → Clarity Wallet → GitBook unlock → Cherry deploy → Register & run agents
```

| Step | Surface |
|------|---------|
| Pay | [Spark checkout](./consumer-walkthrough/02-pay-gate-checkout.md) |
| Session | `POST /v1/swarm/paygate/activate` |
| JWT | `POST /v1/auth/issue-token` |
| Wallet | [exchange.clarity-fintech.com/login](https://exchange.clarity-fintech.com/login) |
| Docs | GitBook Audience + tier gating |
| Node | `/opt/clrty/swarm-node` on Cherry — **NO Docker** |

## Start the walkthrough

→ **[Consumer walkthrough hub](./consumer-walkthrough/README.md)**

| # | Step |
|---|------|
| 1 | [Prerequisites](./consumer-walkthrough/01-prerequisites.md) |
| 2 | [Pay Gate Checkout](./consumer-walkthrough/02-pay-gate-checkout.md) |
| 3 | [Activate Pay Gate Session](./consumer-walkthrough/03-activate-session.md) |
| 4 | [Private JWT + Wallet Login](./consumer-walkthrough/04-private-jwt-wallet.md) |
| 5 | [GitBook Authenticated Access](./consumer-walkthrough/05-gitbook-gate.md) |
| 6 | [Install on Cherry (NO Docker)](./consumer-walkthrough/06-install-cherry.md) |
| 7 | [Register Agents & Execute](./consumer-walkthrough/07-register-execute.md) |

### After unlock — upload agents

| Phase | Step |
|-------|------|
| 1 | [Auth + JWT Issue](./consumer-walkthrough/upload-phase1-auth.md) |
| 2 | [Prepare .mis + .py Agents](./consumer-walkthrough/upload-phase2-prep.md) |
| 3 | [Upload to Cherry](./consumer-walkthrough/upload-phase3-upload.md) |

## Client gating

Include on GitBook custom HTML or monitor mirror pages:

```html
<script type="module" src="./assets/gitbook-gating.js"></script>
```

## Org / site IDs (GitBook API)

| Key | Value |
|-----|-------|
| Org ID | `6MCNfiz1cpjlR5LX4kWw` |
| Site ID | `site_vzd1R` |

Set `GITBOOK_TOKEN` locally — **never commit**.
