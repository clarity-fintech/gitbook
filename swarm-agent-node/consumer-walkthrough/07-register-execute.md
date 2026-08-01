# 7. Register Agents & Execute

Register agents on your node and run them with per-run Spark billing from your CLRTY PAY wallet.

<div data-required-tier="dev_portal" data-section-id="register-execute">

## Register via CLI

```bash
bash scripts/deploy/clrty-node-cli.sh register agent_dev_review_012
bash scripts/deploy/clrty-node-cli.sh wizard
```

The wizard walks through agent selection, wallet balance check, and first run.

## Per-run agent SKUs

| SKU | Agent | Price |
|-----|-------|-------|
| `agent_dev_review_012` | Dev Review Swarm | $0.12/run |
| `agent_sales_outreach_008` | Sales Outreach Swarm | $0.08/run |
| `agent_clrty_skills_005` | CLRTY Skills Tutor | $0.05/run |
| `agent_research_rag_015` | Research RAG Swarm | $0.15/run |
| `agent_ops_monitor_004` | Ops Monitor Agent | $0.04/run |

Each run debits your CLRTY PAY wallet via Spark on chain **1202**.

## Execute an agent

```bash
curl -X POST https://api.clarity-fintech.com/v1/swarm/execute \
  -H 'Content-Type: application/json' \
  -d '{
    "user_id": "you@example.com",
    "agent_id": "agent_dev_review_012"
  }'
```

## Insufficient balance

If wallet balance is too low, the API returns `wallet_login_url` — open it to fund via Clarity Wallet, then retry execute.

## Upload custom agents

After registration, follow the [Agent upload pipeline](./upload-phase1-auth.md):

1. [Auth + JWT Issue](./upload-phase1-auth.md)
2. [Prepare .mis + .py Agents](./upload-phase2-prep.md)
3. [Upload to Cherry Bare-Metal](./upload-phase3-upload.md)

## systemd + nginx (reference)

- Service template: `systemd/clrty-swarm-node.service`
- nginx config: `nginx/swarm-paygate.conf`

</div>

## Done

You have completed the consumer walkthrough. For custom agent upload, continue with [Upload Phase 1](./upload-phase1-auth.md).
