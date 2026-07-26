# Language build — driven by session inputs

> Generated 2026-07-26T18:24:44Z · **53** MIS prompts · **11** GitBook/publish prompts (48h)

Moniversive Invariant Static documentation is built **from indexed `.mis` sources** plus **sanitized session prompts** (last 48 hours). The loop:

1. **Input** — Cursor rules + user prompts ([session catalog](../learn/session-prompts-48h.md)).
2. **Index** — `mis_code_index.json` (12 language-filtered `.mis` in catalog).
3. **Check** — `bin/misc path.mis --check --compact-letters`.
4. **Generate** — `make gitbook-moniversive-build` → `docs/gitbook/moniversive/`.
5. **Publish** — `clarity-fintech/gitbook` → GitBook space **Moniversive Invariant Static (MIS)**.

## Artifacts expanded from prompts

| Prompt theme | GitBook / repo artifact |
| --- | --- |
| Full language / all functions | [full-language-breakdown.md](full-language-breakdown.md) |
| Separate language vs chain | Language-only SUMMARY; no institutional/investor nav |
| Solidity / Python replacement | [migration/py-to-mis.md](../migration/py-to-mis.md) · [extensions.md](../migration/extensions.md) |
| Taxonomy + MLX | [taxonomy/prompt-mlx-routing.md](../taxonomy/prompt-mlx-routing.md) |
| Kernel / Static ML | [downloads/README.md](../downloads/README.md) · `moniversive_invariant_static_ML` |
| Session prompt corpus (48h) | [session-prompts-48h.md](../learn/session-prompts-48h.md) |
| Chat code breakdowns (48h) | [chat-code-breakdowns-48h.md](../learn/chat-code-breakdowns-48h.md) |
| EMBED 3..=6 + letter-hash policy | [overview.md](overview.md) · `.cursor/rules/moniversive-clrty.mdc` |
| Link registry / kernel repo list | [downloads/README.md](../downloads/README.md) · `session_links_2026_07_25.json` |
| Remove EMBED banner from `.mis` sources | Regenerate catalog; keep per-module letter hashes |
| 192-model / Static ML doc prompts | Taxonomy MLX routing · external kernel repo GitBook (not CLRTY-1 product nav) |

## 48h input mix (sanitized counts)

| Category | Role in language book |
| --- | --- |
| MIS language | Drives chapters, symbols, migration, kernel policy |
| GitBook docs / publish | Structure, SUMMARY, publish scripts, live space |
| Product context | Traceability only — wallet/login/compliance TS; excluded from language nav |
| Other | ICO/link harvest, fleet refresh — cross-links in session corpus |

## Commands

```bash
make gitbook-moniversive-build
make gitbook-publish
```
