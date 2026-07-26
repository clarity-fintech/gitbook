# All Git repos — clarity-fintech (`.mis` strict)

> Generated 2026-07-26T17:24:54Z · org manifest: **`CLRTY_SUBSTRATE/boot/clarity_fintech_org_repos_manifest.json`** · **67** repos · ecosystem manifest: **33** MIS satellite kernels

Dedicated page for **every GitHub link** in the Clarity-Fintech org inventory. Moniversive language space only — chain ops and wallet product flows stay in other GitBook spaces.

## Kernel (full Static ML)

**[moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML)** — kernel + **60** packs / **1025** invariants + MIS section backlinks (`mis/kernel`, `mis/packs/static_ml`, `mis/sections`, manifests). **85** `.mis` files · local scan **89**, `bin/misc --check` clean.

| | |
| --- | --- |
| **Repo** | [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML) |
| **Role** | Primary Static ML kernel — full invariant catalog + pack mesh |
| **Layout** | [`mis/kernel`](https://github.com/clarity-fintech/moniversive_invariant_static_ML/tree/main/mis/kernel) · [`mis/packs/static_ml`](https://github.com/clarity-fintech/moniversive_invariant_static_ML/tree/main/mis/packs/static_ml) · [`mis/sections`](https://github.com/clarity-fintech/moniversive_invariant_static_ML/tree/main/mis/sections) · [`manifests`](https://github.com/clarity-fintech/moniversive_invariant_static_ML/tree/main/mis) |
| **`.mis` files** | **85** (documented kernel tree baseline) |
| **Check** | `bin/misc path.mis --check --compact-letters` |
| **Commands** | [`mis/commands`](https://github.com/clarity-fintech/moniversive_invariant_static_ML/tree/main/mis/commands) |
| **Learning** | [LEARNING.md](https://github.com/clarity-fintech/moniversive_invariant_static_ML/blob/main/LEARNING.md) · [Static ML backlinks](../guides/static-ml-backlinks.md) |
| **Boot SSOT** | `mis_ecosystem_repos_manifest.json` → `static_ml_kernel` |

## Compiler kernel (`misc`)

| Repo | Notes |
| --- | --- |
| [CLRTY-MIS-Kernel](https://github.com/clarity-fintech/CLRTY-MIS-Kernel) | Prebuilt `bin/misc` · sole active compiler kernel |
| [main](https://github.com/clarity-fintech/main) | Monorepo · `make misc-build` · `moniversive/` authoring tree |

## Docs & developer kit

| Repo | URL |
| --- | --- |
| gitbook | [clarity-fintech/gitbook](https://github.com/clarity-fintech/gitbook) → `moniversive/` |
| developer_kit | [clarity-fintech/developer_kit](https://github.com/clarity-fintech/developer_kit) |


## MIS ecosystem satellites (`mis_ecosystem_repos_manifest.json`)

Each satellite: `mis/kernel` · `mis/packs` (5×20) · `mis/sections` backlinked to the Static ML kernel.

| Repo | Title | Domain | Suite | Inv | mis/kernel |
| --- | --- | --- | --- | --- | --- |
| [aether-route](https://github.com/clarity-fintech/aether-route) | Aether Route | aether_route | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/aether-route/tree/main/mis/kernel) |
| [apex-l2-engine](https://github.com/clarity-fintech/apex-l2-engine) | Apex L2 Engine | apex_l2 | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/apex-l2-engine/tree/main/mis/kernel) |
| [b-clrty-contracts](https://github.com/clarity-fintech/b-clrty-contracts) | bCLRTY Contracts | b_clrty | — | 100 | [kernel](https://github.com/clarity-fintech/b-clrty-contracts/tree/main/mis/kernel) |
| [cardinal-conditional-staking](https://github.com/clarity-fintech/cardinal-conditional-staking) | Cardinal Conditional Staking | cardinal_conditional | — | 100 | [kernel](https://github.com/clarity-fintech/cardinal-conditional-staking/tree/main/mis/kernel) |
| [clrty-mis-program-library](https://github.com/clarity-fintech/clrty-mis-program-library) | CLRTY MIS Program Library | mis_program_library | — | 100 | [kernel](https://github.com/clarity-fintech/clrty-mis-program-library/tree/main/mis/kernel) |
| [clrty-mis-verify](https://github.com/clarity-fintech/clrty-mis-verify) | CLRTY MIS Verify | mis_verify | — | 100 | [kernel](https://github.com/clarity-fintech/clrty-mis-verify/tree/main/mis/kernel) |
| [clrty-mobile-mis-adapter](https://github.com/clarity-fintech/clrty-mobile-mis-adapter) | CLRTY Mobile MIS Adapter | mobile_mis_adapter | — | 100 | [kernel](https://github.com/clarity-fintech/clrty-mobile-mis-adapter/tree/main/mis/kernel) |
| [governance-plugin-library](https://github.com/clarity-fintech/governance-plugin-library) | Governance Plugin Library | gov_plugins | — | 100 | [kernel](https://github.com/clarity-fintech/governance-plugin-library/tree/main/mis/kernel) |
| [governance-sdk-py](https://github.com/clarity-fintech/governance-sdk-py) | Governance SDK MIS Surface | governance_sdk_mis | — | 100 | [kernel](https://github.com/clarity-fintech/governance-sdk-py/tree/main/mis/kernel) |
| [grape-network-mis](https://github.com/clarity-fintech/grape-network-mis) | Grape Network MIS | grape_network | — | 100 | [kernel](https://github.com/clarity-fintech/grape-network-mis/tree/main/mis/kernel) |
| [helix-mev-programs](https://github.com/clarity-fintech/helix-mev-programs) | HELIX MEV Programs | helix_mev | — | 100 | [kernel](https://github.com/clarity-fintech/helix-mev-programs/tree/main/mis/kernel) |
| [infinity-lst-engine](https://github.com/clarity-fintech/infinity-lst-engine) | Infinity LST Engine | infinity_lst | — | 100 | [kernel](https://github.com/clarity-fintech/infinity-lst-engine/tree/main/mis/kernel) |
| [k-liquidity-vaults](https://github.com/clarity-fintech/k-liquidity-vaults) | K Liquidity Vaults | k_liquidity | — | 100 | [kernel](https://github.com/clarity-fintech/k-liquidity-vaults/tree/main/mis/kernel) |
| [krypton-vm-layer](https://github.com/clarity-fintech/krypton-vm-layer) | Krypton VM Layer | krypton_vm | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/krypton-vm-layer/tree/main/mis/kernel) |
| [liquid-staking-core](https://github.com/clarity-fintech/liquid-staking-core) | Liquid Staking Core | liquid_staking | — | 100 | [kernel](https://github.com/clarity-fintech/liquid-staking-core/tree/main/mis/kernel) |
| [meridien-mint-protocol](https://github.com/clarity-fintech/meridien-mint-protocol) | Meridien Mint Protocol | meridien_mint | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/meridien-mint-protocol/tree/main/mis/kernel) |
| [mev-inspect-mis](https://github.com/clarity-fintech/mev-inspect-mis) | MEV Inspect MIS | mev_inspect | — | 100 | [kernel](https://github.com/clarity-fintech/mev-inspect-mis/tree/main/mis/kernel) |
| [mis-governance](https://github.com/clarity-fintech/mis-governance) | MIS Governance | mis_governance | — | 100 | [kernel](https://github.com/clarity-fintech/mis-governance/tree/main/mis/kernel) |
| [mis-stake-pool](https://github.com/clarity-fintech/mis-stake-pool) | MIS Stake Pool | mis_stake_pool | — | 100 | [kernel](https://github.com/clarity-fintech/mis-stake-pool/tree/main/mis/kernel) |
| [nexus-gateway](https://github.com/clarity-fintech/nexus-gateway) | Nexus Gateway | nexus_gateway | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/nexus-gateway/tree/main/mis/kernel) |
| [omni-mesh-v2](https://github.com/clarity-fintech/omni-mesh-v2) | Omni Mesh v2 | omni_mesh_v2 | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/omni-mesh-v2/tree/main/mis/kernel) |
| [orbit-aggregator-sdk](https://github.com/clarity-fintech/orbit-aggregator-sdk) | Orbit Aggregator SDK | orbit_aggregator | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/orbit-aggregator-sdk/tree/main/mis/kernel) |
| [paladin-mis-bot](https://github.com/clarity-fintech/paladin-mis-bot) | Paladin MIS Bot | paladin_mev | — | 100 | [kernel](https://github.com/clarity-fintech/paladin-mis-bot/tree/main/mis/kernel) |
| [pyramid-oracle-grid](https://github.com/clarity-fintech/pyramid-oracle-grid) | Pyramid Oracle Grid | pyramid_oracle | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/pyramid-oracle-grid/tree/main/mis/kernel) |
| [realms-governance-ui](https://github.com/clarity-fintech/realms-governance-ui) | Realms Governance UI Binding | realms_ui_bind | — | 100 | [kernel](https://github.com/clarity-fintech/realms-governance-ui/tree/main/mis/kernel) |
| [restaking-core](https://github.com/clarity-fintech/restaking-core) | Restaking Core | restaking | — | 100 | [kernel](https://github.com/clarity-fintech/restaking-core/tree/main/mis/kernel) |
| [squads-mis-mpl](https://github.com/clarity-fintech/squads-mis-mpl) | Squads MIS MPL | squads_mpl | — | 100 | [kernel](https://github.com/clarity-fintech/squads-mis-mpl/tree/main/mis/kernel) |
| [squads-v4-core](https://github.com/clarity-fintech/squads-v4-core) | Squads v4 Core | squads_v4 | — | 100 | [kernel](https://github.com/clarity-fintech/squads-v4-core/tree/main/mis/kernel) |
| [st-clrty-program](https://github.com/clarity-fintech/st-clrty-program) | stCLRTY Program | st_clrty | — | 100 | [kernel](https://github.com/clarity-fintech/st-clrty-program/tree/main/mis/kernel) |
| [strata-bridge-core](https://github.com/clarity-fintech/strata-bridge-core) | Strata Bridge Core | strata_bridge | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/strata-bridge-core/tree/main/mis/kernel) |
| [superteam-grants-program](https://github.com/clarity-fintech/superteam-grants-program) | Superteam Grants Program | superteam_grants | — | 100 | [kernel](https://github.com/clarity-fintech/superteam-grants-program/tree/main/mis/kernel) |
| [tribeca-ve-lock](https://github.com/clarity-fintech/tribeca-ve-lock) | Tribeca veCLRTY Lock | tribeca_ve | — | 100 | [kernel](https://github.com/clarity-fintech/tribeca-ve-lock/tree/main/mis/kernel) |
| [velocity-settle-core](https://github.com/clarity-fintech/velocity-settle-core) | Velocity Settle Core | velocity_settle | cross_chain_bridges_interoperability | 100 | [kernel](https://github.com/clarity-fintech/velocity-settle-core/tree/main/mis/kernel) |


## Cross-chain suite (10)

Settlement: **clrty-1 / 1202** · suite `cross_chain_bridges_interoperability`.

| Repo | GitHub | Module |
| --- | --- | --- |
| aether-route | [https://github.com/clarity-fintech/aether-route](https://github.com/clarity-fintech/aether-route) | AetherRoute |
| apex-l2-engine | [https://github.com/clarity-fintech/apex-l2-engine](https://github.com/clarity-fintech/apex-l2-engine) | ApexL2Engine |
| krypton-vm-layer | [https://github.com/clarity-fintech/krypton-vm-layer](https://github.com/clarity-fintech/krypton-vm-layer) | KryptonVmLayer |
| meridien-mint-protocol | [https://github.com/clarity-fintech/meridien-mint-protocol](https://github.com/clarity-fintech/meridien-mint-protocol) | MeridienMintProtocol |
| nexus-gateway | [https://github.com/clarity-fintech/nexus-gateway](https://github.com/clarity-fintech/nexus-gateway) | NexusGateway |
| omni-mesh-v2 | [https://github.com/clarity-fintech/omni-mesh-v2](https://github.com/clarity-fintech/omni-mesh-v2) | OmniMeshV2 |
| orbit-aggregator-sdk | [https://github.com/clarity-fintech/orbit-aggregator-sdk](https://github.com/clarity-fintech/orbit-aggregator-sdk) | OrbitAggregatorSdk |
| pyramid-oracle-grid | [https://github.com/clarity-fintech/pyramid-oracle-grid](https://github.com/clarity-fintech/pyramid-oracle-grid) | PyramidOracleGrid |
| strata-bridge-core | [https://github.com/clarity-fintech/strata-bridge-core](https://github.com/clarity-fintech/strata-bridge-core) | StrataBridgeCore |
| velocity-settle-core | [https://github.com/clarity-fintech/velocity-settle-core](https://github.com/clarity-fintech/velocity-settle-core) | VelocitySettleCore |


## Full org inventory (by lane)

### MIS / Static ML & domain satellites (16)

| Repo | Description | mis/kernel | mis/packs | mis/commands | README |
| --- | --- | --- | --- | --- | --- |
| [**CLRTY-MIS-Kernel**](https://github.com/clarity-fintech/CLRTY-MIS-Kernel) | MIS kernel misc — sole active CLRTY-1 compiler | [kernel](https://github.com/clarity-fintech/CLRTY-MIS-Kernel/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-MIS-Kernel/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-MIS-Kernel/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-MIS-Kernel/blob/main/README.md) |
| [**clrty-mis-program-library**](https://github.com/clarity-fintech/clrty-mis-program-library) | MIS · CLRTY MIS Program Library · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/clrty-mis-program-library/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/clrty-mis-program-library/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/clrty-mis-program-library/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/clrty-mis-program-library/blob/main/README.md) |
| [**clrty-mis-verify**](https://github.com/clarity-fintech/clrty-mis-verify) | MIS · CLRTY MIS Verify · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/clrty-mis-verify/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/clrty-mis-verify/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/clrty-mis-verify/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/clrty-mis-verify/blob/main/README.md) |
| [**clrty-mobile-mis-adapter**](https://github.com/clarity-fintech/clrty-mobile-mis-adapter) | MIS · CLRTY Mobile MIS Adapter · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/clrty-mobile-mis-adapter/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/clrty-mobile-mis-adapter/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/clrty-mobile-mis-adapter/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/clrty-mobile-mis-adapter/blob/main/README.md) |
| [**Cross-Cloud-Latency-Optimized-State-Replication**](https://github.com/clarity-fintech/Cross-Cloud-Latency-Optimized-State-Replication) | — | [kernel](https://github.com/clarity-fintech/Cross-Cloud-Latency-Optimized-State-Replication/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/Cross-Cloud-Latency-Optimized-State-Replication/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/Cross-Cloud-Latency-Optimized-State-Replication/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/Cross-Cloud-Latency-Optimized-State-Replication/blob/main/README.md) |
| [**Distributed-Denial-of-Service-DDoS-Mitigation-Geometry-**](https://github.com/clarity-fintech/Distributed-Denial-of-Service-DDoS-Mitigation-Geometry-) | — | [kernel](https://github.com/clarity-fintech/Distributed-Denial-of-Service-DDoS-Mitigation-Geometry-/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/Distributed-Denial-of-Service-DDoS-Mitigation-Geometry-/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/Distributed-Denial-of-Service-DDoS-Mitigation-Geometry-/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/Distributed-Denial-of-Service-DDoS-Mitigation-Geometry-/blob/main/README.md) |
| [**gitbook**](https://github.com/clarity-fintech/gitbook) | Clarity GitBook documentation (Git Sync source) | [kernel](https://github.com/clarity-fintech/gitbook/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/gitbook/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/gitbook/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/gitbook/blob/main/README.md) |
| [**Heterogeneous-Event-Stream-Synchronization**](https://github.com/clarity-fintech/Heterogeneous-Event-Stream-Synchronization) | — | [kernel](https://github.com/clarity-fintech/Heterogeneous-Event-Stream-Synchronization/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/Heterogeneous-Event-Stream-Synchronization/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/Heterogeneous-Event-Stream-Synchronization/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/Heterogeneous-Event-Stream-Synchronization/blob/main/README.md) |
| [**mis-governance**](https://github.com/clarity-fintech/mis-governance) | MIS · MIS Governance · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/mis-governance/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/mis-governance/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/mis-governance/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/mis-governance/blob/main/README.md) |
| [**mis-stake-pool**](https://github.com/clarity-fintech/mis-stake-pool) | MIS · MIS Stake Pool · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/mis-stake-pool/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/mis-stake-pool/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/mis-stake-pool/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/mis-stake-pool/blob/main/README.md) |
| [**moniversive_invariant_static_ML**](https://github.com/clarity-fintech/moniversive_invariant_static_ML) | Programming language | [kernel](https://github.com/clarity-fintech/moniversive_invariant_static_ML/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/moniversive_invariant_static_ML/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/moniversive_invariant_static_ML/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/moniversive_invariant_static_ML/blob/main/README.md) |
| [**Multi-Data-Isolation-Invariants**](https://github.com/clarity-fintech/Multi-Data-Isolation-Invariants) | — | [kernel](https://github.com/clarity-fintech/Multi-Data-Isolation-Invariants/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/Multi-Data-Isolation-Invariants/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/Multi-Data-Isolation-Invariants/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/Multi-Data-Isolation-Invariants/blob/main/README.md) |
| [**paladin-mis-bot**](https://github.com/clarity-fintech/paladin-mis-bot) | MIS · Paladin MIS Bot · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/paladin-mis-bot/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/paladin-mis-bot/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/paladin-mis-bot/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/paladin-mis-bot/blob/main/README.md) |
| [**Real-Time-Billing-Usage-Invariant-Aggregation**](https://github.com/clarity-fintech/Real-Time-Billing-Usage-Invariant-Aggregation) | — | [kernel](https://github.com/clarity-fintech/Real-Time-Billing-Usage-Invariant-Aggregation/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/Real-Time-Billing-Usage-Invariant-Aggregation/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/Real-Time-Billing-Usage-Invariant-Aggregation/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/Real-Time-Billing-Usage-Invariant-Aggregation/blob/main/README.md) |
| [**Schemaless-Data-Transformation-Pipelines**](https://github.com/clarity-fintech/Schemaless-Data-Transformation-Pipelines) | — | [kernel](https://github.com/clarity-fintech/Schemaless-Data-Transformation-Pipelines/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/Schemaless-Data-Transformation-Pipelines/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/Schemaless-Data-Transformation-Pipelines/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/Schemaless-Data-Transformation-Pipelines/blob/main/README.md) |
| [**squads-mis-mpl**](https://github.com/clarity-fintech/squads-mis-mpl) | MIS · Squads MIS MPL · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/squads-mis-mpl/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/squads-mis-mpl/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/squads-mis-mpl/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/squads-mis-mpl/blob/main/README.md) |
### Clarity product & platform (13)

| Repo | Description | mis/kernel | mis/packs | mis/commands | README |
| --- | --- | --- | --- | --- | --- |
| [**clarity_prism_cli**](https://github.com/clarity-fintech/clarity_prism_cli) | PRISM is a high-performance CLI for Clarity, designed for quantitative trading,  | [kernel](https://github.com/clarity-fintech/clarity_prism_cli/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/clarity_prism_cli/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/clarity_prism_cli/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/clarity_prism_cli/blob/main/README.md) |
| [**clarity_spark**](https://github.com/clarity-fintech/clarity_spark) | — | [kernel](https://github.com/clarity-fintech/clarity_spark/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/clarity_spark/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/clarity_spark/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/clarity_spark/blob/main/README.md) |
| [**CLRTY-FX-Oracle**](https://github.com/clarity-fintech/CLRTY-FX-Oracle) | CLRTY-FX-Oracle: Streams real-time market data from Pyth Network to the CLRTY-1  | [kernel](https://github.com/clarity-fintech/CLRTY-FX-Oracle/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-FX-Oracle/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-FX-Oracle/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-FX-Oracle/blob/main/README.md) |
| [**CLRTY-Quality-Gate**](https://github.com/clarity-fintech/CLRTY-Quality-Gate) | CLRTY-Quality-Gate: Automatically enforces coding standards and security pattern | [kernel](https://github.com/clarity-fintech/CLRTY-Quality-Gate/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-Quality-Gate/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-Quality-Gate/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-Quality-Gate/blob/main/README.md) |
| [**CLRTY-Reasoning**](https://github.com/clarity-fintech/CLRTY-Reasoning) | CLRTY-Reasoning-Core: Uses OpenAI or Anthropic (Claude) to analyze on-chain tran | [kernel](https://github.com/clarity-fintech/CLRTY-Reasoning/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-Reasoning/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-Reasoning/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-Reasoning/blob/main/README.md) |
| [**ClrtyxDune**](https://github.com/clarity-fintech/ClrtyxDune) | — | [kernel](https://github.com/clarity-fintech/ClrtyxDune/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/ClrtyxDune/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/ClrtyxDune/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/ClrtyxDune/blob/main/README.md) |
| [**cybersecurity**](https://github.com/clarity-fintech/cybersecurity) | — | [kernel](https://github.com/clarity-fintech/cybersecurity/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/cybersecurity/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/cybersecurity/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/cybersecurity/blob/main/README.md) |
| [**data**](https://github.com/clarity-fintech/data) | Clients / SDKs / Agents         ↓ Transaction Layer (Checkout, APIs)         ↓ 💸 | [kernel](https://github.com/clarity-fintech/data/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/data/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/data/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/data/blob/main/README.md) |
| [**fintauo**](https://github.com/clarity-fintech/fintauo) | — | [kernel](https://github.com/clarity-fintech/fintauo/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/fintauo/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/fintauo/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/fintauo/blob/main/README.md) |
| [**network-monitor**](https://github.com/clarity-fintech/network-monitor) | — | [kernel](https://github.com/clarity-fintech/network-monitor/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/network-monitor/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/network-monitor/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/network-monitor/blob/main/README.md) |
| [**security**](https://github.com/clarity-fintech/security) | — | [kernel](https://github.com/clarity-fintech/security/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/security/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/security/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/security/blob/main/README.md) |
| [**SEO_kit_second**](https://github.com/clarity-fintech/SEO_kit_second) | — | [kernel](https://github.com/clarity-fintech/SEO_kit_second/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/SEO_kit_second/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/SEO_kit_second/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/SEO_kit_second/blob/main/README.md) |
| [**wallet_integration**](https://github.com/clarity-fintech/wallet_integration) | Turn-Key Zero-Friction Partner Kit · 25 Leverage Nodes · Full SDK Suite · Comple | [kernel](https://github.com/clarity-fintech/wallet_integration/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/wallet_integration/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/wallet_integration/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/wallet_integration/blob/main/README.md) |
### Ecosystem · cross-chain · tooling (38)

| Repo | Description | mis/kernel | mis/packs | mis/commands | README |
| --- | --- | --- | --- | --- | --- |
| [**aether-route**](https://github.com/clarity-fintech/aether-route) | MIS · Aether Route · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/aether-route/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/aether-route/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/aether-route/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/aether-route/blob/main/README.md) |
| [**apex-l2-engine**](https://github.com/clarity-fintech/apex-l2-engine) | MIS · Apex L2 Engine · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/apex-l2-engine/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/apex-l2-engine/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/apex-l2-engine/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/apex-l2-engine/blob/main/README.md) |
| [**b-clrty-contracts**](https://github.com/clarity-fintech/b-clrty-contracts) | MIS · bCLRTY Contracts · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/b-clrty-contracts/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/b-clrty-contracts/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/b-clrty-contracts/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/b-clrty-contracts/blob/main/README.md) |
| [**bot_eoe**](https://github.com/clarity-fintech/bot_eoe) | — | [kernel](https://github.com/clarity-fintech/bot_eoe/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/bot_eoe/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/bot_eoe/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/bot_eoe/blob/main/README.md) |
| [**cardinal-conditional-staking**](https://github.com/clarity-fintech/cardinal-conditional-staking) | MIS · Cardinal Conditional Staking · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/cardinal-conditional-staking/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/cardinal-conditional-staking/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/cardinal-conditional-staking/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/cardinal-conditional-staking/blob/main/README.md) |
| [**CLRTY-1-ALE-Atomic-Liquidity**](https://github.com/clarity-fintech/CLRTY-1-ALE-Atomic-Liquidity) | This is a self-contained MCP tool designed to be injected into your CLRTY substr | [kernel](https://github.com/clarity-fintech/CLRTY-1-ALE-Atomic-Liquidity/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-1-ALE-Atomic-Liquidity/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-1-ALE-Atomic-Liquidity/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-1-ALE-Atomic-Liquidity/blob/main/README.md) |
| [**CLRTY-Audit-Bot**](https://github.com/clarity-fintech/CLRTY-Audit-Bot) | CLRTY-Audit-Bot: Automatically links Sentry runtime errors with Linear tickets,  | [kernel](https://github.com/clarity-fintech/CLRTY-Audit-Bot/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-Audit-Bot/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-Audit-Bot/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-Audit-Bot/blob/main/README.md) |
| [**CLRTY-Compiler-Bridge**](https://github.com/clarity-fintech/CLRTY-Compiler-Bridge) | CLRTY-Compiler-Bridge: A low-level optimization tool that hooks into LLVM, enabl | [kernel](https://github.com/clarity-fintech/CLRTY-Compiler-Bridge/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-Compiler-Bridge/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-Compiler-Bridge/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-Compiler-Bridge/blob/main/README.md) |
| [**CLRTY-Global-Router**](https://github.com/clarity-fintech/CLRTY-Global-Router) | CLRTY-Global-Router: Uses Chainlink CCIP for trustless cross-chain value transfe | [kernel](https://github.com/clarity-fintech/CLRTY-Global-Router/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-Global-Router/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-Global-Router/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-Global-Router/blob/main/README.md) |
| [**CLRTY-IDE-Sync-Architecture-Anthropedic**](https://github.com/clarity-fintech/CLRTY-IDE-Sync-Architecture-Anthropedic) | This plugin functions as the terminal-native bridge between your local developme | [kernel](https://github.com/clarity-fintech/CLRTY-IDE-Sync-Architecture-Anthropedic/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-IDE-Sync-Architecture-Anthropedic/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-IDE-Sync-Architecture-Anthropedic/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-IDE-Sync-Architecture-Anthropedic/blob/main/README.md) |
| [**CLRTY-NLE-Gated-**](https://github.com/clarity-fintech/CLRTY-NLE-Gated-) | It functions as an internal core competency for your proprietary HFT and settlem | [kernel](https://github.com/clarity-fintech/CLRTY-NLE-Gated-/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/CLRTY-NLE-Gated-/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/CLRTY-NLE-Gated-/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/CLRTY-NLE-Gated-/blob/main/README.md) |
| [**clrty_santity_antidrops**](https://github.com/clarity-fintech/clrty_santity_antidrops) | — | [kernel](https://github.com/clarity-fintech/clrty_santity_antidrops/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/clrty_santity_antidrops/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/clrty_santity_antidrops/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/clrty_santity_antidrops/blob/main/README.md) |
| [**developer_kit**](https://github.com/clarity-fintech/developer_kit) | Welcome to a more programmable, powerful approach to blockchain. | [kernel](https://github.com/clarity-fintech/developer_kit/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/developer_kit/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/developer_kit/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/developer_kit/blob/main/README.md) |
| [**governance-plugin-library**](https://github.com/clarity-fintech/governance-plugin-library) | MIS · Governance Plugin Library · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/governance-plugin-library/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/governance-plugin-library/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/governance-plugin-library/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/governance-plugin-library/blob/main/README.md) |
| [**governance-sdk-py**](https://github.com/clarity-fintech/governance-sdk-py) | MIS · Governance SDK MIS Surface · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/governance-sdk-py/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/governance-sdk-py/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/governance-sdk-py/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/governance-sdk-py/blob/main/README.md) |
| [**grape-network-mis**](https://github.com/clarity-fintech/grape-network-mis) | MIS · Grape Network MIS · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/grape-network-mis/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/grape-network-mis/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/grape-network-mis/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/grape-network-mis/blob/main/README.md) |
| [**helix-mev-programs**](https://github.com/clarity-fintech/helix-mev-programs) | MIS · HELIX MEV Programs · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/helix-mev-programs/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/helix-mev-programs/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/helix-mev-programs/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/helix-mev-programs/blob/main/README.md) |
| [**infinity-lst-engine**](https://github.com/clarity-fintech/infinity-lst-engine) | MIS · Infinity LST Engine · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/infinity-lst-engine/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/infinity-lst-engine/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/infinity-lst-engine/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/infinity-lst-engine/blob/main/README.md) |
| [**k-liquidity-vaults**](https://github.com/clarity-fintech/k-liquidity-vaults) | MIS · K Liquidity Vaults · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/k-liquidity-vaults/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/k-liquidity-vaults/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/k-liquidity-vaults/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/k-liquidity-vaults/blob/main/README.md) |
| [**krypton-vm-layer**](https://github.com/clarity-fintech/krypton-vm-layer) | MIS · Krypton VM Layer · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/krypton-vm-layer/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/krypton-vm-layer/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/krypton-vm-layer/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/krypton-vm-layer/blob/main/README.md) |
| [**liquid-staking-core**](https://github.com/clarity-fintech/liquid-staking-core) | MIS · Liquid Staking Core · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/liquid-staking-core/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/liquid-staking-core/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/liquid-staking-core/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/liquid-staking-core/blob/main/README.md) |
| [**main**](https://github.com/clarity-fintech/main) | — | [kernel](https://github.com/clarity-fintech/main/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/main/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/main/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/main/blob/main/README.md) |
| [**meridien-mint-protocol**](https://github.com/clarity-fintech/meridien-mint-protocol) | MIS · Meridien Mint Protocol · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/meridien-mint-protocol/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/meridien-mint-protocol/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/meridien-mint-protocol/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/meridien-mint-protocol/blob/main/README.md) |
| [**mev-inspect-mis**](https://github.com/clarity-fintech/mev-inspect-mis) | MIS · MEV Inspect MIS · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/mev-inspect-mis/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/mev-inspect-mis/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/mev-inspect-mis/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/mev-inspect-mis/blob/main/README.md) |
| [**nexus-gateway**](https://github.com/clarity-fintech/nexus-gateway) | MIS · Nexus Gateway · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/nexus-gateway/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/nexus-gateway/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/nexus-gateway/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/nexus-gateway/blob/main/README.md) |
| [**node_deployment_kit**](https://github.com/clarity-fintech/node_deployment_kit) | The network is only as strong as the independent pillars that uphold it. Deployi | [kernel](https://github.com/clarity-fintech/node_deployment_kit/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/node_deployment_kit/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/node_deployment_kit/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/node_deployment_kit/blob/main/README.md) |
| [**omni-mesh-v2**](https://github.com/clarity-fintech/omni-mesh-v2) | MIS · Omni Mesh v2 · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/omni-mesh-v2/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/omni-mesh-v2/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/omni-mesh-v2/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/omni-mesh-v2/blob/main/README.md) |
| [**orbit-aggregator-sdk**](https://github.com/clarity-fintech/orbit-aggregator-sdk) | MIS · Orbit Aggregator SDK · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/orbit-aggregator-sdk/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/orbit-aggregator-sdk/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/orbit-aggregator-sdk/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/orbit-aggregator-sdk/blob/main/README.md) |
| [**pyramid-oracle-grid**](https://github.com/clarity-fintech/pyramid-oracle-grid) | MIS · Pyramid Oracle Grid · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/pyramid-oracle-grid/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/pyramid-oracle-grid/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/pyramid-oracle-grid/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/pyramid-oracle-grid/blob/main/README.md) |
| [**realms-governance-ui**](https://github.com/clarity-fintech/realms-governance-ui) | MIS · Realms Governance UI Binding · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/realms-governance-ui/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/realms-governance-ui/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/realms-governance-ui/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/realms-governance-ui/blob/main/README.md) |
| [**research_kit**](https://github.com/clarity-fintech/research_kit) | The CLRTY-1 Research Kit is an advanced, open-source repository designed for sys | [kernel](https://github.com/clarity-fintech/research_kit/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/research_kit/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/research_kit/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/research_kit/blob/main/README.md) |
| [**restaking-core**](https://github.com/clarity-fintech/restaking-core) | MIS · Restaking Core · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/restaking-core/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/restaking-core/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/restaking-core/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/restaking-core/blob/main/README.md) |
| [**squads-v4-core**](https://github.com/clarity-fintech/squads-v4-core) | MIS · Squads v4 Core · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/squads-v4-core/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/squads-v4-core/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/squads-v4-core/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/squads-v4-core/blob/main/README.md) |
| [**st-clrty-program**](https://github.com/clarity-fintech/st-clrty-program) | MIS · stCLRTY Program · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/st-clrty-program/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/st-clrty-program/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/st-clrty-program/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/st-clrty-program/blob/main/README.md) |
| [**strata-bridge-core**](https://github.com/clarity-fintech/strata-bridge-core) | MIS · Strata Bridge Core · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/strata-bridge-core/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/strata-bridge-core/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/strata-bridge-core/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/strata-bridge-core/blob/main/README.md) |
| [**superteam-grants-program**](https://github.com/clarity-fintech/superteam-grants-program) | MIS · Superteam Grants Program · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/superteam-grants-program/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/superteam-grants-program/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/superteam-grants-program/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/superteam-grants-program/blob/main/README.md) |
| [**tribeca-ve-lock**](https://github.com/clarity-fintech/tribeca-ve-lock) | MIS · Tribeca veCLRTY Lock · CLRTY-1 / Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/tribeca-ve-lock/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/tribeca-ve-lock/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/tribeca-ve-lock/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/tribeca-ve-lock/blob/main/README.md) |
| [**velocity-settle-core**](https://github.com/clarity-fintech/velocity-settle-core) | MIS · Velocity Settle Core · Cross-Chain CLRTY-1 · Chandler William Ferguson | [kernel](https://github.com/clarity-fintech/velocity-settle-core/tree/main/mis/kernel) | [packs](https://github.com/clarity-fintech/velocity-settle-core/tree/main/mis/packs) | [commands](https://github.com/clarity-fintech/velocity-settle-core/tree/main/mis/commands) | [README](https://github.com/clarity-fintech/velocity-settle-core/blob/main/README.md) |


## Prior MIS domain repos (manifest index)

From `mis_ecosystem_repos_manifest.json` · `prior_mis_repos`:

| Name | GitHub | Kind |
| --- | --- | --- |
| moniversive_invariant_static_ML | https://github.com/clarity-fintech/moniversive_invariant_static_ML | prior_mis_domain |
| Distributed-Denial-of-Service-DDoS-Mitigation-Geometry- | https://github.com/clarity-fintech/Distributed-Denial-of-Service-DDoS-Mitigation-Geometry- | prior_mis_domain |
| Heterogeneous-Event-Stream-Synchronization | https://github.com/clarity-fintech/Heterogeneous-Event-Stream-Synchronization | prior_mis_domain |
| Schemaless-Data-Transformation-Pipelines | https://github.com/clarity-fintech/Schemaless-Data-Transformation-Pipelines | prior_mis_domain |
| Multi-Data-Isolation-Invariants | https://github.com/clarity-fintech/Multi-Data-Isolation-Invariants | prior_mis_domain |
| Cross-Cloud-Latency-Optimized-State-Replication | https://github.com/clarity-fintech/Cross-Cloud-Latency-Optimized-State-Replication | prior_mis_domain |
| Real-Time-Billing-Usage-Invariant-Aggregation | https://github.com/clarity-fintech/Real-Time-Billing-Usage-Invariant-Aggregation | prior_mis_domain |


## All GitHub links (A–Z)

| Repo | URL |
| --- | --- |
| aether-route | https://github.com/clarity-fintech/aether-route |
| apex-l2-engine | https://github.com/clarity-fintech/apex-l2-engine |
| b-clrty-contracts | https://github.com/clarity-fintech/b-clrty-contracts |
| bot_eoe | https://github.com/clarity-fintech/bot_eoe |
| cardinal-conditional-staking | https://github.com/clarity-fintech/cardinal-conditional-staking |
| clarity_prism_cli | https://github.com/clarity-fintech/clarity_prism_cli |
| clarity_spark | https://github.com/clarity-fintech/clarity_spark |
| CLRTY-1-ALE-Atomic-Liquidity | https://github.com/clarity-fintech/CLRTY-1-ALE-Atomic-Liquidity |
| CLRTY-Audit-Bot | https://github.com/clarity-fintech/CLRTY-Audit-Bot |
| CLRTY-Compiler-Bridge | https://github.com/clarity-fintech/CLRTY-Compiler-Bridge |
| CLRTY-FX-Oracle | https://github.com/clarity-fintech/CLRTY-FX-Oracle |
| CLRTY-Global-Router | https://github.com/clarity-fintech/CLRTY-Global-Router |
| CLRTY-IDE-Sync-Architecture-Anthropedic | https://github.com/clarity-fintech/CLRTY-IDE-Sync-Architecture-Anthropedic |
| CLRTY-MIS-Kernel | https://github.com/clarity-fintech/CLRTY-MIS-Kernel |
| clrty-mis-program-library | https://github.com/clarity-fintech/clrty-mis-program-library |
| clrty-mis-verify | https://github.com/clarity-fintech/clrty-mis-verify |
| clrty-mobile-mis-adapter | https://github.com/clarity-fintech/clrty-mobile-mis-adapter |
| CLRTY-NLE-Gated- | https://github.com/clarity-fintech/CLRTY-NLE-Gated- |
| CLRTY-Quality-Gate | https://github.com/clarity-fintech/CLRTY-Quality-Gate |
| CLRTY-Reasoning | https://github.com/clarity-fintech/CLRTY-Reasoning |
| clrty_santity_antidrops | https://github.com/clarity-fintech/clrty_santity_antidrops |
| ClrtyxDune | https://github.com/clarity-fintech/ClrtyxDune |
| Cross-Cloud-Latency-Optimized-State-Replication | https://github.com/clarity-fintech/Cross-Cloud-Latency-Optimized-State-Replication |
| cybersecurity | https://github.com/clarity-fintech/cybersecurity |
| data | https://github.com/clarity-fintech/data |
| developer_kit | https://github.com/clarity-fintech/developer_kit |
| Distributed-Denial-of-Service-DDoS-Mitigation-Geometry- | https://github.com/clarity-fintech/Distributed-Denial-of-Service-DDoS-Mitigation-Geometry- |
| fintauo | https://github.com/clarity-fintech/fintauo |
| gitbook | https://github.com/clarity-fintech/gitbook |
| governance-plugin-library | https://github.com/clarity-fintech/governance-plugin-library |
| governance-sdk-py | https://github.com/clarity-fintech/governance-sdk-py |
| grape-network-mis | https://github.com/clarity-fintech/grape-network-mis |
| helix-mev-programs | https://github.com/clarity-fintech/helix-mev-programs |
| Heterogeneous-Event-Stream-Synchronization | https://github.com/clarity-fintech/Heterogeneous-Event-Stream-Synchronization |
| infinity-lst-engine | https://github.com/clarity-fintech/infinity-lst-engine |
| k-liquidity-vaults | https://github.com/clarity-fintech/k-liquidity-vaults |
| krypton-vm-layer | https://github.com/clarity-fintech/krypton-vm-layer |
| liquid-staking-core | https://github.com/clarity-fintech/liquid-staking-core |
| main | https://github.com/clarity-fintech/main |
| meridien-mint-protocol | https://github.com/clarity-fintech/meridien-mint-protocol |
| mev-inspect-mis | https://github.com/clarity-fintech/mev-inspect-mis |
| mis-governance | https://github.com/clarity-fintech/mis-governance |
| mis-stake-pool | https://github.com/clarity-fintech/mis-stake-pool |
| moniversive_invariant_static_ML | https://github.com/clarity-fintech/moniversive_invariant_static_ML |
| Multi-Data-Isolation-Invariants | https://github.com/clarity-fintech/Multi-Data-Isolation-Invariants |
| network-monitor | https://github.com/clarity-fintech/network-monitor |
| nexus-gateway | https://github.com/clarity-fintech/nexus-gateway |
| node_deployment_kit | https://github.com/clarity-fintech/node_deployment_kit |
| omni-mesh-v2 | https://github.com/clarity-fintech/omni-mesh-v2 |
| orbit-aggregator-sdk | https://github.com/clarity-fintech/orbit-aggregator-sdk |
| paladin-mis-bot | https://github.com/clarity-fintech/paladin-mis-bot |
| pyramid-oracle-grid | https://github.com/clarity-fintech/pyramid-oracle-grid |
| Real-Time-Billing-Usage-Invariant-Aggregation | https://github.com/clarity-fintech/Real-Time-Billing-Usage-Invariant-Aggregation |
| realms-governance-ui | https://github.com/clarity-fintech/realms-governance-ui |
| research_kit | https://github.com/clarity-fintech/research_kit |
| restaking-core | https://github.com/clarity-fintech/restaking-core |
| Schemaless-Data-Transformation-Pipelines | https://github.com/clarity-fintech/Schemaless-Data-Transformation-Pipelines |
| security | https://github.com/clarity-fintech/security |
| SEO_kit_second | https://github.com/clarity-fintech/SEO_kit_second |
| squads-mis-mpl | https://github.com/clarity-fintech/squads-mis-mpl |
| squads-v4-core | https://github.com/clarity-fintech/squads-v4-core |
| st-clrty-program | https://github.com/clarity-fintech/st-clrty-program |
| strata-bridge-core | https://github.com/clarity-fintech/strata-bridge-core |
| superteam-grants-program | https://github.com/clarity-fintech/superteam-grants-program |
| tribeca-ve-lock | https://github.com/clarity-fintech/tribeca-ve-lock |
| velocity-settle-core | https://github.com/clarity-fintech/velocity-settle-core |
| wallet_integration | https://github.com/clarity-fintech/wallet_integration |


## Clone locally

```bash
# Static ML kernel (primary)
git clone https://github.com/clarity-fintech/moniversive_invariant_static_ML.git
cd moniversive_invariant_static_ML
bin/misc mis/kernel/*.mis --check --compact-letters

# Compiler kernel
git clone https://github.com/clarity-fintech/CLRTY-MIS-Kernel.git
```

Org API inventory: `67` repos · local clone root: `var/mis_github_repos`.

Related: [Ecosystem repos index](../catalog/ecosystem-repos-index.md) · [Downloads](../downloads/README.md) · [Ecosystem map](map.md)
