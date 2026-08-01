# Upload Phase 1 — Auth + JWT Issue

Post-unlock step: confirm Spark payment and obtain a 30-day JWT for agent upload on isolated Cherry.

<div data-required-tier="dev_portal" data-section-id="consumer-phase1-auth">

## When to run

After [Pay Gate Checkout](./02-pay-gate-checkout.md) shows **CONFIRMED** and before uploading agents to Cherry.

## Issue token

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

## Verify access (smoke test)

From your private node checkout:

```bash
bash scripts/verify_access.sh
```

Or verify via API:

```bash
curl -X POST https://api.clarity-fintech.com/v1/auth/verify \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <JWT>' \
  -d '{"token": "<JWT>"}'
```

## Expected claims

| Field | Value |
|-------|-------|
| `chainId` | 1202 |
| `nodeAccess` | `isolated_cherry_server` |
| `tier` | Your checkout offer id |
| Lifetime | 30 days (HS256) |

Store `jwtToken` securely — required for GitBook gating and upload scripts.

</div>

## Next phase

→ [Phase 2 — Prepare .mis + .py Agents](./upload-phase2-prep.md)
