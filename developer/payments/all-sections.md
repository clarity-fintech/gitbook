# All sections — Spark Pay cross-links

Complete index linking **Spark Pay** to every Clarity surface: website nav, GitBook tiers, live infra, and GitHub org.

## Website nav (`clarity-fintech.com`)

| Segment | Spark Pay touchpoint | Links |
|---------|----------------------|-------|
| **Use CLRTY** | Wallet `claritypay://` handler | [Wallet](../frontend/web3-ui/index.html) · [Create wallet](https://exchange.clarity-fintech.com/create-wallet) · [Swap](../frontend/portal/swap.html) |
| **Build** | SDK + GitBook developer docs | [Docs](../frontend/docs/index.html) · [GitBook Payments](spark-pay-overview.md) · [RPC portal](../frontend/labs/explorer/index.html?portal=rpc) |
| **Enterprise** | Primary payments stack | [Spark Pay tool](https://www.clarity-fintech.com/tools/spark-pay.html) · [CLARITY PAY](https://www.clarity-fintech.com/tools/clarity-pay.html) · [CortexPay](https://www.clarity-fintech.com/products/commerce/cortexpay.html) |
| **Products** | HELIX routing + commerce | [HELIX](../frontend/products/suite/category-i-execution/helix-engine.html) · [x402](../frontend/products/x402.html) · [Commerce hub](../frontend/products/commerce/index.html) |
| **Ecosystem** | 7 RPC gates + Inner Store | [Ecosystem map](../public/products/ecosystem-map.md) · [Realms](../public/architecture/realms.md) · [Inner Store](../public/architecture/inner-store.md) |

## GitBook spaces

| Space | Root folder | Spark Pay page |
|-------|-------------|----------------|
| Public | `public/` | [Spark Pay product](../public/products/spark-pay.md) |
| **Developer** | `developer/` | **[Payments hub](README.md)** (this section) |
| Institutional | `institutional/` | Treasury · compliance · enterprise payouts |
| Investor | `investor-private/` | Settlement gatekeeper · offering docs |

Admin: [GitBook site_Utrrz](https://app.gitbook.com/o/Yuash1ualCkP03YzJ8ts/sites/site_Utrrz)

## Live infrastructure

| Service | URL | Spark Pay role |
|---------|-----|----------------|
| Portal | [www.clarity-fintech.com](https://www.clarity-fintech.com/) | Product nav |
| API | [api.clarity-fintech.com](https://api.clarity-fintech.com/) | `POST /v1/payments/create` |
| Exchange | [exchange.clarity-fintech.com](https://exchange.clarity-fintech.com/) | Checkout + off-ramp |
| Spark Pay checkout | [exchange…/spark-pay](https://exchange.clarity-fintech.com/spark-pay) | HTTPS QR URLs |
| Sell | [exchange…/sell](https://exchange.clarity-fintech.com/sell) | Fiat off-ramp UI |
| RPC | [rpc.clarity-fintech.com](https://rpc.clarity-fintech.com) | On-chain reads |
| Status | [status.clarity-fintech.com](https://status.clarity-fintech.com/) | Health probes |

## GitHub org

| Repo | Link |
|------|------|
| **clarity_spark** | [github.com/clarity-fintech/clarity_spark](https://github.com/clarity-fintech/clarity_spark) |
| gitbook | [github.com/clarity-fintech/gitbook](https://github.com/clarity-fintech/gitbook) |
| fintauo | [github.com/clarity-fintech/fintauo](https://github.com/clarity-fintech/fintauo) |
| wallet_integration | [github.com/clarity-fintech/wallet_integration](https://github.com/clarity-fintech/wallet_integration) |
| developer_kit | [github.com/clarity-fintech/developer_kit](https://github.com/clarity-fintech/developer_kit) |

## Developer docs in this section

- [Overview](spark-pay-overview.md)
- [Usage & commands (tested)](spark-usage-commands.md)
- [claritypay:// URI](claritypay-uri.md)
- [Off-ramp schema](off-ramp-no-kyc.md)
- [API reference](api-reference.md)
- [Segment map](segment-map.md)

## Monorepo paths

| Path | Purpose |
|------|---------|
| `packages/clarity_spark/` | `@clarity/spark-pay` SDK |
| `frontend/tools/spark-pay.html` | Product page |
| `frontend/shared/spark-pay-segments.js` | Cross-link SSOT |
| `docs/gitbook/developer/payments/` | GitBook source |

Publish: `make clarity-spark-sync` · `make gitbook-publish`
