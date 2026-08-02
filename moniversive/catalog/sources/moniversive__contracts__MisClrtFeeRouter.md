# `moniversive/contracts/MisClrtFeeRouter.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisClrtFeeRouter`** · 28 lines

```bash
bin/misc moniversive/contracts/MisClrtFeeRouter.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `l01_tax_bps:`, `tax_sink_clrty1:` |
| Outcomes | `collect_execution_tax`, `bind_tax_to_settle_post` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — L01 execution tax (400 bps), separate from product split gateway
// Compile: bin/misc moniversive/contracts/MisClrtFeeRouter.mis --check --compact-letters

module MisClrtFeeRouter {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant l01_tax_bps: execution_tax_bps == 400;
  invariant tax_sink_clrty1: tax_sink == treasury_clrty_1;

  outcome collect_execution_tax(gross: u128, intent: Bytes) {
    require gross > 0;
    require intent != @0;
    constraint execution_tax_bps == 400;
    constraint tax_sink == treasury_clrty_1;
    constraint chain_id == 1202;
  }

  outcome bind_tax_to_settle_post(module_id: Bytes) {
    require module_id != @0;
    constraint mis_ml_module_attached == true;
    constraint clrty_route == treasury_clrty_1;
  }

  signal ExecutionTaxCollected(gross: u128, tax: u128);
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
