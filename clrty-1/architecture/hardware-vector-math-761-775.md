# Hardware-accelerated vector math (761–775)

SIMD / NEON / AVX-512 invariants for bit-exact Q8.24 static-ML on CLRTY-1.

## Boot SSOT

[`CLRTY_SUBSTRATE/boot/clrty1_hardware_vector_math_761_775.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_hardware_vector_math_761_775.json)

Parent catalog (1–775): [`clrty1_static_ml_invariants.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_static_ml_invariants.json)

Reserved bridge **701–760**: [`clrty1_post_master_bridge_reserved_701_760.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_post_master_bridge_reserved_701_760.json) (placeholder until packs 1–4 land).

## Specs

| n | Name | Note |
|---|------|------|
| 761 | SIMDRegisterAlignment | Zero ZMM0…ZMM31 between ticks |
| 762 | DeterministicDotProductIntrinsics | Integer dot products with fixed saturation |
| 763 | FusedMultiplyAddInvariant | Identical FMA rounding across CPUs |
| 764 | VectorShiftRightRound | 64-bit accumulators → 32-bit fixed-point |
| 765 | NeonVectorMatrixMult | ARM NEON matches x86 AVX-512 bit-for-bit |
| 766 | HardwareExceptionTrap | Overflow / div-by-zero / illegal instruction |
| 767 | VectorBitwiseSelect | Branchless SIMD mask select |
| 768 | CachePrefetchInstruction | `_mm_prefetch` into L1 |
| 769 | VectorRegisterSpillGuard | Zero-spill matrix loops |
| 770 | DeterministicMatrixTranspose | 16×16 fixed-point tiles |
| 771 | VectorNormCalculation | Fixed-point L₂ norm |
| 772 | HardwareThreadAffinityAssert | Threads pinned to physical cores |
| 773 | VectorLookupTableIndex | Fixed-point activation LUT |
| 774 | HardwareDivergenceDetector | Matmul hash vs peer nodes |
| 775 | VectorPaddingAlignment | Pad to 512-bit register boundaries |

Module: `languages/mis-ml/surfaces/HardwareVectorMath.clrty`

## RPC

- `clrty_getHardwareVectorInvariants`
- `clrty_getStaticMlRoot` — count **775**
