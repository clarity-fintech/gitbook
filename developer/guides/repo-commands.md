# Clarity-Fintech repo command suites

Every Clarity-Fintech GitHub repo ships a MIS command suite for check + network bind.

## Layout (per repo)

| Path | Role |
| --- | --- |
| `mis/commands/*Commands.mis` | Command handlers |
| `mis/commands/*NetworkBind.mis` | Network connect |
| `mis/commands/*CommandCatalog.mis` | Catalog module |
| `manifests/commands_manifest.json` | Machine-readable index |

Makefile targets (typical):

```bash
make commands-check
make network-connect
```

## Mesh + RPC

| Artifact | Path / method |
| --- | --- |
| Mesh | `moniversive/framework/ClarityFintechRepoCommandMesh.mis` |
| Surface | `languages/mis-ml/surfaces/RepoCommands.clrty` |
| RPC | `clrty_getRepoCommands` |
| Boot | `CLRTY_SUBSTRATE/boot/clrty_fintech_repo_commands_manifest.json` |
| Emitter | `scripts/emit_clarity_fintech_repo_commands.mjs` |

## Org home

Repos live under **https://github.com/clarity-fintech** (not personal accounts).
