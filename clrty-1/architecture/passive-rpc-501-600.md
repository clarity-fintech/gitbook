# Passive RPC invariants (501–600)

Passive infrastructure specifications — every query bound to micro-gas ticks; traffic monetized into $CLRTY$ buy-and-burn.

## Boot SSOT

[`CLRTY_SUBSTRATE/boot/clrty1_passive_rpc_invariants_501_600.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_passive_rpc_invariants_501_600.json)

Module: `languages/mis-ml/surfaces/PassiveRpcInvariants.clrty`

Terminator **#600** `MoniversiveRpcTerminator`:

`RpcInfrastructure == ACTIVE && TelemetryMonetization == ONLINE && PassiveFlowDeflation == LOCKED`

## Highlights

| Rule | Value |
|------|-------|
| Micro-fee / read | 10⁻⁶ CLRTY |
| Node reward share | 70% |
| Micro-fee burn | 20% |
| Revenue → buybacks | ≥80% |
| Rate limit | 100 req/s |
| Inference latency budget | 2.0 ms |
| Ingestion fence | Must not delay 5 ms consensus tick |

See [Dual-loop architecture](dual-loop.md). RPC: `clrty_getPassiveRpcInvariants`.
