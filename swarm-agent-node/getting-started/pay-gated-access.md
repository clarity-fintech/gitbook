# Pay-gated access

SWARM Agent Node documentation is tier-gated. After Spark checkout, the API issues a JWT that unlocks GitBook sections matching your purchase.

## Tier checkout URLs

| Tier | Price | Checkout path | Tier key |
|------|-------|---------------|----------|
| Starter | $5.99/mo | `/uiquio/starter` | `starter` |
| Dev Portal | $29/mo | `/uiquio/dev-portal` | `dev_portal` |
| Wallet Fund | $29 min | `/uiquio/wallet-fund` | `wallet_fund` |
| Elite | $149/mo | `/uiquio/elite` | `elite` |
| Enterprise | $499/mo | `/uiquio/enterprise` | `enterprise` |

Full tier pages: [payment-tiers](../payment-tiers/starter-5-99.md)

## Auth flow (SSOT)

From `cloudflare/spark-pay/shared/swarmPrivateAccessFunnel.js`:

### 1. Spark payment confirmed

Complete checkout at `https://monitor.clarity-fintech.com/uiquio/swarms/host` or tier-specific Spark URLs.

### 2. Issue JWT

```bash
curl -X POST https://api.clarity-fintech.com/v1/auth/issue-token \
  -H 'Content-Type: application/json' \
  -d '{
    "status": "CONFIRMED",
    "offer_id": "dev_portal_execution_billing",
    "customer_email": "you@example.com",
    "merchant_id": "clarity_fintech_master_01"
  }'
```

Response includes `jwtToken` (30-day HS256, chainId **1202**).

### 3. Verify JWT (GitBook gating)

```bash
curl -X POST https://api.clarity-fintech.com/v1/auth/verify \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <JWT>' \
  -d '{"token": "<JWT>"}'
```

Returns `valid`, `tier_key`, `gitbook_sections`, `payment_rail`.

### 4. Clarity Wallet login

Browser handoff: `https://exchange.clarity-fintech.com/login?token=<JWT>&intent=swarm_private_access`

### 5. GitBook unlock

- Preview: [GitBook SWARM site](https://app.gitbook.com/o/6MCNfiz1cpjlR5LX4kWw/sites/site_vzd1R/preview)
- Client script: [gitbook-gating.js](../assets/gitbook-gating.js)
- Sections use `data-required-tier="starter|dev_portal|wallet_fund|elite|enterprise"`

## Prior work integration

Tier-specific deployment guides from agent 0a0972eb live under [swarm-private-access](../swarm-private-access/README.md):

- [Starter agents](../swarm-private-access/starter-agents.md)
- [Dev portal upload](../swarm-private-access/dev-portal-upload.md)
- [Wallet fund execution](../swarm-private-access/wallet-fund-execution.md)
- [Elite HELIX](../swarm-private-access/elite-helix.md)
- [Enterprise bare metal](../swarm-private-access/enterprise-bare-metal.md)

## Security

- **Never commit** `GITBOOK_JWT_PRIVATE_KEY` or `GITBOOK_TOKEN`
- JWT private key: Wrangler secret on Workers only
- Verify script scans docs for leaked keys
