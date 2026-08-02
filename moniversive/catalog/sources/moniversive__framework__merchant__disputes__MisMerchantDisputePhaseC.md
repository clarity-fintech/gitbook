# `moniversive/framework/merchant/disputes/MisMerchantDisputePhaseC.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisMerchantDisputePhaseC`** · 159 lines

```bash
bin/misc moniversive/framework/merchant/disputes/MisMerchantDisputePhaseC.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `settlement_chain:`, `kernel_is_misc:` |
| Outcomes | `dispute_task_036`, `dispute_task_037`, `dispute_task_038`, `dispute_task_039`, `dispute_task_040`, `dispute_task_041`, `dispute_task_042`, `dispute_task_043`, `dispute_task_044`, `dispute_task_045`, `dispute_task_046`, `dispute_task_047` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// SSOT: CLRTY_SUBSTRATE/boot/clarity_spark_merchant_disputes.json

module MisMerchantDisputePhaseC {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;

  outcome dispute_task_036(ctx: Bytes) {
    // DSP-036 phase C
    require ctx != @0;
    constraint dispute_task_036_bound == true;
  }

  outcome dispute_task_037(ctx: Bytes) {
    // DSP-037 phase C
    require ctx != @0;
    constraint dispute_task_037_bound == true;
  }

  outcome dispute_task_038(ctx: Bytes) {
    // DSP-038 phase C
    require ctx != @0;
    constraint dispute_task_038_bound == true;
  }

  outcome dispute_task_039(ctx: Bytes) {
    // DSP-039 phase C
    require ctx != @0;
    constraint dispute_task_039_bound == true;
  }

  outcome dispute_task_040(ctx: Bytes) {
    // DSP-040 phase C
    require ctx != @0;
    constraint dispute_task_040_bound == true;
  }

  outcome dispute_task_041(ctx: Bytes) {
    // DSP-041 phase C
    require ctx != @0;
    constraint dispute_task_041_bound == true;
  }

  outcome dispute_task_042(ctx: Bytes) {
    // DSP-042 phase C
    require ctx != @0;
    constraint dispute_task_042_bound == true;
  }

  outcome dispute_task_043(ctx: Bytes) {
    // DSP-043 phase C
    require ctx != @0;
    constraint dispute_task_043_bound == true;
  }

  outcome dispute_task_044(ctx: Bytes) {
    // DSP-044 phase C
    require ctx != @0;
    constraint dispute_task_044_bound == true;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
