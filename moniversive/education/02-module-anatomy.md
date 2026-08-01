# 2 — Module anatomy

> Generated 2026-07-29T03:15:30Z

Every `.mis` file is a sequence of declarations inside a single **`module`**. The module name is the unit of reuse and checking: one file may contain one module (education convention), and the name is usually PascalCase (`CounterLesson`, `MisRouter`).

## File layout

A readable file has four bands:

1. **Comment header** — human purpose (optional but common in the framework tree).
2. **`module Name { … }`** — opens the unit.
3. **Declarations** — `invariant`, `state`, `signal`, `fail`, then `outcome` blocks.
4. **Closing brace** — ends the module.

Comments use `//` to end of line. There is no block comment requirement; keep headers short.

## Minimal module (language-only)

```mis
module CounterLesson {

  invariant counter_non_negative: counter >= 0;
  invariant step_positive_bounded: max_step <= 1000;

  state counter;
  state max_step;

  signal Tick(n: u64);
  fail Overflow;
  fail ZeroStep;

  outcome bump(n: u64) {
    require n > 0;
    require n <= max_step;
    constraint counter == counter + n;
  }

  outcome reset() {
    constraint counter == 0;
  }
}
```

Read the names before the punctuation:

- **`CounterLesson`** — module identity.
- **`counter_non_negative`** — invariant id; think “this predicate is always enforced.”
- **`counter`**, **`max_step`** — state slots the outcomes may relate to via constraints.
- **`Tick`**, **`Overflow`**, **`ZeroStep`** — signal / fail symbols (failure naming is part of the public vocabulary).
- **`bump`**, **`reset`** — outcomes: the only “callable intents” in the module.

## Naming conventions that match the corpus

| Symbol kind | Convention | Example |
| --- | --- | --- |
| Module | PascalCase | `MisRecursion` |
| Invariant | snake_case phrase | `depth_within_cap` |
| Outcome | snake_case verb | `bounded_recurse_fold` |
| State | snake_case noun | `counter` |
| Signal | PascalCase | `Tick` |

Outcome constraints often end with `_ok == true` in framework stubs — that is a **boolean completion flag** pattern, not a special keyword. It tells the checker that the outcome registered success explicitly.

## One module, many outcomes

Add outcomes by copying the block shape. Each outcome gets its own `require` lines (entry gates) and `constraint` lines (exit relations). Do not share `require` across outcomes with preprocessor tricks; duplication is acceptable and keeps each outcome self-contained for reviewers.

Next: [Invariants (deep)](03-invariants-deep.md).
