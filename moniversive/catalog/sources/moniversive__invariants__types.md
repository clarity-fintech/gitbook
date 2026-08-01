# `moniversive/invariants/types.mis`

> Generated 2026-07-29T03:15:28Z · module **`MoniversiveCoreTypes`** · 81 lines

```bash
bin/misc moniversive/invariants/types.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `no_python_kernel:`, `family_mis_chain:`, `creator_bound:`, `balance_source_rpc:`, `balance_source_indexer:`, `max_drift_tolerance_ppm_strict:`, `dual_endpoint_required:` |
| Outcomes | `assert_balance_source_kind`, `assert_payment_provider_spark`, `assert_spark_escrow_kind`, `settle_clrty1` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_substrate + mis_evm (dashboard telemetry + Spark onramp types)
// Title: Moniversive::Core type vocabulary (DashboardTypes + PaymentTypes)
// Compile: bin/misc moniversive/invariants/types.mis --check --compact-letters
//
// Logical namespaces (MIS has one module per file — both live in this module):
//   Moniversive::Core::DashboardTypes  — dual-endpoint balance / wallet roster / net worth atoms
//   Moniversive::Core::PaymentTypes    — Spark (clarity_spark) onramp provider / escrow / fee atoms
//
// Canonical expanded surfaces (same atoms, more outcomes):
//   moniversive/framework/dashboard/MisDashboardTypes.mis
//   moniversive/framework/dashboard/DashboardTypes.mis
//   moniversive/framework/payments/PaymentTypes.mis
//   moniversive/payments/MisSparkMultiCoinOnramp.mis
//
// PaymentProvider::ClaritySpark  == clarity_spark (foreign_onramp_banned refused)

module MoniversiveCoreTypes {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant no_python_kernel: python_package_code == false;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant creator_bound: creator == chandler_william_ferguson;

  // -- Moniversive::Core::DashboardTypes --
  invariant balance_source_rpc: balance_source_kind_rpc == rpc_endpoint;
  invariant balance_source_indexer: balance_source_kind_indexer == indexer_endpoint;
  invariant max_drift_tolerance_ppm_strict: max_drift_tolerance_ppm == 0;
  invariant dual_endpoint_required: dual_endpoint_quorum == 2;
  invariant drift_status_matched: drift_status_matched == matched;
  invariant drift_status_mismatched: drift_status_mismatched == mismatched;
  invariant drift_status_stale: drift_status_stale == stale_endpoint;
  invariant provider_type_internal_hd: provider_type_internal_hd == internal_hd;
  invariant provider_type_watch_only: provider_type_watch_only == watch_only;
  invariant provider_type_hardware: provider_type_hardware == hardware_signer;
  invariant provider_type_external_probe: provider_type_external_probe == external_provider;
  invariant external_provider_never_signs: external_provider_can_sign == false;
  invariant denom_uclrty: denom_uclrty == uclrty;
  invariant denom_miusd: denom_miusd == miusd;
  invariant miusd_peg_micros: miusd_price_micro_usd == 1000000;
  invariant clrty_hard_cap_tokens: clrty_hard_cap_tokens == 16000000;
  invariant ui_never_shows_unverified: ui_shows_unverified_balance == false;

  // -- Moniversive::Core::PaymentTypes (Spark only; no MoonPay / foreign widgets) --
  invariant payment_provider_clarity_spark: payment_provider == clarity_spark;
  invariant onramp_provider_is_spark: onramp_provider == clarity_spark;
  invariant escrow_kind_spark: onramp_escrow_kind == spark_escrow;
  invariant spark_escrow_balances: spark_escrow_kind == spark_escrow;
  invariant no_foreign_onramp: onramp_provider != foreign_onramp_banned;
  invariant fee_bps_denominator: fee_bps_denominator == 10000;
  invariant pre_launch_frozen: launch_state == PRE_LAUNCH_FROZEN;

  outcome assert_balance_source_kind(tag: Bytes) {
    require tag != @0;
    constraint tag == rpc_endpoint || tag == indexer_endpoint;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
