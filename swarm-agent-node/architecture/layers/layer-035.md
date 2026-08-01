---
layer: 35
phase: 4
phase_name: "Per-Run Agent SKUs"
tier: dev_portal
module: "swarmExecutionBilling.js"
status_checker: "checkAgentOpsMonitor004"
---

# Layer 035 — agent_ops_monitor_004 $0.04/run

<!-- data-required-tier="dev_portal" data-section-id="layer-035" -->

<div data-required-tier="dev_portal" data-section-id="layer-035">

## Overview

Architecture layer **35** of 100 · Phase **4** (Per-Run Agent SKUs).

agent_ops_monitor_004 $0.04/run — settlement on **clrty-1** / chain ID **1202**.

> **Pay gate:** Tier `dev_portal` required. [Checkout/uiquio/dev-portal](https://monitor.clarity-fintech.com/uiquio/dev-portal) · Verify JWT via [`POST /v1/auth/verify`](https://api.clarity-fintech.com/v1/auth/verify) after [`POST /v1/auth/issue-token`](https://api.clarity-fintech.com/v1/auth/issue-token).

## Responsibilities

- Maintain SSOT alignment for **swarmExecutionBilling.js** on clrty-1 / chain **1202**.
- Honor treasury `treasury:clrty-1`, UUID idempotency, and 3000ms FX TTL invariants.
- Verify via status checker `checkAgentOpsMonitor004`.

## Layer commands

Consumer node operators use `clrty` CLI layer hooks (Cherry bare-metal, PM2):

```bash
clrty layer:035:health    # probe layer 35 on chain 1202
clrty layer:035:start     # start layer daemon (PM2)
clrty layer:035:stop      # graceful stop
```

Equivalent via node CLI:

```bash
bash scripts/deploy/clrty-node-cli.sh layer health 35
bash scripts/deploy/clrty-node-cli.sh layer start 35
```

## API interface

```yaml
# Layer 035 API surface (stub)
openapi: 3.0.3
info:
  title: SWARM Layer 035 — agent_ops_monitor_004 $0.04/run
  version: "1.0.0"
paths:
  /v1/swarm/layer/035/health:
    get:
      summary: Layer health probe
      responses:
        "200":
          description: Layer 035 healthy on chain 1202
  /v1/swarm/layer/035/status:
    get:
      summary: Module swarmExecutionBilling.js status
  /v1/auth/verify:
    post:
      summary: JWT tier verification (GitBook gating)
      description: Issue-token flow via POST /v1/auth/issue-token after Spark checkout
```

## Deployment manifest

```yaml
# deployment/layer-035.yaml
# Cherry bare-metal consumer node — NO Docker required
apiVersion: clrty.swarm/v1
kind: SwarmLayer
metadata:
  layer: 35
  phase: 4
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
