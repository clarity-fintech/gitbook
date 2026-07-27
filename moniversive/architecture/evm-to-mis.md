# EVM → MIS execution model

> Generated 2026-07-27T00:56:55Z

| Vector | EVM | Moniversive Invariant Static (MIS) |
| --- | --- | --- |
| Engine | Stack bytecode / JIT | Static kernel · **`bin/misc`** on **`.mis`** |
| State | Merkle trie slots | Invariant-bounded transitions · `outcome` / `invariant` |
| Gas | Dynamic opcode metering | Fixed / compile-time execution bounds |
| Control flow | `JUMP` / `JUMPI` | `mis.select` · branchless masks |
| Safety | `require` / `REVERT` | `invariant` verified before dispatch |
| Crypto | Precompiles | Native SIMD / field ops in kernel packs |

```
EVM:  bytecode → stack → gas → dynamic storage → revert
MIS:  static kernel → registers / static sets → invariant guard → commit
```

Migration: [extensions.md](../migration/extensions.md) · Solidity2MIS ergonomics in [high-level ergonomics](../language/high-level-ergonomics.md).
