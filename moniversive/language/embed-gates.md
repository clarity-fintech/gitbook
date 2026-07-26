# EMBED gates 3..=6 (retired)

**Policy (2026-07):** The `embed gates 3..=6 { … }` block is **removed** from all `.mis` / legacy `.clrty` modules. Authoring still requires **letter-hash** (`invariant letter_hash_bound: letter_hash_root != @0;`) and settlement **clrty-1 / 1202**.

Use `python3 scripts/mis-ml/strip_embed_gates_from_mis.py` to normalize older trees. Kernel: `bin/misc` only.

### Historical gates (reference only)

| Gate | Name | Former role |
|------|------|-------------|
| 3 | Context | Cohort + protocol context |
| 4 | AI | Signals, prompt augmentation |
| 5 | Execution | Route optimization |
| 6 | Capital | MIRRA / liquidity |

Do **not** add new `embed gates 3..=6` blocks. Keep outcomes and invariants under the MIS taxonomy instead.
