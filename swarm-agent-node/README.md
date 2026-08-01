# SWARM Agent Node on CLRTY-1

Pay-gated documentation for hosting autonomous agent nodes on **Cherry bare-metal** with **Spark** settlement on **clrty-1 / chain 1202**.

## Live preview

- **GitBook:** [app.gitbook.com preview](https://app.gitbook.com/o/6MCNfiz1cpjlR5LX4kWw/sites/site_vzd1R/preview)
- **Monitor mirror:** [monitor.clarity-fintech.com/docs/swarm-agent-node/](https://monitor.clarity-fintech.com/docs/swarm-agent-node/)
- **SWARM host funnel:** [uiquio/swarms/host](https://monitor.clarity-fintech.com/uiquio/swarms/host)

## Funnel

```
Spark checkout → POST /v1/auth/issue-token → Clarity Wallet login → GitBook JWT gate → Cherry deploy
```

| Step | Surface |
|------|---------|
| Pay | Spark checkout tiers (`/uiquio/starter`, `/uiquio/dev-portal`, …) |
| JWT | `POST https://api.clarity-fintech.com/v1/auth/issue-token` |
| Verify | `POST https://api.clarity-fintech.com/v1/auth/verify` |
| Docs | GitBook Audience + `gitbook-gating.js` |
| Node | `/opt/clrty/swarm-node` on Cherry — **NO Docker** |

## Documentation map

| Section | Description |
|---------|-------------|
| [Getting started](./getting-started/overview.md) | Overview, pay gate, quick start |
| [Deployment](./deployment/consumer-deployment-guide.md) | Consumer node, custom agents, Cherry, CLI |
| [Architecture](./architecture/100-layer-overview.md) | 100-layer stack (groups 1–10) |
| [Payment tiers](./payment-tiers/starter-5-99.md) | Starter through Enterprise |
| [Blockchain](./blockchain/chain-1202-rpc.md) | RPC 1202, on-chain registry |

## Isolated agent node repo

Consumer upload pipeline: [`clrty-swarm-private-node/`](../../../clrty-swarm-private-node/README.md)

## SSOT references

| Artifact | Path |
|----------|------|
| Nano tasks (100) | `cloudflare/spark-pay/shared/swarmNodeNanoTasks100.json` |
| Payment tier matrix | `cloudflare/spark-pay/shared/swarmPaymentTierMatrix.js` |
| Private access funnel | `cloudflare/spark-pay/shared/swarmPrivateAccessFunnel.js` |
| Prior private docs | [swarm-private-access](../swarm-private-access/README.md) |

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
| Ask API | `POST https://api.gitbook.com/v1/orgs/6MCNfiz1cpjlR5LX4kWw/sites/site_vzd1R/ask` |

Set `GITBOOK_TOKEN` locally — **never commit**.
