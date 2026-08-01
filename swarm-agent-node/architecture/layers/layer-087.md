---
layer: 87
phase: 9
phase_name: "Playwright E2E"
tier: dev_portal
module: "swarmNodeStepEvaluators.js"
status_checker: "checkSwarmStepEvaluators"
---

# Layer 087 — swarmNodeStepEvaluators.js

<!-- data-required-tier="dev_portal" data-section-id="layer-087" -->

<div data-required-tier="dev_portal" data-section-id="layer-087">

## Overview

Architecture layer **87** of 100 · Phase **9** (Playwright E2E).

swarmNodeStepEvaluators.js — settlement on **clrty-1** / chain ID **1202**.

> **Pay gate:** Tier `dev_portal` required. [Checkout/uiquio/dev-portal](https://monitor.clarity-fintech.com/uiquio/dev-portal) · Verify JWT via [`POST /v1/auth/verify`](https://api.clarity-fintech.com/v1/auth/verify) after [`POST /v1/auth/issue-token`](https://api.clarity-fintech.com/v1/auth/issue-token).

## Responsibilities

- Maintain SSOT alignment for **swarmNodeStepEvaluators.js** on clrty-1 / chain **1202**.
- Honor treasury `treasury:clrty-1`, UUID idempotency, and 3000ms FX TTL invariants.
- Cherry bare-metal deployment — **NO Docker** for consumer nodes (PM2/systemd only).
- Verify via status checker `checkSwarmStepEvaluators`.

## Layer commands

Consumer node operators use `clrty` CLI layer hooks (Cherry bare-metal, PM2):

```bash
clrty layer:087:health    # probe layer 87 on chain 1202
clrty layer:087:start     # start layer daemon (PM2)
clrty layer:087:stop      # graceful stop
```

Equivalent via node CLI:

```bash
bash scripts/deploy/clrty-node-cli.sh layer health 87
bash scripts/deploy/clrty-node-cli.sh layer start 87
```

## API interface

```yaml
# Layer 087 API surface (stub)
openapi: 3.0.3
info:
  title: SWARM Layer 087 — swarmNodeStepEvaluators.js
  version: "1.0.0"
paths:
  /v1/swarm/layer/087/health:
    get:
      summary: Layer health probe
      responses:
        "200":
          description: Layer 087 healthy on chain 1202
  /v1/swarm/layer/087/status:
    get:
      summary: Module swarmNodeStepEvaluators.js status
  /v1/auth/verify:
    post:
      summary: JWT tier verification (GitBook gating)
      description: Issue-token flow via POST /v1/auth/issue-token after Spark checkout
```

## Deployment manifest

```yaml
# deployment/layer-087.yaml
# Cherry bare-metal consumer node — NO Docker required
apiVersion: clrty.swarm/v1
kind: SwarmLayer
metadata:
  layer: 87
  phase: 9
  module: swarmNodeStepEvaluators.js
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
