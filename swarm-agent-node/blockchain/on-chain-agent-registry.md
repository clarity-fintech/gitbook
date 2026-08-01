# On-chain agent registry

SWARM agents register on **clrty-1 / chain 1202** for discovery and settlement attestation.

<div data-required-tier="dev_portal" data-section-id="on-chain-registry">

## Register agent

```bash
bash scripts/deploy/clrty-node-cli.sh register agent_dev_review_012
```

## Registry fields

| Field | Description |
|-------|-------------|
| `agent_id` | SKU identifier (e.g. `agent_dev_review_012`) |
| `merchant_id` | `clrty_merchant_volkov_intelligence_01` |
| `chain_id` | `1202` |
| `treasury` | `treasury:clrty-1` |

## RPC integration

Agent runs emit settlement events consumed by `swarmExecutionBilling.js` with UUID idempotency.

## API probe

```bash
curl https://api.clarity-fintech.com/v1/swarm/nano-steps
```

Layer **92** — `mis_code_index` swarm entry documents registry SSOT.

</div>
