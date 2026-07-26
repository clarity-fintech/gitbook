# Tick architecture

CLRTY-1 target clock is **128 ticks × 5 ms = 640 ms per slot** (~200 Hz). This is the Moniversive SSOT; it is not the HELIX sim/economy loop.

| Field | Value |
|-------|-------|
| `ticks_per_slot` | 128 |
| `tick_duration_ms` | 5 |
| `slot_duration_ms` (target) | 640 |
| `tick_rate_hz` | ≈200 |
| Live `SLOT_MS` (legacy) | 400 — until runtime cutover |

Invariant: **every tick generates value**. Idle presence still accrues a micro-fee after the idle threshold.

## Monetization

Base tick fee **$0.0005**. Split (aligned with L01 staker rail):

| Share | % |
|-------|---|
| Node operator | 40 |
| Stakers | 30 |
| Treasury | 20 |
| Burn | 10 |

L01 execution tax remains **400 bps** with stakers **120 bps** of notional via `ClrtFeeRouter` — do not conflate with product Split Gateway 50/50.

## Modules & boot

- `languages/mis-ml/surfaces/TickArchitecture.clrty`
- `languages/mis-ml/surfaces/TickMonetization.clrty`
- Boot: [`CLRTY_SUBSTRATE/boot/clrty1_tick_architecture.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_tick_architecture.json)
- Tick-object catalog (400 fields): [`clrty1_tick_object_catalog.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_tick_object_catalog.json)

## RPC

- `clrty_getTickArchitecture` — target 640 ms + legacy 400 ms note
- `getFees` / `clrty_getLanguageRoot` include tick + staking pointers

Live slot math in `clrty-rpc/src/live_state.rs` stays at 400 ms until a dedicated cutover. Epochs use **432,000 slots** — see [Epoch architecture](epoch.md). Settlement remains **clrty-1 / 1202**.
