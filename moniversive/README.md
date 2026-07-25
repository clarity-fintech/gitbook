# Moniversive — MIS-ML

**Moniversive Invariant Static ML** is CLRTY’s **deep-root** programming language for the entire database and execution stack.

| | |
|--|--|
| **File type** | **`.mis`** (canonical) · `.clrty` legacy |
| **Letter-hash** | Every typed letter → rolling SHA-256 |
| **EMBED** | Gates **3..=6** (Context → AI → Execution → Capital) |
| **Compiler** | `clrtyc` → execution graph |
| **Settlement** | CLRTY-1 · chain `1202` |
| **Live kernel** | [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML) |
| **Backlinks hub** | [guides/static-ml-backlinks.md](guides/static-ml-backlinks.md) |
| **Learning path** | [learn/static-ml-learning-path.md](learn/static-ml-learning-path.md) |

```bash
bin/misc Module.clrty --check --compact-letters
```

Full taxonomy: [MIS Framework Taxonomy](taxonomy/README.md).

Start with [Language overview](language/overview.md) · [Letter-hash](language/letter-hash.md) · [EMBED 3..=6](language/embed-gates.md).

## CLRTY-1 tick + staking + static ML

| Surface | Path / method |
|---------|----------------|
| Tick (128×5ms target) | [architecture/tick.md](architecture/tick.md) · `clrty_getTickArchitecture` |
| Epoch (432k slots) | [architecture/epoch.md](architecture/epoch.md) · `clrty_getEpochRoot` / `getEpochInfo` |
| Staking (RPC / nodes) | [architecture/staking-rpc-nodes.md](architecture/staking-rpc-nodes.md) · `clrty_getStakingRoot` |
| Protocol structures 100 | [architecture/protocol-structures-100.md](architecture/protocol-structures-100.md) |
| Static ML 1–1025 | [architecture/static-ml-invariants.md](architecture/static-ml-invariants.md) · `clrty_getStaticMlRoot` |
| MIS code index | [ecosystem/map.md](ecosystem/map.md) · `clrty_getMisCodeIndex` |
| MIS kernels 776–875 | [architecture/mis-native-kernels-776-875.md](architecture/mis-native-kernels-776-875.md) · `clrty_getMisNativeKernels` |
| Architecture primitives 876–975 | [architecture/fn-call-embed-method-dev-100.md](architecture/fn-call-embed-method-dev-100.md) · `clrty_getMisArchitecturePrimitives` |
| Chain intake 101–150 | [architecture/chains-101-150.md](architecture/chains-101-150.md) · `clrty_getMisChainIntake` |
| Master 601–700 | [architecture/master-invariants-601-700.md](architecture/master-invariants-601-700.md) · `clrty_getMasterInvariants` |
| Hardware vector 761–775 | [architecture/hardware-vector-math-761-775.md](architecture/hardware-vector-math-761-775.md) · `clrty_getHardwareVectorInvariants` |
| Cross-shard 746–760 | [architecture/cross-shard-state-bounds-746-760.md](architecture/cross-shard-state-bounds-746-760.md) · `clrty_getCrossShardStateBounds` |
| Rust memory 701–715 | [architecture/rust-validator-memory-701-715.md](architecture/rust-validator-memory-701-715.md) · `clrty_getRustMemoryArena` |
| Value density 716–730 | [architecture/value-density-716-730.md](architecture/value-density-716-730.md) · `clrty_getValueDensityInvariants` |
| Native DSP 731–745 | [architecture/native-dsp-primitives-731-745.md](architecture/native-dsp-primitives-731-745.md) · `clrty_getNativeDspPrimitives` |
| Dual-loop Token↔RPC | [architecture/dual-loop.md](architecture/dual-loop.md) · `clrty_getDualLoopRoot` |
| Gradient 201–300 | [architecture/gradient-invariants-201-300.md](architecture/gradient-invariants-201-300.md) · `clrty_getGradientInvariants` |

```bash
make mis-ml-check
make mis-ml-tick-staking   # print tick/staking/gradient SSOT pointers
make mis-ml-filter
```

