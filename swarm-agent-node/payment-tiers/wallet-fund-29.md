# Wallet Fund — $29 min

<!-- data-required-tier="wallet_fund" -->

<div data-required-tier="wallet_fund" data-section-id="wallet-fund-execution">

**CLRTY PAY Wallet Fund** — prepaid balance for dynamic multi-agent execution.

## Checkout

- Path: `/uiquio/wallet-fund`
- URL: [monitor.clarity-fintech.com/uiquio/wallet-fund](https://monitor.clarity-fintech.com/uiquio/wallet-fund)
- Offer: `clrty_pay_wallet_fund`
- Plink: `plink_clrty_pay_wallet_fund`

## Unlocks

- GitBook: `wallet-fund-execution`, `agent-deployment-dynamic`
- Node access: `prepaid_balance`
- Agents: all (`*`)

## Execution

Per-run debits via `accessCreditsEngine` — insufficient balance returns `wallet_login_url`.

Layers **51–60** document wallet & credits integration.

## Related

- [swarm-private-access/wallet-fund-execution](../swarm-private-access/wallet-fund-execution.md)
- [Layer 004](../architecture/layers/layer-004.md)

</div>
