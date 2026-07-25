# AI prompting for MIS

1. Resolve via `clrty_getMisCodeIndex` / `mis_code_index.json` first.  
2. Prefer existing taxonomy branches (`mis_core`…`mis_lang`) over inventing parallel trees.  
3. Never propose `.sol` / new Python packages — author `.mis`.  
4. Include EMBED `3..=6` + letter-hash.  
5. Prefer `mis.invariant` + `mis.select` over try/except and nested if/else.  
6. Bound recursion with `@mis_kernel(max_depth=…)` or `@mis.inductive`.  
7. Settlement always clrty-1 / 1202.

See [taxonomy/prompt-mlx-routing.md](../taxonomy/prompt-mlx-routing.md).
