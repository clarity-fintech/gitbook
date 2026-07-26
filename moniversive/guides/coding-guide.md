# Coding guide — Moniversive / MIS

> Generated 2026-07-26T19:03:01Z · canonical teach-yourself entry

## Start here (teach-yourself)

1. **[How to code in MIS](../education/how-to-code-in-mis.md)** — full lesson track (read → write → check)
2. **[Coding exercises](../education/coding-exercises.md)** — hands-on checklist
3. [Syntax](../language/syntax.md) · [Invariants](../language/invariants.md) · [Outcomes](../language/outcomes.md)
4. [Compiler (`misc`)](../execution/compiler.md) · [Cheatsheets](../learn/cheatsheets.md)

## Daily commands

```bash
bin/misc path.mis --check --compact-letters
make misc-build
make mis-ml-check
```

## Study corpus

| Resource | Purpose |
| --- | --- |
| [Education showcase](../education/mis-showcase.md) | **17** runnable `.mis` files |
| [Per-file sources](../catalog/sources/README.md) | Excerpts + symbol lists |
| [Full index](../catalog/mis-sources-full-index.md) | All **260** indexed `.mis` rows |
| [Taxonomy](../taxonomy/README.md) | Where new modules belong |

## Org repos (kernels & kits)

| Need | Repo |
| --- | --- |
| Kernel | [CLRTY-MIS-Kernel](https://github.com/clarity-fintech/CLRTY-MIS-Kernel) |
| Static ML | [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML) |
| Developer kit | [developer_kit](https://github.com/clarity-fintech/developer_kit) |
| GitBook source | [clarity-fintech/gitbook](https://github.com/clarity-fintech/gitbook) → `moniversive/` |

Regenerate language docs: `make gitbook-moniversive-build` · publish: `make gitbook-publish`

Author **`.mis` only** for application logic; host Python is verify/bootstrap, not new product code.
