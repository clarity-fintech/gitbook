# Staking for RPC + node creation

Staking is bound into RPC language-root and node register/heartbeat so every tick/RPC/node fee path can route the staker share under **clrty-1 / 1202**.

## Module

`languages/mis-ml/surfaces/StakingRpcNode.clrty` — outcomes: `register_node`, `heartbeat`, `bond_stake`, `accrue_tick_rewards`.

Vault: `CLRTY_SUBSTRATE/bridge_perimeter/fma/contracts/src/FmaStakingVault.clrty` (tiers; tick/RPC bonding named in EMBED).

## Cuts

| Rail | Staker share |
|------|----------------|
| L01 tax (notional) | **120 bps** |
| Tick fee split | **30%** of tick fee |

Node sovereign price: **$20,000/yr** (`NODE_SOVEREIGN_PRICE_USD_CENTS = 2_000_000`). Heartbeat: sovereign **15s**, free **60s**.

## Surfaces

| Surface | Binding |
|---------|---------|
| Node register / heartbeat | `clrty-api` — Moniversive `staking` block on responses |
| Node settle payloads | `clrty-node/src/fees.rs` — `staking_pool` + `tick` fields |
| RPC | `clrty_getStakingRoot`, language-root `staking_module` |
| Gateway allowlist | `clrty_getStakingRoot`, `clrty_getTickArchitecture` |

Cross-route: `monetization-layers/surfaces/cross_route.json` → `staking_rpc_node` + `tick`.

## Epoch

Staker accrual rolls with the CLRTY-1 epoch (**432,000** slots). See [Epoch architecture](epoch.md).
