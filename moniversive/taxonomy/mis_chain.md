# Blockchain & Cross-Chain Interoperability (`mis_chain`)

Consensus, bridge, and VM execution adapters.

| Branch | Role |
|--------|------|
| `mis_evm` | Parallel EVM isolation, gas bounds, access-list merge, storage slots |
| `mis_ibc` | Multi-chain packet relay + Cosmos Merkle commitment proofs |
| `mis_substrate` | SCALE compact integers + SR25519 verify |
| `mis_depin` | Micropayment channels, telemetry attestation, compute lease escrows |

## Branch pages

* [`mis_evm`](../framework/mis_evm.md) — Parallel EVM isolation, gas bounds, access-list merge, storage slots
* [`mis_ibc`](../framework/mis_ibc.md) — Multi-chain packet relay + Cosmos Merkle commitment proofs
* [`mis_substrate`](../framework/mis_substrate.md) — SCALE compact integers + SR25519 verify
* [`mis_depin`](../framework/mis_depin.md) — Micropayment channels, telemetry attestation, compute lease escrows

Module: `moniversive/framework/mis_chain.mis`  
Settlement: clrty-1 / 1202 · Extension: `.mis`

## CLRTY-1 wallet roster policy (`mis_evm`)

`moniversive/framework/Clrty1WalletRosterPolicy.mis` is the SSOT for the CLRTY-1 wallet
roster: one INTERNAL_HD sovereign signer plus N EXTERNAL_PROVIDER probe-only chain
connectors, bound to the exchange RPC (chain 1202). Index entry:
`idx-mis-Clrty1WalletRosterPolicy` in `CLRTY_SUBSTRATE/boot/mis_code_index.json`.
