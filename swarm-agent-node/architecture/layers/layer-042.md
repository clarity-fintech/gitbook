---
layer: 42
phase: 5
phase_name: "Pay Gate Session"
tier: dev_portal
module: "swarmPayGate.js"
status_checker: "checkActivatePaygateWebhook"
---

# Layer 042 — activateSwarmPaygateSession webhook

<!-- data-required-tier="dev_portal" data-section-id="layer-042" -->

<div data-required-tier="dev_portal" data-section-id="layer-042">

## Overview

Architecture layer **42** of 100 · Phase **5** (Pay Gate Session).

activateSwarmPaygateSession webhook — settlement on **clrty-1** / chain ID **1202**.

> **Pay gate:** Tier `dev_portal` required. [Checkout/uiquio/dev-portal](https://monitor.clarity-fintech.com/uiquio/dev-portal) · Verify JWT via [`POST /v1/auth/verify`](https://api.clarity-fintech.com/v1/auth/verify) after [`POST /v1/auth/issue-token`](https://api.clarity-fintech.com/v1/auth/issue-token).

## Responsibilities

- Maintain SSOT alignment for **swarmPayGate.js** on clrty-1 / chain **1202**.
- Honor treasury `treasury:clrty-1`, UUID idempotency, and 3000ms FX TTL invariants.
- Integrate pay-gate session and Spark checkout confirmation before node activation.
- Verify via status checker `checkActivatePaygateWebhook`.

## Layer commands

Consumer node operators use `clrty` CLI layer hooks (Cherry bare-metal, PM2):

```bash
clrty layer:042:health    # probe layer 42 on chain 1202
clrty layer:042:start     # start layer daemon (PM2)
clrty layer:042:stop      # graceful stop
```

Equivalent via node CLI:

```bash
bash scripts/deploy/clrty-node-cli.sh layer health 42
bash scripts/deploy/clrty-node-cli.sh layer start 42
```

## API interface

```yaml
# Layer 042 API surface (stub)
openapi: 3.0.3
info:
  title: SWARM Layer 042 — activateSwarmPaygateSession webhook
  version: "1.0.0"
paths:
  /v1/swarm/layer/042/health:
    get:
      summary: Layer health probe
      responses:
        "200":
          description: Layer 042 healthy on chain 1202
  /v1/swarm/layer/042/status:
    get:
      summary: Module swarmPayGate.js status
  /v1/auth/verify:
    post:
      summary: JWT tier verification (GitBook gating)
      description: Issue-token flow via POST /v1/auth/issue-token after Spark checkout
```

## Deployment manifest

```yaml
# deployment/layer-042.yaml
# Cherry bare-metal consumer node — NO Docker required
apiVersion: clrty.swarm/v1
kind: SwarmLayer
metadata:
  layer: 42
  phase: 5
  module: swarmPayGate.js
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
