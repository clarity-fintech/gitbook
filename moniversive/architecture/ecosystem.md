# Ecosystem surfaces

Every CLRTY-1 RPC and payment surface is bound to a Moniversive MIS-ML (`.clrty`) module with letter-hash + EMBED gates 3..=6.

Settlement: **clrty-1** · chain **1202**. Deep root: **moniversive**.

| Surface | Runtime | `.clrty` module |
|---------|---------|-----------------|
| **RPC gateway** | `cloudflare/workers/rpc-gateway` | `languages/mis-ml/surfaces/RpcGateway.clrty` |
| **RPC handlers** | `clrty-rpc` | `languages/mis-ml/surfaces/ClrtyRpc.clrty` |
| **Wallet** | `clarity-wallet/src/monetization` | `languages/mis-ml/surfaces/WalletSettle.clrty` |
| **Spark Pay** | `packages/clarity_spark` + `cloudflare/spark-pay` | `languages/mis-ml/surfaces/SparkPay.clrty` |
| **Exchange** | `exchange-app/src/fees` | `languages/mis-ml/surfaces/ExchangeSettle.clrty` |
| **Extension** | `browser-extension/src/shared` | `languages/mis-ml/surfaces/ExtensionSettle.clrty` |
| **Node** | `clrty-node/src/fees.rs` | `languages/mis-ml/surfaces/NodeFees.clrty` |
| **Staking (RPC/node)** | register / heartbeat / vault | `languages/mis-ml/surfaces/StakingRpcNode.clrty` |
| **Tick** | boot + RPC methods | `languages/mis-ml/surfaces/TickArchitecture.clrty` |
| **Epoch** | 432k slots · tick/staking/gradient bind | `languages/mis-ml/surfaces/EpochArchitecture.clrty` |
| **Static ML** | catalog **1–775** | `languages/mis-ml/surfaces/StaticMlInvariants.clrty` |
| **Gradient / backprop** | band 201–300 | `languages/mis-ml/surfaces/GradientBackpropInvariants.clrty` |
| **Dual-loop** | Token ↔ ML ↔ RPC | `languages/mis-ml/surfaces/DualLoopArchitecture.clrty` |
| **Token market** | band 401–500 | `languages/mis-ml/surfaces/TokenMarketInvariants.clrty` |
| **Passive RPC** | band 501–600 | `languages/mis-ml/surfaces/PassiveRpcInvariants.clrty` |
| **Master lock** | band 601–700 | `languages/mis-ml/surfaces/MoniversiveMasterTerminator.clrty` |
| **Rust memory** | band 701–715 | `languages/mis-ml/surfaces/RustValidatorMemoryArena.clrty` |
| **Value density** | band 716–730 | `languages/mis-ml/surfaces/ValueDensitySimulation.clrty` |
| **Native DSP** | band 731–745 | `languages/mis-ml/surfaces/NativeDspPrimitives.clrty` |
| **Cross-shard** | band 746–760 | `languages/mis-ml/surfaces/CrossShardStateBounds.clrty` |
| **Hardware vector** | band 761–775 | `languages/mis-ml/surfaces/HardwareVectorMath.clrty` |
| **Monetization API** | `clrty-api` `/v1/monetization/*` | `languages/mis-ml/surfaces/MonetizationApi.clrty` |
| **Payment rails** | boot + value-route | `languages/mis-ml/surfaces/PaymentRails.clrty` |
| **Split Gateway** | worker + daemon | `languages/mis-ml/surfaces/SplitGatewayProxy.clrty` |
| **L01 fee router** | on-chain tax | `…/ClrtFeeRouter.clrty` |
| **Split router** | on-chain 50/50 | `…/SplitGatewayRouter.clrty` |

## Static-ML structure (CLRTY-1)

Continuous catalog **1..=775** — SSOT [`clrty1_static_ml_invariants.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_static_ml_invariants.json) `#structure`.

| Band | Focus |
|------|-------|
| 1–200 | Core static model / inference / fees |
| 201–300 | Gradients / backprop / ZK |
| 301–400 | Dual-loop bridge (reserved) |
| 401–500 | Token public market |
| 501–600 | Passive RPC |
| 601–700 | Master lock (terminator #700) |
| 701–715 | Rust validator memory & arena |
| 716–730 | Value density (VD) |
| 731–745 | Native DSP / language primitives |
| 746–760 | Cross-shard state bounds |
| 761–775 | Hardware SIMD / NEON / AVX-512 |

Verify: `make mis-ml-structure`

## RPC

- Moniversive methods: `clrty_getLanguageRoot`, `clrty_getTickArchitecture`, `clrty_getEpochRoot`, `clrty_getStakingRoot`, `clrty_getStaticMlRoot`, `clrty_getGradientInvariants`, `clrty_getDualLoopRoot`, `clrty_getTokenMarketInvariants`, `clrty_getPassiveRpcInvariants`, `clrty_getMasterInvariants`, `clrty_getRustMemoryArena`, `clrty_getValueDensityInvariants`, `clrty_getNativeDspPrimitives`, `clrty_getCrossShardStateBounds`, `clrty_getHardwareVectorInvariants`.
- Gateway responses carry `X-Clrty-Deep-Root: moniversive`.
- Settlement chain remains `clrty-1` / `1202`; foreign `chainId` is rejected.
- Target tick clock is 128×5ms (640ms); live slot remains 400ms until cutover.
- Epochs are **432,000 slots** (live ≈48h @ 400ms; target ≈76.8h @ 640ms).
- Static ML catalog is **775** invariants (master terminator seals **1–700**; packs **701–775** extend).

## Payments

- Product fees (wallet / Spark / exchange / extension / node product) → Split Gateway **50/50**.
- Protocol L01 execution tax → `ClrtFeeRouter` **400 bps** (separate rail).
- Every settle POST attaches `mis_ml_module`, `clrty_route` → `treasury:clrty-1`.

Catalog: [`languages/mis-ml/surfaces/catalog.json`](../../../languages/mis-ml/surfaces/catalog.json)  
Language root: [`CLRTY_SUBSTRATE/boot/moniversive_language_root.json`](../../../CLRTY_SUBSTRATE/boot/moniversive_language_root.json)

All surfaces speak `.clrty` graphs. Solidity ABIs are purged from canonical trees (`make mis-ml-check`).
