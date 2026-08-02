# `moniversive/framework/e2e/clarity.mis.branch.igcts.contract.mis`

> Generated 2026-07-29T03:15:28Z · module **`clarity`** · 19 lines

```bash
bin/misc moniversive/framework/e2e/clarity.mis.branch.igcts.contract.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `core_principle:`, `anchoring_immutable:`, `latency_cap:`, `zero_functional_loss:`, `economic_gravity:` |
| Outcomes | `attest_igcts` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// IGCTS — immutable global contract tracking (routed OR permanently recorded)

module clarity.mis.branch.igcts.contract {

  invariant core_principle: igcts_routed_or_recorded == true;
  invariant anchoring_immutable: igcts_record_immutable == true;
  invariant latency_cap: global_latency_ceiling_ms <= 399.0;
  invariant zero_functional_loss: transactional_state_integrity_loss_percent == 0;
  invariant economic_gravity: igcts_better_execution_routing == true;

  outcome attest_igcts(ctx: Bytes) {
    require ctx != @0;
    constraint igcts_routed_or_recorded == true;
    constraint igcts_primary_anchor_clrty1 == true;
    constraint igcts_mis_state_trees == true;
    constraint global_latency_ceiling_ms <= 399.0;
    constraint igcts_coverage_scan_100_analyze_5_exec_0_5 == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
