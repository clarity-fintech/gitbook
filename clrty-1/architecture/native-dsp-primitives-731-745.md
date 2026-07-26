# Native domain-specific primitives (731–745)

Moniversive language primitives: invariants, Q8.24, tensor ops, tick-bound functions, and typed assets.

## Boot SSOT

[`CLRTY_SUBSTRATE/boot/clrty1_native_dsp_primitives_731_745.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_native_dsp_primitives_731_745.json)

Module: `languages/mis-ml/surfaces/NativeDspPrimitives.clrty`

## Specs (731–745)

InvariantBlock · FixedPointLiteral · TensorOpPrimitive · DeterministicLoopBound · StateTransitionHook · ZeroCostAbstractionGuard · StaticModelRef · TickBoundFn · ImmutableStorageSpec · EventEmissionOp · FixedPointMathIntrinsics · NoPanicGuard · StateSnapshotPrimitive · ConstByteSlice · MoniversiveTypeSystem

## Rules

- Fixed-point **Q8.24**; `TickBoundFn` ≤ **5 ms**
- `NoPanicGuard`; asset classes: liquid / staked / computational

## RPC

`clrty_getNativeDspPrimitives`
