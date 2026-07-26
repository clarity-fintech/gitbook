# AI prompting for MIS (language only)

> Generated 2026-07-26T18:59:10Z · inputs for Cursor, MLX, and human authors

1. Resolve via `mis_code_index.json` / `clrty_getMisCodeIndex` first.
2. Prefer taxonomy branches (`mis_core` … `mis_lang`) — no parallel trees.
3. **Never** propose legacy Solidity or new Python application modules — author **`.mis`**.
4. **Letter-hash** on every module (`invariant letter_hash_bound`); EMBED gates **retired** — see [embed-gates.md](../language/embed-gates.md).
5. Prefer `invariant` + `outcome` over try/except and nested if/else.
6. Bound recursion with `@mis_kernel(max_depth=…)` or `@mis.inductive`.
7. LangChain / multi-step prompts: [langchain-prompt-engineering.md](langchain-prompt-engineering.md).
8. Language GitBook = **code and coding breakdown only** (no institutional / investor / chain product docs).

Full breakdown: [language/full-language-breakdown.md](../language/full-language-breakdown.md).

See [taxonomy/prompt-mlx-routing.md](../taxonomy/prompt-mlx-routing.md).
