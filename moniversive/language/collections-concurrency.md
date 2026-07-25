# Collections & concurrency

MIS collections prefer **bounded**, letter-hashed structures over unbounded dynamic growth.

| Primitive | Role |
|-----------|------|
| `mis_dict` | Keyed insert / lookup (kernel pack) |
| `mis_set` | Membership |
| `vector_map` | Indexed push / get |
| Atomics | `AtomicLoadAcq` / `AtomicStoreRel` / `AtomicCas` / `AtomicFetchAdd` |
| Locks | Spin / RW (shared + exclusive) |
| Channels | Send / recv with tick-bounded waits |

Catalog: kernels **776–875** · module `MisNativeKernels.clrty` · RPC `clrty_getMisNativeKernels`.
