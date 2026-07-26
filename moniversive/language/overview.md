# Language overview

> Generated 2026-07-26T18:58:16Z

Moniversive is a deterministic **execution + invariant intelligence** layer:

| Pillar | Meaning |
| --- | --- |
| **Code = intent** | Sources declare outcomes and invariants |
| **Execution = optimized outcome** | Transitions satisfy constraints |
| **State = verified invariants** | Every commit re-checks the invariant set |

## Core protocol specs

**[`gitbook.moniversive.mis`](../protocol/gitbook-moniversive-mis-core-specs.md)** — required reading:

- Mathematical **tensor** definitions
- **Q64.64** fixed-point math rules (+ Q8.24 / lane formats)
- **Invariant state** frameworks

## Authoring

| | |
| --- | --- |
| Extension | **`.mis`** (`.clrty` legacy surfaces) |
| Compiler | **`bin/misc`** |
| Index | `mis_code_index.json` · id **`gitbook.moniversive.mis`** for core protocol doc |

```bash
bin/misc moniversive/framework/mis_ml.mis --check --compact-letters
```

Next: [full language breakdown](full-language-breakdown.md) · [high-level ergonomics](high-level-ergonomics.md)
