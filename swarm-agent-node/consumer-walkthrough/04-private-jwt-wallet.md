# 4. Private JWT + Wallet Login

After payment is **CONFIRMED**, request a private JWT and sign in to Clarity Wallet to unlock GitBook sections.

<div data-required-tier="starter" data-section-id="private-jwt-wallet">

## Issue JWT

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

Replace `offer_id` with your checkout offer (e.g. `webb_starter_agents`, `clrty_pay_wallet_fund`).

## JWT properties

| Claim | Value |
|-------|-------|
| Algorithm | HS256 |
| Lifetime | 30 days |
| `chainId` | 1202 |
| `nodeAccess` | `isolated_cherry_server` |
| `tier` | Your checkout offer id |

Save the `jwtToken` from the response — **never share it publicly**.

## Verify JWT (optional smoke test)

```bash
curl -X POST https://api.clarity-fintech.com/v1/auth/verify \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <JWT>' \
  -d '{"token": "<JWT>"}'
```

Returns `valid`, `tier_key`, `gitbook_sections`, and `payment_rail`.

## Clarity Wallet login

Open in your browser (replace `<JWT>`):

```
https://exchange.clarity-fintech.com/login?token=<JWT>&intent=swarm_private_access
```

Or go to [exchange.clarity-fintech.com/login](https://exchange.clarity-fintech.com/login) after storing the token from checkout email.

## Security

- JWT private keys live on Clarity Workers only — **never commit** signing keys
- Use the same email as Spark checkout for consistent tier resolution

</div>

## Next step

→ [5. GitBook Authenticated Access](./05-gitbook-gate.md)
