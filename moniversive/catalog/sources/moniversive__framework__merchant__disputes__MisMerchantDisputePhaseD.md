# `moniversive/framework/merchant/disputes/MisMerchantDisputePhaseD.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisMerchantDisputePhaseD`** · 129 lines

```bash
bin/misc moniversive/framework/merchant/disputes/MisMerchantDisputePhaseD.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `settlement_chain:`, `kernel_is_misc:` |
| Outcomes | `dispute_task_061`, `dispute_task_062`, `dispute_task_063`, `dispute_task_064`, `dispute_task_065`, `dispute_task_066`, `dispute_task_067`, `dispute_task_068`, `dispute_task_069`, `dispute_task_070`, `dispute_task_071`, `dispute_task_072` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// SSOT: CLRTY_SUBSTRATE/boot/clarity_spark_merchant_disputes.json

module MisMerchantDisputePhaseD {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;

  outcome dispute_task_061(ctx: Bytes) {
    // DSP-061 phase D
    require ctx != @0;
    constraint dispute_task_061_bound == true;
  }

  outcome dispute_task_062(ctx: Bytes) {
    // DSP-062 phase D
    require ctx != @0;
    constraint dispute_task_062_bound == true;
  }

  outcome dispute_task_063(ctx: Bytes) {
    // DSP-063 phase D
    require ctx != @0;
    constraint dispute_task_063_bound == true;
  }

  outcome dispute_task_064(ctx: Bytes) {
    // DSP-064 phase D
    require ctx != @0;
    constraint dispute_task_064_bound == true;
  }

  outcome dispute_task_065(ctx: Bytes) {
    // DSP-065 phase D
    require ctx != @0;
    constraint dispute_task_065_bound == true;
  }

  outcome dispute_task_066(ctx: Bytes) {
    // DSP-066 phase D
    require ctx != @0;
    constraint dispute_task_066_bound == true;
  }

  outcome dispute_task_067(ctx: Bytes) {
    // DSP-067 phase D
    require ctx != @0;
    constraint dispute_task_067_bound == true;
  }

  outcome dispute_task_068(ctx: Bytes) {
    // DSP-068 phase D
    require ctx != @0;
    constraint dispute_task_068_bound == true;
  }

  outcome dispute_task_069(ctx: Bytes) {
    // DSP-069 phase D
    require ctx != @0;
    constraint dispute_task_069_bound == true;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
