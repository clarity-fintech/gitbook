# Core protocol specs — `gitbook.moniversive.mis`

> Generated 2026-07-26T18:43:46Z · mathematical tensors · **Q64.64** fixed-point · invariant state frameworks

**Core Protocol Specs (`gitbook.moniversive.mis`):** mathematical tensor definitions, **Q64.64** fixed-point math rules, and invariant state frameworks.

Document id: **`gitbook.moniversive.mis`** — language GitBook core protocol layer (not chain product docs). SSOT companions: `CLRTY_SUBSTRATE/boot/clrty1_static_ml_invariants.json` · `moniversive/framework/mis_ml.mis` · surfaces under `languages/mis-ml/surfaces/`. Indexed as **`gitbook.moniversive.mis`** in `mis_code_index.json`.

## 1. Mathematical tensor definitions

| Construct | Definition | MIS module / surface |
| --- | --- | --- |
| `mis_tensor[dtype, shape]` | Static rank & shape at compile time; no dynamic rank | [mis_tensor](../framework/mis_tensor.md) · `MisMl.assert_mis_tensor` |
| `WeightTensorDescriptor` | Bit-packed dims, strides, alignment (band 601–615) | `DeterministicWeightOps.clrty` |
| `GradientAccumulatorBuffer` | 64-byte aligned lane sums (band 201–215) | Static ML catalog |
| `mis_array[T, N]` | Bounded storage · `vector_map` / GEMM kernels | [collections-concurrency](../language/collections-concurrency.md) |
| Spectral / norm tensors | $\sigma_{max}$ lock · L2 clip · RMSNorm | bands 761–775 · 876–975 `fn_*` |

**Layout rules**

- Row-major unless pack manifest says otherwise; stride multiples of **64 bytes** for SIMD (catalog `VectorPaddingAlignment`, `CachePrefetchInstruction`).
- Quantized activations: per-channel scales with fixed-point restore on matmul (see Q formats below).

## 2. Q64.64 fixed-point math rules

**Q64.64** — 64-bit signed integer + 64-bit fractional field (128-bit logical value in registers / wide accumulators). Used for **protocol-grade** accumulations where IEEE float is forbidden.

| Rule | Specification |
| --- | --- |
| Representation | `value_q6464 = (int64 << 64) \| frac64` (logical); physical storage may be pair of `i64` or `u128` with defined endianness in kernel pack |
| Add / sub | Same-scale only; overflow → **saturating** or **trap** per `HardwareExceptionTrap` (band 761–775) |
| Mul | Widening multiply to **128-bit** product; round with **deterministic** mode (ties-to-even unless pack locks RN) |
| Shift / quantize | `VectorShiftRightRound`: scale wide accumulators down to **Q32.32** or **Q8.24** lanes with explicit rounding bit |
| Compare | Branchless masks (`mis.select`, `VectorBitwiseSelect`) — no hidden float compare |
| Literal policy | No runtime float literals in hot kernels; use `fixed_point_literal` outcomes where declared |

**Related formats (same protocol family)**

| Format | Use |
| --- | --- |
| **Q8.24** | Gradients, weights, DSP primitives (`fixed_point_q8_24` invariants on ML surfaces) |
| **Q32.32** | Intermediate dot-product lanes before down-quant |
| **INT8 / FP8** | Storage tensors after `DeterministicQuantRound` / E4M3 unpack kernels |

```bash
bin/misc languages/mis-ml/surfaces/NativeDspPrimitives.clrty --check --compact-letters
bin/misc languages/mis-ml/surfaces/HardwareVectorMath.clrty --check --compact-letters
```

## 3. Invariant state frameworks

State is **predicate-first**: transitions must satisfy named invariants before commit (replaces ad-hoc `require` / exceptions).

| Layer | Framework | Examples |
| --- | --- | --- |
| Module | `invariant` + `outcome` in **`.mis`** | `letter_hash_bound`, `settlement_chain`, `mis_tensor_bound` |
| Static ML catalog | 1025 named invariants | [static ML bands](../catalog/static-ml-invariant-bands.md) |
| Cross-shard | 746–760 | `CrossShardStateRoot`, `GlobalSolvencyCrossCheck` |
| On-chain style sets | `mis_set` opcodes / supply caps | [definitions-variables-sets](../language/definitions-variables-sets.md) |
| EVM analogue | `invariant` ≈ `require` at compile time | [evm-to-mis](../architecture/evm-to-mis.md) |

**State transition pattern**

1. Load static bounds (`mis.load` / register file).
2. Prove guards (`mis.invariant` / `invariant` in `.mis`).
3. Branchless update (`mis.select` / bitwise masks).
4. Atomic commit (`mis.store` + barrier); shard/global roots per cross-shard band.

## Commands & index

```bash
make gitbook-moniversive-build
bin/misc moniversive/framework/mis_ml.mis --check --compact-letters
```

Resolve symbols: **`mis_code_index.json`** · RPC **`clrty_getMisCodeIndex`**. Kernel repo: [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML).

See also: [math/invariant-primer.md](../math/invariant-primer.md) · [operational rulebook](../architecture/operational-rulebook.md) · [full language breakdown](../language/full-language-breakdown.md).
