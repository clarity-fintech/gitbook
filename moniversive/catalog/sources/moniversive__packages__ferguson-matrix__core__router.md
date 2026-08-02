# `moniversive/packages/ferguson-matrix/core/router.mis`

> Generated 2026-08-02T12:03:42Z · module **`AdaptiveRouter`** · 44 lines

```bash
bin/misc moniversive/packages/ferguson-matrix/core/router.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `amr_weight_speed:`, `amr_weight_accuracy:`, `amr_weight_context:`, `amr_weight_cost:` |
| Outcomes | `score`, `select`, `routeToRegistry` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Ferguson Matrix Universal ML Execution Layer — Moniversive Invariant Static (MIS)
// Settlement: clrty-1 / 1202 · Compiler: bin/misc --check --compact-letters
// Surface: https://monitor.clarity-fintech.com/uiquio/ferguson-matrix
// SSOT harvest: seo-kit-second/config/nano-harvest-192.json

module AdaptiveRouter {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant amr_weight_speed: router_weight_speed == 0.25;
  invariant amr_weight_accuracy: router_weight_accuracy == 0.35;
  invariant amr_weight_context: router_weight_context_fit == 0.25;
  invariant amr_weight_cost: router_weight_cost_efficiency == 0.15;

  outcome score(model: Bytes, chunk: Bytes, context: Bytes) {
    require model != @0;
    require chunk != @0;
    require context != @0;
    constraint composite_score == true;
    constraint speed_weight == 0.25;
    constraint accuracy_weight == 0.35;
    constraint context_fit_weight == 0.25;
    constraint cost_efficiency_weight == 0.15;
  }

  outcome select(chunk: Bytes, context: Bytes) {
    require chunk != @0;
    require context != @0;
    constraint highest_score_model == true;
    constraint dynamic_routing == true;
    constraint entropy_filter_applied == true;
    constraint context_pruning_applied == true;
  }

  outcome routeToRegistry(program_id: Bytes) {
    require program_id != @0;
    constraint nano_harvest_192_bind == true;
    constraint registry_ssot == seo_kit_second_config_nano_harvest_192_json;
  }

  signal ModelSelected(program_id: Bytes, score: f64);
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
