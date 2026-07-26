# `moniversive/framework/MisEngineRoot.mis`

> Generated 2026-07-26T18:24:17Z · module **`MisEngineRoot`** · 29 lines

```bash
bin/misc moniversive/framework/MisEngineRoot.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `extension_mis:`, `kernel_is_misc:`, `family_mis_core:` |
| Outcomes | `load_root_engine`, `mare_pipeline`, `assert_kernel_misc` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive deep root — letter-hash
// Engine root loader — root `.mis` dotfile + MARE / opcode pipeline

module MisEngineRoot {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant family_mis_core: taxonomy_family == mis_core;

  outcome load_root_engine(path: Bytes) {
    require path != @0;
    constraint engine_root_loaded == true;
  }

  outcome mare_pipeline(stage: Bytes) {
    require stage != @0;
    constraint mare_bound == true;
  }

  outcome assert_kernel_misc() {
    constraint compiler_kernel == misc;
    constraint active_kernel == misc;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
