# `mis_simd`

Family: **`mis_core`** — MIS Execution & Engine Core

512-bit vectorization (AVX-512 / ARM Neon) — eliminate warp divergence

Author under `moniversive/` as `.mis`. Resolve via `clrty_getMisCodeIndex`. Prefer branchless `mis.select` / `mis.invariant` over exceptions.

```bash
bin/misc moniversive/framework/mis_core.mis --check --compact-letters
```
