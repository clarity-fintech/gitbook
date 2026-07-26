# Ecosystem map

```
Cursor MIS rules  →  mis_code_index (tip of spear)
        ↓
Boot catalogs + `.mis` corpus  →  bin/misc verify
        ↓
mis_ml_filter + structure verify
        ↓
Language GitBook  →  docs/gitbook/moniversive/
```

| Layer | Entry |
|-------|-------|
| Rules | `.cursor/rules/moniversive-clrty.mdc`, `mis-code-index.mdc`, `gitbook-moniversive-language.mdc` |
| Code index | `CLRTY_SUBSTRATE/boot/mis_code_index.json` · `clrty_getMisCodeIndex` |
| Generated catalog | [catalog/README.md](../catalog/README.md) · `make gitbook-moniversive-build` |
| Language boundary | [language/boundary-clrty-vs-mis.md](../language/boundary-clrty-vs-mis.md) |
| Language root | `CLRTY_SUBSTRATE/boot/moniversive_language_root.json` |
| Ecosystem repos (40) | `CLRTY_SUBSTRATE/boot/mis_ecosystem_repos_manifest.json` |
| Static ML kernel | [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML) |
| Full backlinks | [guides/static-ml-backlinks.md](../guides/static-ml-backlinks.md) |
| Learning path | [learn/static-ml-learning-path.md](../learn/static-ml-learning-path.md) |
| GitBook | `docs/gitbook/moniversive/` → [clarity-fintech/gitbook](https://github.com/clarity-fintech/gitbook) |
| Beginners | [BeginnersGuide](../BeginnersGuide/README.md) |


## Workspace (permanent)

- Home: `moniversive/workspace`
- Packages: `moniversive/packages/` (`.mis`)
- Sync: `make moniversive-sync`
- `python/workspace` is a symlink to `moniversive/workspace` (legacy path only).


## Full MIS taxonomy

See [taxonomy/README.md](../taxonomy/README.md) — mis_core / mis_crypto / mis_ml / mis_chain / mis_lang + recursion, routing, superdynamic.
