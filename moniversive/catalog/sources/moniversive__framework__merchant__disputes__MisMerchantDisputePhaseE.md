# `moniversive/framework/merchant/disputes/MisMerchantDisputePhaseE.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisMerchantDisputePhaseE`** · 129 lines

```bash
bin/misc moniversive/framework/merchant/disputes/MisMerchantDisputePhaseE.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `settlement_chain:`, `kernel_is_misc:` |
| Outcomes | `dispute_task_081`, `dispute_task_082`, `dispute_task_083`, `dispute_task_084`, `dispute_task_085`, `dispute_task_086`, `dispute_task_087`, `dispute_task_088`, `dispute_task_089`, `dispute_task_090`, `dispute_task_091`, `dispute_task_092` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// SSOT: CLRTY_SUBSTRATE/boot/clarity_spark_merchant_disputes.json

module MisMerchantDisputePhaseE {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;

  outcome dispute_task_081(ctx: Bytes) {
    // DSP-081 phase E
    require ctx != @0;
    constraint dispute_task_081_bound == true;
  }

  outcome dispute_task_082(ctx: Bytes) {
    // DSP-082 phase E
    require ctx != @0;
    constraint dispute_task_082_bound == true;
  }

  outcome dispute_task_083(ctx: Bytes) {
    // DSP-083 phase E
    require ctx != @0;
    constraint dispute_task_083_bound == true;
  }

  outcome dispute_task_084(ctx: Bytes) {
    // DSP-084 phase E
    require ctx != @0;
    constraint dispute_task_084_bound == true;
  }

  outcome dispute_task_085(ctx: Bytes) {
    // DSP-085 phase E
    require ctx != @0;
    constraint dispute_task_085_bound == true;
  }

  outcome dispute_task_086(ctx: Bytes) {
    // DSP-086 phase E
    require ctx != @0;
    constraint dispute_task_086_bound == true;
  }

  outcome dispute_task_087(ctx: Bytes) {
    // DSP-087 phase E
    require ctx != @0;
    constraint dispute_task_087_bound == true;
  }

  outcome dispute_task_088(ctx: Bytes) {
    // DSP-088 phase E
    require ctx != @0;
    constraint dispute_task_088_bound == true;
  }

  outcome dispute_task_089(ctx: Bytes) {
    // DSP-089 phase E
    require ctx != @0;
    constraint dispute_task_089_bound == true;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
