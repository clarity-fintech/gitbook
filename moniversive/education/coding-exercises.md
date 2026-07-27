# Coding exercises — language track

> Generated 2026-07-27T00:56:55Z

## Part I — Reading

1. **Counter module** — From [05 — State, signals, fail](05-state-signals-fail.md), write three paragraphs: what each invariant prevents, what each outcome allows, how signals/fails relate to requires.
2. **Ledger module** — Explain **`supply_constant`** in your own words with a numeric example (mint 100, burn 30).
3. **Router mapping** — Fill a table: teaching outcome → `MisRouter.mis` outcome name.

## Part II — Writing

4. **Scratch counter** — Add outcome `set_max(step: u64)` with requires `step > 0`, constraint updating `max_step`.
5. **Second module** — Create `QueueLesson` with invariants on `queue_size` and outcomes `enqueue` / `dequeue` (constraints only; `_ok` flags allowed).
6. **Rename refactor** — Pick a showcase file; rename one outcome in a scratch copy; update constraints consistently; re-check.

## Part III — Checker

7. Run `bin/misc` on every file in [mis-showcase.md](mis-showcase.md); log pass/fail in a table.
8. Break a file on purpose (delete one semicolon); read the checker message; fix.

## Part IV — Framework

9. **Recursion** — Read `MisRecursion.mis`; write two paragraphs on `bounded_recurse_fold` vs `assert_max_depth`.
10. **Kernel** — Read first 45 lines of `misc.mis`; list outcomes and one sentence each.

Pass: you can author a new 2-outcome module without copying paste errors and check it clean.
