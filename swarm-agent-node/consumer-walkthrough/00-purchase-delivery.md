# Purchase delivery package

<div data-required-tier="starter" data-section-id="purchase-delivery">

When your SWARM checkout completes, you receive the **minimum delivery bundle** by email and in the API response from `POST /v1/auth/issue-token`.

## What is included

| Item | Description |
|------|-------------|
| **Private access JWT** | Your signed token for Clarity Wallet and GitBook (not the server signing secret) |
| **Login URL** | [Clarity Wallet login](https://exchange.clarity-fintech.com/login) with token handoff |
| **GitBook auth URL** | Consumer walkthrough with `jwt_token` query param |
| **Instruction book** | All 7 walkthrough steps + 3 upload phases |
| **Fee receipt** | **TAXES** and **APIs** line items labeled explicitly |

## Receipt labels

Your purchase receipt always shows:

- **Subtotal** — tier price (Starter $5.99 · Dev Portal $29 · etc.)
- **TAXES** — sales tax (jurisdiction shown when available)
- **APIs** — interchange, platform, and API gateway fees combined
- **Total** — amount charged

## After payment

1. Check email from **William · Clarity Fintech** for the full package.
2. Click **Login** — wallet session stores your JWT.
3. Click **GitBook** — opens this consumer walkthrough with tier-gated sections unlocked.
4. Continue with [Private JWT + Wallet Login](./04-private-jwt-wallet.md).

## API — delivery package

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

Response includes `delivery_package` with `login_url`, `gitbook_auth_url`, `private_access_jwt`, `fees` (TAXES + APIs), and `instruction_book`.

## GitBook preview

[SWARM consumer walkthrough](https://app.gitbook.com/o/6MCNfiz1cpjlR5LX4kWw/sites/site_vzd1R/preview)

</div>
