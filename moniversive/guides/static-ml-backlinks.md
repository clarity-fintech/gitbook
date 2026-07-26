# Moniversive Invariant Static ML — backlinks (Clarity-Fintech)

Canonical GitHub ownership: **[clarity-fintech](https://github.com/clarity-fintech)**. Settlement: **clrty-1 / chain 1202**. Embed gates **3..=6**.

**Full org repo list:** [All Git repos](../ecosystem/all-git-repos.md)

## Kernel (full Static ML)

| | |
| --- | --- |
| **Repo** | [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML) |
| **Contents** | Kernel + 60 packs / **1025** invariants · `mis/kernel` · `mis/packs/static_ml` · `mis/sections` · manifests |
| **`.mis` files** | **85** (kernel tree) · `bin/misc --check` clean |
| **Check** | `bin/misc path.mis --check --compact-letters` |
| **Ecosystem index** | `CLRTY_SUBSTRATE/boot/mis_ecosystem_repos_manifest.json` → `static_ml_kernel` |
| **MIS kernel (compiler)** | [CLRTY-MIS-Kernel](https://github.com/clarity-fintech/CLRTY-MIS-Kernel) |

## Domain satellites (100 invariants each)

Each: `mis/kernel` · `mis/packs` (5×20) · `mis/sections` backlinked to MIS catalogs + ML kernel.

| Repo | URL |
| --- | --- |
| DDoS Mitigation Geometry | https://github.com/clarity-fintech/Distributed-Denial-of-Service-DDoS-Mitigation-Geometry- |
| Heterogeneous Event Stream Sync | https://github.com/clarity-fintech/Heterogeneous-Event-Stream-Synchronization |
| Schemaless Data Transformation | https://github.com/clarity-fintech/Schemaless-Data-Transformation-Pipelines |
| Multi-Data Isolation | https://github.com/clarity-fintech/Multi-Data-Isolation-Invariants |
| Cross-Cloud Latency State Replication | https://github.com/clarity-fintech/Cross-Cloud-Latency-Optimized-State-Replication |
| Real-Time Billing Usage Aggregation | https://github.com/clarity-fintech/Real-Time-Billing-Usage-Invariant-Aggregation |

Local scaffolds: `var/mis_github_repos/` · generator: `scripts/generate_mis_github_repos.py`.

## Core + staking / MEV + governance (23)

### Core

| Repo | URL |
| --- | --- |
| clrty-mis-verify | https://github.com/clarity-fintech/clrty-mis-verify |
| clrty-mobile-mis-adapter | https://github.com/clarity-fintech/clrty-mobile-mis-adapter |
| clrty-mis-program-library | https://github.com/clarity-fintech/clrty-mis-program-library |

### Staking / MEV

| Repo | URL |
| --- | --- |
| helix-mev-programs | https://github.com/clarity-fintech/helix-mev-programs |
| liquid-staking-core | https://github.com/clarity-fintech/liquid-staking-core |
| st-clrty-program | https://github.com/clarity-fintech/st-clrty-program |
| b-clrty-contracts | https://github.com/clarity-fintech/b-clrty-contracts |
| infinity-lst-engine | https://github.com/clarity-fintech/infinity-lst-engine |
| mis-stake-pool | https://github.com/clarity-fintech/mis-stake-pool |
| paladin-mis-bot | https://github.com/clarity-fintech/paladin-mis-bot |
| mev-inspect-mis | https://github.com/clarity-fintech/mev-inspect-mis |
| k-liquidity-vaults | https://github.com/clarity-fintech/k-liquidity-vaults |
| restaking-core | https://github.com/clarity-fintech/restaking-core |

### Governance

| Repo | URL |
| --- | --- |
| squads-mis-mpl | https://github.com/clarity-fintech/squads-mis-mpl |
| mis-governance | https://github.com/clarity-fintech/mis-governance |
| realms-governance-ui | https://github.com/clarity-fintech/realms-governance-ui |
| tribeca-ve-lock | https://github.com/clarity-fintech/tribeca-ve-lock |
| grape-network-mis | https://github.com/clarity-fintech/grape-network-mis |
| governance-plugin-library | https://github.com/clarity-fintech/governance-plugin-library |
| governance-sdk-py | https://github.com/clarity-fintech/governance-sdk-py |
| squads-v4-core | https://github.com/clarity-fintech/squads-v4-core |
| cardinal-conditional-staking | https://github.com/clarity-fintech/cardinal-conditional-staking |
| superteam-grants-program | https://github.com/clarity-fintech/superteam-grants-program |

Generator: `scripts/generate_mis_ecosystem_repos.py`.

## Cross-chain suite (10)

| Repo | URL |
| --- | --- |
| nexus-gateway | https://github.com/clarity-fintech/nexus-gateway |
| aether-route | https://github.com/clarity-fintech/aether-route |
| omni-mesh-v2 | https://github.com/clarity-fintech/omni-mesh-v2 |
| strata-bridge-core | https://github.com/clarity-fintech/strata-bridge-core |
| pyramid-oracle-grid | https://github.com/clarity-fintech/pyramid-oracle-grid |
| velocity-settle-core | https://github.com/clarity-fintech/velocity-settle-core |
| krypton-vm-layer | https://github.com/clarity-fintech/krypton-vm-layer |
| apex-l2-engine | https://github.com/clarity-fintech/apex-l2-engine |
| orbit-aggregator-sdk | https://github.com/clarity-fintech/orbit-aggregator-sdk |
| meridien-mint-protocol | https://github.com/clarity-fintech/meridien-mint-protocol |

Each sections mesh: MIS codebook · Helix · payment rails · Cloudflare edge bind · **ML kernel**. Generator: `scripts/generate_mis_cross_chain_repos.py`.

## Learning guides (this GitBook)

| Guide | Path |
| --- | --- |
| **Static ML learning path** | [learn/static-ml-learning-path.md](../learn/static-ml-learning-path.md) |
| Static ML catalog (bands) | [architecture/static-ml-invariants.md](../architecture/static-ml-invariants.md) |
| Gradients 201–300 | [architecture/gradient-invariants-201-300.md](../architecture/gradient-invariants-201-300.md) |
| Dual-loop | [architecture/dual-loop.md](../architecture/dual-loop.md) |
| Master 601–700 | [architecture/master-invariants-601-700.md](../architecture/master-invariants-601-700.md) |
| Language invariants | [language/invariants.md](../language/invariants.md) |
| Taxonomy mis_ml | [taxonomy/mis_ml.md](../taxonomy/mis_ml.md) |
| Prompt / MLX routing | [taxonomy/prompt-mlx-routing.md](../taxonomy/prompt-mlx-routing.md) |
| BeginnersGuide | [BeginnersGuide/README.md](../BeginnersGuide/README.md) |
| Quizzes / cheatsheets | [learn/quizzes.md](../learn/quizzes.md) · [learn/cheatsheets.md](../learn/cheatsheets.md) |
| Coding guide | [guides/coding-guide.md](coding-guide.md) |
| Ecosystem map | [ecosystem/map.md](../ecosystem/map.md) |

Publish repo: [clarity-fintech/gitbook](https://github.com/clarity-fintech/gitbook) → `moniversive/`.

## Wallet (live exchange)

| Surface | URL / path |
| --- | --- |
| Login / homepage / wallet shell | https://exchange.clarity-fintech.com/login · `/` · `/wallet-app` |
| 1-tap auto-node | Home / Money → AutoNodePanel · `POST /wallet/v1/auto-node` |
| MIS links manifest | `fintauo/packages/exchange-app/manifests/wallet_mis_clrty1_links.json` |
| Auto-node doc | [developer/guides/wallet-auto-node.md](../../developer/guides/wallet-auto-node.md) |

## Verify locally

```bash
bin/misc path/to/Module.mis --check --compact-letters
make mis-ml-check
make mis-ml-structure
```
