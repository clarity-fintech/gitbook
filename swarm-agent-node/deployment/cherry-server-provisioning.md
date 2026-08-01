# Cherry server provisioning

<div data-required-tier="dev_portal" data-section-id="cherry-bare-metal">

Provision Cherry bare-metal for SWARM Agent Node — **NO Docker** on consumer path.

## Reference host

- **IP:** `84.32.109.227` (docs reference; SSH is operator action)
- **Install:** `/opt/clrty/swarm-node`
- **Process manager:** PM2 (or systemd)

## Provision script

From [`clrty-swarm-private-node`](../../../clrty-swarm-private-node/README.md):

```bash
sudo bash clrty-swarm-private-node/scripts/provision_cherry_server.sh
sudo bash clrty-swarm-private-node/scripts/start_pm2_daemons.sh
```

## Dependencies

- Node.js 20+
- PM2 global install
- nginx + certbot
- Python 3.11+ (agent runtime)

## SSH manifest

Cherry provisioning keys: `CLRTY_SUBSTRATE/boot/cherry_ssh_manifest.json` (operator-only).

## Docker note

Docker is **optional infra layer only** — not used for consumer Cherry nodes. Layer 80 enforces `deploy_mode: bare_metal`. See [layer-080](../architecture/layers/layer-080.md).

## Enterprise org mesh

<div data-required-tier="enterprise" data-section-id="enterprise-bare-metal">

Enterprise ($499) adds org-wide bare-metal mesh. See [Enterprise tier](../payment-tiers/enterprise-499.md).

</div>

</div>
