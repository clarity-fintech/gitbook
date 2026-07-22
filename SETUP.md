# GitBook setup — CLRTY tiered docs

## Prerequisites

- Node.js 18+
- `@gitbook/cli` (installed locally: `npm install`)
- Personal access token from [Developer settings](https://app.gitbook.com/account/developer)

## Your organization

| Field | Value |
| --- | --- |
| **Display name** | Clarity |
| **Organization ID** | `Yuash1ualCkP03YzJ8ts` |

```bash
GITBOOK_ORG_ID=Yuash1ualCkP03YzJ8ts
GITBOOK_ORG_NAME=Clarity
```

## Quick start

**Run from repo root** (`$CLRTY_PROJECT`), not `seo-kit-second/`:

```bash
cd ~/\$CLRTY_PROJECT

# 1. Copy env template and paste your NEW token (one line — no # comments on same line)
cp .env.gitbook.example .env.gitbook

# 2. Edit .env.gitbook → GITBOOK_API_TOKEN=gbp_your_token_here

# 3. Build + publish (GitHub) + optional API upload
make gitbook-complete
```

Publish target repo: **https://github.com/clarity-fintech/gitbook** (HTTPS via `gh auth`, no SSH key needed).

From `seo-kit-second/` all gitbook targets forward to root (`make gitbook-complete`, etc.).

### Common terminal mistakes

| Bad | Why | Good |
| --- | --- | --- |
| `make gitbook-upload` from `seo-kit-second/` before fix | No Makefile | `cd ..` or use `seo-kit-second/Makefile` shortcut |
| `cp .env.seo-stack.example .env.seo-stack` | **Wipes all API keys** | Use `make seo-resolve-env` only |
| Paste block with `# comment` lines | zsh errors on `#` | One command per line |
| `make gitbook-upload` with empty token | Upload blocked | Fill `.env.gitbook` first |

## CLI commands (equivalent)

```bash
# Authenticate (paste token when prompted, or use --token)
npx gitbook auth --token "$GITBOOK_API_TOKEN"
npx gitbook whoami

# List org spaces
npx gitbook spaces list --organization Yuash1ualCkP03YzJ8ts --extended --pretty

# Manual space create
npx gitbook spaces create Yuash1ualCkP03YzJ8ts --body '{"title":"Clarity — Public Documentation"}'
```

## Four tiers (different depth vs public repo)

| Space folder | Audience | Visibility |
| --- | --- | --- |
| `public/` | Community, builders | Public site |
| `developer/` | Engineers | Public |
| `institutional/` | Funds, exchanges | **Private** |
| `investor-private/` | Accredited / NDA | **Invite-only** |

After upload, set **Institutional** and **Investor** spaces to Private in GitBook → Space settings → Visibility.

## Git sync (connect in GitBook UI)

Published source: **https://github.com/clarity-fintech/gitbook** on branch `main`.

1. [Clarity org](https://app.gitbook.com/o/Yuash1ualCkP03YzJ8ts) → each Space → **Integrations → Git Sync**
2. Repository: `clarity-fintech/gitbook`
3. Root folder per space: `public` | `developer` | `institutional` | `investor-private`
4. Enable **Pull on push**

Re-publish after edits: `make gitbook-publish` (from repo root or `seo-kit-second/`).

See [GIT_SYNC.md](./GIT_SYNC.md) for full wiring.

## API (Ask endpoint example)

```bash
curl -X POST "https://api.gitbook.com/v1/orgs/Yuash1ualCkP03YzJ8ts/sites/site_0kYmg/ask" \
  -H "Authorization: Bearer $GITBOOK_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"question":"How do sequential gates work?","scope":{"mode":"default"}}'
```

Replace `site_0kYmg` with your published site ID after first publish.
