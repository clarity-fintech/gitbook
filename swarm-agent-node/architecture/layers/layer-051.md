---
layer: 51
phase: 6
phase_name: "Wallet & Credits"
tier: wallet_fund
module: "swarmExecutionBilling.js"
status_checker: "checkClrtyPayRails"
---

# Layer 051 — CLRTY PAY card/wallet/USDC/CLRTY rails

<!-- data-required-tier="wallet_fund" data-section-id="layer-051" -->

<div data-required-tier="wallet_fund" data-section-id="layer-051">

## Overview

Architecture layer **51** of 100 · Phase **6** (Wallet & Credits).

CLRTY PAY card/wallet/USDC/CLRTY rails — settlement on **clrty-1** / chain ID **1202**.

> **Pay gate:** Tier `wallet_fund` required. [Checkout/uiquio/wallet-fund](https://monitor.clarity-fintech.com/uiquio/wallet-fund) · Verify JWT via [`POST /v1/auth/verify`](https://api.clarity-fintech.com/v1/auth/verify) after [`POST /v1/auth/issue-token`](https://api.clarity-fintech.com/v1/auth/issue-token).

## Responsibilities

- Maintain SSOT alignment for **swarmExecutionBilling.js** on clrty-1 / chain **1202**.
- Honor treasury `treasury:clrty-1`, UUID idempotency, and 3000ms FX TTL invariants.
- Integrate pay-gate session and Spark checkout confirmation before node activation.
- Verify via status checker `checkClrtyPayRails`.

## Layer commands

Consumer node operators use `clrty` CLI layer hooks (Cherry bare-metal, PM2):

```bash
clrty layer:051:health    # probe layer 51 on chain 1202
clrty layer:051:start     # start layer daemon (PM2)
clrty layer:051:stop      # graceful stop
```

Equivalent via node CLI:

```bash
bash scripts/deploy/clrty-node-cli.sh layer health 51
bash scripts/deploy/clrty-node-cli.sh layer start 51
```

## API interface

```yaml
# Layer 051 API surface (stub)
openapi: 3.0.3
info:
  title: SWARM Layer 051 — CLRTY PAY card/wallet/USDC/CLRTY rails
  version: "1.0.0"
paths:
  /v1/swarm/layer/051/health:
    get:
      summary: Layer health probe
      responses:
        "200":
          description: Layer 051 healthy on chain 1202
  /v1/swarm/layer/051/status:
    get:
      summary: Module swarmExecutionBilling.js status
  /v1/auth/verify:
    post:
      summary: JWT tier verification (GitBook gating)
      description: Issue-token flow via POST /v1/auth/issue-token after Spark checkout
```

## Deployment manifest

```yaml
# deployment/layer-051.yaml
# Cherry bare-metal consumer node — NO Docker required
apiVersion: clrty.swarm/v1
kind: SwarmLayer
metadata:
  layer: 51
  phase: 6
  module: swarmExecutionBilling.js
  settlement:
    network: clrty-1
    chain_id: 1202
spec:
  install_path: /opt/clrty/swarm-node
  process_manager: pm2
  deploy_mode: bare_metal
  # Docker: optional infra layer only — not used for consumer Cherry nodes
  cherry_reference: 84.32.109.227
  rpc: https://exchange.clarity-fintech.com/v1/rpc
```

## Related SSOT

| Artifact | Path |
|----------|------|
| Nano task registry | `cloudflare/spark-pay/shared/swarmNodeNanoTasks100.json` |
| Payment tiers | `cloudflare/spark-pay/shared/swarmPaymentTierMatrix.js` |
| Private access funnel | `cloudflare/spark-pay/shared/swarmPrivateAccessFunnel.js` |
| MIS compile | `moniversive/nanotasks/CLRTY-1_SWARM_AGENT_GITBOOK_100.mis` |

## Prior private-access docs

Cross-reference: [swarm-private-access](../swarm-private-access/README.md) tier sections.

</div>
