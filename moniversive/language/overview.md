# Language overview

Moniversive is **not just a language**. It is a deterministic **execution + invariant intelligence** layer:

| Pillar | Meaning |
|--------|---------|
| **Code = Intent** | Sources declare truth and desired outcomes, not ad-hoc side effects |
| **Execution = Optimized outcome** | Runtime selects a transition that satisfies outcomes under constraints |
| **State = Continuously verified invariants** | Every commit re-checks the invariant set |

### File type

```text
example.clrty
```

Legacy `.crty` is renamed to `.clrty`. Solidity `.clrty` is **removed** from the CLRTY monorepo after conversion.

### Core loop

1. Author invariants + outcomes in `.clrty`
2. `clrtyc` emits an execution graph
3. CLRTY-1 consensus validates invariants at inclusion
4. Monetization / wallet / Spark / RPC companies call outcomes — never raw Solidity ABIs
