# Developer Experience & Language Tooling (`mis_lang`)

High-level abstractions, compilers, and static analysis.

| Branch | Role |
|--------|------|
| `mis_py` | High-level Pythonic .mis/.clrty ergonomics (@mis_kernel, mis.invariant) |
| `misc` | Static analyzer — prove invariants, eliminate stack-unwinding, emit bytecode |
| `mis_abi` | Moniversive Interface Definition — deterministic dispatch + C/Rust FFI |
| `mis_dbg` | Thermal MSR monitor, register-spill diagnostics, shadow-stack checks |

## Branch pages

* [`mis_py`](../framework/mis_py.md) — High-level Pythonic .mis/.clrty ergonomics (@mis_kernel, mis.invariant)
* [`misc`](../framework/misc.md) — Static analyzer — prove invariants, eliminate stack-unwinding, emit bytecode
* [`mis_abi`](../framework/mis_abi.md) — Moniversive Interface Definition — deterministic dispatch + C/Rust FFI
* [`mis_dbg`](../framework/mis_dbg.md) — Thermal MSR monitor, register-spill diagnostics, shadow-stack checks

Module: `moniversive/framework/mis_lang.mis`  
Settlement: clrty-1 / 1202 · Extension: `.mis`
