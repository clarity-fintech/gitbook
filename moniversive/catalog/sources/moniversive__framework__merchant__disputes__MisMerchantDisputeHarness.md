# `moniversive/framework/merchant/disputes/MisMerchantDisputeHarness.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisMerchantDisputeHarness`** · 33 lines

```bash
bin/misc moniversive/framework/merchant/disputes/MisMerchantDisputeHarness.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `settlement_chain:`, `dispute_harness_100:` |
| Outcomes | `bind_ingestion_layer`, `bind_evidence_bundler`, `bind_metric_viewer`, `bind_calendar_schedule`, `assert_dispute_spec_complete` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// SSOT: CLRTY_SUBSTRATE/boot/clarity_spark_merchant_disputes.json

module MisMerchantDisputeHarness {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant dispute_harness_100: harness_task_count == 100;

  outcome bind_ingestion_layer(h: Bytes) {
    require h != @0;
    constraint chargeback_webhook_bound == true;
  }

  outcome bind_evidence_bundler(h: Bytes) {
    require h != @0;
    constraint compelling_evidence_bundle_bound == true;
  }

  outcome bind_metric_viewer(h: Bytes) {
    require h != @0;
    constraint dispute_ratio_metric_bound == true;
  }

  outcome bind_calendar_schedule(h: Bytes) {
    require h != @0;
    constraint representment_deadline_calendar_bound == true;
  }

  outcome assert_dispute_spec_complete(h: Bytes) {
    require h != @0;
    constraint harness_task_count == 100;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
