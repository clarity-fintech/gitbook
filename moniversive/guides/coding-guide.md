# Coding guide — Moniversive / MIS

Canonical language docs for Clarity-Fintech. Source repo: [clarity-fintech/gitbook](https://github.com/clarity-fintech/gitbook) → `moniversive/`.

## Quick path

1. Read [BeginnersGuide](../BeginnersGuide/README.md)
2. Learn [syntax](../language/syntax.md) + [EMBED gates](../language/embed-gates.md)
3. Run `bin/misc` checks (see [compiler](../execution/compiler.md))
4. Migrate Python stubs via [Python → MIS](../migration/py-to-mis.md)
5. Prefer [hand-coding outcomes](../taxonomy/hand-coding.md)

## Org repos

| Need | Repo |
| --- | --- |
| Kernel | [CLRTY-MIS-Kernel](https://github.com/clarity-fintech/CLRTY-MIS-Kernel) |
| Static ML | [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML) |
| Developer kit | [developer_kit](https://github.com/clarity-fintech/developer_kit) |
| Quality gate | [CLRTY-Quality-Gate](https://github.com/clarity-fintech/CLRTY-Quality-Gate) |
| Compiler bridge | [CLRTY-Compiler-Bridge](https://github.com/clarity-fintech/CLRTY-Compiler-Bridge) |
| Full `.mis` catalog | [catalog/mis-sources-full-index.md](../catalog/mis-sources-full-index.md) |

Regenerate language docs: `make gitbook-moniversive-build`

Do **not** clone or sync language docs from personal GitHub accounts.
