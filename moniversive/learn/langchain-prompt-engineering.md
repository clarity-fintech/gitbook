# LangChain + MIS prompt engineering

> Generated 2026-07-29T03:15:30Z · combine LLM chains with **indexed `.mis`** surfaces

## Workflow

1. **Retrieve** — load `mis_code_index.json` or call `clrty_getMisCodeIndex` (filter by `kind`, `path`, `band`).
2. **Constrain** — system prompt: author **`.mis` only** · **`bin/misc`** · letter-hash · taxonomy branch from `mis_framework_taxonomy.json`.
3. **Generate** — emit `module` / `outcome` / `invariant`; prefer `mis.select` over nested `if`.
4. **Verify** — `bin/misc path.mis --check --compact-letters` · `make mis-ml-check`.
5. **Register** — append index entry · `make gitbook-moniversive-build` · optional `make gitbook-publish`.

## LangChain-style composition (conceptual)

| Step | MIS-native analogue |
| --- | --- |
| Document loader | Parse `mis_code_index` + [static ML bands](../catalog/static-ml-invariant-bands.md) |
| Retriever | Taxonomy route (`MisRouter.mis`) · pack id (776–875, 876–975, …) |
| Prompt template | [ai-prompting.md](ai-prompting.md) + [prompt-mlx-routing.md](../taxonomy/prompt-mlx-routing.md) |
| Tool / function call | `outcome` name from catalog · check with `bin/misc` |
| Output parser | Letter-hash + invariant syntax validation (compiler) |

## Example prompt shell

```text
You write Moniversive Invariant Static (.mis) for clrty-1/1202.
Resolve symbols via mis_code_index.json first.
Target band: 876-975 architecture primitive {name}.
Emit module + letter_hash_bound invariant + outcomes only.
No Python app code. No legacy Solidity. Verify: bin/misc {path} --check --compact-letters
```

## Host Python (bootstrap only)

Orchestration scripts under `scripts/mis-ml/` may call LangChain **only** to drive codegen; shipped logic remains **`.mis`**. See [py-to-mis.md](../migration/py-to-mis.md).
