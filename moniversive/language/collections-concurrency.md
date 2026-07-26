# Collections & concurrency

> Generated 2026-07-26T18:24:57Z · bounded structures · lock-free atomics

| Primitive | Role |
| --- | --- |
| `mis_dict<K,V,N>` | Fixed-capacity map · compile-time allocation |
| `mis_set<T,N>` | Membership · invariant bounds (see [definitions](definitions-variables-sets.md)) |
| `mis_array<T,N>` | Static array · vector kernels |
| `mis.vector_map` | Parallel lane execution |
| `mis_atomic<T>` | `compare_and_store` · hardware barriers |
| Atomics (catalog) | `AtomicLoadAcq` / `AtomicStoreRel` / `AtomicCas` / `AtomicFetchAdd` |

## Example (high-level)

```python
# Documented ergonomic facade → compiles to .clrty / .mis kernels
global_nonce: mis_atomic[u64] = mis.Atomic(0)

@mis_kernel
def increment_nonce_safe(expected: u64) -> u64:
  success, current = mis.compare_and_store(global_nonce, expected, expected + 1)
  mis.invariant(success)
  return current + 1
```

Catalog band **776–875** · RPC `clrty_getMisNativeKernels` · [native kernels](../architecture/native-kernels-776-875.md).
