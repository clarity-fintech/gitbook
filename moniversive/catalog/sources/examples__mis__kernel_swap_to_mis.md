# `examples/mis/kernel_swap_to_mis.mis`

> Generated 2026-07-26T18:58:00Z · module **`KernelSwapToMis`** · 53 lines

```bash
bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `extension_mis:`, `kernel_is_misc:`, `active_kernel_only:`, `no_python_host:`, `no_foreign_kernel:`, `file_type_swapped:` |
| Outcomes | `assert_extension_mis`, `assert_kernel_misc`, `refuse_foreign`, `letter_hash`, `settle_clrty1`, `swap_file_type` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive deep root — letter-hash
// Real MIS module: file-type + kernel swap → MIS (`misc`) only.
// Compile: bin/misc path.mis --check --compact-letters
//       or bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters

module KernelSwapToMis {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant active_kernel_only: active_kernel == misc;
  invariant no_python_host: python3_compiler == false;
  invariant no_foreign_kernel: foreign_kernel_active == false;
  invariant file_type_swapped: file_type == mis;

  outcome assert_extension_mis(path: Bytes) {
    require path != @0;
    constraint source_extension == mis;
    constraint file_type == mis;
  }

  outcome assert_kernel_misc() {
    constraint compiler_kernel == misc;
    constraint active_kernel == misc;
  }

  outcome refuse_foreign(name: Bytes) {
    require name != @0;
    constraint foreign_refused == true;
  }

  outcome letter_hash(source: Bytes) {
    require source != @0;
    constraint letter_root != @0;
  }

  outcome settle_clrty1(intent: Bytes) {
    require intent != @0;
    constraint chain_id == 1202;
    constraint settlement_network == clrty_1;
  }

  outcome swap_file_type(from_ext: Bytes, to_ext: Bytes) {
    require from_ext != @0;
    require to_ext != @0;
    constraint file_type == mis;
    constraint source_extension == mis;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
