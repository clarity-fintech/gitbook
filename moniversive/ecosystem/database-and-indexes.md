# Database & boot indexes (language filter)

> Generated 2026-07-26T17:24:53Z · MIS surface: `languages/mis-ml/surfaces/DatabaseIndex.clrty` · canonical **`.mis`** authoring

Moniversive indexes boot manifests and link registries under **deep-root** policy (no Solidity paths in the language tree).

## `DatabaseIndex` outcomes (reference)

| Outcome | Role |
| --- | --- |
| `filter_apply` | Rewrite legacy paths; enforce `.mis` / MIS policy |
| `stamp_deep_root` | Stamp manifests with `moniversive` / `mis-ml` |
| `register_code_index` | Register entries in `mis_code_index.json` |

## `clrty_link_index` sub-indexes

| Key | Path |
| --- | --- |
| live_surfaces | CLRTY_SUBSTRATE/boot/clrty1_live_surfaces.json |
| mis_code_index | CLRTY_SUBSTRATE/boot/mis_code_index.json |
| mis_ecosystem_repos | CLRTY_SUBSTRATE/boot/mis_ecosystem_repos_manifest.json |
| staking_priority_mesh | CLRTY_SUBSTRATE/boot/clrty1_staking_rpc_priority_mesh.json |
| wallet_mis_clrty1_links | external/clarity-fintech/fintauo/packages/exchange-app/manifests/wallet_mis_clrty1_links.json |


## `mis_code_index` entry kinds

| Kind | Count |
| --- | --- |
| mis_source | 260 |
| ecosystem_repo | 138 |
| cross_chain_repo | 60 |
| ecosystem_repo_command | 41 |
| boot_catalog | 30 |
| staking_mesh | 7 |
| rpc_method | 6 |
| mis_ml_surface | 5 |
| host_bootstrap | 3 |
| wallet_pages | 2 |
| retired_host | 1 |
| compiler_binary | 1 |
| boot_policy | 1 |
| boot_json | 1 |


Tip-of-spear: [Full `.mis` index](../catalog/mis-sources-full-index.md) · RPC: `clrty_getMisCodeIndex`
