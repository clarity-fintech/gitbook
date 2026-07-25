# `mis_hw`

Family: **`mis_core`** — MIS Execution & Engine Core

PCIe ring buffers, clflush, NVMe DMA bypass, rdtsc cycle tracking

Author under `moniversive/` as `.mis`. Resolve via `clrty_getMisCodeIndex`. Prefer branchless `mis.select` / `mis.invariant` over exceptions.

```bash
bin/misc moniversive/framework/mis_core.mis --check --compact-letters
```
