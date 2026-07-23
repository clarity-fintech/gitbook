# Segment map — GitBook ↔ clarity-fintech.com ↔ GitHub

> **Full cross-link index:** [All sections](all-sections.md) — every nav segment, GitBook space, live URL, and GitHub repo.

Connects all Clarity documentation and product segments to **Spark Pay**.

## GitBook org site

| Item | URL |
|------|-----|
| GitBook admin (site_Utrrz) | [app.gitbook.com/o/Yuash1ualCkP03YzJ8ts/sites/site_Utrrz](https://app.gitbook.com/o/Yuash1ualCkP03YzJ8ts/sites/site_Utrrz) |
| Live public docs | [clarity-7.gitbook.io/clarity-docs](https://clarity-7.gitbook.io/clarity-docs/) |
| Git Sync repo | [github.com/clarity-fintech/gitbook](https://github.com/clarity-fintech/gitbook) |

### Git Sync root folders

| Space | Folder | Spark Pay content |
|-------|--------|-------------------|
| Public Documentation | `public/` | Product mentions, link corpus |
| **Developer Docs** | `developer/` | **This payments section** |
| Institutional | `institutional/` | Compliance, treasury, enterprise payouts |
| Investor Data Room | `investor-private/` | Offering, settlement gatekeeper |

Publish from monorepo:

```bash
make gitbook-publish
```

## clarity-fintech.com segments

| Nav segment | Site IA id | Spark Pay connection |
|-------------|------------|----------------------|
| Use CLRTY | `use` | Wallet deep links, exchange create-wallet |
| Build | `build` | GitBook docs, SDK, RPC portal |
| **Enterprise** | `enterprise` | **Spark Pay + Clarity Pay + CortexPay** |
| Products | `products` | HELIX, x402, commerce stack |
| Ecosystem | `ecosystem` | 7 RPC gates, Inner Store |

### Key URLs

| Surface | URL |
|---------|-----|
| Portal | [www.clarity-fintech.com](https://www.clarity-fintech.com/) |
| Spark Pay tool | [/tools/spark-pay.html](https://www.clarity-fintech.com/tools/spark-pay.html) |
| **Spark merchant app** | [spark.clarity-fintech.com](https://spark.clarity-fintech.com/) |
| **Spark checkout** | [pay.clarity-fintech.com](https://pay.clarity-fintech.com/) |
| Clarity Pay | [/tools/clarity-pay.html](https://www.clarity-fintech.com/tools/clarity-pay.html) |
| Exchange | [exchange.clarity-fintech.com](https://exchange.clarity-fintech.com/) |
| Sell / off-ramp | [exchange.clarity-fintech.com/sell](https://exchange.clarity-fintech.com/sell) |
| API | [api.clarity-fintech.com](https://api.clarity-fintech.com/) |
| Static docs | [clarity-fintech.com/docs/](https://www.clarity-fintech.com/docs/) |

## GitHub org (`clarity-fintech`)

| Repo | Role |
|------|------|
| **[clarity_spark](https://github.com/clarity-fintech/clarity_spark)** | **Spark Pay SDK — `@clarity/spark-pay`** |
| [gitbook](https://github.com/clarity-fintech/gitbook) | GitBook Git Sync mirror |
| [fintauo](https://github.com/clarity-fintech/fintauo) | Exchange + off-ramp API |
| [wallet_integration](https://github.com/clarity-fintech/wallet_integration) | Mobile `claritypay://` handlers |
| [developer_kit](https://github.com/clarity-fintech/developer_kit) | Builder SDK bundle |

Sync Spark Pay package to GitHub:

```bash
make clarity-spark-sync
```

## Architecture layers (full system)

| # | Layer | Spark Pay touchpoint |
|---|-------|----------------------|
| 1 | Nano prompting + Lens | Wallet init step 4 — Lens suggestions |
| 2 | L1 + DePIN + 7 RPC gates | Settlement + gated API access |
| 3 | Application (Pay) | **Spark Pay URL + off-ramp + dashboard hooks** |

## Platform command index (all surfaces)

| Doc | Scope |
|-----|-------|
| **[CLRTY command index](../operations/clrty-command-index.md)** | Prism, mainnet, testnet, Cherry VDS, monitors, edge bands, Spark Pay |
| [Operations hub](../operations/README.md) | Deploy + GitBook publish entry point |
| [CLI master reference](../cli/master-command-reference.md) | `clrtynet` node + wallet commands |
| [Launch COMMAND_FLOWS](../../../launch/COMMAND_FLOWS.md) | Monorepo deploy SSOT |

Regenerate: `make sync-command-flows` · Publish: `make gitbook-publish`

## Cross-reference index

- [Spark Pay overview](spark-pay-overview.md)
- [claritypay:// URI](claritypay-uri.md)
- [Off-ramp schema](off-ramp-no-kyc.md)
- [API reference](api-reference.md)
- [Link corpus — exchange.clarity-fintech.com](../../public/reference/link-corpus/page-010-exchange-clarity-fintech-com.md)
- [Link corpus — clarity-fintech.com](../../public/reference/link-corpus/page-007-clarity-fintech-com.md)
