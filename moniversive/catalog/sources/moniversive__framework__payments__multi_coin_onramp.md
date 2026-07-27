# `moniversive/framework/payments/multi_coin_onramp.mis`

> Generated 2026-07-27T00:56:43Z · module **`MultiCoinOnramp`** · 145 lines

```bash
bin/misc moniversive/framework/payments/multi_coin_onramp.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `no_python_kernel:`, `family_mis_chain:`, `branch_mis_evm:`, `creator_bound:`, `onramp_provider_is_spark:`, `onramp_escrow_is_spark:`, `no_foreign_onramp:` |
| Outcomes | `open_spark_escrow`, `process_spark_fiat_credit`, `process_spark_crypto_intake`, `process_spark_clrty_native`, `compute_spark_fee`, `route_to_clrty1_sink`, `split_treasury_safe_bank`, `enforce_clrty_supply_cap`, `settle_spark_intent`, `finalize_onramp_settlement`, `refund_spark_intent`, `refuse_foreign_onramp_provider` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_evm
// Title: CLRTY-1 Multi-Coin Onramp — Spark escrow + fee/settlement invariants
// Compile: bin/misc moniversive/framework/payments/multi_coin_onramp.mis --check --compact-letters
//
// Clarity Spark is the sole on-ramp provider. Foreign redirect-widget gateways are banned
// (invariant no_foreign_onramp + outcome refuse_foreign_onramp_provider).
//
// Multi-coin onramp accepts fiat (USD/EUR/GBP), crypto liquidity (ETH/BNB/BTC/SOL/USDC/USDT
// across the intake networks in payment_rails_manifest.json) and native CLRTY, and routes all
// of it — after Spark's processing fee — into the clrty-1 treasury sink, split 50/50 between
// the Safe treasury and bank per payment_rails_manifest.json `split_gateway`.
//
// Bridge (index-only — no TS/JS authored in this file):
//   Merchant link creation / modal      -> cloudflare/spark-pay/merchant/src
//   Checkout flow (card/crypto/bank)    -> cloudflare/spark-pay/checkout/src/Checkout.jsx
//   Fee schedule (Spark processing fee) -> cloudflare/spark-pay/shared/fees.js
//   Crypto broadcast -> on-chain settle -> external/clarity-fintech/clarity_spark/docs/ARCHITECTURE.md
//        ("POST /v1/spark/sessions/:sid/crypto/broadcast")
//   Webhook settlement dispatch         -> external/clarity-fintech/clarity_spark/docs/ARCHITECTURE.md
//        ("POST /v1/spark/events/settled")
//   Fiat/crypto/CLRTY route + split     -> CLRTY_SUBSTRATE/boot/payment_rails_manifest.json
//   Treasury sink                       -> CLRTY_SUBSTRATE/boot/payment_rails_manifest.json (treasury:clrty-1)

module MultiCoinOnramp {

  

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
  invariant onramp_escrow_is_spark: onramp_escrow_kind == spark_escrow;
  invariant no_foreign_onramp: onramp_provider != foreign_onramp_banned;
  invariant fee_bps_denominator: fee_bps_denominator == 10000;
  invariant fiat_route_to_clrty_bps: fiat_route_to_clrty_bps == 8500;
  invariant fiat_retain_ops_bps: fiat_retain_ops_bps == 1500;
  invariant crypto_route_to_clrty_bps: crypto_route_to_clrty_bps == 8000;
  invariant crypto_liquidity_buffer_bps: crypto_liquidity_buffer_bps == 2000;
  invariant clrty_native_route_bps: clrty_native_route_bps == 10000;
  invariant treasury_split_safe_bank: treasury_split_pct == 50;
  invariant clrty_hard_cap_tokens: clrty_hard_cap_tokens == 16000000;

  outcome open_spark_escrow(session: Bytes, asset: Bytes) {
    require session != @0;
    require asset != @0;
    constraint onramp_provider == clarity_spark;
    constraint onramp_escrow_kind == spark_escrow;
    constraint spark_escrow_opened == true;
  }

  outcome process_spark_fiat_credit(session: Bytes, amount_charge_units: u128) {
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
