# L1 + invariant validation

CLRTY-1 consensus treats MIS-ML invariants as first-class inclusion predicates:

| Layer | Role |
|-------|------|
| Mempool | Drop txs that statically contradict known invariants |
| Block build | Re-simulate outcomes; reject violating state roots |
| Finality | Checkpoint invariant digests with supply / treasury sinks |

This is the **full L1 architecture** hook: consensus **+** invariant validation. Bridged EVM mirrors (Phase 10) may still exist as intake, but authority remains `clrty-1`.
