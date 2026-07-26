# Chat-derived navigation index

Consolidated paths from CLRTY-1 agent and MIS work sessions (no secrets). Canonical machine registry: `CLRTY_SUBSTRATE/boot/clrty1_resources_in_use.json`.

## Superstructure and fleet

| Topic | Path |
|-------|------|
| 67 org repos + nodes | `CLRTY_SUBSTRATE/boot/clrty_superstructure.json` |
| Active repo mirror | `CLRTY_SUBSTRATE/boot/active_repos.json` |
| Org manifest | `CLRTY_SUBSTRATE/boot/clarity_fintech_org_repos_manifest.json` |
| Fleet refresh | `scripts/clarity_fintech_refresh_all_repos.sh` |
| GitBook overview | [Superstructure](../superstructure.md) |

## Link index and SEO harvest

| Topic | Path |
|-------|------|
| Boot link index (alias) | `CLRTY_SUBSTRATE/boot/clrty_link_index.json` |
| DX live links (186 entries) | `clarity-wallet/dx-live-links/manifests/dx_live_links_manifest.json` |
| Session catalog (68 links, 63 HTTP) | `CLRTY_SUBSTRATE/boot/session_links_2026_07_25.json` |
| SEO kit second session data | `seo-kit-second/data/session-links-2026-07-25.json` |
| Unified backlinks | `seo-kit-second/config/unified-backlinks.json` |
| MIS link module | `moniversive/framework/MisLinkIndex.mis` |

## Live surfaces (status / monitor / exchange)

Catalog: `CLRTY_SUBSTRATE/boot/clrty1_live_surfaces.json`

- Status hub: `https://status.clarity-fintech.com/`
- Network monitor: `https://network-monitor-d1g.pages.dev/`
- Exchange + wallet: `https://exchange.clarity-fintech.com/`

## Browser-only wallet funnel

Unified SPA shell (`clarity-wallet-browser-v1` build tag):

| Route | Entry |
|-------|--------|
| `/` | `packages/exchange-app/index.html` → `clarity-browser-wallet-entry.tsx` |
| `/login` | `login.html` → `clarityBrowserWallet.tsx` |
| `/wallet-app` | `wallet-app.html` → same root |

Source tree: `external/clarity-fintech/fintauo/packages/exchange-app/src/entries/clarityBrowserWallet.tsx`

Funnel: onboard → login (email/OTP/OAuth) → `WalletAppMain` tabs (Home, Search, Money, Trade, Profile).

## GitBook and teaching sets

| Root | Files (approx.) |
|------|-----------------|
| Moniversive GitBook | `docs/gitbook/moniversive/` (generated catalog + showcases) |
| Regenerate MIS docs | `make gitbook-moniversive-build` |
| Full GitBook tree | `docs/gitbook/` (185) |
| Publish mirror | `var/gitbook-publish` → `github.com/clarity-fintech/gitbook` |
| Boot catalog | `CLRTY_SUBSTRATE/boot/clrty1_gitbook_catalog.json` |

Teaching paths: `BeginnersGuide/`, `learn/`, `taxonomy/`, `architecture/`, `examples/kernel-swap-to-mis.md`.

## MIS-ML verification

```bash
bin/misc moniversive/framework/MisLinkIndex.mis --check --compact-letters
bin/misc moniversive/framework/MisClarityFintechFleet.mis --check --compact-letters
make mis-ml-check
python3 scripts/mis-ml/verify_misc_kernel_only.py
```

## Keep-all-active

```bash
scripts/clrty_keep_all_active.sh
scripts/clrty_resources_in_use_verify.sh
```

Report: `var/clrty_keep_all_active_report.json`.

Settlement: **clrty-1** / **1202**. Kernel: **`bin/misc`** only.
