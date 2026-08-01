# 6. Install on Cherry (NO Docker)

Deploy the SWARM node runtime to bare-metal Cherry — PM2, nginx, and certbot only. **NO Docker containers.**

<div data-required-tier="dev_portal" data-section-id="install-cherry">

## SSH to your server

Connect to your Cherry or bare-metal VPS (reference host `84.32.109.227`).

## Clone and install

```bash
git clone <your-clrty-checkout> /opt/clrty/src
cd /opt/clrty/src
sudo bash scripts/deploy/install-swarm-node.sh
```

Install completes at:

```
/opt/clrty/swarm-node
```

## What the installer configures

| Component | Purpose |
|-----------|---------|
| PM2 | Agent process manager |
| nginx | Reverse proxy |
| certbot | TLS certificates |
| systemd | Optional `clrty-swarm-node.service` |

## TLS (production)

```bash
sudo certbot --nginx -d swarm.clarity-fintech.com
```

Use your domain; template configs ship with the checkout.

## RPC endpoint

Agents settle on **clrty-1 / chain 1202**:

```
https://exchange.clarity-fintech.com/v1/rpc
```

## Verify install

```bash
pm2 list
curl -s https://api.clarity-fintech.com/v1/swarm/nano-steps | head
```

## NO Docker policy

Consumer SWARM nodes **must not** run Docker. Deploy mode is `bare_metal` — PM2 or systemd only.

</div>

## Next step

→ [7. Register Agents & Execute](./07-register-execute.md)
