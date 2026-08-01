# CLRTY CLI reference

Operator CLI for SWARM Agent Node layer and agent management on Cherry bare-metal.

## Install

Shipped with main repo: `scripts/deploy/clrty-node-cli.sh`

## Agent commands

```bash
bash scripts/deploy/clrty-node-cli.sh register agent_dev_review_012
bash scripts/deploy/clrty-node-cli.sh wizard
bash scripts/deploy/clrty-node-cli.sh status
```

## Layer commands (100-layer stack)

Each architecture layer exposes health/start/stop hooks:

```bash
clrty layer:001:health
clrty layer:001:start
clrty layer:001:stop

# Via wrapper script
bash scripts/deploy/clrty-node-cli.sh layer health 1
bash scripts/deploy/clrty-node-cli.sh layer start 71
```

Layer index: [architecture/layers/](../architecture/layers/layer-001.md)

## Pay gate

```bash
bash scripts/deploy/clrty-node-cli.sh paygate session dev_portal_execution_billing
```

## Verify harness

```bash
bash scripts/verify_swarm_node_nano_tasks_100.sh
bash scripts/verify_swarm_gitbook_content.sh
bin/misc moniversive/nanotasks/CLRTY-1_SWARM_AGENT_GITBOOK_100.mis --check --compact-letters
```

## Environment

| Variable | Purpose |
|----------|---------|
| `CLRTY_RPC_URL` | Default `https://exchange.clarity-fintech.com/v1/rpc` |
| `CLRTY_CHAIN_ID` | `1202` |
| `SWARM_INSTALL_PATH` | `/opt/clrty/swarm-node` |

Never set JWT private keys in shell profile — use Wrangler secrets.
