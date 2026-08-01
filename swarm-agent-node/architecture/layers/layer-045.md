---
layer: 45
phase: 5
phase_name: "Pay Gate Session"
tier: dev_portal
module: "shared/components/SwarmPayGatePanel.jsx"
status_checker: "checkPaymentMethodSelector"
---

# Layer 045 — payment-method-selector UI

<!-- data-required-tier="dev_portal" data-section-id="layer-045" -->

<div data-required-tier="dev_portal" data-section-id="layer-045">

## Overview

Architecture layer **45** of 100 · Phase **5** (Pay Gate Session).

payment-method-selector UI — settlement on **clrty-1** / chain ID **1202**.

> **Pay gate:** Tier `dev_portal` required. [Checkout/uiquio/dev-portal](https://monitor.clarity-fintech.com/uiquio/dev-portal) · Verify JWT via [`POST /v1/auth/verify`](https://api.clarity-fintech.com/v1/auth/verify) after [`POST /v1/auth/issue-token`](https://api.clarity-fintech.com/v1/auth/issue-token).

## Responsibilities

- Maintain SSOT alignment for **shared/components/SwarmPayGatePanel.jsx** on clrty-1 / chain **1202**.
- Honor treasury `treasury:clrty-1`, UUID idempotency, and 3000ms FX TTL invariants.
- Integrate pay-gate session and Spark checkout confirmation before node activation.
- Verify via status checker `checkPaymentMethodSelector`.

## Layer commands

Consumer node operators use `clrty` CLI layer hooks (Cherry bare-metal, PM2):

```bash
clrty layer:045:health    # probe layer 45 on chain 1202
clrty layer:045:start     # start layer daemon (PM2)
clrty layer:045:stop      # graceful stop
```

Equivalent via node CLI:

```bash
bash scripts/deploy/clrty-node-cli.sh layer health 45
bash scripts/deploy/clrty-node-cli.sh layer start 45
```

## API interface

```yaml
# Layer 045 API surface (stub)
openapi: 3.0.3
info:
  title: SWARM Layer 045 — payment-method-selector UI
  version: "1.0.0"
paths:
  /v1/swarm/layer/045/health:
    get:
      summary: Layer health probe
      responses:
        "200":
          description: Layer 045 healthy on chain 1202
  /v1/swarm/layer/045/status:
    get:
      summary: Module shared_components_SwarmPayGatePanel.jsx status
  /v1/auth/verify:
    post:
      summary: JWT tier verification (GitBook gating)
      description: Issue-token flow via POST /v1/auth/issue-token after Spark checkout
```

## Deployment manifest

```yaml
# deployment/layer-045.yaml
# Cherry bare-metal consumer node — NO Docker required
apiVersion: clrty.swarm/v1
kind: SwarmLayer
metadata:
  layer: 45
  phase: 5
  module: shared/components/SwarmPayGatePanel.jsx
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
