# GitBook Git Sync — Clarity org

Dedicated Git repo for GitBook **Git Sync** (pull on push).

## Git repo (Pull URL) — live

| | |
| --- | --- |
| **HTTPS** | `https://github.com/clarity-fintech/gitbook.git` |
| **SSH** | `git@github.com:clarity-fintech/gitbook.git` |
| **Branch** | `main` |
| **GitHub** | https://github.com/clarity-fintech/gitbook |

> **Personal repo:** To use `williamsnameiswill/gitbook` instead, create an empty repo on that account and set `GITBOOK_GIT_REPO_HTTPS` in `.env.gitbook`, then run `make gitbook-publish`.

## GitBook UI — connect each space

1. **Clarity** org → Space → **Integrations** → **Git Sync**
2. Repository: **`clarity-fintech/gitbook`**
3. Pull URL: `https://github.com/clarity-fintech/gitbook.git`
4. Branch: `main`
5. **Root folder** (one per space):

| Space | Root folder |
| --- | --- |
| Clarity — Public Documentation | `public` |
| Clarity — Developer Docs | `developer` |
| Clarity — Institutional | `institutional` |
| Clarity — Investor Data Room | `investor-private` |

6. Enable **Pull on push**

## Automatic publish (monorepo → gitbook repo)

### One-shot full completion

```bash
make gitbook-complete
```

Builds all 4 tiers, pushes to GitHub, and optionally uploads via GitBook API if `GITBOOK_API_TOKEN` is set.

### GitHub Actions

On push to `main` when `docs/gitbook/**` changes, CI mirrors into `clarity-fintech/gitbook`.

```bash
gh secret set GITBOOK_REPO_TOKEN --body "$(gh auth token)"
```

### Local

```bash
make gitbook-publish    # build + push to clarity-fintech/gitbook
```

Env (optional, in `.env.gitbook`):

```
GITBOOK_GIT_REPO_HTTPS=https://github.com/clarity-fintech/gitbook.git
GITBOOK_GIT_BRANCH=main
```

## Flow

```text
CLRTY monorepo (docs/gitbook/)
        ↓  make gitbook-publish  OR  GitHub Action
clarity-fintech/gitbook  (public/, developer/, …)
        ↓  Git Sync pull on push
Clarity GitBook spaces
```

## Optional API push

If `GITBOOK_API_TOKEN` is set, CI also pushes via GitBook API (redundant when Git Sync is active).

```bash
gh secret set GITBOOK_API_TOKEN --body "gbp_..."
make gitbook-sync
```

## Organization

| Field | Value |
| --- | --- |
| Display name | **Clarity** |
| Org ID | `Yuash1ualCkP03YzJ8ts` |
| Dashboard | https://app.gitbook.com/o/Yuash1ualCkP03YzJ8ts |
