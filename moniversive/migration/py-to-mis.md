# Python → MIS cutover (CLRTY-1)

Compiler is **`bin/misc`** (MIS kernel), not Python.

All CLRTY-1 coding surfaces moved from `.py` to **`.mis`**.

| Artifact | Path |
|----------|------|
| MIS-first code index | `CLRTY_SUBSTRATE/boot/mis_code_index.json` |
| Conversion map | `CLRTY_SUBSTRATE/boot/mis_py_to_mis_conversion_map.json` |
| Migrated modules | `moniversive/migrated/**/*.mis` |
| Legacy Python archive | `moniversive/legacy_python_tree/` |
| All-code index module | `moniversive/framework/MisAllCodeIndex.mis` |
| Coding commands | `CLRTY_SUBSTRATE/boot/clrty1_coding_commands_manifest.json` |
| Notion / Prism | `CLRTY_SUBSTRATE/boot/mis_notion_prism_manifest.json` |
| Mainnet | `CLRTY_SUBSTRATE/boot/mainnet_listing_config.json` (stamped `.mis`) |
| Prism sync | `CLRTY_SUBSTRATE/boot/prism_repo_sync_manifest.json` |

Former `.py` files are **RETIRED stubs** that print the canonical `.mis` path (except host bootstrap).

```bash
bin/misc moniversive/framework/MisAllCodeIndex.mis --check --compact-letters
make mis-ml-check
```
