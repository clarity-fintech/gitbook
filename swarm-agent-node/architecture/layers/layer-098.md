---
layer: 98
phase: 10
phase_name: "MIS & Integration"
tier: enterprise
module: "Makefile"
status_checker: "checkMakefileVerifyTarget"
---

# Layer 098 — Makefile verify target optional

<!-- data-required-tier="enterprise" data-section-id="layer-098" -->

<div data-required-tier="enterprise" data-section-id="layer-098">

## Overview

Architecture layer **98** of 100 · Phase **10** (MIS & Integration).

Makefile verify target optional — settlement on **clrty-1** / chain ID **1202**.

> **Pay gate:** Tier `enterprise` required. [Checkout/uiquio/enterprise](https://monitor.clarity-fintech.com/uiquio/enterprise) · Verify JWT via [`POST /v1/auth/verify`](https://api.clarity-fintech.com/v1/auth/verify) after [`POST /v1/auth/issue-token`](https://api.clarity-fintech.com/v1/auth/issue-token).

## Responsibilities

- Maintain SSOT alignment for **Makefile** on clrty-1 / chain **1202**.
- Honor treasury `treasury:clrty-1`, UUID idempotency, and 3000ms FX TTL invariants.
- Cherry bare-metal deployment — **NO Docker** for consumer nodes (PM2/systemd only).
- Verify via status checker `checkMakefileVerifyTarget`.

## Layer commands

Consumer node operators use `clrty` CLI layer hooks (Cherry bare-metal, PM2):

```bash
clrty layer:098:health    # probe layer 98 on chain 1202
clrty layer:098:start     # start layer daemon (PM2)
clrty layer:098:stop      # graceful stop
```

Equivalent via node CLI:

```bash
bash scripts/deploy/clrty-node-cli.sh layer health 98
bash scripts/deploy/clrty-node-cli.sh layer start 98
```

## API interface

```yaml
# Layer 098 API surface (stub)
openapi: 3.0.3
info:
  title: SWARM Layer 098 — Makefile verify target optional
  version: "1.0.0"
paths:
  /v1/swarm/layer/098/health:
    get:
      summary: Layer health probe
      responses:
        "200":
          description: Layer 098 healthy on chain 1202
  /v1/swarm/layer/098/status:
    get:
      summary: Module Makefile status
  /v1/auth/verify:
    post:
      summary: JWT tier verification (GitBook gating)
      description: Issue-token flow via POST /v1/auth/issue-token after Spark checkout
```

## Deployment manifest

```yaml
# deployment/layer-098.yaml
# Cherry bare-metal consumer node — NO Docker required
apiVersion: clrty.swarm/v1
kind: SwarmLayer
metadata:
  layer: 98
  phase: 10
  module: Makefile
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
