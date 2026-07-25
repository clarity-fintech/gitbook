# Ecosystem map

```
Cursor MIS rules  →  mis_code_index (tip of spear)
        ↓
Boot catalogs 1..=1025  →  .clrty surfaces
        ↓
mis_ml_filter + structure verify
        ↓
RPC gateway  →  clrty-1 / 1202
```

| Layer | Entry |
|-------|-------|
| Rules | `.cursor/rules/moniversive-clrty.mdc`, `mis-code-index.mdc` |
| Code index | `CLRTY_SUBSTRATE/boot/mis_code_index.json` · `clrty_getMisCodeIndex` |
| Language root | `CLRTY_SUBSTRATE/boot/moniversive_language_root.json` |
| GitBook | `docs/gitbook/moniversive/` |
| Beginners | [BeginnersGuide](../BeginnersGuide/README.md) |


## Workspace (permanent)

- Home: `moniversive/workspace`
- Packages: `moniversive/packages/` (`.mis`)
- Sync: `make moniversive-sync`
- `python/workspace` is a symlink to `moniversive/workspace` (legacy path only).


## Full MIS taxonomy

See [taxonomy/README.md](../taxonomy/README.md) — mis_core / mis_crypto / mis_ml / mis_chain / mis_lang + recursion, routing, superdynamic.
