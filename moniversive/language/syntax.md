# Syntax rules

```clrty
use std::token;

module Example {
  invariant settlement_chain: chain_id == 1202;

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
| `module` | Top-level unit (former `contract`) |
| `invariant` | Global truth condition |
| `state` | Persistent field |
| `signal` | Observable emission (former `event`) |
| `fail` | Named failure intent (former `error`) |
| `outcome` | Desired result under `require` / `constraint` |
| `require` | Precondition |
| `constraint` | Post-state relation the optimizer must satisfy |
| `@0` | Zero account |
| `use std::…` | Stdlib import (replaces OpenZeppelin) |

Comments: `//` line comments. Settlement default: `clrty-1` / `1202`.
