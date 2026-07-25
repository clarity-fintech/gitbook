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

# 3. Build + upload
make gitbook-build
make gitbook-upload
```

From `seo-kit-second/` you can also run `make gitbook-upload` (forwards to root).

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

## Five spaces (different depth vs public repo)

| Space folder | Audience | Visibility |
| --- | --- | --- |
| `public/` | Community, builders | Public site |
| `developer/` | Engineers | Public |
| `moniversive/` | MIS / language | Public |
| `institutional/` | Funds, exchanges | **Private** |
| `investor-private/` | Accredited / NDA | **Invite-only** |

After upload, set **Institutional** and **Investor** spaces to Private in GitBook → Space settings → Visibility.

## Git sync (required ownership: Clarity-Fintech)

1. Publish target: **https://github.com/clarity-fintech/gitbook**
2. GitBook → Space → Integrations → Git Sync → `clarity-fintech/gitbook`
3. Root folder per space: `public` · `developer` · `moniversive` · `institutional` · `investor-private`
4. `SUMMARY.md` in each folder drives sidebar hierarchy
5. From monorepo: `make gitbook-publish`

## API (Ask endpoint example)

```bash
curl -X POST "https://api.gitbook.com/v1/orgs/Yuash1ualCkP03YzJ8ts/sites/site_0kYmg/ask" \
  -H "Authorization: Bearer $GITBOOK_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"question":"How do sequential gates work?","scope":{"mode":"default"}}'
```

Replace `site_0kYmg` with your published site ID after first publish.
