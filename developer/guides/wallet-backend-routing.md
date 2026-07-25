# Wallet backend routing (MIS)

CLRTY wallet backend routing is authored in **MIS only**.

## Policy

| Surface | State |
| --- | --- |
| Trade / convert / buy / sell | **Live** |
| Launch / pool | **Locked** |

## Framework modules

| Module | Role |
| --- | --- |
| `WalletBackendRouter.mis` | Route table |
| `WalletTradeConvert.mis` | Trade + convert |
| `LaunchLockGate.mis` | Launch/pool lock |
| `CherryDataPlane.mis` | Cherry data plane |
| `WalletUxIntegrationMesh.mis` | Wallet UX mesh |
| `NotionAccountLinkRouter.mis` | Notion / accounts |

Surfaces mirror under `languages/mis-ml/surfaces/`.

## Boot manifests

- `CLRTY_SUBSTRATE/boot/wallet_backend_routing_manifest.json`
- `CLRTY_SUBSTRATE/boot/launch_lock_live_trade_manifest.json`

## HTTP

```http
GET /wallet/v1/backend-routing
```

Implemented in `fintauo` (`src/wallet/backendRouting.ts`). Live wallet app: [exchange.clarity-fintech.com/wallet-app](https://exchange.clarity-fintech.com/wallet-app).

## Docs ownership

Published from **https://github.com/clarity-fintech/gitbook** (`developer/` space).
