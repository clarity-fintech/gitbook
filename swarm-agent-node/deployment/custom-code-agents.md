# Custom code agents

<div data-required-tier="dev_portal" data-section-id="dev-portal-upload">

Upload consumer agents (`.mis` and `.py`) via the isolated node pipeline in [`clrty-swarm-private-node/`](../../../clrty-swarm-private-node/README.md).

## Consumer upload pipeline

### Phase 1 — Auth + JWT

After Spark `CONFIRMED`:

```bash
curl -X POST https://api.clarity-fintech.com/v1/auth/issue-token \
  -H 'Content-Type: application/json' \
  -d '{"status":"CONFIRMED","offer_id":"dev_portal_execution_billing","customer_email":"you@example.com"}'
```

### Phase 2 — Prepare agents

Templates in `clrty-swarm-private-node/agents/` — chain **1202** / `treasury:clrty-1` invariants.

Compile MIS:

```bash
bin/misc clrty-swarm-private-node/agents/moniversive_parser.mis --check --compact-letters
```

### Phase 3 — Upload to Cherry

```bash
bash clrty-swarm-private-node/scripts/upload_consumer_agents.sh
# Remote: CHERRY_SSH=84.32.109.227 bash clrty-swarm-private-node/scripts/upload_consumer_agents.sh
```

## Per-run agent SKUs

| SKU | Agent | Price |
|-----|-------|-------|
| `agent_dev_review_012` | Dev Review Swarm | $0.12/run |
| `agent_sales_outreach_008` | Sales Outreach | $0.08/run |
| `agent_clrty_skills_005` | CLRTY Skills Tutor | $0.05/run |
| `agent_research_rag_015` | Research RAG | $0.15/run |
| `agent_ops_monitor_004` | Ops Monitor | $0.04/run |

Execute:

```bash
curl -X POST https://api.clarity-fintech.com/v1/swarm/execute \
  -H 'Content-Type: application/json' \
  -d '{"user_id":"you@example.com","agent_id":"agent_dev_review_012"}'
```

## Starter tier (limited agents)

<div data-required-tier="starter" data-section-id="agent-deployment-starter">

Starter ($5.99) allows: `dev_review`, `sales_outreach`, `skills_tutor` only.

Checkout: [ `/uiquio/starter` ](https://monitor.clarity-fintech.com/uiquio/starter)

</div>

</div>
