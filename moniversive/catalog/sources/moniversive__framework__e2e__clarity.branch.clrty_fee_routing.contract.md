# `moniversive/framework/e2e/clarity.mis.branch.clrty_fee_routing.contract.mis`

> Generated 2026-07-29T03:15:28Z · module **`clarity`** · 18 lines

```bash
bin/misc moniversive/framework/e2e/clarity.mis.branch.clrty_fee_routing.contract.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `fee_extracted_required:`, `distribution_complete_required:`, `latency_cap:`, `no_bypass:`, `zero_functional_loss:` |
| Outcomes | `attest_fee_routing` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// FEE_ROUTING core invariant — mandatory extraction, distribution, latency, no bypass

module clarity.mis.branch.clrty_fee_routing.contract {

  invariant fee_extracted_required: fee_extracted == true;
  invariant distribution_complete_required: distribution_complete == true;
  invariant latency_cap: global_latency_ceiling_ms <= 399.0;
  invariant no_bypass: no_bypass == true;
  invariant zero_functional_loss: transactional_state_integrity_loss_percent == 0;

  outcome attest_fee_routing(ctx: Bytes) {
    require ctx != @0;
    constraint fee_extracted == true;
    constraint distribution_complete == true;
    constraint global_latency_ceiling_ms <= 399.0;
    constraint no_bypass == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
