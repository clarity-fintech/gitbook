# 1 — Language mindset

> Generated 2026-07-29T03:15:30Z

Most languages ask you to describe **steps**: call this, branch here, catch exceptions there. MIS asks you to describe **what must remain true** and **what result you want** under explicit gates. The checker (`bin/misc`) validates that your module is well-formed; the execution model (Static ML) is concerned with schedules that satisfy **`constraint`** lines without breaking **`invariant`** lines.

That shift is the whole language. Once you stop looking for `main()` and start looking for **`module` → `invariant` → `outcome`**, files become predictable. The **150** modules in the [showcase](mis-showcase.md) all follow the same skeleton; differences are domain names and predicate counts, not syntax surprises.

## Code = intent, state = invariants

Think of a module as a small specification document. **`invariant`** paragraphs are laws that hold for every successful transition. **`outcome`** paragraphs are named intents: “when someone invokes `bump`, these preconditions must hold, and afterwards these relations must hold.” You are not writing a loop; you are writing a **contract for one transition** at a time.

This is why MIS feels closer to formal methods than to scripting — but you still author text files and run a familiar CLI check. The ergonomics goal is **local readability**: a reviewer should understand module behavior by scanning invariant names and outcome names without reading a call graph.

## How this differs from mainstream languages (without leaving MIS)

| Mainstream habit | MIS habit |
| --- | --- |
| Class + methods | `module` + `outcome` |
| `if (!ok) throw` | `require` + named `fail` (when you model failure modes) |
| `assert` at end | `constraint` on the post-state |
| Hidden mutable singletons | `state` fields declared in the module |
| Logging / events | `signal` declarations |

You can map ideas from other languages **after** you learn MIS on its own terms. This book keeps that mapping optional so the language stays central.

## What you need installed

Only the **`misc`** checker and a text editor. Typical loop:

```bash
bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters
```

Next: [Module anatomy](02-module-anatomy.md).
