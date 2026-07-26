# Definitions — variables, sets, strings, opcodes

> Generated 2026-07-26T18:30:00Z · unique static symbols in MIS / `.clrty` surfaces

## Symbol kinds

| Kind | Example | Role |
| --- | --- | --- |
| `mis_set<T, N>` | `SET_GRADIENT_BOUNDS` | Fixed-capacity invariant bounds |
| `mis_string<N>` | `STR_KERNEL_SIGNATURE` | Compile-time log / event labels |
| `mis_ptr` / `mis_reg` | `sender_balance: mis_ptr<u64>` | Static memory / registers |
| `mis_kernel fn` | `clrty_kernel_transfer_invariant` | Callable kernel entry |
| `outcome` / `invariant` | `.mis` modules | Language-level intents (GitBook corpus) |

## Example sets (CLRTY-1 on-chain style)

| Set | Members | Purpose |
| --- | --- | --- |
| `SET_CLRTY_OPCODES` | 6 opcodes | Authorized contract dispatch |
| `SET_SUPPLY_INVARIANTS` | min / max supply / gas / decimals | Token bounds |
| `SET_VECTOR_LANE_SIZES` | 8…128 | SIMD lane widths |
| `SET_SPECTRAL_THRESHOLDS` | 0.25…1.0 | Norm lock bands |
| `SET_EXECUTION_STAGES` | fetch / transform / project / commit | Pipeline registers |

## Band-indexed catalogs (1025)

All named invariants through **n=1025** live in boot JSON — see [static ML bands](../catalog/static-ml-invariant-bands.md).

RPC: `clrty_getGradientInvariants` · `clrty_getNativeDspPrimitives` · `clrty_getValueDensityInvariants`.
