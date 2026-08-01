# Syntax rules

> Generated 2026-07-29T03:15:30Z · language reference (education track)

```mis
module Example {

  invariant counter_non_negative: counter >= 0;

  state counter;

  signal Tick(n: u64);
  fail Overflow;

  outcome bump(n: u64) {
    require n > 0;
    constraint counter == counter + n;
  }
}
```

| Keyword | Role |
|---------|------|
| `module` | Top-level unit |
| `invariant` | Global truth condition |
| `state` | Persistent field |
| `signal` | Observable emission |
| `fail` | Named failure intent |
| `outcome` | Desired result under `require` / `constraint` |
| `require` | Precondition |
| `constraint` | Post-state relation the checker must satisfy |
| `@0` | Zero account sentinel |
| `use std::…` | Stdlib import when needed |

Comments: `//` line comments.

Deep dive: [Module anatomy](../education/02-module-anatomy.md) · [Outcomes](../education/04-outcomes-deep.md).
