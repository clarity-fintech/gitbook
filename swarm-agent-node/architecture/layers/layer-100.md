---
layer: 100
phase: 10
phase_name: "MIS & Integration"
tier: enterprise
module: "scripts/verify_swarm_node_nano_tasks_100.sh"
status_checker: "checkVerifySwarmExitGate"
---

# Layer 100 — verify_swarm exit gate core phases

<!-- data-required-tier="enterprise" data-section-id="layer-100" -->

<div data-required-tier="enterprise" data-section-id="layer-100">

## Overview

Architecture layer **100** of 100 · Phase **10** (MIS & Integration).

verify_swarm exit gate core phases — settlement on **clrty-1** / chain ID **1202**.

> **Pay gate:** Tier `enterprise` required. [Checkout/uiquio/enterprise](https://monitor.clarity-fintech.com/uiquio/enterprise) · Verify JWT via [`POST /v1/auth/verify`](https://api.clarity-fintech.com/v1/auth/verify) after [`POST /v1/auth/issue-token`](https://api.clarity-fintech.com/v1/auth/issue-token).

## Responsibilities

- Maintain SSOT alignment for **scripts/verify_swarm_node_nano_tasks_100.sh** on clrty-1 / chain **1202**.
- Honor treasury `treasury:clrty-1`, UUID idempotency, and 3000ms FX TTL invariants.
- Cherry bare-metal deployment — **NO Docker** for consumer nodes (PM2/systemd only).
- Verify via status checker `checkVerifySwarmExitGate`.

## Layer commands

Consumer node operators use `clrty` CLI layer hooks (Cherry bare-metal, PM2):

```bash
clrty layer:100:health    # probe layer 100 on chain 1202
clrty layer:100:start     # start layer daemon (PM2)
clrty layer:100:stop      # graceful stop
```

Equivalent via node CLI:

```bash
bash scripts/deploy/clrty-node-cli.sh layer health 100
bash scripts/deploy/clrty-node-cli.sh layer start 100
```

## API interface

```yaml
# Layer 100 API surface (stub)
openapi: 3.0.3
info:
  title: SWARM Layer 100 — verify_swarm exit gate core phases
  version: "1.0.0"
paths:
  /v1/swarm/layer/100/health:
    get:
      summary: Layer health probe
      responses:
        "200":
          description: Layer 100 healthy on chain 1202
  /v1/swarm/layer/100/status:
    get:
      summary: Module scripts_verify_swarm_node_nano_tasks_100.sh status
  /v1/auth/verify:
    post:
      summary: JWT tier verification (GitBook gating)
      description: Issue-token flow via POST /v1/auth/issue-token after Spark checkout
```

## Deployment manifest

```yaml
# deployment/layer-100.yaml
# Cherry bare-metal consumer node — NO Docker required
apiVersion: clrty.swarm/v1
kind: SwarmLayer
metadata:
  layer: 100
  phase: 10
  module: scripts/verify_swarm_node_nano_tasks_100.sh
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
