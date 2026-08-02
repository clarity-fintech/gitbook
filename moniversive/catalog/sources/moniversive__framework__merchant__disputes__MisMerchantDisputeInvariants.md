# `moniversive/framework/merchant/disputes/MisMerchantDisputeInvariants.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisMerchantDisputeInvariants`** · 509 lines

```bash
bin/misc moniversive/framework/merchant/disputes/MisMerchantDisputeInvariants.mis --check --compact-letters
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

module MisMerchantDisputeInvariants {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;

  outcome dispute_task_001(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_001_bound == true;
  }

  outcome dispute_task_002(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_002_bound == true;
  }

  outcome dispute_task_003(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_003_bound == true;
  }

  outcome dispute_task_004(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_004_bound == true;
  }

  outcome dispute_task_005(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_005_bound == true;
  }

  outcome dispute_task_006(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_006_bound == true;
  }

  outcome dispute_task_007(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_007_bound == true;
  }

  outcome dispute_task_008(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_008_bound == true;
  }

  outcome dispute_task_009(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_009_bound == true;
  }

  outcome dispute_task_010(ctx: Bytes) {
    require ctx != @0;
    constraint dispute_task_010_bound == true;
  }

  outcome dispute_task_011(ctx: Bytes) {
    require ctx != @0;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
