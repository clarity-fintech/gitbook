# `moniversive/framework/misc.mis`

> Generated 2026-07-26T18:58:58Z · module **`Misc`** · 43 lines

```bash
bin/misc moniversive/framework/misc.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `extension_mis:`, `kernel_is_misc:`, `active_kernel_only:`, `no_python_host:`, `no_foreign_kernel:` |
| Outcomes | `kernel_dispatch`, `letter_hash`, `compile_check`, `emit_graph`, `reject_foreign_kernel` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive deep root — letter-hash
// misc — sole active MIS kernel compiler (foreign kernels hard-error)

module Misc {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant active_kernel_only: active_kernel == misc;
  invariant no_python_host: python3_compiler == false;
  invariant no_foreign_kernel: foreign_kernel_active == false;

  outcome kernel_dispatch(kernel_id: u32, payload: Bytes) {
    require kernel_id >= 1;
    require kernel_id <= 100;
    require payload != @0;
    constraint kernel_executed == true;
  }

  outcome letter_hash(source: Bytes) {
    require source != @0;
    constraint letter_root != @0;
  }

  outcome compile_check(path: Bytes) {
    require path != @0;
    constraint check_ok == true;
  }

  outcome emit_graph(path: Bytes) {
    require path != @0;
    constraint graph_schema == clrty_mis_ml_execution_graph_v2;
  }

  outcome reject_foreign_kernel(name: Bytes, evidence: Bytes) {
    require name != @0;
    require evidence != @0;
    constraint foreign_refused == true;
    constraint active_kernel == misc;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
