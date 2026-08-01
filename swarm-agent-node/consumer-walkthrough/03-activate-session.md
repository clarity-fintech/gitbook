# 3. Activate Pay Gate Session

After Spark checkout, create and activate a pay gate session to receive your deploy token and install path.

<div data-required-tier="starter" data-section-id="activate-session">

## Step A — Create session

```bash
curl -X POST https://api.clarity-fintech.com/v1/swarm/paygate/session \
  -H 'Content-Type: application/json' \
  -d '{
    "tier_id": "dev_portal_execution_billing",
    "user_id": "you@example.com"
  }'
```

Replace `tier_id` with your offer:

| Tier | `tier_id` |
|------|-----------|
| Dev Portal | `dev_portal_execution_billing` |
| WEBB Starter | `webb_starter_agents` |
| Wallet Fund | `clrty_pay_wallet_fund` |

Response includes a `session_id` (UUID). Save it.

## Step B — Activate after webhook

Once Spark reports payment **CONFIRMED**, activate the session:

```bash
curl -X POST https://api.clarity-fintech.com/v1/swarm/paygate/activate \
  -H 'Content-Type: application/json' \
  -d '{
    "session_id": "<SESSION_UUID>",
    "payment_id": "<SPARK_PAYMENT_ID>"
  }'
```

## Response fields

| Field | Meaning |
|-------|---------|
| `deploy_token` | Short-lived token for Cherry install |
| `install_path` | `/opt/clrty/swarm-node` |
| `deploy_mode` | `bare_metal` (NO Docker) |

## Troubleshooting

- **Session not found** — re-run Step A with the same `user_id` as checkout email
- **Payment not confirmed** — wait for Spark webhook or check SWARM Host status
- **Insufficient balance** (later, at execute) — API returns `wallet_login_url` for Clarity Wallet top-up

</div>

## Next step

→ [4. Private JWT + Wallet Login](./04-private-jwt-wallet.md)
