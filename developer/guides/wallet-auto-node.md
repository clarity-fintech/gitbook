# Clarity Wallet — 1-tap CLRTY-1 auto-node + settings

Live exchange shell (same funnel on `/login`, `/`, `/wallet-app`):

- https://exchange.clarity-fintech.com/login
- https://exchange.clarity-fintech.com/
- https://exchange.clarity-fintech.com/wallet-app

Build tag: `clarity-wallet-browser-v1`. Settlement: **clrty-1 / 1202**.

## 1-tap auto-node

| | |
| --- | --- |
| UI | Home + Money → **AutoNodePanel** |
| API | `POST /wallet/v1/auto-node` |
| Deep links | `clarity://autonode` · `clarity://node` |
| Health | uptime, reward velocity, validator status, miss slots |
| Revenue | compound vs liquid payout |

## App settings (Profile → App settings)

Network · gas abstraction · biometrics · push · currency · theme · i18n · Spark PIN · trusted contacts · CSV export · emergency lockdown · offline cache · analytics opt-in.

## Phase 4 (Money)

POS fee savings · miUSD/NeuroStable PoR · offline balance cache.

## MIS / CLRTY-1 links

Manifest: `packages/exchange-app/manifests/wallet_mis_clrty1_links.json`

| Class | Repos |
| --- | --- |
| Stake / MEV | mis-stake-pool · liquid-staking-core · st-clrty-program · helix-mev-programs · b-clrty-contracts · restaking-core |
| Kernels | [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML) · [CLRTY-MIS-Kernel](https://github.com/clarity-fintech/CLRTY-MIS-Kernel) |
| Cross-chain | nexus-gateway · velocity-settle-core · orbit-aggregator-sdk · meridien-mint-protocol |

Full Static ML mesh: [Moniversive static-ml-backlinks](../../moniversive/guides/static-ml-backlinks.md).
