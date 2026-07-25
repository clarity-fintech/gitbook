# Gradient / backprop invariants (201–300)

Protocol-level deterministic specification for the CLRTY-1 Static ML Engine — fixed-point gradients, optimizers, ZK proofs, loss derivatives, regularization, distributed aggregation, and Moniversive monetization.

## Boot SSOT

- Full catalog (1–300): [`clrty1_static_ml_invariants.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_static_ml_invariants.json)
- Band catalog (201–300): [`clrty1_gradient_invariants_201_300.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_gradient_invariants_201_300.json)
- Module: `languages/mis-ml/surfaces/GradientBackpropInvariants.clrty`

## Packs

| Range | Pack |
|-------|------|
| 201–215 | Fixed-point gradient computation & accuracy |
| 216–230 | Optimizer invariants & weight updates |
| 231–245 | Zero-knowledge gradient proofs |
| 246–260 | Loss function derivatives & error bounds |
| 261–275 | Regularization & gradient modifiers |
| 276–290 | Distributed consensus & gradient aggregation |
| 291–300 | Moniversive gradient monetization |

Terminator **#300** `MoniversiveGradientTerminator`:

`GradientDeterminism == STRICT && BackpropIntegrity == VERIFIED && MoniversiveGradientBurn == ACTIVE`

## Monetization (291–300)

| Rule | Value |
|------|-------|
| Gradient reward to validators | 30% |
| Backprop gas burn | 10% |
| Backprop gas multiplier | 1.5× |
| ZK proof budget | 4.0 ms |
| Aggregation timeout | 2 ms inside 5 ms tick |
| ZK rollup | 128 tick proofs → 1 slot proof |

Bound to tick architecture (128×5ms) and staking/L01 rails — not a second tax engine.

## RPC

- `clrty_getStaticMlRoot` — catalog count 300 + gradient band pointer
- `clrty_getGradientInvariants` — band 201–300 summary

## Epoch sync

`ZeroMomentInitialization` (#230) and `GradientEpochSyncHeader` (#282) bind to [Epoch architecture](epoch.md) (432k slots).
