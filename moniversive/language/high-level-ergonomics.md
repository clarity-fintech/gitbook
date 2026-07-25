# High-level ergonomics (MIS `.mis`)

Authoring is **Moniversive MIS** under `moniversive/` — not Python.

| Intent | MIS / `.mis` |
|--------|----------------|
| Check module | `bin/misc path.mis --check --compact-letters` |
| Invariants | `invariant name: expr;` |
| Prefer no exceptions | branchless select + compile-time guards |
| Packages | `moniversive/packages/*/….mis` |
| Workspace | `moniversive/workspace` (replaces `python/workspace`) |
| Ergonomics module | `languages/mis-ml/mis/HighLevelErgonomics.mis` |

Settlement: **clrty-1 / 1202**. Resolve symbols via `mis_code_index.json` / `clrty_getMisCodeIndex`.

```bash
make moniversive-sync
bin/misc moniversive/packages/clrty-cif/ClrtyCif.mis --check --compact-letters
```
