# `moniversive/framework/dashboard/MisNetWorthInvariants.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisNetWorthInvariants`** · 183 lines

```bash
bin/misc moniversive/framework/dashboard/MisNetWorthInvariants.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `no_python_kernel:`, `family_mis_chain:`, `branch_mis_substrate:`, `creator_bound:`, `miusd_peg_micros:`, `net_worth_never_negative:` |
| Outcomes | `aggregate_spot_balances`, `aggregate_cross_wallet`, `price_asset_in_miusd`, `apply_miusd_peg`, `convert_to_usd_display`, `compute_historical_pnl`, `compute_realized_pnl`, `net_worth_drift_bound`, `net_worth_recompute_on_drift`, `net_worth_zero_floor`, `net_worth_cap_bound`, `net_worth_multi_currency_render` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_substrate
// Title: CLRTY-1 Dashboard Telemetry & Dual-Endpoint Verification — Phase 2/5: Net Worth
//        Invariants (spec tasks 021-040)
// Compile: bin/misc moniversive/framework/dashboard/MisNetWorthInvariants.mis --check --compact-letters
//
// Requested-name companion to dashboard_telemetry_p2.mis (idx-mis-00243, same phase, same 20
// tasks). Net worth = sum of dual-endpoint-confirmed balances (Phase 1 / MisEndpointInvariants.mis)
// across every asset and every wallet in the roster, priced through the miUSD peg (1 miUSD ==
    10|// 1_000_000 micro-USD == $1.00, see MisDashboardTypes.mis), then displayed in uclrty / miusd /
// usd_display denominations.
//
// Bridge (index-only — no TS authored in this file):
//   Net worth UI card                   -> frontend/clrty-interface/src/components/dashboard
//   Historical snapshot / PnL surface   -> external/clarity-fintech/fintauo/packages/exchange-app/src/auth/LiveWalletDashboard.tsx
//   CLRTY hard cap (16,000,000 CLRTY)   -> CLRTY_SUBSTRATE/token_core/token_metadata.rs (HARD_CAP_TOKENS)
//   Price/oracle manifest               -> CLRTY_SUBSTRATE/boot/payment_rails_manifest.json (clrty_route)
//
// Task map (this file covers spec tasks 21-40):
//   021 aggregate_spot_balances        026 apply_miusd_peg              031 net_worth_drift_bound
    20|//   022 aggregate_position_balances    027 convert_to_usd_display       032 net_worth_cache_invalidate
//   023 aggregate_cross_wallet         028 snapshot_net_worth           033 net_worth_recompute_on_drift
//   024 price_asset_in_miusd           029 compute_historical_pnl       034 net_worth_zero_floor
//   025 price_asset_in_uclrty          030 compute_realized_pnl         035 net_worth_cap_bound
//   036 net_worth_multi_currency_render 038 net_worth_telemetry_emit    040 net_worth_phase_settle
//   037 net_worth_stale_price_flag      039 net_worth_reconciliation_log

module MisNetWorthInvariants {

  

    30|  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant no_python_kernel: python_package_code == false;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant branch_mis_substrate: taxonomy_branch == mis_substrate;
  invariant creator_bound: creator == chandler_william_ferguson;
  invariant miusd_peg_micros: miusd_price_micro_usd == 1000000;
    40|  invariant clrty_hard_cap_tokens: clrty_hard_cap_tokens == 16000000;
  invariant net_worth_never_negative: net_worth_floor == 0;

  outcome aggregate_spot_balances(wallet: Bytes) {
    // task 021
    require wallet != @0;
    constraint drift_status == matched;
    constraint spot_balances_aggregated == true;
  }

    50|  outcome aggregate_position_balances(wallet: Bytes) {
    // task 022
    require wallet != @0;
    constraint position_balances_aggregated == true;
  }

  outcome aggregate_cross_wallet(roster: Bytes) {
    // task 023
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
