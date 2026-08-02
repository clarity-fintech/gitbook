# Language vs CLRTY-1 vs legacy `.clrty`

> Generated 2026-08-02T01:05:18Z · scope: **Moniversive GitBook space only**

This GitBook space documents **Moniversive Invariant Static (MIS)** — the deep-root language (`.mis`).

| Layer | What it is | Where it lives |
| --- | --- | --- |
| **MIS language** | Syntax, EMBED 3..=6, letter-hash, taxonomy, `bin/misc` | This space (`moniversive/`) |
| **Legacy MIS-ML surface** | Host-compiled `.clrty` stdlib/RPC (no Solidity) | `languages/mis-ml/` in monorepo — not taught here as primary |
| **CLRTY-1 network** | Settlement chain `1202`, staking, ticks, RPC fleet | `public/` + `developer/` GitBook spaces · boot JSON only as references |

## Authoring rule (Cursor + CI)

1. Author **`.mis`** under `moniversive/`.
2. Check with **`bin/misc path.mis --check --compact-letters`** — not `python3` / foreign kernels.
3. Register every new surface in **`CLRTY_SUBSTRATE/boot/mis_code_index.json`**.

## Execution model (language)

| Pillar | MIS meaning |
| --- | --- |
| Code | Intent (modules + outcomes) |
| Execution | Optimized outcome paths |
| State | Verified invariants |

Settlement metadata (`clrty-1` / `1202`) may appear in EMBED `capital` blocks as **reference constants** — it does not move chain operations into language chapters.

## Downloads

See [Kernel & repo downloads](../downloads/README.md).
