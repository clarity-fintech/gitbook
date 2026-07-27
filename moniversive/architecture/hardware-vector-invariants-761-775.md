# Hardware-accelerated vector math invariants (761–775)

> Generated 2026-07-27T00:56:55Z · SIMD / AVX-512 / Neon · RPC `clrty_getHardwareVectorInvariants`

Deterministic dot products, FMA rounding, vector shifts, cache prefetch, register spill guards, and hardware exception traps — all **Static ML** catalog entries.

| n | id | Name | Definition |
| --- | --- | --- | --- |
| 761 | sml-761 | `SIMDRegisterAlignment` | Zero ZMM0..ZMM31 between ticks |
| 762 | sml-762 | `DeterministicDotProductIntrinsics` | Integer dot products with fixed saturation bounds |
| 763 | sml-763 | `FusedMultiplyAddInvariant` | Deterministic FMA identical rounding across CPUs |
| 764 | sml-764 | `VectorShiftRightRound` | Scale 64-bit accumulators to 32-bit fixed-point |
| 765 | sml-765 | `NeonVectorMatrixMult` | ARM NEON matches x86 AVX-512 matmul bit-for-bit |
| 766 | sml-766 | `HardwareExceptionTrap` | Trap overflow, div-by-zero, illegal instruction |
| 767 | sml-767 | `VectorBitwiseSelect` | SIMD mask select without conditional branches |
| 768 | sml-768 | `CachePrefetchInstruction` | _mm_prefetch upcoming layer params into L1 |
| 769 | sml-769 | `VectorRegisterSpillGuard` | Assert zero-spill on high-throughput matrix loops |
| 770 | sml-770 | `DeterministicMatrixTranspose` | 16x16 fixed-point tile transpose |
| 771 | sml-771 | `VectorNormCalculation` | Fixed-point L2 norm for clip/normalize |
| 772 | sml-772 | `HardwareThreadAffinityAssert` | Threads pinned to allocated physical cores |
| 773 | sml-773 | `VectorLookupTableIndex` | Fast LUT fetch of fixed-point activations |
| 774 | sml-774 | `HardwareDivergenceDetector` | Matmul hash vs peer node outputs |
| 775 | sml-775 | `VectorPaddingAlignment` | Pad feature vectors to 512-bit register boundaries |


Related framework: [mis_simd](../framework/mis_simd.md) · [mis_hw](../framework/mis_hw.md)
