# `moniversive/contracts/MisProtocolFeeCollector.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisProtocolFeeCollector`** · 28 lines

```bash
bin/misc moniversive/contracts/MisProtocolFeeCollector.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `pool_non_negative:`, `threshold_usdc_floor:` |
| Outcomes | `deposit_product_fee`, `trigger_pool_route` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — charge pool before split / L01 routing
// Taxonomy: mis_chain -> mis_evm
// Compile: bin/misc moniversive/contracts/MisProtocolFeeCollector.mis --check --compact-letters

module MisProtocolFeeCollector {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant pool_non_negative: charge_pool_balance >= 0;
  invariant threshold_usdc_floor: pool_route_threshold_usdc >= 500;

  outcome deposit_product_fee(amount: u128, surface: Bytes) {
    require amount > 0;
    require surface != @0;
    constraint charge_pool_balance >= amount;
    constraint settlement_network == clrty_1;
  }

  outcome trigger_pool_route(pool_balance: u128) {
    require pool_balance >= pool_route_threshold_usdc;
    constraint route_fees_eligible == true;
  }

  signal FeeDeposited(surface: Bytes, amount: u128);
  signal PoolRouteTriggered(balance: u128);
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
