---
layer: 75
phase: 8
phase_name: "Cherry Bare-Metal"
tier: dev_portal
module: "scripts/deploy/install-swarm-node.sh"
status_checker: "checkCertbotDeps"
---

# Layer 075 — certbot TLS deps

<!-- data-required-tier="dev_portal" data-section-id="layer-075" -->

<div data-required-tier="dev_portal" data-section-id="layer-075">

## Overview

Architecture layer **75** of 100 · Phase **8** (Cherry Bare-Metal).

certbot TLS deps — settlement on **clrty-1** / chain ID **1202**.

> **Pay gate:** Tier `dev_portal` required. [Checkout/uiquio/dev-portal](https://monitor.clarity-fintech.com/uiquio/dev-portal) · Verify JWT via [`POST /v1/auth/verify`](https://api.clarity-fintech.com/v1/auth/verify) after [`POST /v1/auth/issue-token`](https://api.clarity-fintech.com/v1/auth/issue-token).

## Responsibilities

- Maintain SSOT alignment for **scripts/deploy/install-swarm-node.sh** on clrty-1 / chain **1202**.
- Honor treasury `treasury:clrty-1`, UUID idempotency, and 3000ms FX TTL invariants.
- Cherry bare-metal deployment — **NO Docker** for consumer nodes (PM2/systemd only).
- Verify via status checker `checkCertbotDeps`.

## Layer commands

Consumer node operators use `clrty` CLI layer hooks (Cherry bare-metal, PM2):

```bash
clrty layer:075:health    # probe layer 75 on chain 1202
clrty layer:075:start     # start layer daemon (PM2)
clrty layer:075:stop      # graceful stop
```

Equivalent via node CLI:

```bash
bash scripts/deploy/clrty-node-cli.sh layer health 75
bash scripts/deploy/clrty-node-cli.sh layer start 75
```

## API interface

```yaml
# Layer 075 API surface (stub)
openapi: 3.0.3
info:
  title: SWARM Layer 075 — certbot TLS deps
  version: "1.0.0"
paths:
  /v1/swarm/layer/075/health:
    get:
      summary: Layer health probe
      responses:
        "200":
          description: Layer 075 healthy on chain 1202
  /v1/swarm/layer/075/status:
    get:
      summary: Module scripts_deploy_install-swarm-node.sh status
  /v1/auth/verify:
    post:
      summary: JWT tier verification (GitBook gating)
      description: Issue-token flow via POST /v1/auth/issue-token after Spark checkout
```

## Deployment manifest

```yaml
# deployment/layer-075.yaml
# Cherry bare-metal consumer node — NO Docker required
apiVersion: clrty.swarm/v1
kind: SwarmLayer
metadata:
  layer: 75
  phase: 8
  module: scripts/deploy/install-swarm-node.sh
  settlement:
    network: clrty-1
    chain_id: 1202
spec:
  install_path: /opt/clrty/swarm-node
  process_manager: pm2
  deploy_mode: bare_metal
  # Docker: OPTIONAL infra only — consumer Cherry nodes use bare-metal PM2 (see layer-080)
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
