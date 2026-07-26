# `moniversive/framework/mis_kernel.mis`

> Generated 2026-07-26T17:42:34Z · module **`MisKernel`** · 26 lines

```bash
bin/misc moniversive/framework/mis_kernel.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `catalog_band:`, `catalog_band_end:`, `kernel_count:`, `compiler_misc:` |
| Outcomes | `kernel_dispatch`, `assert_pack_crypto`, `assert_pack_math`, `assert_pack_sys` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive deep root — letter-hash
// mis_kernel — MIS native kernel pack entry (band 776..=875); not Python

module MisKernel {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant catalog_band: invariant_band_start == 776;
  invariant catalog_band_end: invariant_band_end == 875;
  invariant kernel_count: kernel_count == 100;
  invariant compiler_misc: compiler_kernel == misc;

  outcome kernel_dispatch(kernel_id: u32, payload: Bytes) {
    require kernel_id >= 1;
    require kernel_id <= 100;
    require payload != @0;
    constraint kernel_executed == true;
  }

  outcome assert_pack_crypto() { constraint crypto_pack_bound == true; }
  outcome assert_pack_math() { constraint math_pack_bound == true; }
  outcome assert_pack_sys() { constraint sys_pack_bound == true; }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
