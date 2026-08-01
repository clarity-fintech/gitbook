# Consumer deployment guide

<div data-required-tier="dev_portal" data-section-id="agent-deployment-full">

Deploy a consumer SWARM Agent Node on Cherry bare-metal after pay-gate checkout.

## Prerequisites

- Ubuntu 22.04+ on Cherry (or compatible bare-metal VPS)
- Node.js 20+, PM2, nginx, certbot
- Completed Dev Portal ($29) or Starter ($5.99) checkout
- JWT from `POST /v1/auth/issue-token`

## Install path

| Path | Purpose |
|------|---------|
| `/opt/clrty/swarm-node` | Runtime install |
| `/opt/clrty/src` | Source checkout |
| `84.32.109.227` | Cherry reference host (operator SSH) |

## Install script

```bash
sudo bash scripts/deploy/install-swarm-node.sh
```

Configures PM2, nginx, certbot. **NO Docker containers.**

## Pay gate activation

```bash
curl -X POST https://api.clarity-fintech.com/v1/swarm/paygate/session \
  -H 'Content-Type: application/json' \
  -d '{"tier_id":"dev_portal_execution_billing","user_id":"you@example.com"}'
```

After webhook:

```bash
curl -X POST https://api.clarity-fintech.com/v1/swarm/paygate/activate \
  -H 'Content-Type: application/json' \
  -d '{"session_id":"<SESSION>","payment_id":"<PAYMENT_ID>"}'
```

## systemd + nginx

- Service: `systemd/clrty-swarm-node.service`
- nginx: `nginx/swarm-paygate.conf`
- TLS: `certbot --nginx -d swarm.clarity-fintech.com`

## Related

- [Cherry server provisioning](./cherry-server-provisioning.md)
- [CLRTY CLI reference](./clrty-cli-reference.md)
- [Host your own swarm node](../../../host-your-own-swarm-node.md)

</div>
