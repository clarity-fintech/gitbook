# Operational rulebook (Sections I–VI)

## I — Language
- `.mis` canonical (`.clrty` legacy); EMBED `3..=6`; letter-hash via `clrtyc`.
- Register every new surface in `mis_code_index.json` before merge.
- Place work in taxonomy: `mis_core` | `mis_crypto` | `mis_ml` | `mis_chain` | `mis_lang`.

## II — Settlement
- Authority: **clrty-1 / chain 1202**.
- External chains are intake until graduated.

## III — Catalog continuity
- Static-ML continuous **1..=1025**.
- Framework taxonomy SSOT: `CLRTY_SUBSTRATE/boot/mis_framework_taxonomy.json`.

## IV — Recursion / Routing / Superdynamic
- Recursion: bounded tail-fold or ZK-IVC only (`MisRecursion.mis`).
- Routing: SPSC + bitwise `mis.select` (`MisRouter.mis`).
- Superdynamic: dynamic values inside static arenas (`MisSuperdynamic.mis`).

## V — RPC / nodes / fees
- Gateway methods listed in language root + methods manifest.
- Surfaces own fee files; no live `SLOT_MS` / L01 bps changes unless requested.

## VI — Verify
```bash
make moniversive-sync
make mis-ml-filter
make mis-ml-structure
make mis-ml-check
```
