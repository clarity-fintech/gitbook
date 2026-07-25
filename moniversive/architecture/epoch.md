# Epoch architecture

CLRTY-1 epochs bind **tick**, **staking**, and **gradient** bands under the same slot counter.

| Constant | Value |
|----------|-------|
| `slots_per_epoch` | **432,000** |
| Live `slot_ms` | **400** (legacy until cutover) |
| Target `slot_ms` | **640** (128 × 5 ms) |
| Live epoch duration | 172,800,000 ms (**48 h**) |
| Target epoch duration | 276,480,000 ms (**76.8 h**) |
| Target `ticks_per_epoch` | **55,296,000** (= 432,000 × 128) |

Formula (live): `epoch = absoluteSlot // 432000`, `slotIndex = absoluteSlot % 432000`.

## Bindings

| Domain | Epoch rule |
|--------|------------|
| Tick | Slots roll from tick architecture; every tick still generates value |
| Staking | Epoch reward accrual; L01 120 bps + tick staker 30% |
| Gradient | `ZeroMomentInitialization` (#230) at epoch boundary; `GradientEpochSyncHeader` (#282) |

## Modules & boot

- `languages/mis-ml/surfaces/EpochArchitecture.clrty`
- Boot: [`CLRTY_SUBSTRATE/boot/clrty1_epoch_architecture.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_epoch_architecture.json)
- Live clock: `clrty-rpc/src/live_state.rs` — `getEpochInfo` includes `moniversive` block

## RPC

- `getEpochInfo` — live progress + Moniversive epoch pointers
- `clrty_getEpochRoot` — full SSOT (legacy vs target durations)

Live `SLOT_MS` is **not** changed in this sync. Settlement remains **clrty-1 / 1202**.
