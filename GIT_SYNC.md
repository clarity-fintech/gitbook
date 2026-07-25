# GitBook Git Sync — Clarity-Fintech

Canonical Git Sync source is the **Clarity-Fintech** docs repo (not personal GitHub accounts).

## Repository pull URL (same for all spaces)

```
https://github.com/clarity-fintech/gitbook.git
```

| Field | Value |
| --- | --- |
| **HTTPS** | `https://github.com/clarity-fintech/gitbook.git` |
| **SSH** | `git@github.com:clarity-fintech/gitbook.git` |
| **Branch** | `main` |
| **Provider** | GitHub → `clarity-fintech/gitbook` |
| **GitHub** | https://github.com/clarity-fintech/gitbook |

> Personal accounts (`theangelofwill`, `williamsnameiswill`, etc.) are **retired** for GitBook. Do not reconnect spaces to personal monorepos.

## Organization (GitBook)

| Field | Value |
| --- | --- |
| Org name | **Clarity** |
| Org ID | `Yuash1ualCkP03YzJ8ts` |
| Dashboard | https://app.gitbook.com/o/Yuash1ualCkP03YzJ8ts |

## Per-space root folder

On `clarity-fintech/gitbook`, each space uses a **root folder** (not a nested monorepo path):

| Space | Root folder | Tree |
| --- | --- | --- |
| **Clarity — Public Documentation** | `public` | https://github.com/clarity-fintech/gitbook/tree/main/public |
| **Clarity — Developer Docs** | `developer` | https://github.com/clarity-fintech/gitbook/tree/main/developer |
| **Clarity — Moniversive (MIS)** | `moniversive` | https://github.com/clarity-fintech/gitbook/tree/main/moniversive |
| **Clarity — Institutional** | `institutional` | https://github.com/clarity-fintech/gitbook/tree/main/institutional |
| **Clarity — Investor Data Room** | `investor-private` | https://github.com/clarity-fintech/gitbook/tree/main/investor-private |

Each folder contains `README.md` + `SUMMARY.md`.

## GitBook UI steps

1. **Clarity** org → open space → **Integrations** → **Git Sync**
2. Connect GitHub → select **`clarity-fintech/gitbook`**
3. **Pull URL:** `https://github.com/clarity-fintech/gitbook.git`
4. **Branch:** `main`
5. **Root folder:** one row from the table above (repeat per space)
6. Enable **Pull on push**

If a space still points at a personal repo, disconnect and reconnect to `clarity-fintech/gitbook`.

## Publish from the monorepo

```bash
cd ~/\$CLRTY_PROJECT
make gitbook-publish    # mirror docs → clarity-fintech/gitbook + push
```

Optional env (`.env.gitbook`):

```
GITBOOK_GIT_REPO_HTTPS=https://github.com/clarity-fintech/gitbook.git
GITBOOK_GIT_BRANCH=main
```

## Flow

```text
CLRTY monorepo  docs/gitbook/  (+ var/gitbook-publish enrichments)
        ↓  make gitbook-publish
clarity-fintech/gitbook  (public/, developer/, moniversive/, …)
        ↓  Git Sync pull on push
Clarity GitBook spaces
```

## Related coding surfaces

| Surface | Clarity-Fintech home |
| --- | --- |
| MIS kernel | https://github.com/clarity-fintech/CLRTY-MIS-Kernel |
| Developer kit | https://github.com/clarity-fintech/developer_kit |
| Compiler bridge | https://github.com/clarity-fintech/CLRTY-Compiler-Bridge |
| GitBook source | https://github.com/clarity-fintech/gitbook |
