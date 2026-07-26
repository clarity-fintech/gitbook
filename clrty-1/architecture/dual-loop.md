# Dual-loop architecture (Token ↔ Static ML ↔ RPC)

Moniversive Invariant Static ML Engine bridges **public market $CLRTY** and **passive CLRTY RPC** so background infrastructure becomes continuous buy-and-burn demand without non-deterministic drift.

```
  CLRTY TOKEN (AMM / CEX)  ↔  STATIC ML CORE (Q8.24)  ↔  CLRTY RPC (passive)
       features 5ms ticks        solvency / deflation         micro-fees → credits
       buyback / burn / stake    risk caps / circuit breakers   rate limit / throttle
```

## Loops

| Loop | Band | Role |
|------|------|------|
| Token public market | **401–500** | Value discovery, liquidity, MEV cushions, deflation |
| Static ML core | 1–600 (+ gradients 201–300) | Deterministic bridge; fixed-point risk |
| Passive RPC | **501–600** | Micro-billing, telemetry → ML, buyback ratio ≥80% |

## Terminators

- `#500` `MarketEngineInvariantTerminator` — MarketIntegrity STRICT · TokenDeflation ACTIVE · LiquidityFlow BALANCED
- `#600` `MoniversiveRpcTerminator` — RpcInfrastructure ACTIVE · TelemetryMonetization ONLINE · PassiveFlowDeflation LOCKED

## Boot & modules

- [`clrty1_dual_loop_architecture.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_dual_loop_architecture.json)
- [`clrty1_token_market_invariants_401_500.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_token_market_invariants_401_500.json)
- [`clrty1_passive_rpc_invariants_501_600.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_passive_rpc_invariants_501_600.json)
- `DualLoopArchitecture.clrty` · `TokenMarketInvariants.clrty` · `PassiveRpcInvariants.clrty`

## RPC

- `clrty_getDualLoopRoot`
- `clrty_getTokenMarketInvariants`
- `clrty_getPassiveRpcInvariants`
- `clrty_getStaticMlRoot` (count **600**)

Bound to [tick](tick.md), [epoch](epoch.md), and [staking](staking-rpc-nodes.md). Settlement: **clrty-1 / 1202**.
