# 4 — Outcomes (deep dive)

> Generated 2026-07-27T00:56:55Z

An **`outcome`** block describes one intended transition. Shape:

```mis
outcome <name>(<args>) {
  require <condition>;
  constraint <relation>;
}
```

Parentheses hold typed parameters (`payload: Bytes`, `n: u64`, `account: Account`). The body is a sequence of **`require`** (entry) and **`constraint`** (exit) statements — no arbitrary imperative statements in the education subset.

## Entry: `require`

Each `require` is a gate. If it fails, the outcome does not proceed. Typical gates:

```mis
require payload != @0;
require amount > 0;
require current_depth < max_depth;
```

`@0` is the zero **`Account`** sentinel (see [Types & data](06-types-and-data.md)). Comparing to `@0` is the idiomatic non-null / non-sentinel check for account-like parameters.

## Exit: `constraint`

Constraints describe the post-state. They may reference parameters, state fields, and boolean flags:

```mis
constraint counter == counter + n;
constraint transfer_ok == true;
constraint fold_complete_ok == true;
```

Multi-line constraints in real modules are still one relation per line. Name completion flags (`*_ok`) explicitly mark success paths — useful when multiple outcomes share similar shapes.

## Full routing example (teaching module)

```mis
module RouterLesson {

  invariant queue_not_full: queue_size < queue_capacity;

  outcome ingest(payload: Bytes) {
    require payload != @0;
    constraint queue_size == queue_size + 1;
  }

  outcome dispatch(route_id: u32, payload: Bytes) {
    require route_id >= 1;
    require payload != @0;
    constraint dispatch_ok == true;
  }

  outcome emit_copy(payload: Bytes) {
    require payload != @0;
    constraint emit_copy_ok == true;
  }
}
```

**How to read `ingest`:** the caller must supply a non-empty `payload` (`require payload != @0`). After success, the queue grows by one (`constraint queue_size == queue_size + 1`). **`dispatch`** adds a route id gate. **`emit_copy`** is a separate intent with its own completion flag — three outcomes, three stories, one module.

## Composition patterns

**Thin outcomes.** Tooling modules use minimal constraints:

```mis
outcome check_module(payload: Bytes) {
  require payload != @0;
  constraint check_module_ok == true;
}
```

**Layered gates.** Order `require` from cheapest checks to expensive ones (readability convention; checker does not enforce order).

**Paired outcomes.** `step` + `fold_complete` in recursion modules express “continue” vs “finish” without a while-loop in source text.

Framework reference: compare this teaching router to `moniversive/framework/MisRouter.mis` in the [showcase](mis-showcase.md) — same outcome **names**, richer invariant headers in repo files.

Next: [State, signals, fail](05-state-signals-fail.md).
