# `moniversive/framework/merchant/disputes/MisMerchantDisputePhaseA.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisMerchantDisputePhaseA`** · 99 lines

```bash
bin/misc moniversive/framework/merchant/disputes/MisMerchantDisputePhaseA.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `settlement_chain:`, `kernel_is_misc:` |
| Outcomes | `dispute_task_001`, `dispute_task_002`, `dispute_task_003`, `dispute_task_004`, `dispute_task_005`, `dispute_task_006`, `dispute_task_007`, `dispute_task_008`, `dispute_task_009`, `dispute_task_010`, `dispute_task_011`, `dispute_task_012` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// SSOT: CLRTY_SUBSTRATE/boot/clarity_spark_merchant_disputes.json

module MisMerchantDisputePhaseA {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;

  outcome dispute_task_001(ctx: Bytes) {
    // DSP-001 phase A
    require ctx != @0;
    constraint dispute_task_001_bound == true;
  }

  outcome dispute_task_002(ctx: Bytes) {
    // DSP-002 phase A
    require ctx != @0;
    constraint dispute_task_002_bound == true;
  }

  outcome dispute_task_003(ctx: Bytes) {
    // DSP-003 phase A
    require ctx != @0;
    constraint dispute_task_003_bound == true;
  }

  outcome dispute_task_004(ctx: Bytes) {
    // DSP-004 phase A
    require ctx != @0;
    constraint dispute_task_004_bound == true;
  }

  outcome dispute_task_005(ctx: Bytes) {
    // DSP-005 phase A
    require ctx != @0;
    constraint dispute_task_005_bound == true;
  }

  outcome dispute_task_006(ctx: Bytes) {
    // DSP-006 phase A
    require ctx != @0;
    constraint dispute_task_006_bound == true;
  }

  outcome dispute_task_007(ctx: Bytes) {
    // DSP-007 phase A
    require ctx != @0;
    constraint dispute_task_007_bound == true;
  }

  outcome dispute_task_008(ctx: Bytes) {
    // DSP-008 phase A
    require ctx != @0;
    constraint dispute_task_008_bound == true;
  }

  outcome dispute_task_009(ctx: Bytes) {
    // DSP-009 phase A
    require ctx != @0;
    constraint dispute_task_009_bound == true;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
