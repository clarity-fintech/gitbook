# MIS Execution & Engine Core (`mis_core`)

Primary execution, state machine, and hardware-abstraction layer on clrty-1 nodes.

| Branch | Role |
|--------|------|
| `mis_kernel` | Low-level register-based branchless zero-overhead routines |
| `mis_state` | Deterministic lock-free state tree mutations (mis_dict / mis_set) |
| `mis_simd` | 512-bit vectorization (AVX-512 / ARM Neon) — eliminate warp divergence |
| `mis_mem` | Heapless arenas, clrty_mpx shadow stack, lock-free SPSC queues |
| `mis_hw` | PCIe ring buffers, clflush, NVMe DMA bypass, rdtsc cycle tracking |

## Branch pages

* [`mis_kernel`](../framework/mis_kernel.md) — Low-level register-based branchless zero-overhead routines
* [`mis_state`](../framework/mis_state.md) — Deterministic lock-free state tree mutations (mis_dict / mis_set)
* [`mis_simd`](../framework/mis_simd.md) — 512-bit vectorization (AVX-512 / ARM Neon) — eliminate warp divergence
* [`mis_mem`](../framework/mis_mem.md) — Heapless arenas, clrty_mpx shadow stack, lock-free SPSC queues
* [`mis_hw`](../framework/mis_hw.md) — PCIe ring buffers, clflush, NVMe DMA bypass, rdtsc cycle tracking

Module: `moniversive/framework/mis_core.mis`  
Settlement: clrty-1 / 1202 · Extension: `.mis`
