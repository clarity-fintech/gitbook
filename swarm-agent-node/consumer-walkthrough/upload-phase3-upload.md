# Upload Phase 3 — Upload to Cherry Bare-Metal

RSYNC prepared agents to Cherry and start PM2 daemons. **NO Docker.**

<div data-required-tier="dev_portal" data-section-id="consumer-phase3-upload">

## Upload script

From your private node checkout:

```bash
bash scripts/upload_consumer_agents.sh
```

The script RSYNCs agents to:

```
/opt/clrty/swarm-node
```

on your Cherry host.

## Start daemons

After upload:

```bash
sudo bash scripts/start_pm2_daemons.sh
```

Or on an already-provisioned server:

```bash
pm2 restart all
pm2 save
```

## Provision fresh Cherry (optional)

For a new bare-metal host:

```bash
sudo bash scripts/provision_cherry_server.sh
sudo bash scripts/start_pm2_daemons.sh
```

## Verify on server

```bash
pm2 list
ls -la /opt/clrty/swarm-node/agents/
curl -s https://api.clarity-fintech.com/v1/swarm/execute \
  -H 'Content-Type: application/json' \
  -d '{"user_id":"you@example.com","agent_id":"agent_dev_review_012"}'
```

## NO Docker

Upload and runtime are **bare-metal only** — PM2 or systemd. Do not deploy container images on consumer SWARM nodes.

</div>

## Back to walkthrough

→ [Consumer walkthrough hub](./README.md) · [Register Agents & Execute](./07-register-execute.md)
