# MIS Framework Taxonomy

**Moniversive Invariant Static (MIS)** framework branches — categorized by execution target, cryptographic layer, static invariant engine, and language specs within the `.mis` / `.clrty` ecosystem.

Settlement: **clrty-1 / chain 1202**. Authoring: **`.mis` canonical**.

```
                          ┌── mis_core    (Kernels, State, Memory, HW)
                          ├── mis_crypto  (ZK-SNARKs, Elliptic Curves, FHE)
MONIVERSIVE INVARIANT     ├── mis_ml      (Tensors, Attention, SwiGLU, KAN)
STATIC SYSTEM (MIS) ─────┼── mis_chain   (Parallel EVM, IBC, DePIN)
                          └── mis_lang    (High-Level .mis, misc Compiler, Python DSL)
```

| Family | Path |
|--------|------|
| Execution & Engine Core | [mis_core](mis_core.md) |
| Cryptographic Primitives | [mis_crypto](mis_crypto.md) |
| Invariant AI & Tensor | [mis_ml](mis_ml.md) |
| Blockchain & Cross-Chain | [mis_chain](mis_chain.md) |
| DX & Language Tooling | [mis_lang](mis_lang.md) |
| Moniversive Recursion | [recursion.md](recursion.md) |
| Superdynamic MIS | [superdynamic.md](superdynamic.md) |
| Inbound/Outbound Routing | [routing.md](routing.md) |
| Prompt / MLX Engineering | [prompt-mlx-routing.md](prompt-mlx-routing.md) |
| Hand-coding & Outcomes | [hand-coding.md](hand-coding.md) |
| Bare-metal Reality | [bare-metal-reality.md](bare-metal-reality.md) |

Boot SSOT: `CLRTY_SUBSTRATE/boot/mis_framework_taxonomy.json`  
Modules: `moniversive/framework/*.mis`
