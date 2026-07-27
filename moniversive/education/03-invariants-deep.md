# 3 — Invariants (deep dive)

> Generated 2026-07-27T00:56:55Z

An **`invariant`** is a named predicate attached to the module. Syntax:

```mis
invariant <name>: <relation>;
```

The relation uses the same expression vocabulary as constraints (comparisons, arithmetic, references to state fields and logical flags). Invariants are **not** inside outcomes — they sit at module scope to express “always true.”

## Why module scope matters

If a property must hold after **every** successful outcome, it belongs in an **`invariant`**, not repeated in each outcome. Example from the ledger teaching module:

```mis
module LedgerLesson {

  invariant supply_constant: total_minted == total_outstanding + total_burned;
  invariant accounts_non_negative: all_balances_non_negative == true;

  state total_minted;
  state total_outstanding;
  state total_burned;

  outcome mint(account: Account, amount: u128) {
    require account != @0;
    require amount > 0;
    constraint total_minted == total_minted + amount;
    constraint total_outstanding == total_outstanding + amount;
  }

  outcome transfer(from: Account, to: Account, amount: u128) {
    require from != @0;
    require to != @0;
    require amount > 0;
    constraint transfer_ok == true;
  }

  outcome burn(account: Account, amount: u128) {
    require account != @0;
    require amount > 0;
    constraint total_outstanding == total_outstanding - amount;
    constraint total_burned == total_burned + amount;
  }
}
```

Here **`supply_constant`** ties three state counters together. Any outcome that changes `total_minted` or `total_outstanding` must remain consistent with this law. Outcomes **`mint`**, **`transfer`**, and **`burn`** each state local requirements, but the global supply law is declared once.

## Categories of invariants you will write

**Bounds and caps.** Limits on depth, queue size, fee basis points, tensor ranks:

```mis
invariant max_depth_positive: max_depth >= 1;
invariant depth_within_cap: current_depth <= max_depth;
```

**Non-negativity and sentinel checks.** Common for counters and balances:

```mis
invariant counter_non_negative: counter >= 0;
```

**Implication-style laws.** Two relations that must hold together:

```mis
invariant accounts_non_negative: all_balances_non_negative == true;
```

When reading framework files, ignore deployment-specific invariant names on first pass; classify each line into one of the categories above.

## Invariants vs `require`

| | `invariant` | `require` inside `outcome` |
| --- | --- | --- |
| Scope | Whole module | Single outcome entry |
| Purpose | Eternal truth | Caller/input gates |
| Typical content | Caps, conservation laws | Non-zero pointers, pause flags |

Put “this argument must be non-null” in **`require`**. Put “total supply is conserved” in **`invariant`**.

## Checker behavior (authoring view)

`bin/misc` parses invariants and ensures the module structure is valid. Static ML layers may additionally reject modules that mutate state without any invariants — treat empty invariant sections as a smell when outcomes mention state.

Practice: open `moniversive/framework/MisRecursion.mis` and list each invariant in plain English before reading outcomes.

Next: [Outcomes (deep)](04-outcomes-deep.md).
