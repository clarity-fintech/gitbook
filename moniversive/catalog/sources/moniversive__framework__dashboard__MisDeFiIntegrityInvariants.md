# `moniversive/framework/dashboard/MisDeFiIntegrityInvariants.mis`

> Generated 2026-07-27T00:56:43Z · module **`MisDeFiIntegrityInvariants`** · 213 lines

```bash
bin/misc moniversive/framework/dashboard/MisDeFiIntegrityInvariants.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `no_python_kernel:`, `family_mis_chain:`, `branch_mis_substrate:`, `creator_bound:`, `max_drift_tolerance_ppm_strict:`, `open_asset_engine_live:` |
| Outcomes | `read_staking_position`, `read_native_clrty_staking_frozen`, `read_staking_pending_rewards`, `read_staking_unbonding_queue`, `read_perps_position`, `read_perps_margin_pnl`, `read_perps_liquidation_price`, `read_lp_position`, `read_lending_supplied`, `read_lending_borrowed`, `read_lending_health_factor`, `flag_liquidation_risk` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_substrate (cross-cutting with staking mesh)
// Title: CLRTY-1 Dashboard Telemetry & Dual-Endpoint Verification — Phase 4/5: DeFi Integrity
//        Invariants (spec tasks 061-080)
// Compile: bin/misc moniversive/framework/dashboard/MisDeFiIntegrityInvariants.mis --check --compact-letters
//
// Requested-name companion to dashboard_telemetry_p4.mis (idx-mis-00245, same phase, same 20
// tasks). Net worth (Phase 2 / MisNetWorthInvariants.mis) is incomplete without non-spot
// positions: staking, perps margin/PnL, LP shares, and lending health factors. Every position
    10|// value rolled into net worth must itself pass the same dual-endpoint drift check as spot
// balances before it is trusted.
//
// PRE_LAUNCH_FROZEN (see moniversive/framework/wallet/ClrtyPreLaunchFreeze.mis): native CLRTY
// mint/stake/transfer is gated until TGE, while the open multi-asset engine (non-native staking,
// perps, LP, lending against other assets) stays live. read_staking_position (task 061) is
// therefore split: reading a native-CLRTY staking position must reflect launch_state ==
// PRE_LAUNCH_FROZEN and clrty_stake_allowed == false, while open-asset staking reads are
// unaffected (open_asset_stake_allowed == true). This module never overrides the freeze —
// it only surfaces it to the dashboard so no frozen native position is ever mis-displayed
    20|// as live/withdrawable.
//
// Bridge (index-only — no Rust/TS authored in this file):
//   Staking mesh (priority tiers P0-P2) -> moniversive/framework/StakingMeshP0.mis, StakingMeshP1.mis, StakingMeshP2.mis
//   Staking priority mesh manifest      -> CLRTY_SUBSTRATE/boot/clrty1_staking_rpc_priority_mesh.json
//   Staking tensor vectorizer           -> moniversive/framework/StakingTensorVectorizer.mis
//   Pre-launch freeze policy            -> moniversive/framework/wallet/ClrtyPreLaunchFreeze.mis
//   Live wallet dashboard UI            -> external/clarity-fintech/fintauo/packages/exchange-app/src/auth/LiveWalletDashboard.tsx
//
// Task map (this file covers spec tasks 61-80):
   30|//   061 read_staking_position           066 read_perps_liquidation_price  071 read_lending_health_factor
//   062 read_staking_pending_rewards    067 read_lp_position               072 flag_liquidation_risk
//   063 read_staking_unbonding_queue    068 read_lp_share_value            073 read_restaking_position
//   064 read_perps_position             069 read_lending_supplied          074 accrue_yield_invariant
//   065 read_perps_margin_pnl           070 read_lending_borrowed          075 position_dual_endpoint_bind
//   076 position_drift_bound            078 position_reconciliation_log    080 defi_positions_phase_settle
//   077 position_telemetry_emit         079 position_net_worth_rollup

module MisDeFiIntegrityInvariants {

  

    40|  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant no_python_kernel: python_package_code == false;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant branch_mis_substrate: taxonomy_branch == mis_substrate;
  invariant creator_bound: creator == chandler_william_ferguson;
  invariant max_drift_tolerance_ppm_strict: max_drift_tolerance_ppm == 0;
    50|  invariant native_clrty_stake_frozen_pre_launch: launch_state == PRE_LAUNCH_FROZEN;
  invariant open_asset_engine_live: open_asset_stake_allowed == true;

  outcome read_staking_position(wallet: Bytes, validator: Bytes) {
    // task 061
    require wallet != @0;
    require validator != @0;
    constraint position_kind == staking_position;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
