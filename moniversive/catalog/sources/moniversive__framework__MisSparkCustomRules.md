# `moniversive/framework/MisSparkCustomRules.mis`

> Generated 2026-07-27T00:56:43Z · module **`MisSparkCustomRules`** · 71 lines

```bash
bin/misc moniversive/framework/MisSparkCustomRules.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `family_mis_chain:`, `branch_mis_evm:`, `onramp_provider_is_spark:`, `no_foreign_onramp:`, `treasury_sink_clrty1:`, `operational_treasury_route_pct_100:`, `no_live_apy_marketing:` |
| Outcomes | `assert_zero_profit_treasury`, `refuse_live_apy_tooltip`, `enforce_fx_ttl`, `require_spark_charge_idempotency`, `emit_iso_pacs008_hash_telemetry`, `verify_dual_endpoint_balance` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_evm
// Title: Spark + exchange custom operational rules (registry mirror for fintauo runtime)
// Compile: bin/misc moniversive/framework/MisSparkCustomRules.mis --check --compact-letters
//
// Runtime bridge (TypeScript stub, no Z3): packages/exchange-app/src/invariants/misCustomRules.ts
// Indexed: idx-mis-00262-MisSparkCustomRules

module MisSparkCustomRules {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant branch_mis_evm: taxonomy_branch == mis_evm;

  invariant onramp_provider_is_spark: onramp_provider == clarity_spark;
  invariant no_foreign_onramp: onramp_provider != foreign_onramp_banned;
  invariant treasury_sink_clrty1: treasury_sink == clrty_1_operational;
  invariant operational_treasury_route_pct_100: operational_treasury_route_pct == 100;
  invariant no_live_apy_marketing: live_apy_marketing_allowed == false;
  invariant fx_quote_ttl_ms: fx_quote_ttl_ms == 3000;
  invariant spark_charge_idempotency_uuid: spark_charge_idempotency_kind == uuid_v4;
  invariant iso_pacs008_hash_telemetry: iso_pacs008_hash_logged == true;
  invariant dual_endpoint_quorum_two: dual_endpoint_quorum == 2;

  outcome assert_zero_profit_treasury(session: Bytes) {
    require session != @0;
    constraint treasury_sink == clrty_1_operational;
    constraint operational_treasury_route_pct == 100;
    constraint staking_burn_split_disabled == true;
  }

  outcome refuse_live_apy_tooltip(surface: Bytes) {
    require surface != @0;
    constraint live_apy_marketing_allowed == false;
    constraint apy_tooltip_refused == true;
  }

  outcome enforce_fx_ttl(session: Bytes, age_ms: u64) {
    require session != @0;
    require age_ms >= 0;
    constraint fx_quote_ttl_ms == 3000;
    constraint age_ms <= fx_quote_ttl_ms;
    constraint fx_quote_fresh == true;
  }

  outcome require_spark_charge_idempotency(idem: Bytes) {
    require idem != @0;
    constraint spark_charge_idempotency_kind == uuid_v4;
    constraint idempotency_key_present == true;
  }

  outcome emit_iso_pacs008_hash_telemetry(payment_ref: Bytes, hash: Bytes) {
    require payment_ref != @0;
    require hash != @0;
    constraint iso_pacs008_hash_logged == true;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
