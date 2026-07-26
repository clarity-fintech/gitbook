# AI prompting for MIS (language only)

> Generated 2026-07-26T17:48:55Z · inputs for Cursor, MLX, and human authors

1. Resolve via `mis_code_index.json` / `clrty_getMisCodeIndex` first.
2. Prefer taxonomy branches (`mis_core` … `mis_lang`) — no parallel trees.
3. **Never** propose `.sol` or new Python application modules — author **`.mis`**.
4. Include **EMBED 3..=6** + **letter-hash** on every module.
5. Prefer `invariant` + `outcome` over try/except and nested if/else.
6. Bound recursion with `@mis_kernel(max_depth=…)` or `@mis.inductive`.
7. Language GitBook = **code and coding breakdown only** (no institutional / investor / chain product docs).

Full breakdown: [language/full-language-breakdown.md](../language/full-language-breakdown.md).

See [taxonomy/prompt-mlx-routing.md](../taxonomy/prompt-mlx-routing.md).
