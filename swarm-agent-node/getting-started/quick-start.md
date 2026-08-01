# Quick start

Deploy a SWARM Agent Node in five steps — Spark pay → JWT → wallet → docs → Cherry.

## 1. Choose tier and pay

Open [SWARM Host](https://monitor.clarity-fintech.com/uiquio/swarms/host) and complete checkout:

- **Starter ($5.99):** [ `/uiquio/starter` ](https://monitor.clarity-fintech.com/uiquio/starter)
- **Dev Portal ($29):** [ `/uiquio/dev-portal` ](https://monitor.clarity-fintech.com/uiquio/dev-portal)

## 2. Issue private JWT

After `CONFIRMED` payment:

```javascript
import { fetchPrivateAccessToken } from 'cloudflare/spark-pay/shared/swarmPrivateAccessFunnel.js';

const { jwtToken } = await fetchPrivateAccessToken({
  customer_email: 'you@example.com',
  offer_id: 'dev_portal_execution_billing',
  status: 'CONFIRMED',
});
```

Or curl — see [pay-gated access](./pay-gated-access.md).

## 3. Login to Clarity Wallet

```javascript
import { buildWalletLoginWithToken } from 'cloudflare/spark-pay/shared/swarmPrivateAccessFunnel.js';

window.location.href = buildWalletLoginWithToken(jwtToken);
```

## 4. Read gated GitBook docs

- [100-layer architecture](../architecture/100-layer-overview.md)
- [Consumer deployment](../deployment/consumer-deployment-guide.md)
- [Custom code agents](../deployment/custom-code-agents.md)

Include gating script on custom HTML surfaces:

```html
<script type="module" src="../assets/gitbook-gating.js"></script>
```

## 5. Install on Cherry (bare-metal)

```bash
git clone <your-checkout> /opt/clrty/src
cd /opt/clrty/src
sudo bash scripts/deploy/install-swarm-node.sh
```

Install path: `/opt/clrty/swarm-node` · **NO Docker**

Register agents:

```bash
bash scripts/deploy/clrty-node-cli.sh register agent_dev_review_012
bash clrty-swarm-private-node/scripts/upload_consumer_agents.sh
```

## Verify

```bash
bash scripts/verify_swarm_gitbook_content.sh
bash scripts/verify_swarm_node_nano_tasks_100.sh
curl https://api.clarity-fintech.com/v1/swarm/nano-steps
```
