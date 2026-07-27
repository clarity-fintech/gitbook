# `moniversive/payments/MisSparkMultiCoinOnramp.mis`

> Generated 2026-07-27T00:56:43Z · module **`MisSparkMultiCoinOnramp`** · 185 lines

```bash
bin/misc moniversive/payments/MisSparkMultiCoinOnramp.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `no_python_kernel:`, `family_mis_chain:`, `branch_mis_evm:`, `creator_bound:`, `provider_clarity_spark:`, `no_foreign_onramp_provider:`, `onramp_provider_is_spark:`, `escrow_kind_spark:` |
| Outcomes | `assert_provider_kind`, `assert_escrow_kind`, `assert_fee_kind`, `open_spark_escrow`, `process_spark_fiat_credit`, `process_spark_crypto_intake`, `compute_spark_fee`, `route_to_clrty1_sink`, `split_treasury_safe_bank`, `enforce_clrty_supply_cap`, `settle_spark_intent`, `refund_spark_intent` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_evm (fiat/crypto onramp settles into clrty-1 EVM-style balances)
// Title: CLRTY-1 Multi-Coin Onramp — Spark (Clarity Spark Pay) provider/escrow/fee/settlement
//        type vocabulary + multi-coin intake invariants
// Compile: bin/misc moniversive/payments/MisSparkMultiCoinOnramp.mis --check --compact-letters
//
// Requested-path/name deliverable merging moniversive/framework/payments/PaymentTypes.mis
// (idx-mis-00247) and moniversive/framework/payments/multi_coin_onramp.mis (idx-mis-00248) into
// one module at moniversive/payments/, per the current spec. SparkOnramp (clarity_spark) is the
// sole on-ramp provider; foreign gateway tags are refused (see MisSparkMultiCoinOnrampInvariants.mis).
// Inbound funds use spark_escrow until spark_settled on clrty-1 (chain 1202).
//
// Multi-coin onramp accepts fiat (USD/EUR/GBP), crypto liquidity (ETH/BNB/BTC/SOL/USDC/USDT
// across payment_rails_manifest.json) and native CLRTY. Fee vault routing defaults to 100%
// operational treasury (treasury:clrty-1); attestation splits live in the invariants companion.
    20|//
// Bridge (index-only — no TS/JS authored in this file):
//   Merchant link creation / modal      -> cloudflare/spark-pay/merchant/src
//   Checkout flow (card/crypto/bank)    -> cloudflare/spark-pay/checkout/src/Checkout.jsx
//   Fee schedule (Spark processing fee) -> cloudflare/spark-pay/shared/fees.js
//   API: create link / checkout session -> external/clarity-fintech/clarity_spark/docs/ARCHITECTURE.md
//        ("POST /v1/spark/sessions", "POST /v1/spark/sessions/:sid/crypto/broadcast")
//   Webhook settlement dispatch         -> external/clarity-fintech/clarity_spark/docs/ARCHITECTURE.md
//        ("POST /v1/spark/events/settled")
//   Fiat/crypto/CLRTY route + split     -> CLRTY_SUBSTRATE/boot/payment_rails_manifest.json
    30|//   Treasury sink                       -> CLRTY_SUBSTRATE/boot/payment_rails_manifest.json (treasury:clrty-1)

module MisSparkMultiCoinOnramp {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
    40|  invariant kernel_is_misc: compiler_kernel == misc;
  invariant no_python_kernel: python_package_code == false;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant branch_mis_evm: taxonomy_branch == mis_evm;
  invariant creator_bound: creator == chandler_william_ferguson;

  // -- ProviderKind: onramp providers this repo may route fiat/crypto through --
  invariant provider_clarity_spark: provider_kind_spark == clarity_spark;
  invariant no_foreign_onramp_provider: provider_kind_foreign_banned == foreign_onramp_banned;
  invariant onramp_provider_is_spark: onramp_provider == clarity_spark;
    50|  invariant no_foreign_onramp: onramp_provider != foreign_onramp_banned;

  // -- EscrowKind: inbound funds before CLRTY settlement (spark_escrow only) --
  invariant escrow_kind_spark: escrow_kind_spark == spark_escrow;
  invariant onramp_escrow_is_spark: onramp_escrow_kind == spark_escrow;

  // -- OnrampAssetKind: coins the multi-coin onramp accepts (mirrors payment_rails_manifest.json) --
  invariant onramp_asset_fiat: onramp_asset_fiat == fiat_charge;
  invariant onramp_asset_crypto: onramp_asset_crypto == crypto_liquidity;
  invariant onramp_asset_clrty: onramp_asset_clrty == clrty_native;

    60|  // -- FeeInvariantKind: fee-schedule buckets applied by Spark before CLRTY sink --
  invariant fee_kind_spark_processing: fee_kind_spark_processing == spark_processing_fee;
  invariant fee_kind_network: fee_kind_network == network_fee;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
