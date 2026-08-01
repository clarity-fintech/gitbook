# 5 — State, signals, and fail

> Generated 2026-07-29T03:15:30Z

MIS modules can declare **persistent fields** and **observable events** alongside invariants and outcomes. Together they replace mutable object fields + event emits in other languages.

## `state`

```mis
state counter;
state max_step;
```

State names are module-scoped. Outcomes refer to them in constraints (`counter == counter + n`). Invariants constrain state globally (`counter >= 0`). Declare all state up front so reviewers see the memory footprint immediately.

## `signal`

```mis
signal Tick(n: u64);
```

Signals describe observable emissions with typed payloads. They correspond to “something the outside world can listen for” without embedding logging calls in outcome bodies in this authoring style.

## `fail`

```mis
fail Overflow;
fail ZeroStep;
```

Named failure modes document how an outcome may refuse progress. Pair fails with `require` gates (`require n > 0` aligns with `ZeroStep`). Not every module declares `fail`, but counter examples use them to teach explicit failure vocabulary.

## Counter module (full)

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

Walkthrough in prose:

When **`bump`** runs, the module requires a positive step no larger than **`max_step`**. The constraint updates **`counter`**. Invariants guarantee **`counter`** never goes negative and steps stay bounded — even if a caller invokes **`bump`** repeatedly, the module laws were stated before any outcome.

**`reset`** is intentionally minimal: one constraint forcing **`counter`** to zero. There is no `require` because reset is unconditional in this lesson (a real module might add authorization outcomes).

See also [Syntax rules](../language/syntax.md) for the same keywords in table form.

Next: [Types & data](06-types-and-data.md).
