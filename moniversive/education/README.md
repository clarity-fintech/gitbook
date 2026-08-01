# Education — learn MIS (`.mis`) as a language

> Generated 2026-07-29T03:15:30Z · **language only** · compiler **`bin/misc`**

This track teaches **Moniversive Invariant Static** as a programming language: modules, invariants, outcomes, state, and signals. It does not cover products, institutions, or distributed ledgers — only how to read and write `.mis` and verify it with **`bin/misc`**.

## Reading order (multi-chapter)

| # | Chapter | What you gain |
| --- | --- | --- |
| 1 | [Language mindset](01-language-mindset.md) | Why invariants + outcomes replace ad-hoc control flow |
| 2 | [Module anatomy](02-module-anatomy.md) | File shape, naming, comments, one-module rule |
| 3 | [Invariants (deep)](03-invariants-deep.md) | Global truth, caps, relations, worked lines |
| 4 | [Outcomes (deep)](04-outcomes-deep.md) | `require` / `constraint` patterns, composition |
| 5 | [State, signals, fail](05-state-signals-fail.md) | Persistent fields and observable events |
| 6 | [Types & data](06-types-and-data.md) | `Bytes`, integers, `Account`, `@0` |
| 7 | [Worked examples](07-worked-examples.md) | Full modules with paragraph walkthroughs |
| 8 | [Reading framework `.mis`](08-reading-framework-modules.md) | Recursion, routing, compiler kernel |
| — | [How to code (full track)](how-to-code-in-mis.md) | Consolidated lessons + check commands |
| — | [Exercises](coding-exercises.md) | Practice checklist |

## Runnable corpus

| Resource | Count |
| --- | --- |
| [MIS showcase](mis-showcase.md) | **150** education `.mis` files |
| [Per-file excerpts](../catalog/sources/README.md) | Symbol lists + source previews |

```bash
bin/misc path.mis --check --compact-letters
```
