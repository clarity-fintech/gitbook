# Token market invariants (401–500)

Public market & liquidity-flow specifications for $CLRTY under the dual-loop architecture.

## Boot SSOT

[`CLRTY_SUBSTRATE/boot/clrty1_token_market_invariants_401_500.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_token_market_invariants_401_500.json)

Module: `languages/mis-ml/surfaces/TokenMarketInvariants.clrty`

Terminator **#500** `MarketEngineInvariantTerminator`:

`MarketIntegrity == STRICT && TokenDeflation == ACTIVE && LiquidityFlow == BALANCED`

## Highlights

| Rule | Value |
|------|-------|
| Deflationary burn floor (arb) | 10% |
| Exchange fee burn | 30% |
| Exchange fees → ML compute | 20% |
| LP fee share | 80% |
| Slippage guard | 0.25% |
| MarketCap/TVL | 0.5 … 2.5 |
| Tick feature snapshots | 5 ms |

See [Dual-loop architecture](dual-loop.md). RPC: `clrty_getTokenMarketInvariants`.
