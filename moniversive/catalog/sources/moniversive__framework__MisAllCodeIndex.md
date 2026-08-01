# `moniversive/framework/MisAllCodeIndex.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisAllCodeIndex`** · 28 lines

```bash
bin/misc moniversive/framework/MisAllCodeIndex.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `mis_first:`, `extension_mis:` |
| Outcomes | `assert_mis_first`, `resolve_by_id`, `refuse_python_authoring` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive deep root — letter-hash
// MIS-first code index — all .mis sources tip of spear

module MisAllCodeIndex {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant mis_first: index_starts_with_mis_sources == true;
  invariant extension_mis: source_extension == mis;

  outcome assert_mis_first(index_digest: Bytes) {
    require index_digest != @0;
    constraint mis_sources_first == true;
  }

  outcome resolve_by_id(entry_id: Bytes) {
    require entry_id != @0;
    constraint symbol_resolved == true;
  }

  outcome refuse_python_authoring(path: Bytes) {
    require path != @0;
    constraint python_refused == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
