# `moniversive/payments/MisSparkMultiCoinOnrampInvariants.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisSparkMultiCoinOnrampInvariants`** · 148 lines

```bash
bin/misc moniversive/payments/MisSparkMultiCoinOnrampInvariants.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `no_python_kernel:`, `family_mis_chain:`, `branch_mis_evm:`, `creator_bound:`, `spark_onramp_provider:`, `spark_escrow_kind:`, `foreign_onramp_banned:` |
| Outcomes | `assert_spark_onramp`, `open_spark_escrow`, `process_spark_fiat_credit`, `fetch_spark_rpc_balance`, `fetch_spark_indexer_balance`, `assert_spark_dual_endpoint_zero_drift`, `process_spark_dual_sync`, `compute_spark_fee_vault`, `route_fee_vault_to_operational_treasury`, `route_fee_vault_attestation_split`, `refuse_foreign_onramp_provider`, `settle_spark_onramp_clrty1` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_evm
// Title: CLRTY-1 Spark Multi-Coin Onramp — dual-endpoint sync + operational treasury fee vault
// Compile: bin/misc moniversive/payments/MisSparkMultiCoinOnrampInvariants.mis --check --compact-letters
//
// Companion to MisSparkMultiCoinOnramp.mis (idx-mis-00255). SparkOnramp is the sole provider;
// spark_escrow replaces any legacy foreign escrow tag. Fee proceeds route 100% to the
// operational treasury sink (treasury:clrty-1) unless treasury_attestation_split_enabled is
// explicitly true (then a documented 60/30/10 attestation split may apply — never by default).
//
// Dual-endpoint: every credited onramp balance must match RPC clrty_getBalance vs indexer mirror
// (same contract as MisEndpointInvariants.mis) before spark_settled is emitted.
//
// Bridge (index-only):
//   Spark checkout / sessions     -> cloudflare/spark-pay/, clarity_spark docs
//   Treasury sink manifest        -> CLRTY_SUBSTRATE/boot/payment_rails_manifest.json
//   Wallet telemetry harness      -> MisDashboardTelemetryHarness.mis / `make mis-ml-check`

module MisSparkMultiCoinOnrampInvariants {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant no_python_kernel: python_package_code == false;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant branch_mis_evm: taxonomy_branch == mis_evm;
  invariant creator_bound: creator == chandler_william_ferguson;

  invariant spark_onramp_provider: onramp_provider == clarity_spark;
  invariant spark_escrow_kind: onramp_escrow_kind == spark_escrow;
  invariant foreign_onramp_banned: provider_kind_foreign_banned == foreign_onramp_banned;
  invariant treasury_sink_clrty1: treasury_sink == clrty_1_operational;
  invariant default_operational_treasury_pct: operational_treasury_route_pct == 100;
  invariant attestation_split_off_by_default: treasury_attestation_split_enabled == false;
  invariant max_drift_tolerance_ppm_strict: max_drift_tolerance_ppm == 0;
  invariant dual_endpoint_required: dual_endpoint_quorum == 2;

  outcome assert_spark_onramp(tag: Bytes) {
    require tag != @0;
    constraint tag == clarity_spark;
    constraint onramp_provider == clarity_spark;
  }

  outcome open_spark_escrow(session: Bytes, asset: Bytes) {
    require session != @0;
    require asset != @0;
    constraint onramp_escrow_kind == spark_escrow;
    constraint spark_escrow_opened == true;
  }

  outcome process_spark_fiat_credit(session: Bytes, amount_charge_units: u128) {
    require session != @0;
    require amount_charge_units > 0;
    constraint onramp_provider == clarity_spark;
    constraint spark_fiat_credited == true;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
