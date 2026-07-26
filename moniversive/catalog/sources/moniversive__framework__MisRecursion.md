# `moniversive/framework/MisRecursion.mis`

> Generated 2026-07-26T17:14:13Z · module **`MisRecursion`** · 33 lines

```bash
bin/misc moniversive/framework/MisRecursion.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `embed_gates_present:`, `deep_root_moniversive:`, `settlement_chain:`, `extension_mis:` |
| Outcomes | `ivc_recurse_step`, `bounded_recurse_fold`, `assert_max_depth` |
| fn | — |
| EMBED 3..=6 | yes |

## Source (excerpt)

```mis
// Moniversive deep root — letter-hash + EMBED gates 3..=6
// Moniversive Recursion — static tail-fold + ZK-IVC

module MisRecursion {

  embed gates 3..=6 {
    context: "Moniversive Recursion — static tail-fold + ZK-IVC";
    ai: "Push all new work into MIS taxonomy; no dynamic Python packages";
    execution: "ivc_recurse_step ; bounded_recurse_fold ; assert_max_depth";
    capital: "clrty-1 / 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;

  outcome ivc_recurse_step(payload: Bytes) {
    require payload != @0;
    constraint ivc_recurse_step_ok == true;
  }

  outcome bounded_recurse_fold(payload: Bytes) {
    require payload != @0;
    constraint bounded_recurse_fold_ok == true;
  }

  outcome assert_max_depth(payload: Bytes) {
    require payload != @0;
    constraint assert_max_depth_ok == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
