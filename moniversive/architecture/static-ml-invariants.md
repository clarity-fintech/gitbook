# Static-ML invariants (1025)

Full Moniversive static-ML catalog for CLRTY-1.

**Live kernel (Clarity-Fintech):** [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML) — `mis/kernel` · 60 packs · `mis/sections` · 1025 invariants.

**All repo + learning backlinks:** [guides/static-ml-backlinks.md](../guides/static-ml-backlinks.md) · [learn/static-ml-learning-path.md](../learn/static-ml-learning-path.md)

| Band | Focus | Module |
|------|-------|--------|
| **1–200** | Model registry, inference, fees | `StaticMlInvariants.clrty` |
| **201–300** | Gradients / backprop / ZK | `GradientBackpropInvariants.clrty` |
| **301–400** | Dual-loop bridge (reserved) | `DualLoopArchitecture.clrty` |
| **401–500** | Token public market | `TokenMarketInvariants.clrty` |
| **501–600** | Passive RPC | `PassiveRpcInvariants.clrty` |
| **601–700** | Weights, state, staking, cross-system | [Master invariants](master-invariants-601-700.md) |
| **701–715** | Rust validator memory & arena | [Rust memory](rust-validator-memory-701-715.md) |
| **716–730** | Value density (VD) simulation | [Value density](value-density-716-730.md) |
| **731–745** | Native DSP / language primitives | [Native DSP](native-dsp-primitives-731-745.md) |
| **746–760** | Cross-shard state bounds | [Cross-shard bounds](cross-shard-state-bounds-746-760.md) |
| **761–775** | Hardware SIMD / NEON / AVX-512 | [Hardware vector math](hardware-vector-math-761-775.md) |

Boot: [`clrty1_static_ml_invariants.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_static_ml_invariants.json) — **count 1025**, continuous `1..=1025`, `#structure` band map

Verify: `make mis-ml-structure`

RPC: `clrty_getStaticMlRoot` · `clrty_getMasterInvariants` · `clrty_getRustMemoryArena` · `clrty_getValueDensityInvariants` · `clrty_getNativeDspPrimitives` · `clrty_getCrossShardStateBounds` · `clrty_getHardwareVectorInvariants`


Extended bands: kernels 776–875 · architecture 876–975 · chain intake 976–1025.
RPC: `clrty_getMisCodeIndex` · `clrty_getMisNativeKernels` · `clrty_getMisArchitecturePrimitives` · `clrty_getMisChainIntake`.
