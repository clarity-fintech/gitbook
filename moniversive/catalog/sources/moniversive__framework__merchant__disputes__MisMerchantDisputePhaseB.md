# `moniversive/framework/merchant/disputes/MisMerchantDisputePhaseB.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisMerchantDisputePhaseB`** · 129 lines

```bash
bin/misc moniversive/framework/merchant/disputes/MisMerchantDisputePhaseB.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `settlement_chain:`, `kernel_is_misc:` |
| Outcomes | `dispute_task_016`, `dispute_task_017`, `dispute_task_018`, `dispute_task_019`, `dispute_task_020`, `dispute_task_021`, `dispute_task_022`, `dispute_task_023`, `dispute_task_024`, `dispute_task_025`, `dispute_task_026`, `dispute_task_027` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// SSOT: CLRTY_SUBSTRATE/boot/clarity_spark_merchant_disputes.json

module MisMerchantDisputePhaseB {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;

  outcome dispute_task_016(ctx: Bytes) {
    // DSP-016 phase B
    require ctx != @0;
    constraint dispute_task_016_bound == true;
  }

  outcome dispute_task_017(ctx: Bytes) {
    // DSP-017 phase B
    require ctx != @0;
    constraint dispute_task_017_bound == true;
  }

  outcome dispute_task_018(ctx: Bytes) {
    // DSP-018 phase B
    require ctx != @0;
    constraint dispute_task_018_bound == true;
  }

  outcome dispute_task_019(ctx: Bytes) {
    // DSP-019 phase B
    require ctx != @0;
    constraint dispute_task_019_bound == true;
  }

  outcome dispute_task_020(ctx: Bytes) {
    // DSP-020 phase B
    require ctx != @0;
    constraint dispute_task_020_bound == true;
  }

  outcome dispute_task_021(ctx: Bytes) {
    // DSP-021 phase B
    require ctx != @0;
    constraint dispute_task_021_bound == true;
  }

  outcome dispute_task_022(ctx: Bytes) {
    // DSP-022 phase B
    require ctx != @0;
    constraint dispute_task_022_bound == true;
  }

  outcome dispute_task_023(ctx: Bytes) {
    // DSP-023 phase B
    require ctx != @0;
    constraint dispute_task_023_bound == true;
  }

  outcome dispute_task_024(ctx: Bytes) {
    // DSP-024 phase B
    require ctx != @0;
    constraint dispute_task_024_bound == true;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
