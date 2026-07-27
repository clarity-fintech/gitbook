# Kernel swap to MIS

Canonical demo for **MIS-only authoring** and **`misc` as the sole active compiler kernel** on **CLRTY-1 / chain 1202**.

| Surface | Path |
| --- | --- |
| Root demo | [`path.mis`](../../../path.mis) |
| Example twin | [`examples/mis/kernel_swap_to_mis.mis`](../../../examples/mis/kernel_swap_to_mis.mis) |
| Active-kernel policy | [`CLRTY_SUBSTRATE/boot/mis_kernel_active_only.json`](../../../CLRTY_SUBSTRATE/boot/mis_kernel_active_only.json) |
| MIS compiler module | [`moniversive/framework/misc.mis`](../../../moniversive/framework/misc.mis) |
| Code index (SSOT) | [`CLRTY_SUBSTRATE/boot/mis_code_index.json`](../../../CLRTY_SUBSTRATE/boot/mis_code_index.json) — ids `idx-mis-kernel-swap-path`, `idx-mis-kernel-swap-example`, `idx-mis-kernel-active-only`, `idx-mis-misc-kernel` |
| CLRTY-1 fleet | [`docs/gitbook/clrty-1/catalog/clarity-fintech-fleet-handbook.md`](../../clrty-1/catalog/clarity-fintech-fleet-handbook.md) |
| Link index | [`CLRTY_SUBSTRATE/boot/clrty_link_index.json`](../../../CLRTY_SUBSTRATE/boot/clrty_link_index.json) |

## What this module proves

`KernelSwapToMis` binds:

- **File type** → `.mis` (`extension_mis`, `file_type_swapped`)
- **Kernel** → `misc` only (`kernel_is_misc`, `active_kernel_only`)
- **Foreign kernels refused** (`no_foreign_kernel`, `refuse_foreign`) — policy exit **3**
- **Letter-hash** (`letter_hash_bound`) — **not** EMBED gates 3..=6 (retired in fleet `.mis`)
- **Settlement** → `clrty-1` / **1202** (`settlement_chain`, `settle_clrty1`)

## Compile (required check)

```bash
bin/misc path.mis --check --compact-letters
bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters
```

Expect JSON with `"ok": true`, `"kernel": "misc"`, `"module": "KernelSwapToMis"`, `"embed_present": false`.

## Cross-index maintenance

After changing demo modules or policy JSON:

```bash
python3 scripts/cross_index_mis_clrty1_kernel.py
python3 scripts/mis-ml/verify_mis_code_index.py
make mis-ml-check
```

## RPC / catalog

- `clrty_getMisCodeIndex` — catalog path above (Moniversive tip-of-spear index)
- `clrty_getRepoCommands` — clarity-fintech MIS fleet command mesh (`CLRTY_SUBSTRATE/boot/clrty_fintech_repo_commands_manifest.json`)

## GitBook

This page is listed in `CLRTY_SUBSTRATE/boot/clrty1_gitbook_catalog.json` as `examples/kernel-swap-to-mis.md`. Publish via `make gitbook-moniversive-build` and `make gitbook-publish` (Clarity-Fintech mirror).
