# 6 — Types and data

> Generated 2026-07-29T03:15:30Z

MIS uses a small set of scalar types in education modules. Match surrounding files when you extend framework code.

| Type | Typical use |
| --- | --- |
| `Bytes` | Opaque payload buffers (`payload: Bytes`) |
| `u32`, `u64`, `u128` | Counts, amounts, identifiers |
| `Account` | Identity-like token; compare to `@0` |
| `bool` | Flags in constraints (`transfer_ok == true`) |

## `Bytes` payloads

Most framework outcomes take `payload: Bytes` as the first teaching parameter. Gates almost always include:

```mis
require payload != @0;
```

Treat `Bytes` as “there is a buffer reference” rather than studying byte layout in the language track — encoding belongs in module-specific docs.

## `@0`

`@0` is the zero account sentinel. It is **not** a general null for every type, but education modules use `account != @0` consistently for account parameters.

## Arithmetic in constraints

Constraints may express updates:

```mis
constraint counter == counter + n;
constraint total_minted == total_minted + amount;
```

Relations are declarative. You are stating the intended end relation, not writing an assignment statement — the MIS-ML layer interprets these as equations to satisfy.

## Imports

Syntax reference shows optional stdlib imports:

```mis
use std::token;
```

Use imports when the module participates in a typed stdlib surface; education scratch files often omit imports until needed.

Next: [Worked examples](07-worked-examples.md).
