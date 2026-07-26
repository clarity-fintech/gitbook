# Downloads — MIS kernel and language repos

> Generated 2026-07-26T18:24:17Z

## Compiler kernel (`misc`)

| Artifact | Source |
| --- | --- |
| Prebuilt `bin/misc` | [CLRTY-MIS-Kernel](https://github.com/clarity-fintech/CLRTY-MIS-Kernel) · `scripts/download_misc_kernel.sh` |
| Monorepo build | `make misc-build` from [main](https://github.com/clarity-fintech/main) |

```bash
git clone https://github.com/clarity-fintech/CLRTY-MIS-Kernel.git
cd CLRTY-MIS-Kernel
bash scripts/download_misc_kernel.sh
./bin/misc path.mis --check --compact-letters
```

## Static ML kernel (invariants 1–1025)

| | |
| --- | --- |
| Repo | [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML) |
| Layout | `mis/kernel` · `mis/packs/static_ml` · `mis/sections` |
| Full repo list | [CLRTY-1 — All Git repos](../../clrty-1/ecosystem/all-git-repos.md) |

## Developer kit

[developer_kit](https://github.com/clarity-fintech/developer_kit) · [CODING_GUIDES.md](https://github.com/clarity-fintech/developer_kit/blob/main/CODING_GUIDES.md)

## GitBook mirror

Published tree: [clarity-fintech/gitbook](https://github.com/clarity-fintech/gitbook) → folder **`moniversive/`**.

Local publish: `make gitbook-publish`
