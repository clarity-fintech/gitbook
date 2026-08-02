# `moniversive/nanotasks/merchant_pricing_tiers.mis`

> Generated 2026-07-29T03:15:28Z · module **`MerchantPricingTiersNanotasks`** · 22 lines

```bash
bin/misc moniversive/nanotasks/merchant_pricing_tiers.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `settlement_chain:`, `pricing_task_count:`, `zero_cost_intake:` |
| Outcomes | `merchant_pricing_tiers_main` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Logical namespace: clarity.mis.nanotasks.merchant_pricing_tiers
// Compile: bin/misc moniversive/nanotasks/merchant_pricing_tiers.mis --check --compact-letters

module MerchantPricingTiersNanotasks {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant pricing_task_count: pricing_task_count == 100;
  invariant zero_cost_intake: data_intake_cost_usd == 0;

  outcome merchant_pricing_tiers_main(ctx: Bytes) {
    require ctx != @0;
    constraint pricing_engine_active == true;
    constraint data_intake_cost_usd == 0;
    constraint starter_tier_active == true;
    constraint growth_tier_active == true;
    constraint enterprise_tier_active == true;
    constraint intake_cost_usd_absolute_pricing_zero == true;
    constraint full_pricing_ecosystem_running_live == true;
    constraint pricing_task_count == 100;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
