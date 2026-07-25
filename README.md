# CLRTY GitBook — Tiered Documentation System

Five GitBook **spaces** — each with a different data depth vs what is already public on GitHub / clarity-fintech.com.


| Layer | Already public (repo / site) | GitBook adds (different depth) |
| --- | --- | --- |
| **L0 Public** | `docs/whitepaper.md` S20 technical draft (Set manifold, PoC) | Intelligence OS framing, gates, realms, inner store, ecosystem vision |
| **L1 Developer** | Architecture README, partial API refs | Full Yellowpaper v1 formal spec, Υ(σ,T) notation, HELIX/MIRRA math, node roles |
| **L1 Moniversive** | — | **MIS-ML language** — `.clrty` spec, compiler, L1 invariant validation, Solidity migration |
| **L2 Institutional** | Investor data room index (metadata) | Vol II security/governance, Vol III readiness, AML program, audit synthesis |
| **L3 Investor Private** | None (NDA data room) | PPM, term sheet, warrants, corporate pack, financial model references |


## Ownership

Published to **https://github.com/clarity-fintech/gitbook** (Clarity-Fintech). Personal GitHub accounts are not used for Git Sync.

## Spaces

| Space | Path | GitBook visibility |
| --- | --- | --- |
| Public | `public/` | Published site |
| Developer | `developer/` | Published (advanced) |
| **Moniversive (MIS-ML)** | `moniversive/` | Published (language + L1) |
| Institutional | `institutional/` | Private / SSO |
| Investor Private | `investor-private/` | Invite-only |

## Build

```bash
node scripts/gitbook/extract_sources.mjs   # PDF/HTML → var/gitbook/extracts
node scripts/gitbook/build_gitbook_spaces.mjs
node scripts/gitbook/upload_gitbook.mjs    # requires GITBOOK_API_TOKEN
```

## Diagrams

SVG pack: `assets/diagrams/svg/`
