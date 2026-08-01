# 5. GitBook Authenticated Access

Unlock tier-gated sections in this GitBook space using your JWT after wallet login.

<div data-required-tier="starter" data-section-id="gitbook-gate">

## Preview site

[GitBook SWARM preview](https://app.gitbook.com/o/6MCNfiz1cpjlR5LX4kWw/sites/site_vzd1R/preview)

## How gating works

1. Complete [Pay Gate Checkout](./02-pay-gate-checkout.md)
2. Obtain JWT via [Private JWT + Wallet Login](./04-private-jwt-wallet.md)
3. Sign in to Clarity Wallet — token stored in browser session
4. GitBook Audience validates JWT against `POST /v1/auth/verify`
5. Sections marked with tier attributes become visible

## Tier keys

| Tier key | Unlocks |
|----------|---------|
| `starter` | Starter docs, basic deploy steps |
| `wallet_fund` | Wallet top-up + per-run execution |
| `dev_portal` | Full agent upload, Cherry install, instruction book |
| `elite` | HELIX tier content |
| `enterprise` | Bare-metal enterprise content |

Higher tiers inherit lower-tier sections.

## Client gating (custom HTML surfaces)

If you mirror docs on monitor or a custom site, include the gating script:

```html
<script type="module" src="./assets/gitbook-gating.js"></script>
```

The script reads JWT from URL query (`?token=` or `?jwt=`) or `localStorage` (`clrty_wallet_session`), calls verify, and shows/hides `[data-required-tier]` blocks.

## Pass token in URL (testing)

```
https://monitor.clarity-fintech.com/docs/swarm-agent-node/?token=<JWT>
```

## Locked banner

Without a valid token, gated sections stay hidden and a sticky banner prompts wallet login.

</div>

## Next step

→ [6. Install on Cherry (NO Docker)](./06-install-cherry.md)
