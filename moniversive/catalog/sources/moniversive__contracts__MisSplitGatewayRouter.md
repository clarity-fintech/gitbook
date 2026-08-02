# `moniversive/contracts/MisSplitGatewayRouter.mis`

> Generated 2026-08-02T12:03:42Z · module **`MisSplitGatewayRouter`** · 31 lines

```bash
bin/misc moniversive/contracts/MisSplitGatewayRouter.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `split_bps_50_50:`, `shares_sum:`, `spark_not_foreign:` |
| Outcomes | `quote_split`, `route_fees` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — product fee split gateway (MIS successor to legacy SplitGatewayProxy)
// Operational Spark/exchange custom rules may force 100% treasury:clrty-1 — see MisSparkCustomRules.mis
// Compile: bin/misc moniversive/contracts/MisSplitGatewayRouter.mis --check --compact-letters

module MisSplitGatewayRouter {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant split_bps_50_50: split_bps == 5000;
  invariant shares_sum: treasury_share_bps + bank_share_bps == 10000;
  invariant spark_not_foreign: onramp_provider != foreign_onramp_banned;

  outcome quote_split(amount_atomic: u128, channel: Bytes, surface: Bytes) {
    require amount_atomic > 0;
    require channel != @0;
    require surface != @0;
    constraint treasury_share + bank_share == amount_atomic;
    constraint split_bps == 5000;
  }

  outcome route_fees(pool: Bytes, amount: u128) {
    require pool != @0;
    require amount > 0;
    constraint split_bps == 5000;
    constraint onramp_provider == clarity_spark;
  }

  signal FeeRouted(treasury_amount: u128, bank_amount: u128);
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
