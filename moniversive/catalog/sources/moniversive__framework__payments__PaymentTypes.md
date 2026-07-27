# `moniversive/framework/payments/PaymentTypes.mis`

> Generated 2026-07-27T00:56:43Z · module **`PaymentTypes`** · 92 lines

```bash
bin/misc moniversive/framework/payments/PaymentTypes.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `no_python_kernel:`, `family_mis_chain:`, `branch_mis_evm:`, `creator_bound:`, `provider_clarity_spark:`, `no_foreign_onramp_provider:`, `escrow_kind_spark:` |
| Outcomes | `assert_provider_kind`, `assert_escrow_kind`, `assert_onramp_asset_kind`, `assert_fee_kind`, `assert_settlement_kind`, `refuse_foreign_onramp_provider`, `settle_clrty1` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_evm (fiat/crypto onramp settles into clrty-1 EVM-style balances)
// Title: CLRTY-1 Multi-Coin Onramp — PaymentTypes (Clarity Spark provider only)
// Compile: bin/misc moniversive/framework/payments/PaymentTypes.mis --check --compact-letters
//
// Third-party redirect on-ramp providers (foreign fiat widgets) are banned; only clarity_spark
// may appear in provider_kind.
//
// Real Spark Pay surface this binds to (index-only — no TS/JS authored in this file):
//   Merchant SPA / link creation        -> cloudflare/spark-pay/merchant/src
//   Checkout SPA                        -> cloudflare/spark-pay/checkout/src/Checkout.jsx
//   Fee schedule                        -> cloudflare/spark-pay/shared/fees.js
//   API: create link / checkout session -> external/clarity-fintech/clarity_spark/docs/ARCHITECTURE.md
//        ("POST /v1/spark/sessions", "POST /v1/spark/sessions/:sid/crypto/broadcast")
//   Fiat/crypto -> CLRTY settlement route-> CLRTY_SUBSTRATE/boot/payment_rails_manifest.json

module PaymentTypes {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant no_python_kernel: python_package_code == false;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant branch_mis_evm: taxonomy_branch == mis_evm;
  invariant creator_bound: creator == chandler_william_ferguson;

  // -- ProviderKind: onramp providers this repo may route fiat/crypto through --
  invariant provider_clarity_spark: provider_kind_spark == clarity_spark;
  invariant no_foreign_onramp_provider: provider_kind_foreign_banned == foreign_onramp_banned;

  // -- EscrowKind: where inbound funds sit before CLRTY settlement --
  invariant escrow_kind_spark: escrow_kind_spark == spark_escrow;

  // -- OnrampAssetKind: coins the multi-coin onramp accepts (mirrors payment_rails_manifest.json) --
  invariant onramp_asset_fiat: onramp_asset_fiat == fiat_charge;
  invariant onramp_asset_crypto: onramp_asset_crypto == crypto_liquidity;
  invariant onramp_asset_clrty: onramp_asset_clrty == clrty_native;

  // -- FeeInvariantKind: fee-schedule buckets applied by Spark before CLRTY sink --
  invariant fee_kind_spark_processing: fee_kind_spark_processing == spark_processing_fee;
  invariant fee_kind_network: fee_kind_network == network_fee;
  invariant fee_kind_clrty_route: fee_kind_clrty_route == clrty_route_fee;
  invariant fee_bps_denominator: fee_bps_denominator == 10000;

  // -- SettlementKind: terminal state of a Spark-originated onramp intent --
  invariant settlement_kind_pending: settlement_kind_pending == spark_pending;
  invariant settlement_kind_settled: settlement_kind_settled == spark_settled;
  invariant settlement_kind_refunded: settlement_kind_refunded == spark_refunded;

  outcome assert_provider_kind(tag: Bytes) {
    require tag != @0;
    constraint tag == clarity_spark;
    constraint tag != foreign_onramp_banned;
  }

```

[Index hub](README.md) · [All symbols](../symbols-full.md)
