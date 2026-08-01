# `moniversive/invariants/multi_coin_onramp.mis`

> Generated 2026-07-29T03:15:28Z · module **`MultiCoinOnrampSpark`** · 102 lines

```bash
bin/misc moniversive/invariants/multi_coin_onramp.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `no_python_kernel:`, `family_mis_chain:`, `branch_mis_evm:`, `creator_bound:`, `onramp_provider_is_spark:`, `spark_escrow_balances:`, `no_foreign_onramp:` |
| Outcomes | `open_spark_escrow`, `process_spark_fiat_credit`, `compute_spark_fee_vault`, `route_fee_vault_to_operational_treasury`, `process_spark_dual_sync`, `finalize_onramp_settlement`, `refuse_foreign_onramp_provider`, `settle_clrty1` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_evm
// Title: Spark multi-coin onramp — precision, spark_escrow solvency, operational fee vault
// Compile: bin/misc moniversive/invariants/multi_coin_onramp.mis --check --compact-letters
//
// PaymentProvider::ClaritySpark (clarity_spark). spark_escrow_balances — not legacy foreign escrow.
// Expanded companion: moniversive/payments/MisSparkMultiCoinOnrampInvariants.mis
//
// PRE_LAUNCH_FROZEN: native CLRTY mint blocked until TGE; open-asset Spark settlement stays live.

module MultiCoinOnrampSpark {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant no_python_kernel: python_package_code == false;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant branch_mis_evm: taxonomy_branch == mis_evm;
  invariant creator_bound: creator == chandler_william_ferguson;
  invariant onramp_provider_is_spark: onramp_provider == clarity_spark;
  invariant spark_escrow_balances: onramp_escrow_kind == spark_escrow;
  invariant no_foreign_onramp: onramp_provider != foreign_onramp_banned;
  invariant fee_bps_denominator: fee_bps_denominator == 10000;
  invariant fiat_route_to_clrty_bps: fiat_route_to_clrty_bps == 8500;
  invariant crypto_route_to_clrty_bps: crypto_route_to_clrty_bps == 8000;
  invariant clrty_native_route_bps: clrty_native_route_bps == 10000;
  invariant clrty_hard_cap_tokens: clrty_hard_cap_tokens == 16000000;
  invariant max_drift_tolerance_ppm_strict: max_drift_tolerance_ppm == 0;
  invariant dual_endpoint_required: dual_endpoint_quorum == 2;
  invariant treasury_sink_clrty1: treasury_sink == clrty_1_operational;
  invariant default_operational_treasury_pct: operational_treasury_route_pct == 100;
  invariant pre_launch_frozen: launch_state == PRE_LAUNCH_FROZEN;

  outcome open_spark_escrow(session: Bytes, asset: Bytes) {
    require session != @0;
    require asset != @0;
    constraint onramp_provider == clarity_spark;
    constraint onramp_escrow_kind == spark_escrow;
    constraint spark_escrow_opened == true;
  }

  outcome process_spark_fiat_credit(session: Bytes, amount_charge_units: u128) {
    require session != @0;
    require amount_charge_units > 0;
    constraint onramp_provider == clarity_spark;
    constraint fiat_route_to_clrty_bps == 8500;
    constraint spark_fiat_credited == true;
  }

  outcome compute_spark_fee_vault(amount_units: u128, fee_bps: u32) {
    require amount_units > 0;
    require fee_bps <= 10000;
    constraint fee_bps_denominator == 10000;
    constraint spark_fee_vault_computed == true;
  }

  outcome route_fee_vault_to_operational_treasury(session: Bytes, amount_units: u128) {
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
