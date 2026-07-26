# High-level ergonomics (Python-like → MIS)

> Generated 2026-07-26T18:43:46Z · compile to static **`.mis`** / `.clrty` kernels · **`bin/misc`**

| High-level concept | Python | MIS (authoring) | Primitive |
| --- | --- | --- | --- |
| Variable | `x = 100` | `let x: mis_int = 100` | static register |
| Branchless branch | `if c: x=a else: x=b` | `x = mis.select(c, a, b)` | SIMD mask |
| Guard | `assert bal >= amt` | `mis.invariant(bal >= amt)` | compile-time guard |
| Loop / map | `for x in xs:` | `mis.vector_map(xs, kernel_fn)` | unrolled SIMD |
| Function | `def transfer(...):` | `outcome transfer` / `fn transfer` | `mis_kernel` |

## Token transfer (conceptual)

Python uses exceptions; MIS uses **invariants** and **branchless** arithmetic, then atomic store.

```mis
// Author in .mis — check with bin/misc
outcome transfer_checked:
  mis.invariant(sender_bal >= amount);
  new_sender = sender_bal - amount;
  new_recv = recv_bal + amount;
  mis.store(sender, new_sender);
  mis.store(recipient, new_recv);
```

## Core mechanics

1. **Branchless abstractions** — `mis.select(mask, a, b)` instead of runtime `if/else` jumps.
2. **Invariants over exceptions** — `mis.invariant()` / `invariant` keyword in `.mis`.
3. **Bounded collections** — `mis_set`, `mis_dict`, `mis_array` with compile-time capacity.

Module reference: `languages/mis-ml/mis/HighLevelErgonomics.mis` · [collections & concurrency](collections-concurrency.md) · [definitions & sets](definitions-variables-sets.md).

```bash
bin/misc moniversive/framework/mis_lang.mis --check --compact-letters
make misc-build
```
